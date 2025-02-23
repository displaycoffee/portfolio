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

				<h5 className="h-remove-shadow">HTML or React</h5>
				<p>
					The avatar be altered by changing the below <CodeInline>img</CodeInline> source. If possible, please re-host any images and upload
					to your own server.
				</p>
				<CodeBlock header={'Images'}>{cb01}</CodeBlock>

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
				<CodeBlock header={'React import'}>{cb02}</CodeBlock>
				<CodeBlock header={'React component'}>{cb03}</CodeBlock>

				<h5 className="h-remove-shadow">CSS or Sass</h5>
				<p>
					The fonts are from{' '}
					<a href="//fonts.google.com" target="_blank" rel="noreferrer">
						Google Fonts
					</a>{' '}
					and are imported into the CSS files. You can change the fonts to whatever you'd like.
				</p>
				<CodeBlock header={'Fonts'}>{cb04}</CodeBlock>
				<p>
					The image is a background image in the styles and can be altered by updating the below url. If possible, please re-host any images
					and upload to your own server.
				</p>
				<CodeBlock header={'Images'}>{cb05}</CodeBlock>

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
				<CodeBlock header={'Style block'}>{cb06}</CodeBlock>
				<CodeBlock header={'Stylesheet'}>{cb07}</CodeBlock>
				<CodeBlock header={'CSS import'}>{cb08}</CodeBlock>
				<CodeBlock header={'React import'}>{cb09}</CodeBlock>
				<p>
					To change the <CodeInline>max-width</CodeInline>, look for the following code at the 768px breakpoint rule:
				</p>
				<CodeBlock header={'CSS'}>{cb10}</CodeBlock>

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
				<CodeBlock header={'Sass import'}>{cb11}</CodeBlock>
				<CodeBlock header={'React import'}>{cb12}</CodeBlock>
				<p>
					There is a variable configuration to change the <CodeInline>max-width</CodeInline> of the template:
				</p>
				<CodeBlock header={'Sass'}>{cb13}</CodeBlock>
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
			<header className="dc-dreaming-of-snow-header">
				<div className="dc-dreaming-of-snow-row">
					<div className="dc-dreaming-of-snow-column-title dc-dreaming-of-snow-column">
						<h3 className="dc-dreaming-of-snow-title dc-dreaming-of-snow-blue">
							I'm dreaming of snow,
							<br />
							Lorem ipsum dolor sit amet...
						</h3>
					</div>

					<div className="dc-dreaming-of-snow-column-avatar dc-dreaming-of-snow-column">
						<div className="dc-dreaming-of-snow-avatar">
							<div className="dc-dreaming-of-snow-image-wrapper">
								<img
									src="//display.coffee/assets/images/cheat-codes/dreaming-of-snow-avatar.jpg"
									alt="Dreaming of Snow - Avatar"
									title="Dreaming of Snow - Avatar"
								/>
							</div>

							<div className="dc-dreaming-of-snow-blue">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt interdum vulputate.</p>
							</div>
						</div>
					</div>
				</div>
			</header>

			<main className="dc-dreaming-of-snow-content">
				<div className="dc-dreaming-of-snow-row">
					<div className="dc-dreaming-of-snow-column">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor rutrum velit in porttitor. Integer imperdiet est
							et sem pretium, at dignissim nibh consequat. Suspendisse ex sapien, vestibulum eget mollis eu, facilisis nec nisl. Nulla
							facilisi.
						</p>
						<p>
							Praesent sollicitudin massa quis ultricies viverra. Duis sagittis neque dolor, ut gravida eros volutpat et. Curabitur
							tincidunt <a href="/">fringilla velit</a>, ut cursus erat. Cras ut euismod est, et dictum erat. Nam velit tellus, molestie
							sed nunc id, ultricies euismod massa. In sed sem quis lorem euismod euismod. Mauris eget nulla ultricies, tempus felis a,
							porta ipsum. Aliquam at arcu tellus.
						</p>
						<p>
							Nulla urna nisi, vulputate sit amet nisi ac, mollis eleifend nunc. Cum sociis natoque penatibus et magnis dis parturient
							montes, nascetur ridiculus mus. Nam auctor commodo purus, id dapibus erat viverra sit amet. Praesent{' '}
							<a href="/">et metus</a> vel erat porta gravida sed sed libero.
						</p>
					</div>

					<div className="dc-dreaming-of-snow-column">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor rutrum velit in porttitor. Integer imperdiet est
							et sem pretium, at dignissim nibh consequat. Suspendisse ex sapien, vestibulum eget mollis eu, facilisis nec nisl. Nulla
							facilisi.
						</p>
						<p>
							Praesent sollicitudin massa quis ultricies viverra. Duis sagittis neque dolor, ut gravida eros volutpat et. Curabitur
							tincidunt fringilla velit, ut cursus erat. Cras ut euismod est, et dictum erat. Nam velit tellus, molestie sed nunc id,
							ultricies euismod massa. In sed sem quis lorem euismod euismod. Mauris <a href="/">eget nulla ultricies</a>, tempus felis
							a, porta ipsum. Aliquam at arcu tellus.
						</p>
						<p>
							Nulla urna nisi, vulputate sit amet nisi ac, mollis eleifend nunc. Cum sociis natoque penatibus et magnis dis parturient
							montes, nascetur ridiculus mus. Nam auctor commodo purus, id dapibus erat viverra sit amet. Praesent et metus vel erat
							porta gravida sed sed libero.
						</p>
					</div>
				</div>
			</main>

			<footer className="dc-dreaming-of-snow-footer dc-dreaming-of-snow-blue">
				<h4>
					Nulla urna nisi, vulputate sit amet nisi ac,
					<br />
					Nam auctor commodo purus, id dapibus erat viverra sit amet.
				</h4>
			</footer>
		</div>
	);
};

/* Code blocks */
const cb01 = `<img src="//display.coffee/assets/images/cheat-codes/dreaming-of-snow-avatar.jpg" alt="Dreaming of Snow - Avatar" title="Dreaming of Snow - Avatar" />`;
const cb02 = `import { DreamingOfSnow } from './DreamingOfSnow';`;
const cb03 = `<DreamingOfSnow />`;
const cb04 = `@import url('//fonts.googleapis.com/css2?family=La+Belle+Aurore&family=Vollkorn:ital,wght@0,400..900;1,400..900&display=swap');`;
const cb05 = `background: url('//display.coffee/assets/images/cheat-codes/dreaming-of-snow-bg.jpg') no-repeat;`;
const cb06 = `<style>
	/* Copied styles go here */
</style>`;
const cb07 = `<!-- Copy styles and paste into stylesheet -->
<link rel="stylesheet" href="dreaming-of-snow.css" />`;
const cb08 = `@import url('dreaming-of-snow.css');`;
const cb09 = `import 'dreaming-of-snow.css';`;
const cb10 = `.dc-dreaming-of-snow {
	max-width: 768px;
}`;
const cb11 = `@import 'dreaming-of-snow.scss';`;
const cb12 = `import 'dreaming-of-snow.scss';`;
const cb13 = `$dreaming-of-snow-max-width: 768px; // max width`;
