/* React */
import { useEffect, useState, useContext } from 'react';
import { Link, Routes, Route, useParams, useNavigate } from 'react-router-dom';

/* Local styles */
import './styles/gallery.scss';

/* Local components */
import { Context } from '../../context/Context';

export const GalleryNew = (props) => {
	const { path, type, header, gallery } = props;
	const context = useContext(Context);
	const { utils } = context;

	// to-do: navigate to art if page not found
	// Modify gallery to add handle property for pretty urls
	const modifiedGallery = gallery.map((item) => {
		item.handle = `${type}-${utils.handleize(item.name)}`;
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
	const { path, gallery } = props;
	const { id } = useParams();

	// Find active gallery item
	const content = gallery.filter((item) => item.handle == id).pop();

	return content ? (
		<>
			<div className="gallery-content">
				<img src={content.image ? content.image : content.thumb} alt={content.name} title={content.name} loading="lazy" />
			</div>

			<div>
				<Link className="gallery-image" to={path}>
					Back
				</Link>
			</div>
		</>
	) : null;
};

export const Gallery = (props) => {
	const { gallery } = props;
	const galleryActiveClass = 'gallery-active';

	// Set item state
	let [activeItem, setActiveItem] = useState(false);
	let [activeIndex, setActiveIndex] = useState(false);

	// Handle toggle event for gallery click
	const toggleGallery = (e, item, index) => {
		e.preventDefault();
		const bodySelector = document.querySelector('body');

		// Change gallery state and set item
		if (!item) {
			activeItem = false;
			activeIndex = false;
			bodySelector.classList.remove(galleryActiveClass);
		} else {
			activeItem = item;
			activeIndex = index;
			bodySelector.classList.add(galleryActiveClass);
		}

		// Set gallery state
		setActiveItem(activeItem);
		setActiveIndex(activeIndex);
	};

	return (
		<>
			<div className="gallery">
				<div className="gallery-items row row-wrap row-auto row-spacing-10">
					{gallery.map((item, index) => (
						<div className="gallery-item column" key={item.id}>
							<div className="gallery-image pointer" onClick={(e) => toggleGallery(e, item, index)}>
								<div className={`image-wrapper${item.border ? ' pixel-border' : ''}`}>
									<img src={item.thumb} alt={item.name} title={item.name} loading="lazy" />
								</div>
							</div>
						</div>
					))}
				</div>

				{activeItem ? (
					<>
						<div className="gallery-modal" onClick={(e) => toggleGallery(e, false, false)}>
							<div className="gallery-overlay"></div>

							<div className="gallery-info pixel-border-modal" onClick={(e) => e.stopPropagation()}>
								<header className="gallery-info-header flex-nowrap flex-align-items-center">
									<h3 className="gallery-info-title">{activeItem.name}</h3>

									<button className="gallery-info-close" type="button" onClick={(e) => toggleGallery(e, false, false)}>
										x
									</button>
								</header>

								<div className="gallery-info-scrollbar scrollbar">
									<div className="gallery-info-content flex-wrap">
										<div className="gallery-info-image column">
											<a href={activeItem.image ? activeItem.image : activeItem.thumb} target="_blank">
												<img
													src={activeItem.image ? activeItem.image : activeItem.thumb}
													alt={activeItem.name}
													title={activeItem.name}
													loading="lazy"
												/>
											</a>
										</div>

										<div className="gallery-info-details spacing-reset column">
											{activeItem.date && (
												<p className="gallery-info-date">
													<strong>Date</strong> - {activeItem.date}
												</p>
											)}

											{activeItem.url && (
												<p className="gallery-info-visit">
													<strong>Visit</strong> -{' '}
													<a href={activeItem.url} target="_blank">
														{activeItem.url.replace('//', '')}
													</a>
												</p>
											)}

											{activeItem.technologies && (
												<p className="gallery-info-technologies">
													<strong>Technologies</strong> - {activeItem.technologies}
												</p>
											)}

											{activeItem.mediums && (
												<p className="gallery-info-technologies">
													<strong>Mediums</strong> - {activeItem.mediums}
												</p>
											)}

											{activeItem.content && (
												<p className="gallery-info-content" dangerouslySetInnerHTML={{ __html: activeItem.content }}></p>
											)}
										</div>
									</div>
								</div>

								<footer className="gallery-info-footer">
									<nav className="gallery-navigation">
										{activeIndex === 0 ? (
											<GalleryNavigationButton
												direction={'Previous'}
												toggleGallery={toggleGallery}
												item={gallery[gallery.length - 1]}
												index={gallery.length - 1}
											/>
										) : (
											<GalleryNavigationButton
												direction={'Previous'}
												toggleGallery={toggleGallery}
												item={gallery[activeIndex - 1]}
												index={activeIndex - 1}
											/>
										)}

										<span className="gallery-navigation-separator">&#9642;</span>

										{activeIndex === gallery.length - 1 ? (
											<GalleryNavigationButton direction={'Next'} toggleGallery={toggleGallery} item={gallery[0]} index={0} />
										) : (
											<GalleryNavigationButton
												direction={'Next'}
												toggleGallery={toggleGallery}
												item={gallery[activeIndex + 1]}
												index={activeIndex + 1}
											/>
										)}
									</nav>
								</footer>
							</div>
						</div>
					</>
				) : null}
			</div>
		</>
	);
};

export const GalleryNavigationButton = (props) => {
	const { direction, toggleGallery, item, index } = props;
	const context = useContext(Context);
	const { utils } = context;

	return (
		<button
			className={`gallery-navigation-button gallery-navigation-${utils.handleize(direction)}`}
			type="button"
			onClick={(e) => toggleGallery(e, item, index)}
		>
			{direction}
		</button>
	);
};
