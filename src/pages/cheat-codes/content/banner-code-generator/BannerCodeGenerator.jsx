/* React */
import React, { useState } from 'react';

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
				<BannerCodeGeneratorPreview banners={banners} />
			</Preview>
		</>
	);
};

const banners = [
	{
		label: 'Tab 01',
		content: `<p><strong>This Is Tab 01 Content!</strong></p>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque nesciunt repudiandae vitae qui eveniet accusamus error possimus impedit voluptate quas, minus, tempore voluptatem a, architecto ipsum atque, ipsam quidem animi.</p>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur fuga accusamus accusantium, unde voluptatum, ex dolore aspernatur est ullam minima facilis! In commodi unde laudantium voluptatibus distinctio repudiandae saepe inventore!</p>`,
	},
	{
		label: 'Tab 02',
		content: `<p><strong>This Is Tab 02 Content!</strong></p>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque nesciunt repudiandae vitae qui eveniet accusamus error possimus impedit voluptate quas, minus, tempore voluptatem a, architecto ipsum atque, ipsam quidem animi.</p>`,
	},
	{
		label: 'Tab 03',
		content: `<p><strong>This Is Tab 03 Content!</strong></p>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque nesciunt repudiandae vitae qui eveniet accusamus error possimus impedit voluptate quas, minus, tempore voluptatem a, architecto ipsum atque, ipsam quidem animi.</p>`,
	},
	{
		label: 'Tab 04',
		content: `<p><strong>This Is Tab 04 Content!</strong></p>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque nesciunt repudiandae vitae qui eveniet accusamus error possimus impedit voluptate quas, minus, tempore voluptatem a, architecto ipsum atque, ipsam quidem animi.</p>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur fuga accusamus accusantium, unde voluptatum, ex dolore aspernatur est ullam minima facilis! In commodi unde laudantium voluptatibus distinctio repudiandae saepe inventore!</p>`,
	},
	{
		label: 'Tab 05',
		content: `<p><strong>This Is Tab 05 Content!</strong></p>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque nesciunt repudiandae vitae qui eveniet accusamus error possimus impedit voluptate quas, minus, tempore voluptatem a, architecto ipsum atque, ipsam quidem animi.</p>`,
	},
];

export const BannerCodeGeneratorPreview = (props) => {
	let { banners } = props;
	// defaultTab = typeof defaultTab == 'undefined' ? 0 : defaultTab - 1;
	// let [activeTab, setActiveTab] = useState(defaultTab);
	// const activeClass = 'dc-hello-content-active';

	return (
		<>
			<div className="dc-banner-code-generator displaycoffee">
				<section className="dc-banner-code-generator-section">
					<h4>88 x 31</h4>

					<div className="dc-banner-code-generator-banners">
						<button className="dc-banner-code-generator-buttons" type="button">
							<img
								src="//display.coffee/assets/images/cheat-codes/banner-code-generator-coffee-88x31.jpg"
								alt="Coffee Banner - 88x31"
								title="Coffee Banner - 88x31"
							/>
						</button>
						<button className="dc-banner-code-generator-buttons" type="button">
							<img
								src="//display.coffee/assets/images/cheat-codes/banner-code-generator-dog-88x31.jpg"
								alt="Dog Banner - 88x31"
								title="Dog Banner - 88x31"
							/>
						</button>
						<button className="dc-banner-code-generator-buttons" type="button">
							<img
								src="//display.coffee/assets/images/cheat-codes/banner-code-generator-lightning-88x31.jpg"
								alt="Lightning Banner - 88x31"
								title="Lightning Banner - 88x31"
							/>
						</button>
					</div>
				</section>

				<section className="dc-banner-code-generator-section">
					<h4>100 x 50</h4>

					<div className="dc-banner-code-generator-banners">
						<button className="dc-banner-code-generator-buttons" type="button">
							<img
								src="//display.coffee/assets/images/cheat-codes/banner-code-generator-coffee-100x50.jpg"
								alt="Coffee Banner - 100 x 50"
								title="Coffee Banner - 100 x 50"
							/>
						</button>
						<button className="dc-banner-code-generator-buttons" type="button">
							<img
								src="//display.coffee/assets/images/cheat-codes/banner-code-generator-dog-100x50.jpg"
								alt="Dog Banner - 100 x 50"
								title="Dog Banner - 100 x 50"
							/>
						</button>
						<button className="dc-banner-code-generator-buttons" type="button">
							<img
								src="//display.coffee/assets/images/cheat-codes/banner-code-generator-lightning-100x50.jpg"
								alt="Lightning Banner - 100 x 50"
								title="Lightning Banner - 100 x 50"
							/>
						</button>
					</div>
				</section>

				<div className="dc-banner-code-generator-code">
					<pre>
						<code></code>
					</pre>
				</div>
			</div>

			<div className="dc-banner-code-generator displaycoffee">
				<section className="dc-banner-code-generator-section">
					<h4>88 x 31</h4>

					<div className="dc-banner-code-generator-banners">
						<button className="dc-banner-code-generator-buttons" type="button">
							<img
								src="//display.coffee/assets/images/cheat-codes/banner-code-generator-coffee-88x31.jpg"
								alt="Coffee Banner - 88x31 - alt"
								title="Coffee Banner - 88x31 - title"
							/>
						</button>
						<button className="dc-banner-code-generator-buttons" type="button">
							<img
								src="//display.coffee/assets/images/cheat-codes/banner-code-generator-dog-88x31.jpg"
								alt="Dog Banner - 88x31 - alt"
								title="Dog Banner - 88x31 - title"
							/>
						</button>
						<button className="dc-banner-code-generator-buttons" type="button">
							<img
								src="//display.coffee/assets/images/cheat-codes/banner-code-generator-lightning-88x31.jpg"
								alt="Lightning Banner - 88x31 - alt"
								title="Lightning Banner - 88x31 - title"
							/>
						</button>
					</div>
				</section>

				<section className="dc-banner-code-generator-section">
					<h4>100 x 50</h4>

					<div className="dc-banner-code-generator-banners">
						<button className="dc-banner-code-generator-buttons" type="button">
							<img
								src="//display.coffee/assets/images/cheat-codes/banner-code-generator-coffee-100x50.jpg"
								alt="Coffee Banner - 100 x 50 - alt"
								title="Coffee Banner - 100 x 50 - title"
							/>
						</button>
						<button className="dc-banner-code-generator-buttons" type="button">
							<img
								src="//display.coffee/assets/images/cheat-codes/banner-code-generator-dog-100x50.jpg"
								alt="Dog Banner - 100 x 50 - alt"
								title="Dog Banner - 100 x 50 - title"
							/>
						</button>
						<button className="dc-banner-code-generator-buttons" type="button">
							<img
								src="//display.coffee/assets/images/cheat-codes/banner-code-generator-lightning-100x50.jpg"
								alt="Lightning Banner - 100 x 50 - alt"
								title="Lightning Banner - 100 x 50 - title"
							/>
						</button>
					</div>
				</section>

				<div className="dc-banner-code-generator-code">
					<pre>
						<code></code>
					</pre>
				</div>
			</div>
		</>
	);
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
