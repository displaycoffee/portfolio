/* React */
import React, { useState, useEffect, useRef } from 'react';

/* Local components */
import { CheatCodesSection } from '../../CheatCodes';
import { CodeBlock, CodeInline, Preview } from '../../../../components/blocks/Blocks';

export const BannerCodeGenerator = () => {
	return (
		<>
			<CheatCodesSection header={'Information'}>
				<dl className="definition-list">
					<div className="definition-list-item">
						<dt>Skill level</dt>
						<dd>Medium</dd>
					</div>
					<div className="definition-list-item">
						<dt>Languages</dt>
						<dd>HTML / JavaScript or React, CSS or Sass</dd>
					</div>
					<div className="definition-list-item">
						<dt>Responsive</dt>
						<dd>Yes</dd>
					</div>
				</dl>
			</CheatCodesSection>

			<CheatCodesSection header={'Usage'}>
				<h5 className="h-remove-shadow">Source / repo</h5>
				<p>
					<a href="//github.com/displaycoffee/cheat-codes/tree/production/banner-code-generator" target="_blank" rel="noreferrer">
						View @ displaycoffee
					</a>
				</p>

				<h5 className="h-remove-shadow">HTML</h5>
				<p>If using HTML and not React, copy the template HTML and place it on the page.</p>
				<p>
					<a
						href="//github.com/displaycoffee/cheat-codes/blob/production/banner-code-generator/banner-code-generator.html"
						target="_blank"
						rel="noreferrer"
					>
						banner-code-generator/banner-code-generator.html
					</a>
				</p>
				<p>
					For multiple generators, duplicate the <CodeInline>dc-banner-code-generator</CodeInline> element and anything inside of it. Change
					image banners as needed.
				</p>
				<CodeBlock header={'HTML'}>{cb01}</CodeBlock>
				<p>The selectors can be changed. If using JavaScript, you will need to pass in options to update these selectors.</p>

				<h5 className="h-remove-shadow">JavaScript</h5>
				<p>If using JavaScript and not React, copy the script from the link below and add according to your preferred method.</p>
				<p>
					<a
						href="//github.com/displaycoffee/cheat-codes/blob/production/banner-code-generator/banner-code-generator.js"
						target="_blank"
						rel="noreferrer"
					>
						banner-code-generator/banner-code-generator.js
					</a>
				</p>
				<CodeBlock header={'Script block'}>{cb02}</CodeBlock>
				<CodeBlock header={'Script src'}>{cb03}</CodeBlock>
				<p>
					You will then need to initialize any generators, which can be done with the below function. This function can also be initialized
					in a JavaScript file, but in either case, this initialization must come <strong>after</strong> adding the above script block.
				</p>
				<CodeBlock header={'JavaScript'}>{cb04}</CodeBlock>
				<p>
					If you changed selectors in the HTML, you should pass in options to update those selectors. <strong>For example:</strong>
				</p>
				<CodeBlock header={'JavaScript'}>{cb05}</CodeBlock>

				<h5 className="h-remove-shadow">React</h5>
				<p>If using React and not JavaScript, copy the JSX component from the link below and add according to your preferred method.</p>
				<p>
					<a
						href="//github.com/displaycoffee/cheat-codes/blob/production/banner-code-generator/BannerCodeGenerator.jsx"
						target="_blank"
						rel="noreferrer"
					>
						banner-code-generator/BannerCodeGenerator.jsx
					</a>
				</p>
				<CodeBlock header={'React import'}>{cb06}</CodeBlock>
				<CodeBlock header={'React component'}>{cb07}</CodeBlock>
				<p>
					The component accepts a <CodeInline>banners</CodeInline> prop which is an nested object array of banners. The initial level should
					contain a <CodeInline>header</CodeInline> property and then a <CodeInline>values</CodeInline> array containing details of the
					banners. Each banner can have <CodeInline>src</CodeInline>, <CodeInline>alt</CodeInline>, and <CodeInline>title</CodeInline>{' '}
					attributes. The <CodeInline>site</CodeInline> prop should contain your site url that you want to link people to.{' '}
					<CodeInline>defaultBanner</CodeInline> is optional.
				</p>
				<CodeBlock header={'Banners array'}>{cb08}</CodeBlock>

				<h5 className="h-remove-shadow">CSS</h5>
				<p>If using CSS and not Sass, copy the styles from the link below and add according to your preferred method.</p>
				<p>
					<a
						href="//github.com/displaycoffee/cheat-codes/blob/production/banner-code-generator/banner-code-generator.css"
						target="_blank"
						rel="noreferrer"
					>
						banner-code-generator/banner-code-generator.css
					</a>
				</p>
				<CodeBlock header={'Style block'}>{cb09}</CodeBlock>
				<CodeBlock header={'Stylesheet'}>{cb10}</CodeBlock>
				<CodeBlock header={'CSS import'}>{cb11}</CodeBlock>
				<CodeBlock header={'React import'}>{cb12}</CodeBlock>

				<h5 className="h-remove-shadow">Sass</h5>
				<p>If using Sass and not CSS, copy the styles from the link below and add according to your preferred method.</p>
				<p>
					<a
						href="//github.com/displaycoffee/cheat-codes/blob/production/banner-code-generator/banner-code-generator.scss"
						target="_blank"
						rel="noreferrer"
					>
						banner-code-generator/banner-code-generator.scss
					</a>
				</p>
				<CodeBlock header={'Sass import'}>{cb13}</CodeBlock>
				<CodeBlock header={'React import'}>{cb14}</CodeBlock>
			</CheatCodesSection>

			<Preview className="preview-cheat-codes preview-banner-code-generator">
				<BannerCodeGeneratorPreview banners={banners} site={'//display.coffee'} />
			</Preview>
		</>
	);
};

const banners = [
	{
		header: '88x31',
		values: [
			{
				alt: 'Coffee Banner - 88x31',
				title: 'Coffee Banner - 88x31',
				src: '//display.coffee/assets/images/cheat-codes/banner-code-generator-coffee-88x31.jpg',
			},
			{
				alt: 'Dog Banner - 88x31',
				title: 'Dog Banner - 88x31',
				src: '//display.coffee/assets/images/cheat-codes/banner-code-generator-dog-88x31.jpg',
			},
			{
				alt: 'Lightning Banner - 88x31',
				title: 'Lightning Banner - 88x31',
				src: '//display.coffee/assets/images/cheat-codes/banner-code-generator-lightning-88x31.jpg',
			},
		],
	},
	{
		header: '100x50',
		values: [
			{
				alt: 'Coffee Banner - 100x50',
				title: 'Coffee Banner - 100x50',
				src: '//display.coffee/assets/images/cheat-codes/banner-code-generator-coffee-100x50.jpg',
			},
			{
				alt: 'Dog Banner - 100x50',
				title: 'Dog Banner - 100x50',
				src: '//display.coffee/assets/images/cheat-codes/banner-code-generator-dog-100x50.jpg',
			},
			{
				alt: 'Lightning Banner - 100x50',
				title: 'Lightning Banner - 100x50',
				src: '//display.coffee/assets/images/cheat-codes/banner-code-generator-lightning-100x50.jpg',
			},
		],
	},
];

export const BannerCodeGeneratorPreview = (props) => {
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
									return value.group == index ? (
										<button
											className={`dc-banner-code-generator-button${valueIndex == activeBanner ? ` ${activeClass}` : ``}`}
											type="button"
											onClick={() => {
												// Update banner on click
												activeBanner = valueIndex;
												setActiveBanner(activeBanner);
											}}
											key={valueIndex}
										>
											<img
												src={value?.src ? value.src : ''}
												alt={value?.alt ? value.alt : ''}
												title={value?.title ? value.title : ''}
											/>
										</button>
									) : null;
								})}
							</div>
						</section>
					) : null;
				})}

				<div className="dc-banner-code-generator-code">
					<button className="dc-banner-code-generator-select-code" type="button" onClick={() => selectCode()}>
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

/* Code blocks */
const cb01 = `<div class="dc-banner-code-generator displaycoffee">
	<!-- Banner elements -->
</div>
<div class="dc-banner-code-generator displaycoffee">
	<!-- Banner elements -->
</div>`;
const cb02 = `<script type="text/javascript">
	// Copied JavaScript goes here
</script>`;
const cb03 = `<!-- Copy JavaScript and paste into script source -->
<script type="text/javascript" src="banner-code-generator.js"></script>`;
const cb04 = `<script type="text/javascript">
	dcBannerCodeGenerator.init();
</script>`;
const cb05 = `<script type="text/javascript">
	dcBannerCodeGenerator.init({
		default: 1, // default code to generate
		site: '/', // site url for code link
		container: '.dc-banner-code-generator',
		buttons: '.dc-banner-code-generator-button',
		code: '.dc-banner-code-generator-code code',
		select: '.dc-banner-code-generator-select-code',
	});
</script>`;
const cb06 = `import { BannerCodeGenerator } from './BannerCodeGenerator';`;
const cb07 = `<BannerCodeGenerator banners={banners} defaultBanner={1} site={site} />`;
const cb08 = `const banners = [
	{
		header: '88x31',
		values: [
			{
				alt: 'Banner - 88x31',
				title: 'Banner - 88x31',
				src: 'banner-88x31.jpg',
			},
		],
	},
	{
		header: '100x50',
		values: [
			{
				alt: 'Banner - 100x50',
				title: 'Banner - 100x50',
				src: 'banner-100x50.jpg',
			},
		],
	},
];`;
const cb09 = `<style>
	/* Copied styles go here */
</style>`;
const cb10 = `<!-- Copy styles and paste into stylesheet -->
<link rel="stylesheet" href="banner-code-generator.css" />`;
const cb11 = `@import url('banner-code-generator.css');`;
const cb12 = `import 'banner-code-generator.css';`;
const cb13 = `@import 'banner-code-generator';`;
const cb14 = `import 'banner-code-generator.scss';`;
