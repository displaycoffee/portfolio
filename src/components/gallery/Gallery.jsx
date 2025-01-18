/* React */
import { useContext, useId } from 'react';
import { Link, Routes, Route, useParams, Navigate } from 'react-router-dom';

/* Local styles */
import './styles/gallery.scss';

/* Local components */
import { Context } from '../../context/Context';

export const Gallery = (props) => {
	const { path, category, header, gallery, backLink } = props;
	const fallbackId = useId().replace(/:/g, '');
	const context = useContext(Context);
	const { utils } = context;

	// Ensure category is set for ids and handles
	const galleryCategory = typeof category == 'undefined' ? `uncategorized-${fallbackId}` : category;

	// Modify gallery to add handle property for pretty urls
	const modifiedGallery = gallery.map((item, index) => {
		item.index = index;
		item.handle = `${galleryCategory}-${item.name ? utils.handleize(item.name) : index}`;
		return item;
	});

	// Pass down gallery props
	const galleryProps = {
		path: path,
		category: galleryCategory,
		header: header ? header : false,
		gallery: modifiedGallery,
		galleryId: `gallery-${galleryCategory}`,
		backLink: backLink ? backLink : false,
	};

	return (
		<Routes>
			<Route path="/" element={<GalleryThumbnails {...galleryProps} />} />
			<Route path=":id" element={<GalleryContent {...galleryProps} />} />
		</Routes>
	);
};

export const GalleryThumbnails = (props) => {
	const { path, header, gallery, galleryId } = props;

	return (
		<div id={galleryId} className="gallery">
			{header ? <h4>{header}</h4> : null}

			<div className="gallery-items">
				{gallery.map((item) => (
					<div className="gallery-item" key={item.id}>
						<Link className="gallery-image" to={`${path}/${item.handle}`}>
							<div className="image-wrapper pixel-border">
								<img src={item.thumb} alt={item.name} title={item.name} loading="lazy" />
							</div>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

// Function to generate class for detail
const detailsClass = (type) => {
	return `gallery-details-item gallery-details-${type} flex-wrap`;
};

export const GalleryContent = (props) => {
	const { path, category, gallery, galleryId, backLink } = props;
	const { id } = useParams();
	const showContent = window.location.href.includes(`${path}/${category}-`) ? true : false; // Do not render content if not in matching gallery
	const galleryCount = gallery.length - 1;

	// Set initial variables for gallery item details
	let content = false;
	let previous = false;
	let next = false;

	// Find active gallery item
	let selected = gallery.filter((item) => item.handle == id);

	// Update gallery details and create previous / next elements
	if (selected && selected.length !== 0) {
		// Set selected content
		content = selected.pop();

		// If previous / next index is out of bounds, loop around to start / end of gallery
		const previousIndex = content.index - 1;
		const nextIndex = content.index + 1;
		previous = previousIndex <= 0 ? gallery[galleryCount] : gallery[previousIndex];
		next = nextIndex >= galleryCount ? gallery[0] : gallery[nextIndex];
	}

	// Check if we are on a pixels gallery
	const isPixels = category == 'pixels' ? true : false;

	return showContent ? (
		content ? (
			<div id={galleryId} className="gallery">
				<div className="gallery-content flex-wrap">
					{content.name && (
						<header className="gallery-header">
							<h3 className="gallery-header-title">{content.name}</h3>
						</header>
					)}

					{(content.image || content.thumb) && (
						<div className="gallery-image">
							<a href={content.image ? content.image : content.thumb} target="_blank" rel="noreferrer">
								<div className={`gallery-image-wrapper${!isPixels ? ' pixel-border' : ''}`}>
									<img src={content.image ? content.image : content.thumb} alt={content.name} title={content.name} loading="lazy" />
								</div>
							</a>
						</div>
					)}

					<div className="gallery-details">
						<dl className="gallery-details-list">
							{content.date && (
								<div className={detailsClass('date')}>
									<dt>Date</dt>
									<dd>{content.date}</dd>
								</div>
							)}

							{content.url && (
								<div className={detailsClass('visit')}>
									<dt>Visit</dt>
									<dd>
										<a href={content.url} target="_blank" rel="noreferrer">
											{content.url.replace('//', '')}
										</a>
									</dd>
								</div>
							)}

							{content.technologies && (
								<div className={detailsClass('technologies')}>
									<dt>Technologies</dt>
									<dd>{content.technologies}</dd>
								</div>
							)}

							{content.mediums && (
								<div className={detailsClass('mediums')}>
									<dt>Mediums</dt>
									<dd>{content.mediums}</dd>
								</div>
							)}

							{content.description && (
								<div className={detailsClass('description')}>
									<dt>Description</dt>
									<dd dangerouslySetInnerHTML={{ __html: content.description }}></dd>
								</div>
							)}
						</dl>
					</div>
				</div>

				<nav className="gallery-navigation">
					<ul className="gallery-navigation-list unstyled flex-nowrap flex-align-items-center">
						{previous && (
							<li className="gallery-navigation-list-item">
								<Link className="gallery-navigation-link" to={`${path}/${previous.handle}`}>
									&lt; Previous
								</Link>
							</li>
						)}

						<li className="gallery-navigation-list-item gallery-navigation-separator">&#9642;</li>

						{backLink && (
							<li className="gallery-navigation-list-item">
								<Link className="gallery-navigation-link" to={path}>
									{backLink}
								</Link>
							</li>
						)}

						<li className="gallery-navigation-list-item gallery-navigation-separator">&#9642;</li>

						{next && (
							<li className="gallery-navigation-list-item">
								<Link className="gallery-navigation-link" to={`${path}/${next.handle}`}>
									Next &gt;
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
