/* React */
import { Link, Routes, Route, useParams, Navigate } from 'react-router-dom';

/* Local styles */
import './styles/gallery.scss';

/* Local scripts */
import { gallery as galleryUtils } from './scripts/gallery';

/* Local components */
import { HeaderIcon } from '../blocks/Blocks';

export const Gallery = (props) => {
	let { path, gallery, backLink, createAll, thumbnailHeaders } = props;
	createAll = typeof createAll == 'undefined' ? true : createAll;
	thumbnailHeaders = typeof thumbnailHeaders == 'undefined' ? true : thumbnailHeaders;

	// Create gallery object for art
	const modifiedGallery = galleryUtils.build(gallery, createAll);

	return gallery && gallery.length !== 0 ? (
		<>
			{Object.keys(modifiedGallery).map((key) => {
				const current = modifiedGallery[key];

				return current.values && current.values.length !== 0 ? (
					<GalleryRoutes path={path} gallery={current} backLink={backLink} thumbnailHeaders={thumbnailHeaders} key={current.handle} />
				) : null;
			})}
		</>
	) : null;
};

export const GalleryRoutes = (props) => {
	const { path, gallery, backLink, thumbnailHeaders } = props;

	// Pass down gallery props
	const galleryProps = {
		path: path,
		category: gallery.handle,
		header: gallery.header ? gallery.header : false,
		gallery: gallery.values,
		galleryId: gallery.id,
		backLink: backLink ? backLink : false,
		thumbnailHeaders: thumbnailHeaders,
	};

	return (
		<Routes>
			<Route path="/" element={<GalleryThumbnails {...galleryProps} />} />
			<Route path=":id" element={<GalleryContent {...galleryProps} />} />
		</Routes>
	);
};

export const GalleryThumbnails = (props) => {
	const { path, header, gallery, galleryId, thumbnailHeaders } = props;

	return (
		<div id={galleryId} className="gallery">
			{thumbnailHeaders && header ? <HeaderIcon tag={'h4'}>{header}</HeaderIcon> : null}

			<div className="gallery-items">
				{gallery.map((value) => (
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
	const { path, category, gallery, galleryId, backLink } = props;
	const { id } = useParams();
	const showCurrent = window.location.href.includes(`${path}/${category}-`) ? true : false; // Do not render current item if not in matching gallery
	const galleryCount = gallery.length - 1;

	// Set initial variables for gallery item details
	let current = false;
	let previous = false;
	let next = false;

	// Find active gallery value
	let selected = gallery.filter((value) => value.handle == id);

	// Update gallery details and create previous / next elements
	if (selected && selected.length !== 0) {
		// Set current
		current = selected.pop();

		// If previous / next order is out of bounds, loop around to start / end of gallery
		const previousIndex = current.order - 1;
		const nextIndex = current.order + 1;
		previous = previousIndex <= 0 ? gallery[galleryCount] : gallery[previousIndex];
		next = nextIndex >= galleryCount ? gallery[0] : gallery[nextIndex];
	}

	// Check if we are on a pixels gallery
	const isPixels = current.categories == 'Pixels' ? true : false;

	return showCurrent ? (
		current ? (
			<div id={galleryId} className="gallery">
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

						<li className="gallery-navigation-list-item gallery-navigation-separator">
							<span className="icon icon-bullet"></span>
						</li>

						{backLink && (
							<li className="gallery-navigation-list-item gallery-navigation-back">
								<Link className="gallery-navigation-link" to={path}>
									{backLink}
								</Link>
							</li>
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
