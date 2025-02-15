/* Local components */
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
				<CodeBlock header={'React import'}>{cb01}</CodeBlock>
				<CodeBlock header={'React component'}>{cb02}</CodeBlock>

				<h5 className="h-remove-shadow">CSS or Sass</h5>
				<p>
					The fonts are from{' '}
					<a href="//fonts.google.com" target="_blank" rel="noreferrer">
						Google Fonts
					</a>{' '}
					and are imported into the CSS files. You can change the fonts to whatever you'd like.
				</p>
				<CodeBlock header={'Fonts'}>{cb03}</CodeBlock>
				<p>
					The image is a background image in the styles and can be altered by updating the below url. If possible, please re-host any images
					and upload to your own server.
				</p>
				<CodeBlock header={'Images'}>{cb04}</CodeBlock>

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
				<CodeBlock header={'Style block'}>{cb05}</CodeBlock>
				<CodeBlock header={'Stylesheet'}>{cb06}</CodeBlock>
				<CodeBlock header={'CSS import'}>{cb07}</CodeBlock>
				<CodeBlock header={'React import'}>{cb08}</CodeBlock>
				<p>
					To change the <CodeInline>max-width</CodeInline>, look for the following code at the 768px breakpoint rule:
				</p>
				<CodeBlock header={'CSS'}>{cb09}</CodeBlock>

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
				<CodeBlock header={'Sass import'}>{cb10}</CodeBlock>
				<CodeBlock header={'React import'}>{cb11}</CodeBlock>
				<p>
					There is a variable configuration to change the <CodeInline>max-width</CodeInline> of the template:
				</p>
				<CodeBlock header={'Sass'}>{cb12}</CodeBlock>
			</CheatCodesSection>

			<Preview className="preview-cheat-codes preview-dreaming-of-snow">
				<DreamingOfSnowPreview />
			</Preview>
		</>
	);
};

export const DreamingOfSnowPreview = () => {
	return (
		<div className="dc-dreaming-of-snow displaycoffee">
			<div className="dc-dreaming-of-snow-banner">
				<h3 className="dc-dreaming-of-snow-title">Wish you were here...</h3>
				<div className="dc-dreaming-of-snow-circles"></div>
			</div>
			<div className="dc-dreaming-of-snow-content">
				<div className="dc-dreaming-of-snow-row">
					<div className="dc-dreaming-of-snow-column dc-dreaming-of-snow-column-01">
						<dl>
							<dt>Name:</dt>
							<dd>Beach Goer</dd>
							<dt>Gender:</dt>
							<dd>Unknown</dd>
							<dt>Location:</dt>
							<dd>Beachy Beachtown</dd>
							<dt>Occupation:</dt>
							<dd>Beach Bum</dd>
							<dt>Favorite Drink:</dt>
							<dd>Pineapple juice and vodka</dd>
							<dt>Favorite Song:</dt>
							<dd>Kokomo</dd>
							<dt>Another Field:</dt>
							<dd>Another answer</dd>
							<dt>Another Field:</dt>
							<dd>Another answer</dd>
							<dt>Another Field:</dt>
							<dd>Another answer</dd>
						</dl>
						<p>
							<a href="/">Link 01</a>
							<span className="dc-dreaming-of-snow-separator"></span>
							<a href="/">Link 02</a>
							<span className="dc-dreaming-of-snow-separator"></span>
							<a href="/">Link 03</a>
						</p>
					</div>
					<div className="dc-dreaming-of-snow-column dc-dreaming-of-snow-column-02">
						<h4 className="dc-dreaming-of-snow-title">Biography</h4>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor omnis est quam accusantium! Ut corporis consequatur,{' '}
							<a href="/">nisi assumenda veniam</a>, necessitatibus. Obcaecati porro optio fuga quod itaque, quibusdam odit qui nobis.
						</p>
						<p>
							Neque possimus ipsam quas, corporis vitae at illo, ullam culpa non tempora dicta modi quibusdam saepe ipsa corrupti.{' '}
							<a href="/">Quae</a> aliquid fuga reiciendis ipsam suscipit ex, nobis maiores excepturi, tempora. Ab.
						</p>
						<p>
							Recusandae a <a href="/">ipsum</a> impedit laborum fugiat nihil esse quis libero hic quidem sapiente delectus cum aliquid
							laudantium suscipit dolore, <a href="/">consectetur dolor</a> incidunt nam ipsa voluptas eius sunt mollitia. Sit, animi!
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

/* Code blocks */
const cb01 = `import { DreamingOfSnow } from './DreamingOfSnow';`;
const cb02 = `<DreamingOfSnow />`;
const cb03 = `@import url('//fonts.googleapis.com/css2?family=Damion&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');`;
const cb04 = `background: url('//display.coffee/assets/images/cheat-codes/dreaming-of-snow.jpg') no-repeat;`;
const cb05 = `<style>
	/* Copied styles go here */
</style>`;
const cb06 = `<!-- Copy styles and paste into stylesheet -->
<link rel="stylesheet" href="dreaming-of-snow.css" />`;
const cb07 = `@import url('dreaming-of-snow.css');`;
const cb08 = `import 'dreaming-of-snow.css';`;
const cb09 = `.dc-dreaming-of-snow {
	max-width: 650px;
}`;
const cb10 = `@import 'dreaming-of-snow.scss';`;
const cb11 = `import 'dreaming-of-snow.scss';`;
const cb12 = `$dreaming-of-snow-max-width: 650px; // max width`;
