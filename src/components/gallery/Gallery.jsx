/* React */
import { useContext } from 'react';
import { Link, Routes, Route, useParams, Navigate } from 'react-router-dom';

/* Local styles */
import './styles/gallery.scss';

/* Local components */
import { Context } from '../../context/Context';

export const Gallery = (props) => {
	const { path, type, header, gallery } = props;
	const context = useContext(Context);
	const { utils } = context;

	// Modify gallery to add handle property for pretty urls
	const modifiedGallery = gallery.map((item, index) => {
		item.index = index;
		item.handle = `${type}-${item.name ? utils.handleize(item.name) : index}`;
		return item;
	});

	// Pass down gallery props
	const galleryProps = {
		path: path,
		type: type,
		header: header ? header : false,
		gallery: modifiedGallery,
	};

	return (
		<div className="gallery">
			<Routes>
				<Route path="/" element={<GalleryThumbnails {...galleryProps} />} />
				<Route path=":id" element={<GalleryContent {...galleryProps} />} />
			</Routes>
		</div>
	);
};

export const GalleryThumbnails = (props) => {
	const { path, header, gallery } = props;

	return (
		<>
			{header ? <h4>{header}</h4> : null}

			<div className="gallery-items row row-wrap row-auto row-spacing-10">
				{gallery.map((item) => (
					<div className="gallery-item column" key={item.id}>
						<Link className="gallery-image" to={`${path}/${item.handle}`}>
							<div className={`image-wrapper${item.border ? ' pixel-border' : ''}`}>
								<img src={item.thumb} alt={item.name} title={item.name} loading="lazy" />
							</div>
						</Link>
					</div>
				))}
			</div>
		</>
	);
};

export const GalleryContent = (props) => {
	const { path, type, header, gallery } = props;
	const { id } = useParams();
	const showContent = window.location.href.includes(`${path}/${type}-`) ? true : false; // Do not render content if not in matching gallery
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

	return showContent ? (
		content ? (
			<>
				<div className="gallery-content">
					{content.name && (
						<header className="gallery-content-header">
							<h3 className="gallery-content-title">{content.name}</h3>
						</header>
					)}

					{(content.image || content.thumb) && (
						<div className="gallery-content-image">
							<a href={content.image ? content.image : content.thumb} target="_blank" rel="noreferrer">
								<img src={content.image ? content.image : content.thumb} alt={content.name} title={content.name} loading="lazy" />
							</a>
						</div>
					)}

					<div className="gallery-content-details">
						{content.date && (
							<p className="gallery-content-date">
								<strong>Date</strong> - {content.date}
							</p>
						)}

						{content.url && (
							<p className="gallery-content-visit">
								<strong>Visit</strong> -{' '}
								<a href={content.url} target="_blank" rel="noreferrer">
									{content.url.replace('//', '')}
								</a>
							</p>
						)}

						{content.technologies && (
							<p className="gallery-content-technologies">
								<strong>Technologies</strong> - {content.technologies}
							</p>
						)}

						{content.mediums && (
							<p className="gallery-content-technologies">
								<strong>Mediums</strong> - {content.mediums}
							</p>
						)}

						{content.description && (
							<p className="gallery-content-description" dangerouslySetInnerHTML={{ __html: content.description }}></p>
						)}
					</div>
				</div>

				<nav className="gallery-navigation">
					<ul className="gallery-navigation-list unstyled">
						{previous && (
							<li className="gallery-navigation-list-item">
								<Link className="gallery-navigation-link" to={`${path}/${previous.handle}`}>
									&lt; Previous
								</Link>
							</li>
						)}

						<li className="gallery-navigation-list-item">
							<Link className="gallery-navigation-link" to={path}>
								Back{header ? ` to "${header}"` : ``}
							</Link>
						</li>

						{next && (
							<li className="gallery-navigation-list-item">
								<Link className="gallery-navigation-link" to={`${path}/${next.handle}`}>
									Next &gt;
								</Link>
							</li>
						)}
					</ul>
				</nav>
			</>
		) : (
			<Navigate to={path} replace />
		)
	) : null;
};
