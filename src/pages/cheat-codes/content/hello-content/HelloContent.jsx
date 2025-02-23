/* React */
import React, { useState } from 'react';

/* Local components */
import { CheatCodesSection } from '../../CheatCodes';
import { CodeBlock, CodeInline, Preview } from '../../../../components/blocks/Blocks';

export const HelloContent = () => {
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
					<a href="//github.com/displaycoffee/cheat-codes/tree/production/hello-content" target="_blank" rel="noreferrer">
						View @ displaycoffee
					</a>
				</p>

				<h5 className="h-remove-shadow">HTML</h5>
				<p>If using HTML and not React, copy the template HTML and place it on the page.</p>
				<p>
					<a
						href="//github.com/displaycoffee/cheat-codes/blob/production/hello-content/hello-content.html"
						target="_blank"
						rel="noreferrer"
					>
						hello-content/hello-content.html
					</a>
				</p>
				<p>
					For multiple sets of tabs, duplicate the <CodeInline>dc-hello-content-tabs</CodeInline> element and anything inside of it. Ideally
					you should have the same number of button elements (<CodeInline>dc-hello-content-button</CodeInline>) and content elements (
					<CodeInline>dc-hello-content-block</CodeInline>).
				</p>
				<CodeBlock header={'HTML'}>{cb01}</CodeBlock>
				<p>
					The button and content selectors can be changed. If using JavaScript, you will need to pass in options to update these selectors.
				</p>

				<h5 className="h-remove-shadow">JavaScript</h5>
				<p>If using JavaScript and not React, copy the script from the link below and add according to your preferred method.</p>
				<p>
					<a href="//github.com/displaycoffee/cheat-codes/blob/production/hello-content/hello-content.js" target="_blank" rel="noreferrer">
						hello-content/hello-content.js
					</a>
				</p>
				<CodeBlock header={'Script block'}>{cb02}</CodeBlock>
				<CodeBlock header={'Script src'}>{cb03}</CodeBlock>
				<p>
					You will then need to initialize tabs, which can be done with the below function. This function can also be initialized in a
					JavaScript file, but in either case, this initialization must come <strong>after</strong> adding the above script block.
				</p>
				<CodeBlock header={'JavaScript'}>{cb04}</CodeBlock>
				<p>
					If you changed selectors in the HTML, you should pass in options to update those selectors. <strong>For example:</strong>
				</p>
				<CodeBlock header={'JavaScript'}>{cb05}</CodeBlock>

				<h5 className="h-remove-shadow">React</h5>
				<p>If using React and not JavaScript, copy the JSX component from the link below and add according to your preferred method.</p>
				<p>
					<a href="//github.com/displaycoffee/cheat-codes/blob/production/hello-content/HelloContent.jsx" target="_blank" rel="noreferrer">
						hello-content/HelloContent.jsx
					</a>
				</p>
				<CodeBlock header={'React import'}>{cb06}</CodeBlock>
				<CodeBlock header={'React component'}>{cb07}</CodeBlock>
				<p>
					The component accepts a <CodeInline>tabs</CodeInline> prop which is an array of tabs. Each item in the array is an object and
					should contain <CodeInline>label</CodeInline> and <CodeInline>content</CodeInline> or <CodeInline>component</CodeInline>{' '}
					properties. <CodeInline>defaultTab</CodeInline> is optional.
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
					<a href="//github.com/displaycoffee/cheat-codes/blob/production/hello-content/hello-content.css" target="_blank" rel="noreferrer">
						hello-content/hello-content.css
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
						href="//github.com/displaycoffee/cheat-codes/blob/production/hello-content/hello-content.scss"
						target="_blank"
						rel="noreferrer"
					>
						hello-content/hello-content.scss
					</a>
				</p>
				<CodeBlock header={'Sass import'}>{cb14}</CodeBlock>
				<CodeBlock header={'React import'}>{cb15}</CodeBlock>
			</CheatCodesSection>

			<Preview className="preview-cheat-codes preview-hello-content">
				<HelloContentPreview tabs={tabs} defaultTab={1} />
			</Preview>
		</>
	);
};

const tabs = [
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

export const HelloContentPreview = (props) => {
	let { tabs, defaultTab } = props;
	const activeClass = 'dc-hello-content-active';
	const hasTabs = tabs && tabs.length !== 0 ? true : false;

	// Set default tab
	const defaultIndex = typeof defaultTab == 'undefined' ? 0 : defaultTab - 1;
	defaultTab = tabs[defaultIndex] ? defaultIndex : 0;
	let [activeTab, setActiveTab] = useState(defaultTab);

	return hasTabs ? (
		<div className="dc-hello-content-tabs displaycoffee">
			<div className="dc-hello-content-tabs-buttons">
				<ul className="dc-hello-content-tabs-list unstyled">
					{tabs.map((tab, index) => (
						<li key={index}>
							<button
								className={`dc-hello-content-button${index == activeTab ? ` ${activeClass}` : ``}`}
								type="button"
								onClick={() => {
									// Update tab on click
									activeTab = index;
									setActiveTab(activeTab);
								}}
							>
								{tab.label}
							</button>
						</li>
					))}
				</ul>
			</div>

			<div className="dc-hello-content-tabs-content">
				{tabs.map((tab, index) => {
					const contentClass = `dc-hello-content-block${index == activeTab ? ` ${activeClass}` : ``}`;
					return (
						<React.Fragment key={index}>
							{tab.component ? (
								<div className={contentClass}>
									<tab.component />
								</div>
							) : (
								<div className={contentClass} dangerouslySetInnerHTML={{ __html: tab.content }}></div>
							)}
						</React.Fragment>
					);
				})}
			</div>
		</div>
	) : null;
};

/* Code blocks */
const cb01 = `<div class="dc-hello-content-tabs displaycoffee">
	<!-- Tab elements -->
</div>
<div class="dc-hello-content-tabs displaycoffee">
	<!-- Tab elements -->
</div>`;
const cb02 = `<script type="text/javascript">
	// Copied JavaScript goes here
</script>`;
const cb03 = `<!-- Copy JavaScript and paste into script source -->
<script type="text/javascript" src="hello-content.js"></script>`;
const cb04 = `<script type="text/javascript">
	dcHelloContent.init();
</script>`;
const cb05 = `<script type="text/javascript">
	dcHelloContent.init({
		default: 1, // default visible tab number
		container: '.dc-hello-content-tabs',
		button: '.dc-hello-content-button',
		content: '.dc-hello-content-block',
	});
</script>`;
const cb06 = `import { HelloContent } from './HelloContent';`;
const cb07 = `<HelloContent tabs={tabs} defaultTab={1} />`;
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
<link rel="stylesheet" href="hello-content.css" />`;
const cb12 = `@import url('hello-content.css');`;
const cb13 = `import 'hello-content.css';`;
const cb14 = `@import 'hello-content';`;
const cb15 = `import 'hello-content.scss';`;
