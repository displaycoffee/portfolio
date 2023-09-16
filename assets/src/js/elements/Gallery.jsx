/* React */
import { useState } from 'react';

export const Gallery = (props) => {
	const { gallery } = props;
	const galleryActiveClass = 'gallery-active';

	// Set item state
	let [activeItem, setActiveItem] = useState(false);

	// Handle toggle event for gallery click
	const toggleGallery = (e, item) => {
		e.preventDefault();
		const bodySelector = document.querySelector('body');
		
		// Change gallery state and set item
		if (activeItem) {
			activeItem = false;
			bodySelector.classList.remove(galleryActiveClass);
		} else {
			activeItem = item;
			bodySelector.classList.add(galleryActiveClass);
		}

		// Set gallery state
		setActiveItem(activeItem);
	}

	return (
		<>
			<div className="gallery">
				<div className="gallery-items row row-wrap row-auto row-10">
					{gallery.map((item) => (
						<div className="gallery-item column" key={item.id}>
							<div className="gallery-image pointer" onClick={(e) => toggleGallery(e, item)}>
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
						<div className="gallery-overlay" onClick={(e) => toggleGallery(e, activeItem)}></div>

						<div className="gallery-info pixel-border">
							<div className="gallery-info-inner">
								<header className="gallery-info-header flex-nowrap flex-align-items-center">
									<h3 className="gallery-info-title">{activeItem.name}</h3>

									<button className="gallery-info-close" type="button" onClick={(e) => toggleGallery(e, activeItem)}>x</button>
								</header>

								<div className="gallery-info-content row row-wrap row-auto row-20">
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
						</div>
					</>
				) : (null)}
			</div>
		</>
	);
};
