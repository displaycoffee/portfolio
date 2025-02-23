/* Local components */
import { CheatCodesSection } from '../../CheatCodes';
import { CodeBlock, CodeInline, Preview } from '../../../../components/blocks/Blocks';

export const APromise = () => {
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
				</dl>
			</CheatCodesSection>

			<CheatCodesSection header={'Usage'}>
				<h5 className="h-remove-shadow">Source / repo</h5>
				<p>
					<a href="//github.com/displaycoffee/cheat-codes/tree/production/a-promise" target="_blank" rel="noreferrer">
						View @ displaycoffee
					</a>
				</p>

				<h5 className="h-remove-shadow">HTML or React</h5>
				<p>
					The avatar or leaf image can be altered by changing the below <CodeInline>img</CodeInline> source. If possible, please re-host any
					images and upload to your own server.
				</p>
				<CodeBlock header={'Images'}>{cb01}</CodeBlock>

				<h5 className="h-remove-shadow">HTML</h5>
				<p>Copy the template HTML and place it on the page.</p>
				<p>
					<a href="//github.com/displaycoffee/cheat-codes/blob/production/a-promise/a-promise.html" target="_blank" rel="noreferrer">
						a-promise/a-promise.html
					</a>
				</p>

				<h5 className="h-remove-shadow">React</h5>
				<p>Copy the JSX component from the link below and add according to your preferred method.</p>
				<p>
					<a href="//github.com/displaycoffee/cheat-codes/blob/production/a-promise/APromise.jsx" target="_blank" rel="noreferrer">
						a-promise/APromise.jsx
					</a>
				</p>
				<CodeBlock header={'React import'}>{cb02}</CodeBlock>
				<CodeBlock header={'React component'}>{cb03}</CodeBlock>

				<h5 className="h-remove-shadow">CSS</h5>
				<p>If using CSS and not Sass, copy the styles from the link below and add according to your preferred method.</p>
				<p>
					<a href="//github.com/displaycoffee/cheat-codes/blob/production/a-promise/a-promise.css" target="_blank" rel="noreferrer">
						a-promise/a-promise.css
					</a>
				</p>
				<CodeBlock header={'Style block'}>{cb04}</CodeBlock>
				<CodeBlock header={'Stylesheet'}>{cb05}</CodeBlock>
				<CodeBlock header={'CSS import'}>{cb06}</CodeBlock>
				<CodeBlock header={'React import'}>{cb07}</CodeBlock>
				<p>
					To change the <CodeInline>max-width</CodeInline>, look for the following code at the 768px breakpoint rule:
				</p>
				<CodeBlock header={'CSS'}>{cb08}</CodeBlock>

				<h5 className="h-remove-shadow">Sass</h5>
				<p>If using Sass and not CSS, copy the styles from the link below and add according to your preferred method.</p>
				<p>
					<a href="//github.com/displaycoffee/cheat-codes/blob/production/a-promise/a-promise.scss" target="_blank" rel="noreferrer">
						a-promise/a-promise.scss
					</a>
				</p>
				<CodeBlock header={'Sass import'}>{cb09}</CodeBlock>
				<CodeBlock header={'React import'}>{cb10}</CodeBlock>
				<p>
					There is a variable configuration to change the <CodeInline>max-width</CodeInline> of the template:
				</p>
				<CodeBlock header={'Sass'}>{cb11}</CodeBlock>
			</CheatCodesSection>

			<Preview className="preview-cheat-codes preview-a-promise">
				<APromisePreview />
			</Preview>
		</>
	);
};

export const APromisePreview = () => {
	const separator = <img src="//display.coffee/assets/images/cheat-codes/a-promise-leaf.png" alt="A Promise - Leaf" title="A Promise - Leaf" />;

	return (
		<div className="dc-a-promise displaycoffee">
			<div className="dc-a-promise-row">
				<div className="dc-a-promise-avatar dc-a-promise-column">
					<div className="dc-a-promise-image-wrapper">
						<img
							src="//display.coffee/assets/images/cheat-codes/a-promise-avatar.jpg"
							alt="A Promise - Avatar"
							title="A Promise - Avatar"
						/>
					</div>
				</div>

				<div className="dc-a-promise-quote dc-a-promise-column">
					<p>
						I made a promise, Mr. Frodo.{' '}
						<strong>
							<em>A promise.</em>
						</strong>{' '}
						"Don't you leave him Samwise Gamgee."
					</p>
					<p>And I don't mean to. I don't mean to.</p>
				</div>
			</div>

			<div className="dc-a-promise-row">
				<div className="dc-a-promise-column">
					<p>
						<a href="/">Link 01</a>
						<span className="dc-a-promise-separator">{separator}</span>
						<a href="/">Link 02</a>
						<span className="dc-a-promise-separator">{separator}</span>
						<a href="/">Link 03</a>
					</p>
				</div>
			</div>
		</div>
	);
};

/* Code blocks */
const cb01 = `<img src="//display.coffee/assets/images/cheat-codes/a-promise-avatar.jpg" alt="A Promise - Avatar" title="A Promise - Avatar" />
<img src="//display.coffee/assets/images/cheat-codes/a-promise-leaf.png" alt="A Promise - Leaf" title="A Promise - Leaf" />`;
const cb02 = `import { APromise } from './APromise';`;
const cb03 = `<APromise />`;
const cb04 = `<style>
	/* Copied styles go here */
</style>`;
const cb05 = `<!-- Copy styles and paste into stylesheet -->
<link rel="stylesheet" href="a-promise.css" />`;
const cb06 = `@import url('a-promise.css');`;
const cb07 = `import 'a-promise.css';`;
const cb08 = `.dc-a-promise {
	max-width: 700px;
}`;
const cb09 = `@import 'a-promise.scss';`;
const cb10 = `import 'a-promise.scss';`;
const cb11 = `$a-promise-max-width: 700px; // max width`;
