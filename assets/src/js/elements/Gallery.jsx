/* React */
import { useState } from 'react';

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
	}

	return (
		<>
			<div className="gallery">
				<div className="gallery-items row row-wrap row-auto row-10">
					{gallery.map((item, index) => (
						<div className="gallery-item column" key={item.id}>
							<div className="gallery-image pointer" onClick={(e) => toggleGallery(e, item, index)}>
								{item.border ? (
									<div className="pixel-border">
										<img src={item.thumb} alt={item.name} title={item.name} loading="lazy" />
									</div>
								) : (
									<img src={item.thumb} alt={item.name} title={item.name} loading="lazy" />
								)}
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

									<button className="gallery-info-close" type="button" onClick={(e) => toggleGallery(e, false, false)}>x</button>
								</header>

								<div className="gallery-info-scroll">
									<div className="gallery-info-content flex-wrap">
										<div className="gallery-info-image column">
											<a href={activeItem.image ? activeItem.image : activeItem.thumb} target="_blank">
												<img src={activeItem.image ? activeItem.image : activeItem.thumb} alt={activeItem.name} title={activeItem.name} loading="lazy" />
											</a>
										</div>

										<div className="gallery-info-details column">
											{activeItem.date && (
												<div className="gallery-info-date">
													<strong>Date:</strong> {activeItem.date}
												</div>
											)}

											{activeItem.url && (
												<div className="gallery-info-technologies">
													<strong>Visit:</strong> <a href={activeItem.url} target="_blank">{activeItem.url.replace('//', '')}</a>
												</div>
											)}

											{activeItem.technologies && (
												<div className="gallery-info-technologies">
													<strong>Technologies:</strong> {activeItem.technologies}
												</div>
											)}

											{activeItem.mediums && (
												<div className="gallery-info-technologies">
													<strong>Mediums:</strong> {activeItem.mediums}
												</div>
											)}
											
											{activeItem.content && (
												<div className="gallery-info-content" dangerouslySetInnerHTML={{ __html: activeItem.content }}></div>
											)}
										</div>
									</div>
								</div>

								<footer className="gallery-info-footer">
									<nav className="gallery-navigation">
										{activeIndex === 0 ? (
											<GalleryNavigationButton direction={'Previous'} toggleGallery={toggleGallery} item={gallery[gallery.length - 1]} index={gallery.length - 1} />
										) : (
											<GalleryNavigationButton direction={'Previous'} toggleGallery={toggleGallery} item={gallery[activeIndex - 1]} index={activeIndex - 1} />
										)}

										<span className="gallery-navigation-separator">&#9642;</span>

										{activeIndex === gallery.length - 1 ? (
											<GalleryNavigationButton direction={'Next'} toggleGallery={toggleGallery} item={gallery[0]} index={0} />
										) : (
											<GalleryNavigationButton direction={'Next'} toggleGallery={toggleGallery} item={gallery[activeIndex + 1]} index={activeIndex + 1} />
										)}
									</nav>
								</footer>
							</div>
						</div>
					</>
				) : (null)}
			</div>
		</>
	);
};

export const GalleryNavigationButton = (props) => {
	const { direction, toggleGallery, item, index } = props;

	return (
		<button className={`gallery-navigation-button gallery-navigation-${direction.toLowerCase()}`} type="button" onClick={(e) => toggleGallery(e, item, index)}>
			{direction}
		</button>
	);
};
