/* Local scripts */
import { codeBlocks } from './scripts/dreaming-of-snow-code-blocks';

/* Local components */
import { DreamingOfSnow as DreamingOfSnowPreview } from './DreamingOfSnowPreview';
import { CheatCodesSection } from '../../CheatCodes';
import { CodeBlock, CodeInline, Preview } from '../../../../components/blocks/Blocks';

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
							Image from{' '}
							<a href="//unsplash.com" target="_blank" rel="noreferrer">
								Unsplash
							</a>
						</dd>
					</div>
				</dl>
			</CheatCodesSection>

			<CheatCodesSection header={'Usage'}>
				<h5 className="h-remove-shadow">Source / repo</h5>
				<p>
					<a href="//github.com/displaycoffee/cheat-codes/tree/production/dreaming-of-snow" target="_blank" rel="noreferrer">
						View @ displaycoffee
					</a>
				</p>

				<h5 className="h-remove-shadow">HTML or React</h5>
				<p>
					The avatar be altered by changing the below <CodeInline>img</CodeInline> source. If possible, please re-host any images and upload
					to your own server.
				</p>
				<CodeBlock header={'Images'}>{codeBlocks[0]}</CodeBlock>

				<h5 className="h-remove-shadow">HTML</h5>
				<p>Copy the template HTML and place it on the page.</p>
				<p>
					<a
						href="//github.com/displaycoffee/cheat-codes/blob/production/dreaming-of-snow/dreaming-of-snow.html"
						target="_blank"
						rel="noreferrer"
					>
						dreaming-of-snow/dreaming-of-snow.html
					</a>
				</p>

				<h5 className="h-remove-shadow">React</h5>
				<p>Copy the JSX component from the link below and add according to your preferred method.</p>
				<p>
					<a
						href="//github.com/displaycoffee/cheat-codes/blob/production/dreaming-of-snow/DreamingOfSnow.jsx"
						target="_blank"
						rel="noreferrer"
					>
						dreaming-of-snow/DreamingOfSnow.jsx
					</a>
				</p>
				<CodeBlock header={'React import'}>{codeBlocks[1]}</CodeBlock>
				<CodeBlock header={'React component'}>{codeBlocks[2]}</CodeBlock>

				<h5 className="h-remove-shadow">CSS or Sass</h5>
				<p>
					The fonts are from{' '}
					<a href="//fonts.google.com" target="_blank" rel="noreferrer">
						Google Fonts
					</a>{' '}
					and are added above the main HTML. You can change the fonts to whatever you'd like.
				</p>
				<CodeBlock header={'Fonts'}>{codeBlocks[3]}</CodeBlock>
				<p>
					The image is a background image in the styles and can be altered by updating the below url. If possible, please re-host any images
					and upload to your own server.
				</p>
				<CodeBlock header={'Images'}>{codeBlocks[4]}</CodeBlock>

				<h5 className="h-remove-shadow">CSS</h5>
				<p>If using CSS and not Sass, copy the styles from the link below and add according to your preferred method.</p>
				<p>
					<a
						href="//github.com/displaycoffee/cheat-codes/blob/production/dreaming-of-snow/dreaming-of-snow.css"
						target="_blank"
						rel="noreferrer"
					>
						dreaming-of-snow/dreaming-of-snow.css
					</a>
				</p>
				<CodeBlock header={'Style block'}>{codeBlocks[5]}</CodeBlock>
				<CodeBlock header={'Stylesheet'}>{codeBlocks[6]}</CodeBlock>
				<CodeBlock header={'CSS import'}>{codeBlocks[7]}</CodeBlock>
				<CodeBlock header={'React import'}>{codeBlocks[8]}</CodeBlock>
				<p>
					To change the <CodeInline>max-width</CodeInline>, look for the following code at the 768px breakpoint rule:
				</p>
				<CodeBlock header={'CSS'}>{codeBlocks[9]}</CodeBlock>

				<h5 className="h-remove-shadow">Sass</h5>
				<p>If using Sass and not CSS, copy the styles from the link below and add according to your preferred method.</p>
				<p>
					<a
						href="//github.com/displaycoffee/cheat-codes/blob/production/dreaming-of-snow/dreaming-of-snow.scss"
						target="_blank"
						rel="noreferrer"
					>
						dreaming-of-snow/dreaming-of-snow.scss
					</a>
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
