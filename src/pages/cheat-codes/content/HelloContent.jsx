/* Local components */
import { CheatCodesSection } from '../CheatCodes';
import { CodeBlock, Preview } from '../../../components/blocks/Blocks';

export const HelloContent = () => {
	return (
		<>
			<CheatCodesSection header={'Description'}>
				<p>A summer-themed template. Not related to the Pink Floyd song.</p>
			</CheatCodesSection>

			<CheatCodesSection header={'Information'}>
				<dl className="definition-list">
					<div className="definition-list-item">
						<dt>Skill level</dt>
						<dd>Easy</dd>
					</div>
					<div className="definition-list-item">
						<dt>Languages</dt>
						<dd>HTML, CSS or Sass</dd>
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

			<CheatCodesSection header={'Q&A'}>
				<p>
					<strong>Q: How do I change the max-width of the template?</strong>
				</p>
				<p>
					<strong>A:</strong> At the 768px breakpoint rule, Look for the following code:
				</p>
				<CodeBlock header={'CSS'}>{cb1}</CodeBlock>
				<p>In the Sass, there is a variable configuration for this:</p>
				<CodeBlock header={'Sass'}>{cb2}</CodeBlock>
				<p>
					<strong>Q: Where are the fonts coming from?</strong>
				</p>
				<p>
					<strong>A:</strong> The fonts are from{' '}
					<a href="//fonts.google.com" target="_blank" rel="noreferrer">
						Google Fonts
					</a>{' '}
					and are imported into the CSS files. You can change the fonts to whatever you'd like.
				</p>
				<CodeBlock header={'CSS'}>{cb3}</CodeBlock>
				<p>
					<strong>Q: How do I change the image?</strong>
				</p>
				<p>
					<strong>A:</strong> The image is a background image in the styles. You can change the background image by updating the below url.
					If possible, please re-host any images and upload to your own server.
				</p>
				<CodeBlock header={'CSS'}>{cb4}</CodeBlock>
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

				<h5 className="h-remove-shadow">CSS</h5>
				<p>
					If using CSS and not Sass, use the below. The CSS can be added in a style block or in a stylesheet or it can be imported into a
					React component.
				</p>
				<p>
					<a
						href="//github.com/displaycoffee/cheat-codes/blob/production/wish-you-were-here/wish-you-were-here.css"
						target="_blank"
						rel="noreferrer"
					>
						wish-you-were-here/wish-you-were-here.css
					</a>
				</p>

				<h5 className="h-remove-shadow">Sass</h5>
				<p>
					If using Sass and not CSS, use the below. Import the scss file into another scss file or it can be imported into a React
					component.
				</p>
				<p>
					<a
						href="//github.com/displaycoffee/cheat-codes/blob/production/wish-you-were-here/wish-you-were-here.scss"
						target="_blank"
						rel="noreferrer"
					>
						wish-you-were-here/wish-you-were-here.scss
					</a>
				</p>
			</CheatCodesSection>

			<Preview className="preview-cheat-codes preview-wish-you-were-here">hi</Preview>
		</>
	);
};

/* Code blocks */
const cb1 = ``;
const cb2 = ``;
const cb3 = ``;
const cb4 = ``;
