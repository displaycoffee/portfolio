/* React */
import { useEffect, useState } from 'react';
import { flushSync } from 'react-dom';
import { Link, Navigate, useLocation } from 'react-router-dom';

/* Local styles */
import './styles/gallery.scss';

/* Local scripts */
import { useViewTransition } from '../../_config/scripts/hooks';
import { useAppContext } from '../../context/scripts/context-hooks';
import { GalleryBodyProps, GalleryLinksProps, GalleryProps, GalleryTabsStorageType, GalleryThumbnailProps } from './scripts/gallery-types';
import { gallery as galleryUtils } from './scripts/gallery';

/* Local components */
import { Image } from '../image/Image';
import { HeaderIcon, Button, PixelSection } from '../blocks/Blocks';

/* Set up tab storage */
/* Note: "active" is an object because galleries can have different tabs, so we store from location. */
const tabStorage = {
	default: 0,
	active: {},
} as GalleryTabsStorageType;

export const Gallery = (props: GalleryProps) => {
	const { headers, navigation, tabs, type, values } = props;
	const location = useLocation();
	const hasGallery = values && values.length !== 0;

	// Create galleryProps for components
	const galleryProps = {
		headers: {
			enabled: headers?.enabled ? headers.enabled : false,
			label: headers?.label ? headers.label : false,
		},
		location: location.pathname,
		navigation: {
			back: navigation?.back ? navigation.back : false,
		},
		tabs: {
			all: tabs?.all ? tabs.all : false,
			enabled: tabs?.enabled ? tabs.enabled : false,
		},
		values: hasGallery ? values : [],
	};

	// Create modified gallery
	galleryProps.values = galleryUtils.build(galleryProps.values, galleryProps.tabs);

	// Get gallery count
	const galleryCount = galleryProps.values.length;

	return galleryCount !== 0 ? type == 'links' ? <GalleryLinks {...galleryProps} /> : <GalleryBody {...galleryProps} /> : null;
};

export const GalleryLinks = (props: GalleryLinksProps) => {
	const { location, tabs, values } = props;
	const { utils } = useAppContext();
	let defaultTab = false as string | boolean;

	// Build tabs
	const tabsValues = [] as string[];

	if (tabs.enabled) {
		// Ensure tabs are set and that they have categories
		values.forEach((value) => {
			if (value?.categories) {
				// Add all category if set
				const categoriesSplit = value.categories.split(', ');

				// If category is not in tabs, add it
				categoriesSplit.forEach((category) => {
					if (!tabsValues.includes(category)) {
						tabsValues.push(category);
					}
				});
			}
		});

		// Get default tab
		defaultTab = tabStorage.active[location] ? tabStorage.active[location] : tabsValues[tabStorage.default];
		console.log(defaultTab);
	}

	// Set active tab state
	const [activeTab, setActiveTab] = useState<string | boolean>(tabs.enabled ? defaultTab : false);

	// Set tab function with view transition
	const setTab = (tab: string) => {
		if (!document.startViewTransition) {
			setActiveTab(tab);
			return false;
		} else {
			// Set transition names on all currently visible gallery items (old state)
			const oldItems = document.querySelectorAll<HTMLElement>('[data-gallery-id]');
			oldItems.forEach((el) => {
				el.style.viewTransitionName = `gallery-item-${el.dataset.galleryId}`;
			});

			// Flag root so CSS can scope rules to gallery tab switches only
			document.documentElement.setAttribute('data-gallery-transition', '');

			void document
				.startViewTransition(() => {
					flushSync(() => setActiveTab(tab));
				})
				.finished.finally(() => {
					document.querySelectorAll<HTMLElement>('[data-gallery-id]').forEach((el) => {
						el.style.viewTransitionName = '';
					});
					document.documentElement.removeAttribute('data-gallery-transition');
				});
		}
	};

	// Sync active tab back to tabStorage so it persists across renders
	useEffect(() => {
		if (tabs.enabled && activeTab) {
			tabStorage.active[location] = activeTab as string;
		}
	}, [activeTab, location, tabs.enabled]);

	// Set timestamp to sort values
	values.forEach((value) => {
		utils.setTimestamp(value);
	});

	// Sort values by newest
	values.sort((a, b) => {
		return (b.timestamp as number) - (a.timestamp as number);
	});

	return (
		<div className={`gallery-${tabs.enabled ? 'tabs' : 'default'} spacing-reset`}>
			{tabs.enabled ? (
				<>
					<div className="gallery-tabs-buttons">
						<div className="row row-wrap row-spacing-10 row-align-items-center">
							{tabsValues.map((tab, index) => (
								<div className="column" key={index}>
									<Button type={activeTab == tab ? 'secondary active' : 'primary'} onClick={() => setTab(tab)}>
										{tab}
									</Button>
								</div>
							))}
						</div>
					</div>

					<div className="gallery-tabs-content">
						<GalleryThumbnails {...props} activeTab={activeTab} />
					</div>
				</>
			) : (
				<GalleryThumbnails {...props} activeTab={activeTab} />
			)}
		</div>
	);
};

export const GalleryThumbnails = (props: GalleryThumbnailProps) => {
	const { activeTab, headers, location, tabs, values } = props;
	const handleTransition = useViewTransition();

	// Determine label for header
	const label = headers.enabled && headers.label && !tabs.enabled ? headers.label : activeTab;

	return (
		<div className="gallery">
			{headers?.enabled ? <HeaderIcon tag={'h3'}>{label}</HeaderIcon> : null}

			<div className="gallery-items">
				{values.map((value) => {
					// Determine if we should show item based on tab settings
					const showItem = galleryUtils.includeValue(tabs.enabled, value?.categories, activeTab as string);

					// Set gallery url
					const galleryUrl = `${location}/${value.handle}`;

					return (
						<div className={`gallery-item${showItem ? ' gallery-item-active' : ''}`} key={value.id} data-gallery-id={value.id}>
							<Link className="gallery-image" to={galleryUrl} onClick={(e) => handleTransition(e, galleryUrl)}>
								<Image
									alt={value.name}
									hasLazy={true}
									image={value.thumb}
									wrapperClass={'image-wrapper image-wrapper-fluid pixel-border'}
								/>
							</Link>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export const GalleryBody = (props: GalleryBodyProps) => {
	const { location, navigation, tabs, values } = props;
	const { utils } = useAppContext();
	const showGallery = window.location.href.includes(location); // Do not render current item if not in matching gallery
	const parentPage = utils.getPage();

	// Filter values according to current tab
	const filteredValues = values.filter((value) => {
		return galleryUtils.includeValue(tabs.enabled, value?.categories, tabStorage.active[parentPage]);
	});

	// Get elements
	const elements = galleryUtils.navigation(filteredValues, location);
	const { current, next, previous } = elements;

	// Ensure handles do not match current
	const compareHandle = (handle: string) => {
		return handle == current.handle ? { handle: false } : { handle: handle };
	};

	// Build navigation props
	const navigationProps = {
		back: navigation.back,
		next: compareHandle(next.handle as string),
		path: parentPage,
		previous: compareHandle(previous.handle as string),
	};

	// Determine if this is a pixel gallery
	const isPixels = current && current.categories && current.categories.includes('Pixels');

	return showGallery ? (
		current ? (
			<div id={`gallery-${current.handle}`} className={`gallery${isPixels ? ' gallery-pixels' : ''}`}>
				<div className="gallery-body flex-wrap">
					{current.name && (
						<header className="gallery-header">
							<HeaderIcon className={'gallery-header-title'}>{current.name}</HeaderIcon>
						</header>
					)}

					{(current.image || current.thumb) && (
						<div className="gallery-image">
							<a href={current.image ? current.image : current.thumb} target="_blank" rel="noreferrer">
								<Image
									alt={current.name}
									hasLazy={true}
									image={current.image ? current.image : current.thumb}
									wrapperClass={`image-wrapper gallery-image-wrapper${isPixels ? '' : ' pixel-border'}`}
								/>
							</a>
						</div>
					)}

					<div className="gallery-details spacing-reset">
						<dl className="definition-list">
							{current.date && (
								<div className="definition-list-item">
									<dt>Date</dt>
									<dd>{current.date}</dd>
								</div>
							)}

							{current.url && (
								<div className="definition-list-item">
									<dt>Visit</dt>
									<dd>
										<a href={current.url} target="_blank" rel="noreferrer">
											{current.url.replace('//', '')}
										</a>
									</dd>
								</div>
							)}

							{current.technologies && (
								<div className="definition-list-item">
									<dt>Technologies</dt>
									<dd>{current.technologies}</dd>
								</div>
							)}

							{current.mediums && (
								<div className="definition-list-item">
									<dt>Mediums</dt>
									<dd>{current.mediums}</dd>
								</div>
							)}

							{current.description && (
								<div className="definition-list-item">
									<dt>Description</dt>
									<dd dangerouslySetInnerHTML={{ __html: current.description }}></dd>
								</div>
							)}
						</dl>
					</div>
				</div>

				<PixelSection navigation={navigationProps} />
			</div>
		) : (
			<Navigate to={parentPage} replace />
		)
	) : null;
};
