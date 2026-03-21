/* Local scripts */
import { codeBlocks } from './scripts/banner-code-generator-code-blocks';

/* Local components */
import { BannerCodeGenerator as BannerCodeGeneratorPreview } from './BannerCodeGeneratorPreview';
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
				<CodeBlock header={'HTML'}>{codeBlocks[0]}</CodeBlock>
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
				<CodeBlock header={'Script block'}>{codeBlocks[1]}</CodeBlock>
				<CodeBlock header={'Script src'}>{codeBlocks[2]}</CodeBlock>
				<p>
					You will then need to initialize any generators, which can be done with the below function. This function can also be initialized
					in a JavaScript file, but in either case, this initialization must come <strong>after</strong> adding the above script block.
				</p>
				<CodeBlock header={'JavaScript'}>{codeBlocks[3]}</CodeBlock>
				<p>
					If you changed selectors in the HTML, you should pass in options to update those selectors. <strong>For example:</strong>
				</p>
				<CodeBlock header={'JavaScript'}>{codeBlocks[4]}</CodeBlock>

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
				<CodeBlock header={'React import'}>{codeBlocks[5]}</CodeBlock>
				<CodeBlock header={'React component'}>{codeBlocks[6]}</CodeBlock>
				<p>
					The component accepts a <CodeInline>banners</CodeInline> prop which is an nested object array of banners. The initial level should
					contain a <CodeInline>header</CodeInline> property and then a <CodeInline>values</CodeInline> array containing details of the
					banners. Each banner can have <CodeInline>src</CodeInline> and <CodeInline>alt</CodeInline>
					attributes. The <CodeInline>site</CodeInline> prop should contain your site url that you want to link people to.{' '}
					<CodeInline>defaultBanner</CodeInline> is optional.
				</p>
				<CodeBlock header={'Banners array'}>{codeBlocks[7]}</CodeBlock>

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
				<CodeBlock header={'Style block'}>{codeBlocks[8]}</CodeBlock>
				<CodeBlock header={'Stylesheet'}>{codeBlocks[9]}</CodeBlock>
				<CodeBlock header={'CSS import'}>{codeBlocks[10]}</CodeBlock>
				<CodeBlock header={'React import'}>{codeBlocks[11]}</CodeBlock>

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
				<CodeBlock header={'Sass import'}>{codeBlocks[12]}</CodeBlock>
				<CodeBlock header={'React import'}>{codeBlocks[13]}</CodeBlock>
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
				src: '//display.coffee/assets/images/cheat-codes/banner-code-generator-coffee-88x31.jpg',
			},
			{
				alt: 'Dog Banner - 88x31',
				src: '//display.coffee/assets/images/cheat-codes/banner-code-generator-dog-88x31.jpg',
			},
			{
				alt: 'Lightning Banner - 88x31',
				src: '//display.coffee/assets/images/cheat-codes/banner-code-generator-lightning-88x31.jpg',
			},
		],
	},
	{
		header: '100x50',
		values: [
			{
				alt: 'Coffee Banner - 100x50',
				src: '//display.coffee/assets/images/cheat-codes/banner-code-generator-coffee-100x50.jpg',
			},
			{
				alt: 'Dog Banner - 100x50',
				src: '//display.coffee/assets/images/cheat-codes/banner-code-generator-dog-100x50.jpg',
			},
			{
				alt: 'Lightning Banner - 100x50',
				src: '//display.coffee/assets/images/cheat-codes/banner-code-generator-lightning-100x50.jpg',
			},
		],
	},
];
