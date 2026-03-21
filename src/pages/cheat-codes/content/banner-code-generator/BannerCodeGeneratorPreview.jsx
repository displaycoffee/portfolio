/* React */
import { useState, useEffect, useRef } from 'react';

/* Local styles */
import './styles/banner-code-generator-preview.scss';

export const BannerCodeGenerator = (props) => {
	let { banners, defaultBanner, site } = props;
	site = typeof site == 'undefined' ? '/' : site;
	const activeClass = 'dc-banner-code-generator-active';
	const hasBanners = banners && banners.length !== 0 ? true : false;

	// Since array of banners is nested, create and array that combines values
	let allBanners = [];
	if (hasBanners) {
		banners.forEach((banner, index) => {
			if (banner.values && banner.values.length !== 0) {
				banner.values.forEach((value) => {
					// Add a group for checking section later, then push to allBanners
					value.group = index;
					allBanners.push(value);
				});
			}
		});
	}

	// Then set default banner
	const defaultIndex = typeof defaultBanner == 'undefined' ? 0 : defaultBanner - 1;
	defaultBanner = allBanners[defaultIndex] ? defaultIndex : 0;
	let [activeBanner, setActiveBanner] = useState(defaultBanner);

	// Create code output
	const createOutput = (image) => {
		// Set image attributes if available
		const setImageAttr = (attribute) => {
			const value = image[attribute] ? image[attribute] : false;
			return value ? ` ${attribute}="${value}"` : ``;
		};

		// Return code output
		return (
			<>
				{`\u003Ca href="${site}"\u003E`}
				<br />
				{`\u0009\u003Cimg${setImageAttr('src')}${setImageAttr('alt')}${setImageAttr('title')} /\u003E`}
				<br />
				{`\u003C/a\u003E`}
			</>
		);
	};

	// Set code output
	let [output, setOutput] = useState(createOutput(allBanners[activeBanner]));

	// Whenever active banner changes, update output
	useEffect(() => {
		output = createOutput(allBanners[activeBanner]);
		setOutput(output);
	}, [activeBanner]);

	// Set code block ref
	const codeRef = useRef(false);

	// Function to select code inside code block
	const selectCode = () => {
		const codeBlock = codeRef?.current;
		if (codeBlock) {
			const range = document.createRange();
			range.selectNodeContents(codeBlock);
			const selection = window.getSelection();
			selection.removeAllRanges();
			selection.addRange(range);
		}
	};

	return hasBanners ? (
		<>
			<div className="dc-banner-code-generator displaycoffee">
				{banners.map((banner, index) => {
					return banner.values && banner.values.length !== 0 ? (
						<section className="dc-banner-code-generator-section" key={index}>
							<h5>{banner.header}</h5>

							<div className="dc-banner-code-generator-banners">
								{allBanners.map((value, valueIndex) => {
									const imageAlt = value?.alt ? value.alt : '';

									return value.group == index ? (
										<button
											className={`dc-banner-code-generator-button${valueIndex == activeBanner ? ` ${activeClass}` : ``}`}
											type="button"
											aria-label={imageAlt ? `${imageAlt} - button` : ``}
											onClick={() => {
												// Update banner on click
												activeBanner = valueIndex;
												setActiveBanner(activeBanner);
											}}
											key={valueIndex}
										>
											<img
												src={value?.src ? value.src : ''}
												alt={imageAlt}
												title={imageAlt}
												onLoad={(e) => {
													e.target.setAttribute('width', e.target.naturalWidth);
													e.target.setAttribute('height', e.target.naturalHeight);
												}}
											/>
										</button>
									) : null;
								})}
							</div>
						</section>
					) : null;
				})}

				<div className="dc-banner-code-generator-code">
					<button
						className="dc-banner-code-generator-select-code"
						type="button"
						arial-label="Select code button"
						onClick={() => selectCode()}
					>
						Select code
					</button>
					<pre>
						<code ref={codeRef}>{output}</code>
					</pre>
				</div>
			</div>
		</>
	) : null;
};
