/* React */
import React, { useEffect, useState } from 'react';
import { Link, Routes, Route, useParams, Navigate } from 'react-router-dom';

/* Local styles */
import './styles/gallery.scss';

/* Local scripts */
import { gallery as galleryUtils } from './scripts/gallery';

/* Local components */
import { HeaderIcon, Button } from '../blocks/Blocks';

export const Gallery = (props) => {
	let { gallery, options } = props;
	const hasGallery = options && gallery && gallery.length !== 0 && options.path ? true : false;

	return hasGallery ? <GalleryLayout gallery={gallery} options={options} /> : null;
};

export const GalleryLayout = (props) => {
	let { gallery, options } = props;
	const hasTabs = options?.thumbnails?.tabs ? true : false;

	// Ensure categories are set as well as "All" category
	if (!options.categories) {
		options.categories = {};
	}
	if (typeof options.categories.all == 'undefined') {
		options.categories.all = true;
	}

	// Ensure thumbnail options is set with headers defined
	if (!options.thumbnails) {
		options.thumbnails = {};
	}
	if (typeof options.thumbnails.headers == 'undefined') {
		options.thumbnails.headers = true;
	}

	// Ensure navigation is set
	if (!options.navigation) {
		options.navigation = {};
	}

	// Create gallery object for art
	const modifiedGallery = galleryUtils.build(gallery, options.categories.all);

	// Set gallery map
	const galleryMap = Object.keys(modifiedGallery);

	// Get gallery count
	let galleryCount = 0;
	galleryMap.forEach((key) => {
		galleryCount = galleryCount + modifiedGallery[key].values.length;
	});

	// Set state for tab
	let [tab, setTab] = useState(false);

	// Update state for tab
	useEffect(() => {
		if (hasTabs) {
			const tabId = options?.thumbnails?.tabDefault ? options.thumbnails.tabDefault : galleryMap[0];
			tab = modifiedGallery[tabId] ? modifiedGallery[tabId].id : modifiedGallery[galleryMap[0]].id;
			setTab(tab);
		}
	}, []);

	return galleryCount !== 0 ? (
		<div className={`gallery-${hasTabs ? 'tabs' : 'default'} spacing-reset`}>
			{hasTabs && window.location.pathname == props.options.path ? (
				<>
					<div className="gallery-tabs-buttons">
						<div className="row row-wrap row-spacing-10 row-align-items-center">
							{galleryMap.map((key) => {
								const current = galleryUtils.get.category(modifiedGallery, key, options);

								return current.gallery.show ? (
									<div className="column" key={current.gallery.handle}>
										<Button
											type={tab && tab == current.gallery.id ? 'secondary' : 'primary'}
											onClick={() => {
												// Update tab on click
												tab = current.gallery.id;
												setTab(tab);
											}}
										>
											{current.gallery.header}
										</Button>
									</div>
								) : null;
							})}
						</div>
					</div>

					<div className="gallery-tabs-content">
						{galleryMap.map((key) => {
							const current = galleryUtils.get.category(modifiedGallery, key, options);

							return current.gallery.show ? <GalleryRoutes {...current} tab={tab} key={current.gallery.handle} /> : null;
						})}
					</div>
				</>
			) : (
				galleryMap.map((key) => {
					const current = galleryUtils.get.category(modifiedGallery, key, options);

					return current.gallery.show ? <GalleryRoutes {...current} key={current.gallery.handle} /> : null;
				})
			)}
		</div>
	) : null;
};

export const GalleryRoutes = (props) => {
	const { options, gallery, tab } = props;

	// Pass down gallery props
	const galleryProps = {
		path: options.path,
		navigation: options.navigation,
		thumbnails: options.thumbnails,
		tab: tab ? tab : false,
		gallery: {
			id: gallery.id,
			header: gallery.header ? gallery.header : false,
			handle: gallery.handle,
			values: gallery.values,
		},
	};

	return (
		<Routes>
			<Route path="/" element={<GalleryThumbnails {...galleryProps} />} />
			<Route path=":id" element={<GalleryContent {...galleryProps} />} />
		</Routes>
	);
};

export const GalleryThumbnails = (props) => {
	const { path, gallery, thumbnails, tab } = props;

	return (
		<div id={gallery.id} className={`gallery${tab && tab == gallery.id ? ' active' : ''}`}>
			{thumbnails && thumbnails.headers ? <HeaderIcon tag={'h4'}>{gallery.header}</HeaderIcon> : null}

			<div className="gallery-items">
				{gallery.values.map((value) => (
					<div className="gallery-item" key={value.id}>
						<Link className="gallery-image" to={`${path}/${value.handle}`}>
							<div className="image-wrapper pixel-border">
								<img src={value.thumb} alt={value.name} title={value.name} loading="lazy" />
							</div>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export const GalleryContent = (props) => {
	const { path, gallery, navigation } = props;
	const { id } = useParams();
	const showCurrent = window.location.href.includes(`${path}/${gallery.handle}-`) ? true : false; // Do not render current item if not in matching gallery
	const galleryCount = gallery.values.length - 1;

	// Set initial variables for gallery item details
	let current = false;
	let previous = false;
	let next = false;

	// Find active gallery value
	let selected = gallery.values.filter((value) => value.handle == id);

	// Update gallery details and create previous / next elements
	if (selected && selected.length !== 0) {
		// Set current
		current = selected.pop();

		// If previous / next order is out of bounds, loop around to start / end of gallery
		const previousIndex = current.order - 1;
		const nextIndex = current.order + 1;
		previous = previousIndex <= 0 ? gallery.values[galleryCount] : gallery.values[previousIndex];
		next = nextIndex >= galleryCount ? gallery.values[0] : gallery.values[nextIndex];
	}

	// Check if we are on a pixels gallery
	const isPixels = current.categories == 'Pixels' ? true : false;

	return showCurrent ? (
		current ? (
			<div id={`gallery-${current.handle}`} className="gallery">
				<div className="gallery-content flex-wrap">
					{current.name && (
						<header className="gallery-header">
							<HeaderIcon className={'gallery-header-title'}>{current.name}</HeaderIcon>
						</header>
					)}

					{(current.image || current.thumb) && (
						<div className="gallery-image">
							<a href={current.image ? current.image : current.thumb} target="_blank" rel="noreferrer">
								<div className={`gallery-image-wrapper${!isPixels ? ' pixel-border' : ''}`}>
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

				<nav className="gallery-navigation">
					<ul className="gallery-navigation-list unstyled flex-wrap flex-align-items-center">
						{previous && (
							<li className="gallery-navigation-list-item gallery-navigation-previous">
								<Link className="gallery-navigation-link" to={`${path}/${previous.handle}`}>
									<span className="icon icon-angle-left"></span>Previous
								</Link>
							</li>
						)}

						{navigation?.back && (
							<>
								<li className="gallery-navigation-list-item gallery-navigation-separator">
									<span className="icon icon-bullet"></span>
								</li>

								<li className="gallery-navigation-list-item gallery-navigation-back">
									<Link className="gallery-navigation-link" to={path}>
										{navigation?.back}
									</Link>
								</li>
							</>
						)}

						<li className="gallery-navigation-list-item gallery-navigation-separator">
							<span className="icon icon-bullet"></span>
						</li>

						{next && (
							<li className="gallery-navigation-list-item gallery-navigation-next">
								<Link className="gallery-navigation-link" to={`${path}/${next.handle}`}>
									Next<span className="icon icon-angle-right"></span>
								</Link>
							</li>
						)}
					</ul>
				</nav>
			</div>
		) : (
			<Navigate to={path} replace />
		)
	) : null;
};
