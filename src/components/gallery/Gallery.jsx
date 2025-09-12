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

	return null;

	//return hasGallery ? <GalleryLayout gallery={gallery} /> : null;
};

// export const GalleryLayout = (props) => {
// 	let { gallery } = props;
// 	const hasTabs = gallery?.thumbnails?.tabs ? true : false;

// 	// Ensure categories are set as well as "All" category
// 	if (!gallery.categories) {
// 		gallery.categories = {};
// 	}
// 	if (typeof gallery.categories.all == 'undefined') {
// 		gallery.categories.all = true;
// 	}

// 	// Ensure thumbnails are set with headers defined
// 	if (!gallery.thumbnails) {
// 		gallery.thumbnails = {};
// 	}
// 	if (typeof gallery.thumbnails.headers == 'undefined') {
// 		gallery.thumbnails.headers = true;
// 	}

// 	// Ensure navigation is set
// 	if (!gallery.navigation) {
// 		gallery.navigation = {};
// 	}

// 	// Create gallery object for art
// 	const modifiedGallery = galleryUtils.build(gallery.values, gallery.categories.all);

// 	// Set gallery map
// 	const galleryMap = Object.keys(modifiedGallery);

// 	// Get gallery count
// 	let galleryCount = 0;
// 	galleryMap.forEach((key) => {
// 		galleryCount = galleryCount + modifiedGallery[key].values.length;
// 	});

// 	// Set state for tab
// 	let [tab, setTab] = useState(false);

// 	// Update state for tab
// 	useEffect(() => {
// 		if (hasTabs) {
// 			const tabId = gallery?.thumbnails?.tabDefault ? gallery.thumbnails.tabDefault : galleryMap[0];
// 			tab = modifiedGallery[tabId] ? modifiedGallery[tabId].id : modifiedGallery[galleryMap[0]].id;
// 			setTab(tab);
// 		}
// 	}, []);

// 	return galleryCount !== 0 ? (
// 		<div className={`gallery-${hasTabs ? 'tabs' : 'default'} spacing-reset`}>
// 			{hasTabs && window.location.pathname == props.gallery.path ? (
// 				<>
// 					<div className="gallery-tabs-buttons">
// 						<div className="row row-wrap row-spacing-10 row-align-items-center">
// 							{galleryMap.map((key) => {
// 								const current = galleryUtils.get.category(modifiedGallery, key, gallery);

// 								return current.show ? (
// 									<div className="column" key={current.handle}>
// 										<Button
// 											type={tab && tab == current.id ? 'secondary active' : 'primary'}
// 											onClick={() => {
// 												// Update tab on click
// 												tab = current.id;
// 												setTab(tab);
// 											}}
// 										>
// 											{current.header}
// 										</Button>
// 									</div>
// 								) : null;
// 							})}
// 						</div>
// 					</div>

// 					<div className="gallery-tabs-content">
// 						{galleryMap.map((key) => {
// 							const current = galleryUtils.get.category(modifiedGallery, key, gallery);

// 							return current.show ? <GalleryRoutes {...current} tab={tab} key={current.handle} /> : null;
// 						})}
// 					</div>
// 				</>
// 			) : (
// 				galleryMap.map((key) => {
// 					const current = galleryUtils.get.category(modifiedGallery, key, gallery);

// 					return current.show ? <GalleryRoutes {...current} key={current.handle} /> : null;
// 				})
// 			)}
// 		</div>
// 	) : null;
// };

// export const GalleryRoutes = (props) => {
// 	return (
// 		<Routes>
// 			<Route path="/" element={<GalleryThumbnails {...props} />} />
// 			<Route path=":id" element={<GalleryBody {...props} />} />
// 		</Routes>
// 	);
// };

// export const GalleryThumbnails = (props) => {
// 	const { header, id, path, tab, thumbnails, values } = props;
// 	const context = useContext(Context);
// 	const utils = context.utils;

// 	// Set timestamp to sort values
// 	values.forEach((value) => {
// 		utils.setTimestamp(value);
// 	});

// 	// Sort values by newest
// 	values.sort((a, b) => {
// 		return b.timestamp - a.timestamp;
// 	});

// 	return (
// 		<div id={id} className={`gallery${tab && tab == id ? ' active' : ''}`}>
// 			{thumbnails && thumbnails.headers ? <HeaderIcon tag={'h4'}>{header}</HeaderIcon> : null}

// 			<div className="gallery-items">
// 				{values.map((value) => (
// 					<div className="gallery-item" key={value.id}>
// 						<Link className="gallery-image" to={`${path}/${value.handle}`}>
// 							<div className="image-wrapper image-wrapper-fluid pixel-border">
// 								<img src={value.thumb} alt={value.name} title={value.name} loading="lazy" />
// 							</div>
// 						</Link>
// 					</div>
// 				))}
// 			</div>
// 		</div>
// 	);
// };

// export const GalleryBody = (props) => {
// 	const { handle, navigation, path, values } = props;
// 	const { id } = useParams();
// 	const showGallery = window.location.href.includes(`${path}/${handle}-`) ? true : false; // Do not render current item if not in matching gallery
// 	const elements = galleryUtils.get.navigation(values, id);
// 	const current = elements?.current ? elements.current : false;

// 	// Check if we are on a pixels gallery
// 	const isPixels = current.categories == 'Pixels' ? true : false;

// 	// Build navigation props
// 	const navigationProps = {
// 		path: path,
// 		previous: elements?.previous ? elements.previous : false,
// 		next: elements?.next ? elements.next : false,
// 		back: navigation?.back ? navigation.back : false,
// 	};

// 	return showGallery ? (
// 		current ? (
// 			<div id={`gallery-${current.handle}`} className="gallery">
// 				<div className="gallery-body flex-wrap">
// 					{current.name && (
// 						<header className="gallery-header">
// 							<HeaderIcon className={'gallery-header-title'}>{current.name}</HeaderIcon>
// 						</header>
// 					)}

// 					{(current.image || current.thumb) && (
// 						<div className="gallery-image">
// 							<a href={current.image ? current.image : current.thumb} target="_blank" rel="noreferrer">
// 								<div className={`gallery-image-wrapper${!isPixels ? ' pixel-border' : ''}`}>
// 									<img src={current.image ? current.image : current.thumb} alt={current.name} title={current.name} loading="lazy" />
// 								</div>
// 							</a>
// 						</div>
// 					)}

// 					<div className="gallery-details spacing-reset">
// 						<dl className="definition-list">
// 							{current.date && (
// 								<div className="definition-list-item">
// 									<dt>Date</dt>
// 									<dd>{current.date}</dd>
// 								</div>
// 							)}

// 							{current.url && (
// 								<div className="definition-list-item">
// 									<dt>Visit</dt>
// 									<dd>
// 										<a href={current.url} target="_blank" rel="noreferrer">
// 											{current.url.replace('//', '')}
// 										</a>
// 									</dd>
// 								</div>
// 							)}

// 							{current.technologies && (
// 								<div className="definition-list-item">
// 									<dt>Technologies</dt>
// 									<dd>{current.technologies}</dd>
// 								</div>
// 							)}

// 							{current.mediums && (
// 								<div className="definition-list-item">
// 									<dt>Mediums</dt>
// 									<dd>{current.mediums}</dd>
// 								</div>
// 							)}

// 							{current.description && (
// 								<div className="definition-list-item">
// 									<dt>Description</dt>
// 									<dd dangerouslySetInnerHTML={{ __html: current.description }}></dd>
// 								</div>
// 							)}
// 						</dl>
// 					</div>
// 				</div>

// 				<PixelSection navigation={navigationProps} />
// 			</div>
// 		) : (
// 			<Navigate to={path} replace />
// 		)
// 	) : null;
// };
