/* React */
import React from 'react';
import { useRef, useState } from 'react';

export const Gallery = (props) => {
	const { gallery } = props;

	// Set item ref and state
	const itemRef = useRef(null);
	const infoRef = useRef(null);
	let [activeItem, setActiveItem] = useState(false);
	let [galleryHeight, setGalleryHeight] = useState(false);

	// Handle toggle event for gallery click
	const handleToggle = (e, item) => {
		e.preventDefault();
		if (activeItem && (activeItem.id == item.id)) {
			activeItem = false;
			galleryHeight = false;
		} else {
			activeItem = item;
			setTimeout(() => {
				galleryHeight = infoRef.current.offsetHeight + 10;
				setGalleryHeight(galleryHeight);
			}, 500);
		}
		setActiveItem(activeItem);
	}

	// If clicked outside gallery item, reset gallery
	document.onclick = (e) => {
		const element = e.target;
		if (activeItem && itemRef.current && !itemRef.current.contains(element)) {
			activeItem = false;
			setActiveItem(activeItem);
			galleryHeight = false;
			setGalleryHeight(galleryHeight);
		}
	}

	return (
		<div className="gallery row row-wrap row-auto row-10" style={{ minHeight: galleryHeight }}>
			{gallery.map((item) => (
				<div className="gallery-item column" key={item.id} ref={itemRef} onClick={(e) => e.stopPropagation()}>
					<div className="gallery-inner">
						<div className="gallery-image pointer" onClick={(e) => handleToggle(e, item)}>
							{item.border ? (
								<div className="pixel-border">
									<img src={item.thumb} alt={item.name} title={item.name} loading="lazy" />
								</div>
							) : (
								<img src={item.thumb} alt={item.name} title={item.name} loading="lazy" />
							)}
						</div>

						{activeItem && (activeItem.id == item.id) ? (
							<div className="gallery-info" ref={infoRef}>
								<div className="gallery-info-inner pixel-border">
									{activeItem.image && (
										<div className="gallery-info-image">
											<img src={activeItem.image} alt={activeItem.name} title={activeItem.name} loading="lazy" />
										</div>
									)}

									{(activeItem.name || activeItem.date) && (
										<div className="gallery-info-meta">
											{activeItem.name && (
												<strong>{activeItem.name}</strong>
											)}
											{activeItem.date ? ` on ${activeItem.date}` : ''}
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
						) : (null)}
					</div>
				</div>
			))}
		</div>
	);
};
