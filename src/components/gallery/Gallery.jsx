/* React */
import { useEffect, useState, useContext } from 'react';
import { Link, Routes, Route, useParams, Navigate } from 'react-router-dom';

/* Local styles */
import './styles/gallery.scss';

/* Local scripts */
import { gallery as galleryUtils } from './scripts/gallery';

/* Local components */
import { Context } from '../../context/Context';
import { HeaderIcon, Button, PixelSection } from '../blocks/Blocks';

export const Gallery = (props) => {
	let { gallery } = props;
	const hasGallery = gallery && gallery?.path && gallery.values && gallery.values.length !== 0 ? true : false;

	return hasGallery ? <GalleryRoutes gallery={gallery} /> : null;
};

export const GalleryRoutes = (props) => {
	const { gallery } = props;
	const allTab = 'All';

	// Ensure headers is set
	if (!gallery.headers) {
		gallery.headers = false;
	}

	// Ensure navigation is set
	if (!gallery.navigation) {
		gallery.navigation = {};
	}

	// Ensure thumbnails are set
	if (!gallery.thumbnails) {
		gallery.thumbnails = {};
	}

	// Create modified gallery
	gallery.values = galleryUtils.build(gallery.values, gallery?.tabs);

	// Ensure tabs are set and that they have categories
	if (gallery?.tabs?.enabled) {
		gallery.tabs['values'] = [];

		gallery.values.forEach((value) => {
			// Add all category if set
			const categoriesSplit = value.categories.split(', ');

			// If category is not in tabs, add it
			categoriesSplit.forEach((category) => {
				if (!gallery.tabs.values.includes(category)) {
					gallery.tabs.values.push(category);
				}
			});
		});
	} else {
		// Set object if no tabs are defined
		gallery.tabs = {
			all: false,
			enabled: false,
			headers: gallery.headers,
			values: [],
		};
	}

	// Set state for tab
	const firstTab = gallery.tabs.values[0] ? gallery.tabs.values[0] : allTab;
	let [activeTab, setActiveTab] = useState(firstTab);

	// Set gallery props
	const galleryProps = {
		...gallery,
		activeTab: activeTab,
		setActiveTab: setActiveTab,
	};

	// Get gallery count
	const galleryCount = gallery.values.length;

	return galleryCount !== 0 ? (
		<Routes>
			<Route path="/" element={<GalleryLinks {...galleryProps} />} />

			{gallery.values.map((value) => {
				return <Route path=":id" element={<GalleryBody {...galleryProps} />} key={value.id} />;
			})}
		</Routes>
	) : null;
};

export const GalleryLinks = (props) => {
	const { tabs, values } = props;
	let { activeTab, setActiveTab } = props;
	const context = useContext(Context);
	const utils = context.utils;

	// Set timestamp to sort values
	values.forEach((value) => {
		utils.setTimestamp(value);
	});

	// Sort values by newest
	values.sort((a, b) => {
		return b.timestamp - a.timestamp;
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
										type={activeTab == tab ? 'secondary active' : 'primary'}
										onClick={() => {
											// Update tab on click
											activeTab = tab;
											setActiveTab(activeTab);
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

export const GalleryThumbnails = (props) => {
	const { activeTab, headers, path, tabs, values } = props;

	return (
		<div className="gallery active">
			{headers ? <HeaderIcon tag={'h4'}>{activeTab}</HeaderIcon> : null}

			<div className="gallery-items">
				{values.map((value) => {
					const showItem = !tabs.enabled || (tabs.enabled && value.categories.includes(activeTab)) ? true : false;

					return showItem ? (
						<div className="gallery-item" key={value.id}>
							<Link className="gallery-image" to={`${path}/${value.handle}`}>
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

export const GalleryBody = (props) => {
	const { activeTab, navigation, path, values } = props;
	const { id } = useParams();
	const showGallery = window.location.href.includes(`${path}/${id}`) ? true : false; // Do not render current item if not in matching contents

	// Filter values according to current tab
	const filteredValues = values.filter((value) => {
		return value.categories.includes(activeTab);
	});

	// Get elements
	const elements = galleryUtils.get.navigation(filteredValues, id);
	const { current, next, previous } = elements;

	// Build navigation props
	const navigationProps = {
		path: path,
		previous: previous,
		next: next,
		back: navigation?.back ? navigation.back : false,
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
								<div className={`gallery-image-wrapper${current.categories.includes('Pixels') ? '' : ' pixel-border'}`}>
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
			<Navigate to={path} replace />
		)
	) : null;
};
