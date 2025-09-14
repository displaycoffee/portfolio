/* Local scripts */
import { codeBlocks } from './scripts/wish-you-were-here-code-blocks';

/* Local components */
import { WishYouWereHere as WishYouWereHerePreview } from './WishYouWereHerePreview';
import { CheatCodesSection } from '../../CheatCodes';
import { CodeBlock, CodeInline, Preview } from '../../../../components/blocks/Blocks';

export const WishYouWereHere = () => {
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
					<a href="//github.com/displaycoffee/cheat-codes/tree/production/wish-you-were-here" target="_blank" rel="noreferrer">
						View @ displaycoffee
					</a>
				</p>

				<h5 className="h-remove-shadow">HTML</h5>
				<p>Copy the template HTML and place it on the page.</p>
				<p>
					<a
						href="//github.com/displaycoffee/cheat-codes/blob/production/wish-you-were-here/wish-you-were-here.html"
						target="_blank"
						rel="noreferrer"
					>
						wish-you-were-here/wish-you-were-here.html
					</a>
				</p>

				<h5 className="h-remove-shadow">React</h5>
				<p>Copy the JSX component from the link below and add according to your preferred method.</p>
				<p>
					<a
						href="//github.com/displaycoffee/cheat-codes/blob/production/wish-you-were-here/WishYouWereHere.jsx"
						target="_blank"
						rel="noreferrer"
					>
						wish-you-were-here/WishYouWereHere.jsx
					</a>
				</p>
				<CodeBlock header={'React import'}>{codeBlocks[0]}</CodeBlock>
				<CodeBlock header={'React component'}>{codeBlocks[1]}</CodeBlock>

				<h5 className="h-remove-shadow">CSS or Sass</h5>
				<p>
					The fonts are from{' '}
					<a href="//fonts.google.com" target="_blank" rel="noreferrer">
						Google Fonts
					</a>{' '}
					and are imported into the CSS files. You can change the fonts to whatever you'd like.
				</p>
				<CodeBlock header={'Fonts'}>{codeBlocks[2]}</CodeBlock>
				<p>
					The image is a background image in the styles and can be altered by updating the below url. If possible, please re-host any images
					and upload to your own server.
				</p>
				<CodeBlock header={'Images'}>{codeBlocks[3]}</CodeBlock>

				<h5 className="h-remove-shadow">CSS</h5>
				<p>If using CSS and not Sass, copy the styles from the link below and add according to your preferred method.</p>
				<p>
					<a
						href="//github.com/displaycoffee/cheat-codes/blob/production/wish-you-were-here/wish-you-were-here.css"
						target="_blank"
						rel="noreferrer"
					>
						wish-you-were-here/wish-you-were-here.css
					</a>
				</p>
				<CodeBlock header={'Style block'}>{codeBlocks[4]}</CodeBlock>
				<CodeBlock header={'Stylesheet'}>{codeBlocks[5]}</CodeBlock>
				<CodeBlock header={'CSS import'}>{codeBlocks[6]}</CodeBlock>
				<CodeBlock header={'React import'}>{codeBlocks[7]}</CodeBlock>
				<p>
					To change the <CodeInline>max-width</CodeInline>, look for the following code at the 768px breakpoint rule:
				</p>
				<CodeBlock header={'CSS'}>{codeBlocks[8]}</CodeBlock>

				<h5 className="h-remove-shadow">Sass</h5>
				<p>If using Sass and not CSS, copy the styles from the link below and add according to your preferred method.</p>
				<p>
					<a
						href="//github.com/displaycoffee/cheat-codes/blob/production/wish-you-were-here/wish-you-were-here.scss"
						target="_blank"
						rel="noreferrer"
					>
						wish-you-were-here/wish-you-were-here.scss
					</a>
				</p>
				<CodeBlock header={'Sass import'}>{codeBlocks[9]}</CodeBlock>
				<CodeBlock header={'React import'}>{codeBlocks[10]}</CodeBlock>
				<p>
					There is a variable configuration to change the <CodeInline>max-width</CodeInline> of the template:
				</p>
				<CodeBlock header={'Sass'}>{codeBlocks[11]}</CodeBlock>
			</CheatCodesSection>

			<Preview className="preview-cheat-codes preview-wish-you-were-here">
				<WishYouWereHerePreview />
			</Preview>
		</>
	);
};
