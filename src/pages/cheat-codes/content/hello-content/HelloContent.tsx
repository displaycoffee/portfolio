/* Scripts */
import { codeBlocks } from './scripts/hello-content-code-blocks';

/* Components */
import { HelloContent as HelloContentPreview } from './HelloContentPreview';
import { CheatCodesSection } from '../../CheatCodes';
import { CodeBlock, CodeInline, Preview } from '../../../../components/blocks/Blocks';
import { LinkExternal, List, ListItem } from '../../../../components/blocks-2/Blocks';

export const HelloContent = () => {
	return (
		<>
			<CheatCodesSection header={'Information'}>
				<List variant="dl">
					<ListItem term="Skill level">Medium</ListItem>
					<ListItem term="Languages">HTML / JavaScript or React, CSS or Sass</ListItem>
					<ListItem term="Responsive">Yes</ListItem>
				</List>
			</CheatCodesSection>

			<CheatCodesSection header={'Usage'}>
				<h4 className="h-remove-shadow">Source / repo</h4>
				<p>
					<LinkExternal href="//github.com/displaycoffee/cheat-codes/tree/production/hello-content">View @ displaycoffee</LinkExternal>
				</p>

				<h4 className="h-remove-shadow">HTML</h4>
				<p>If using HTML and not React, copy the template HTML and place it on the page.</p>
				<p>
					<LinkExternal href="//github.com/displaycoffee/cheat-codes/blob/production/hello-content/hello-content.html">
						hello-content/hello-content.html
					</LinkExternal>
				</p>
				<p>
					For multiple sets of tabs, duplicate the <CodeInline>dc-hello-content-tabs</CodeInline> element and anything inside of it. Ideally
					you should have the same number of button elements (<CodeInline>dc-hello-content-button</CodeInline>) and content elements (
					<CodeInline>dc-hello-content-block</CodeInline>).
				</p>
				<CodeBlock header={'HTML'}>{codeBlocks[0]}</CodeBlock>
				<p>
					The button and content selectors can be changed. If using JavaScript, you will need to pass in options to update these selectors.
				</p>

				<h4 className="h-remove-shadow">JavaScript</h4>
				<p>If using JavaScript and not React, copy the script from the link below and add according to your preferred method.</p>
				<p>
					<LinkExternal href="//github.com/displaycoffee/cheat-codes/blob/production/hello-content/hello-content.js">
						hello-content/hello-content.js
					</LinkExternal>
				</p>
				<CodeBlock header={'Script block'}>{codeBlocks[1]}</CodeBlock>
				<CodeBlock header={'Script src'}>{codeBlocks[2]}</CodeBlock>
				<p>
					You will then need to initialize tabs, which can be done with the below function. This function can also be initialized in a
					JavaScript file, but in either case, this initialization must come <strong>after</strong> adding the above script block.
				</p>
				<CodeBlock header={'JavaScript'}>{codeBlocks[3]}</CodeBlock>
				<p>
					If you changed selectors in the HTML, you should pass in options to update those selectors. <strong>For example:</strong>
				</p>
				<CodeBlock header={'JavaScript'}>{codeBlocks[4]}</CodeBlock>

				<h4 className="h-remove-shadow">React</h4>
				<p>If using React and not JavaScript, copy the JSX component from the link below and add according to your preferred method.</p>
				<p>
					<LinkExternal href="//github.com/displaycoffee/cheat-codes/blob/production/hello-content/HelloContent.jsx">
						hello-content/HelloContent.jsx
					</LinkExternal>
				</p>
				<CodeBlock header={'React import'}>{codeBlocks[5]}</CodeBlock>
				<CodeBlock header={'React component'}>{codeBlocks[6]}</CodeBlock>
				<p>
					The component accepts a <CodeInline>tabs</CodeInline> prop which is an array of tabs. Each item in the array is an object and
					should contain <CodeInline>label</CodeInline> and <CodeInline>content</CodeInline> or <CodeInline>component</CodeInline>{' '}
					properties. <CodeInline>defaultTab</CodeInline> is optional.
				</p>
				<CodeBlock header={'Tabs array'}>{codeBlocks[7]}</CodeBlock>
				<p>
					In the component, I do use <CodeInline>dangerouslySetInnerHTML</CodeInline> to display <CodeInline>tab.content</CodeInline>. You
					can remove this and insert <CodeInline>tab.content</CodeInline> inside content block instead. It all depends how much you trust
					your content.
				</p>
				<CodeBlock header={'Content block'}>{codeBlocks[8]}</CodeBlock>

				<h4 className="h-remove-shadow">CSS</h4>
				<p>If using CSS and not Sass, copy the styles from the link below and add according to your preferred method.</p>
				<p>
					<LinkExternal href="//github.com/displaycoffee/cheat-codes/blob/production/hello-content/hello-content.css">
						hello-content/hello-content.css
					</LinkExternal>
				</p>
				<CodeBlock header={'Style block'}>{codeBlocks[9]}</CodeBlock>
				<CodeBlock header={'Stylesheet'}>{codeBlocks[10]}</CodeBlock>
				<CodeBlock header={'CSS import'}>{codeBlocks[11]}</CodeBlock>
				<CodeBlock header={'React import'}>{codeBlocks[12]}</CodeBlock>

				<h4 className="h-remove-shadow">Sass</h4>
				<p>If using Sass and not CSS, copy the styles from the link below and add according to your preferred method.</p>
				<p>
					<LinkExternal href="//github.com/displaycoffee/cheat-codes/blob/production/hello-content/hello-content.scss">
						hello-content/hello-content.scss
					</LinkExternal>
				</p>
				<CodeBlock header={'Sass import'}>{codeBlocks[13]}</CodeBlock>
				<CodeBlock header={'React import'}>{codeBlocks[14]}</CodeBlock>
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
