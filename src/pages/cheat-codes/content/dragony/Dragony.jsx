/* Local components */
import { CheatCodesSection } from '../../CheatCodes';
import { CodeBlock, CodeInline, Preview } from '../../../../components/blocks/Blocks';

export const Dragony = () => {
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
					<a href="//github.com/displaycoffee/cheat-codes/tree/production/dragony" target="_blank" rel="noreferrer">
						View @ displaycoffee
					</a>
				</p>

				<h5 className="h-remove-shadow">HTML or React</h5>
				<p>
					The banner can be altered by changing the below <CodeInline>img</CodeInline> source. If possible, please re-host any images and
					upload to your own server.
				</p>
				<CodeBlock header={'Images'}>{cb01}</CodeBlock>

				<h5 className="h-remove-shadow">HTML</h5>
				<p>Copy the template HTML and place it on the page.</p>
				<p>
					<a href="//github.com/displaycoffee/cheat-codes/blob/production/dragony/dragony.html" target="_blank" rel="noreferrer">
						dragony/dragony.html
					</a>
				</p>

				<h5 className="h-remove-shadow">React</h5>
				<p>Copy the JSX component from the link below and add according to your preferred method.</p>
				<p>
					<a href="//github.com/displaycoffee/cheat-codes/blob/production/dragony/Dragony.jsx" target="_blank" rel="noreferrer">
						dragony/Dragony.jsx
					</a>
				</p>
				<CodeBlock header={'React import'}>{cb02}</CodeBlock>
				<CodeBlock header={'React component'}>{cb03}</CodeBlock>

				<h5 className="h-remove-shadow">CSS</h5>
				<p>If using CSS and not Sass, copy the styles from the link below and add according to your preferred method.</p>
				<p>
					<a href="//github.com/displaycoffee/cheat-codes/blob/production/dragony/dragony.css" target="_blank" rel="noreferrer">
						dragony/dragony.css
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
					<a href="//github.com/displaycoffee/cheat-codes/blob/production/dragony/dragony.scss" target="_blank" rel="noreferrer">
						dragony/dragony.scss
					</a>
				</p>
				<CodeBlock header={'Sass import'}>{cb09}</CodeBlock>
				<CodeBlock header={'React import'}>{cb10}</CodeBlock>
				<p>
					There is a variable configuration to change the <CodeInline>max-width</CodeInline> of the template:
				</p>
				<CodeBlock header={'Sass'}>{cb11}</CodeBlock>
			</CheatCodesSection>

			<Preview className="preview-cheat-codes preview-dragony">
				<DragonyPreview />
			</Preview>
		</>
	);
};

export const DragonyPreview = () => {
	return (
		<div className="dc-dragony displaycoffee">
			<header className="dc-dragony-header">
				<h3>Toothless</h3>
				<div className="dc-dragony-banner">
					<img src="//display.coffee/assets/images/cheat-codes/dragony-banner.gif" alt="Dragony - Banner" title="Dragony - Banner" />
				</div>
			</header>

			<main className="dc-dragony-content">
				<h4>Loves</h4>
				<p>
					Flying and exploring! It's one of my specialties. I do enjoy living in Berk with the rest of the vikings though. Also, chasing
					little colored lights!
				</p>
				<h4>Hates</h4>
				<p>
					People who hurt my friends. I'm incredibly loyal and would do anything to protect my friends. Oh, and eel is bad too. If you give
					me eel for dinner, I'll spit it out.
				</p>
				<h4>Friends</h4>
				<p>Hiccup Horrendous Haddock III, Astrid Hofferson, Stoick the Vast, Valka, etc etc etc...</p>
				<h4>Enemies</h4>
				<p>Drago Bludvist, etc etc etc...</p>
			</main>

			<footer className="dc-dragony-footer">
				<p>
					<a href="/">Link 1</a>
					<span className="dc-dragony-separator">|</span>
					<a href="/">Link 2</a>
					<span className="dc-dragony-separator">|</span>
					<a href="/">Link 3</a>
				</p>
			</footer>
		</div>
	);
};

/* Code blocks */
const cb01 = `<img src="//display.coffee/assets/images/cheat-codes/dragony-banner.gif" alt="Dragony - Banner" title="Dragony - Banner" />`;
const cb02 = `import { Dragony } from './Dragony';`;
const cb03 = `<Dragony />`;
const cb04 = `<style>
	/* Copied styles go here */
</style>`;
const cb05 = `<!-- Copy styles and paste into stylesheet -->
<link rel="stylesheet" href="dragony.css" />`;
const cb06 = `@import url('dragony.css');`;
const cb07 = `import 'dragony.css';`;
const cb08 = `.dc-dragony {
	max-width: 1000px;
}`;
const cb09 = `@import 'dragony.scss';`;
const cb10 = `import 'dragony.scss';`;
const cb11 = `$dragony-max-width: 1000px; // max width`;
