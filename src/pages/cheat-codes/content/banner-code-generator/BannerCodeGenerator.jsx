/* React */
import React, { useState, useEffect } from 'react';

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
					For multiple sets of tabs, duplicate the <CodeInline>dc-banner-code-generator-tabs</CodeInline> element and anything inside of it.
					Ideally you should have the same number of button elements (<CodeInline>dc-banner-code-generator-button</CodeInline>) and content
					elements (<CodeInline>dc-banner-code-generator-block</CodeInline>).
				</p>
				<CodeBlock header={'HTML'}>{cb01}</CodeBlock>
				<p>
					The button and content selectors can be changed. If using JavaScript, you will need to pass in options to update these selectors.
				</p>

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
					You will then need to initialize tabs, which can be done with the below function. This function can also be initialized in a
					source file, but in either case, this initialization must come <strong>after</strong> adding the above JavaScript.
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
					Out-of-the-box, the component accepts <CodeInline>tabs</CodeInline> prop which is an array of tabs. Each item in the array is an
					object and should contain <CodeInline>label</CodeInline> and <CodeInline>content</CodeInline> or{' '}
					<CodeInline>component</CodeInline> properties. <CodeInline>defaultTab</CodeInline> is optional.
				</p>
				<CodeBlock header={'Tabs array'}>{cb08}</CodeBlock>
				<p>
					In the component, I do use <CodeInline>dangerouslySetInnerHTML</CodeInline> to display <CodeInline>tab.content</CodeInline>. You
					can remove this and insert <CodeInline>tab.content</CodeInline> inside content block instead. It all depends how much you trust
					your content.
				</p>
				<CodeBlock header={'Content block'}>{cb09}</CodeBlock>

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
				<CodeBlock header={'Style block'}>{cb10}</CodeBlock>
				<CodeBlock header={'Stylesheet'}>{cb11}</CodeBlock>
				<CodeBlock header={'CSS import'}>{cb12}</CodeBlock>
				<CodeBlock header={'React import'}>{cb13}</CodeBlock>

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
				<CodeBlock header={'Sass import'}>{cb14}</CodeBlock>
				<CodeBlock header={'React import'}>{cb15}</CodeBlock>
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
					<pre>
						<code>{output}</code>
					</pre>
				</div>
			</div>
		</>
	) : null;
};

/* Code blocks */
const cb01 = `<div class="dc-banner-code-generator-tabs displaycoffee">
	<button class="dc-banner-code-generator-button">Tab 01</button>
	<button class="dc-banner-code-generator-button">Tab 02</button>
	<button class="dc-banner-code-generator-button">Tab 03</button>
	<div class="dc-banner-code-generator-block">Tab 01 Content</div>
	<div class="dc-banner-code-generator-block">Tab 02 Content</div>
	<div class="dc-banner-code-generator-block">Tab 03 Content</div>
</div>

<div class="dc-banner-code-generator-tabs displaycoffee">
	<button class="dc-banner-code-generator-button">Tab 01</button>
	<button class="dc-banner-code-generator-button">Tab 02</button>
	<div class="dc-banner-code-generator-block">Tab 01 Content</div>
	<div class="dc-banner-code-generator-block">Tab 02 Content</div>
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
		default: 1, // default visible tab number
		container: '.dc-banner-code-generator-tabs',
		button: '.dc-banner-code-generator-button',
		content: '.dc-banner-code-generator-block',
	});
</script>`;
const cb06 = `import { BannerCodeGenerator } from './BannerCodeGenerator';`;
const cb07 = `<BannerCodeGenerator tabs={tabs} defaultTab={1} />`;
const cb08 = `const tabs = [
	{
		label: 'Tab 01',
		content: 'Tab 01 Content',
	},
	{
		label: 'Tab 02',
		content: Tab02Component,
	},
	{
		label: 'Tab 03',
		content: 'Tab 03 Content',
	},
];`;
const cb09 = `<div className={contentClass}>{tab.content}</div>`;
const cb10 = `<style>
	/* Copied styles go here */
</style>`;
const cb11 = `<!-- Copy styles and paste into stylesheet -->
<link rel="stylesheet" href="banner-code-generator.css" />`;
const cb12 = `@import url('banner-code-generator.css');`;
const cb13 = `import 'banner-code-generator.css';`;
const cb14 = `@import 'banner-code-generator';`;
const cb15 = `import 'banner-code-generator.scss';`;
