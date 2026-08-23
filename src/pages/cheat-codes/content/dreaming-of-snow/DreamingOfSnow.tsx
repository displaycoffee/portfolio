/* Scripts */
import { codeBlocks } from './scripts/dreaming-of-snow-code-blocks';

/* Components */
import { DreamingOfSnow as DreamingOfSnowPreview } from './DreamingOfSnowPreview';
import { CheatCodesSection } from '../../CheatCodes';
import { CodeBlock, CodeInline, Preview } from '../../../../components/blocks/Blocks';
import { LinkExternal } from '../../../../components/blocks-2/Blocks';

export const DreamingOfSnow = () => {
	return (
		<>
			<CheatCodesSection header={'Information'}>
				<dl className="definition-list">
					<div className="definition-list-item">
						<dt>Skill level</dt>
						<dd>Easy</dd>
					</div>
					<div className="definition-list-item">
						<dt>Languages</dt>
						<dd>HTML or React, CSS or Sass</dd>
					</div>
					<div className="definition-list-item">
						<dt>Responsive</dt>
						<dd>Yes</dd>
					</div>
					<div className="definition-list-item">
						<dt>Credits</dt>
						<dd>
							Image from <LinkExternal href="//unsplash.com">Unsplash</LinkExternal>
						</dd>
					</div>
				</dl>
			</CheatCodesSection>

			<CheatCodesSection header={'Usage'}>
				<h4 className="h-remove-shadow">Source / repo</h4>
				<p>
					<LinkExternal href="//github.com/displaycoffee/cheat-codes/tree/production/dreaming-of-snow">View @ displaycoffee</LinkExternal>
				</p>

				<h4 className="h-remove-shadow">HTML or React</h4>
				<p>
					The avatar be altered by changing the below <CodeInline>img</CodeInline> source. If possible, please re-host any images and upload
					to your own server.
				</p>
				<CodeBlock header={'Images'}>{codeBlocks[0]}</CodeBlock>

				<h4 className="h-remove-shadow">HTML</h4>
				<p>Copy the template HTML and place it on the page.</p>
				<p>
					<LinkExternal href="//github.com/displaycoffee/cheat-codes/blob/production/dreaming-of-snow/dreaming-of-snow.html">
						dreaming-of-snow/dreaming-of-snow.html
					</LinkExternal>
				</p>

				<h4 className="h-remove-shadow">React</h4>
				<p>Copy the JSX component from the link below and add according to your preferred method.</p>
				<p>
					<LinkExternal href="//github.com/displaycoffee/cheat-codes/blob/production/dreaming-of-snow/DreamingOfSnow.jsx">
						dreaming-of-snow/DreamingOfSnow.jsx
					</LinkExternal>
				</p>
				<CodeBlock header={'React import'}>{codeBlocks[1]}</CodeBlock>
				<CodeBlock header={'React component'}>{codeBlocks[2]}</CodeBlock>

				<h4 className="h-remove-shadow">CSS or Sass</h4>
				<p>
					The fonts are from <LinkExternal href="//fonts.google.com">Google Fonts</LinkExternal> and are added above the main HTML. You can
					change the fonts to whatever you'd like.
				</p>
				<CodeBlock header={'Fonts'}>{codeBlocks[3]}</CodeBlock>
				<p>
					The image is a background image in the styles and can be altered by updating the below url. If possible, please re-host any images
					and upload to your own server.
				</p>
				<CodeBlock header={'Images'}>{codeBlocks[4]}</CodeBlock>

				<h4 className="h-remove-shadow">CSS</h4>
				<p>If using CSS and not Sass, copy the styles from the link below and add according to your preferred method.</p>
				<p>
					<LinkExternal href="//github.com/displaycoffee/cheat-codes/blob/production/dreaming-of-snow/dreaming-of-snow.css">
						dreaming-of-snow/dreaming-of-snow.css
					</LinkExternal>
				</p>
				<CodeBlock header={'Style block'}>{codeBlocks[5]}</CodeBlock>
				<CodeBlock header={'Stylesheet'}>{codeBlocks[6]}</CodeBlock>
				<CodeBlock header={'CSS import'}>{codeBlocks[7]}</CodeBlock>
				<CodeBlock header={'React import'}>{codeBlocks[8]}</CodeBlock>
				<p>
					To change the <CodeInline>max-width</CodeInline>, look for the following code at the 768px breakpoint rule:
				</p>
				<CodeBlock header={'CSS'}>{codeBlocks[9]}</CodeBlock>

				<h4 className="h-remove-shadow">Sass</h4>
				<p>If using Sass and not CSS, copy the styles from the link below and add according to your preferred method.</p>
				<p>
					<LinkExternal href="//github.com/displaycoffee/cheat-codes/blob/production/dreaming-of-snow/dreaming-of-snow.scss">
						dreaming-of-snow/dreaming-of-snow.scss
					</LinkExternal>
				</p>
				<CodeBlock header={'Sass import'}>{codeBlocks[10]}</CodeBlock>
				<CodeBlock header={'React import'}>{codeBlocks[11]}</CodeBlock>
				<p>
					There is a variable configuration to change the <CodeInline>max-width</CodeInline> of the template:
				</p>
				<CodeBlock header={'Sass'}>{codeBlocks[12]}</CodeBlock>
			</CheatCodesSection>

			<Preview className="preview-cheat-codes preview-dreaming-of-snow">
				<DreamingOfSnowPreview />
			</Preview>
		</>
	);
};
