/* React */
import { useState } from 'react';

/* Local styles */
import './styles/slideshow.scss';

export const Slideshow = (props) => {
	const { slides, limit, swipe, navigation, pagination, lazy } = props;

	// Limit slides if prop is set
	let slidesArray = slides;
	if (limit) {
		slidesArray = slides.slice(0, limit);
	}

	// Get count of slides after limit
	const count = slidesArray && slidesArray.length !== 0 ? slidesArray.length : 0; // get count of slides

	// Create state for setting slideshow variables and conditions
	let [active, setActive] = useState(true);
	let [direction, setDirection] = useState(false);
	let [baseIndex, setBaseIndex] = useState(0);

	// Slideshow settings to enable or disable features
	const hasSwipe = typeof swipe != 'undefined' ? swipe : true;
	const hasNavigation = typeof navigation != 'undefined' ? navigation : true;
	const hasPagination = typeof pagination != 'undefined' ? pagination : true;

	// Slideshow config containing functions for setting slides
	const slideshow = {
		enable: count > 1 ? true : false,
		prevent: (e) => {
			e.stopPropagation();
			e.preventDefault();
		},
		decrement: (position) => {
			// Reset position or decrease
			return position <= 0 ? count - 1 : position - 1;
		},
		increment: (position) => {
			// Reset position or add
			return position >= count - 1 ? 0 : position + 1;
		},
		slide: (slideDirection) => {
			// Reset base index
			setBaseIndex(baseIndex);

			// Reset active state and set slide direction
			setActive(false);
			setDirection(slideDirection);

			// Then reset active state for transitions
			setTimeout(() => {
				setActive(true);
			}, 800);
		},
		swipe: {
			enable: hasSwipe,
			start: 0,
			end: 0,
			set: (e) => {
				slideshow.prevent(e);

				setTimeout(() => {
					// Slide after touches (uses navigation function)
					const slideDirection = slideshow.swipe.end >= slideshow.swipe.start ? 'previous' : 'next';
					slideshow.navigation.set(e, slideDirection);
				});
			},
		},
		navigation: {
			enable: hasNavigation,
			set: (e, slideDirection) => {
				slideshow.prevent(e);

				// Check if previous direction
				const isPrevious = slideDirection == 'previous' ? true : false;

				// Decrement or increment slides depending on direction
				baseIndex = isPrevious ? slideshow.decrement(baseIndex) : slideshow.increment(baseIndex);

				// Then slide
				slideshow.slide(slideDirection);
			},
		},
		pagination: {
			enable: hasPagination,
			set: (e, index, isActive) => {
				slideshow.prevent(e);

				if (!isActive) {
					// Get direction by comparing indexes
					const slideDirection = baseIndex < index ? 'next' : 'previous';

					// Set slides to position using index
					baseIndex = index;

					// Then slide
					slideshow.slide(slideDirection, index);
				} else {
					return false;
				}
			},
		},
	};

	// Get current slide
	const currentSlide = slidesArray[baseIndex];

	// create base image attributes
	let baseIndexAttributes = {
		src: currentSlide.image ? currentSlide.image : currentSlide.thumb,
	};

	// Add lazy if enabled
	if (lazy) {
		baseIndexAttributes.loading = 'lazy';
	}

	return slideshow.enable ? (
		<div className={`slideshow${direction ? ' slideshow-' + direction : ''}${active ? ' active' : ''}`}>
			<div className="slideshow-slide">
				<div className="slideshow-content">
					<div className="slideshow-image">
						<div className="image-wrapper">
							<img {...baseIndexAttributes} alt={currentSlide.name} title={currentSlide.name} />
						</div>
					</div>

					<div className="slideshow-details">
						{currentSlide.date && (
							<p className="slideshow-date">
								<strong>Date</strong> - {currentSlide.date}
							</p>
						)}

						{currentSlide.url && (
							<p className="slideshow-visit">
								<strong>Visit</strong> -{' '}
								<a href={currentSlide.url} target="_blank" rel="noreferrer">
									{currentSlide.url.replace('//', '')}
								</a>
							</p>
						)}

						{currentSlide.technologies && (
							<p className="slideshow-technologies">
								<strong>Technologies</strong> - {currentSlide.technologies}
							</p>
						)}

						{currentSlide.mediums && (
							<p className="slideshow-technologies">
								<strong>Mediums</strong> - {currentSlide.mediums}
							</p>
						)}

						{currentSlide.content && <p className="slideshow-content" dangerouslySetInnerHTML={{ __html: currentSlide.content }}></p>}
					</div>
				</div>
			</div>

			{slideshow.swipe.enable && (
				<div
					className="slideshow-swipe"
					onTouchStart={(e) => {
						slideshow.swipe.start = e.changedTouches[0].screenX;
					}}
					onTouchEnd={(e) => {
						slideshow.swipe.end = e.changedTouches[0].screenX;
						if (Math.ceil(slideshow.swipe.end) != Math.ceil(slideshow.swipe.start)) {
							slideshow.swipe.set(e);
						}
					}}
				></div>
			)}

			{slideshow.navigation.enable && (
				<nav className="slideshow-navigation">
					<div className="row row-nowrap row-auto">
						<div className="column">
							<button
								className="slideshow-navigation-button slideshow-navigation-previous pointer unstyled"
								type="button"
								alt="Previous"
								title="Previous"
								onClick={(e) => slideshow.navigation.set(e, 'previous')}
							>
								&lt;
							</button>
						</div>

						<div className="column">
							<button
								className="slideshow-navigation-button slideshow-navigation-next pointer unstyled"
								type="button"
								alt="Next"
								title="Next"
								onClick={(e) => slideshow.navigation.set(e, 'next')}
							>
								&gt;
							</button>
						</div>
					</div>
				</nav>
			)}

			{slideshow.pagination.enable && (
				<div className="slideshow-pagination">
					<div className="row row-nowrap row-auto">
						{slidesArray.map((image, index) => {
							const isActive = index == baseIndex;

							return (
								<div className="column" key={image.id}>
									<button
										className={`slideshow-pagination-button pointer${isActive ? ' active' : ''}`}
										type="button"
										onClick={(e) => {
											slideshow.pagination.set(e, index, isActive);
										}}
									>
										x
									</button>
								</div>
							);
						})}
					</div>
				</div>
			)}
		</div>
	) : null;
};
