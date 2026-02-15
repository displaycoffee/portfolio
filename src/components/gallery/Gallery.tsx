/* React */
import { useEffect, useState, useContext } from 'react';
import { Link, Navigate, Route, Routes, useLocation, useParams } from 'react-router-dom';

/* Local styles */
import './styles/gallery.scss';

/* Local scripts */
import {
	GalleryBodyProps,
	GalleryLinksProps,
	GalleryProps,
	GalleryProps2,
	GalleryRoutesProps,
	GalleryThumbnailsProps,
} from './scripts/gallery-types';
import { gallery as galleryUtils } from './scripts/gallery';

/* Local components */
import { Context } from '../../context/Context';
import { HeaderIcon, Button, PixelSection } from '../blocks/Blocks';

/* Set up tab storage */
const tabAll = 'All';
const tabStorage = {
	default: 0,
	active: false,
};

export const Gallery2 = (props: GalleryProps2) => {
	const { headers, navigation, tabs, type, values } = props;
	const location = useLocation();
	let [activeTab, setActiveTab] = useState(false as string | boolean);
	const hasGallery = values && values.length !== 0 ? true : false;

	// Create header options
	const headerOptions = {
		enabled: headers?.enabled ? headers.enabled : false,
		label: headers?.label ? headers.label : false,
	};

	// Create navigation options
	const navigationOptions = {
		back: navigation?.back ? navigation.back : false,
	};

	// Create tabs options
	const tabsOptions = {
		activeTab: activeTab,
		all: tabs?.all ? tabs.all : false,
		enabled: tabs?.enabled ? tabs.enabled : false,
		setActiveTab: setActiveTab,
		values: [] as string[],
	};

	// Modify gallery values based on tabs
	const galleryValues = galleryUtils.build(hasGallery ? values : [], tabsOptions);

	// Ensure tabs are set and that they have categories
	if (tabsOptions.enabled) {
		galleryValues.forEach((value) => {
			if (value?.categories) {
				// Add all category if set
				const categoriesSplit = value.categories.split(', ');

				// If category is not in tabs, add it
				categoriesSplit.forEach((category) => {
					if (!tabsOptions.values.includes(category)) {
						tabsOptions.values.push(category);
					}
				});
			}
		});
	}

	// Create galleryProps for components
	const galleryProps = {
		headers: headerOptions,
		location: location.pathname,
		navigation: navigationOptions,
		tabs: tabsOptions,
		values: galleryValues,
	};

	// Set state for tab
	//const firstTab = tabsOptions.values[0] ? tabsOptions.values[0] : tabAll;

	// // Update state for tabsOptions
	// const defaultTab = tabStorage.active ? tabStorage.active : galleryProps.tabs.values[tabStorage.default];

	// useEffect(() => {
	// 	activeTab = defaultTab;
	// 	setActiveTab(defaultTab);
	// }, []);
	//const selectedTab = galleryProps.tabs.values[tabStorage.default];

	//console.log(defaultTab, activeTab2);

	// if (defaultTab != activeTab2) {
	// 	tabStorage.active = activeTab2 ? activeTab2 : defaultTab;
	// } else {
	// 	tabStorage.active = defaultTab;
	// }
	// useEffect(() => {
	// 	console.log(tabStorage);
	// }, []);

	// Get gallery count
	const galleryCount = galleryProps.values.length;

	console.log('in gallery', galleryProps, activeTab);

	return galleryCount !== 0 ? type == 'links' ? <GalleryLinks {...galleryProps} /> : <GalleryBody {...galleryProps} /> : null;
};

export const Gallery = (props: GalleryProps) => {
	const { options } = props;
	const hasGallery = options && options?.path && options.values && options.values.length !== 0 ? true : false;

	return hasGallery ? <GalleryRoutes options={options} /> : null;
};

export const GalleryRoutes = (props: GalleryRoutesProps) => {
	const { options } = props;
	const { headers, navigation, path, tabs, values } = options;
	const allTab = 'All';
	let [activeTab, setActiveTab] = useState(allTab);

	// Create galleryProps for components
	const galleryProps = {
		headers: {
			enabled: headers?.enabled ? headers.enabled : false,
			label: headers?.label ? headers.label : false,
		},
		navigation: {
			back: navigation?.back ? navigation.back : false,
		},
		path: path,
		tabs: {
			activeTab: activeTab,
			all: tabs?.all ? tabs.all : false,
			enabled: tabs?.enabled ? tabs.enabled : false,
			setActiveTab: setActiveTab,
			values: [] as string[],
		},
		values: values,
	};

	// Create modified gallery
	galleryProps.values = galleryUtils.build(galleryProps.values, galleryProps.tabs);

	// Ensure tabs are set and that they have categories
	if (galleryProps.tabs.enabled) {
		galleryProps.values.forEach((value) => {
			if (value?.categories) {
				// Add all category if set
				const categoriesSplit = value.categories.split(', ');

				// If category is not in tabs, add it
				categoriesSplit.forEach((category) => {
					if (!galleryProps.tabs.values.includes(category)) {
						galleryProps.tabs.values.push(category);
					}
				});
			}
		});
	}

	// Set state for tab
	const firstTab = galleryProps.tabs.values[0] ? galleryProps.tabs.values[0] : allTab;

	// Update state for galleryProps
	useEffect(() => {
		setActiveTab(firstTab);
		galleryProps.tabs.activeTab = activeTab;
	}, []);

	// Get gallery count
	const galleryCount = galleryProps.values.length;

	return galleryCount !== 0 ? (
		<Routes>
			<Route path="/" element={<GalleryLinks {...galleryProps} />} />

			{galleryProps.values.map((value) => {
				return <Route path=":id" element={<GalleryBody {...galleryProps} />} key={value.id} />;
			})}
		</Routes>
	) : null;
};

export const GalleryLinks = (props: GalleryLinksProps) => {
	const { tabs, values } = props;
	let { activeTab, setActiveTab } = tabs;
	const context = useContext(Context);
	const utils = context.utils;

	// console.log('in gallery links', props);

	// // Update state for tabsOptions
	// const defaultTab = tabStorage.active ? tabStorage.active : tabs.values[tabStorage.default];

	// useEffect(() => {
	// 	activeTab = defaultTab;
	// 	setActiveTab(defaultTab);
	// }, []);

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
							{tabs.values.map((tab, index) => (
								<div className="column" key={index}>
									<Button
										type={tabStorage.active == tab ? 'secondary active' : 'primary'}
										onClick={() => {
											// Update tab on click
											// activeTab = tab;
											// setActiveTab(activeTab);
											//tabStorage = activeTab;
											//tabs.active = tab;
											tabStorage.toggle(tab);
											console.log(tabStorage);
										}}
									>
										{tab}
									</Button>
								</div>
							))}
						</div>
					</div>

					<div className="gallery-tabs-content">
						<GalleryThumbnails {...props} />
					</div>
				</>
			) : (
				<GalleryThumbnails {...props} />
			)}
		</div>
	);
};

export const GalleryThumbnails = (props: GalleryThumbnailsProps) => {
	const { activeTab, headers, location, tabs, values } = props;
	//const { activeTab } = tabs;

	console.log('in gallery thumbnails', tabStorage);

	// Determine label for header
	const label = headers.enabled && headers.label && !tabs.enabled ? headers.label : tabStorage.active;

	return (
		<div className="gallery">
			{headers?.enabled ? <HeaderIcon tag={'h4'}>{label}</HeaderIcon> : null}

			<div className="gallery-items">
				{values.map((value) => {
					const showItem =
						!tabs.enabled || (tabs.enabled && value.categories && value.categories.includes(tabStorage.active)) ? true : false;

					return showItem ? (
						<div className="gallery-item" key={value.id}>
							<Link className="gallery-image" to={`${location}/${value.handle}`}>
								<div className="image-wrapper image-wrapper-fluid pixel-border">
									<img src={value.thumb} alt={value.name} title={value.name} loading="lazy" />
								</div>
							</Link>
						</div>
					) : null;
				})}
			</div>
		</div>
	);
};

export const GalleryBody = (props: GalleryBodyProps) => {
	const { activeTab, location, navigation, tabs, values } = props;
	//const { activeTab } = tabs;
	const context = useContext(Context);
	const showGallery = window.location.href.includes(location) ? true : false; // Do not render current item if not in matching gallery
	const parentPage = context.utils.getPage();

	console.log('in gallery body', props, tabStorage);

	// Filter values according to current tab
	const filteredValues = values.filter((value) => {
		return value.categories && value.categories.includes(activeTab);
	});

	// Get elements
	const elements = galleryUtils.navigation2(filteredValues, location);
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

	return showGallery ? (
		current ? (
			<div id={`gallery-${current.handle}`} className="gallery">
				<div className="gallery-body flex-wrap">
					{current.name && (
						<header className="gallery-header">
							<HeaderIcon className={'gallery-header-title'}>{current.name}</HeaderIcon>
						</header>
					)}

					{(current.image || current.thumb) && (
						<div className="gallery-image">
							<a href={current.image ? current.image : current.thumb} target="_blank" rel="noreferrer">
								<div
									className={`gallery-image-wrapper${current.categories && current.categories.includes('Pixels') ? '' : ' pixel-border'}`}
								>
									<img src={current.image ? current.image : current.thumb} alt={current.name} title={current.name} loading="lazy" />
								</div>
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
