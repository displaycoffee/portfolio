/* Local components */
import { CheatCodesSection } from '../../CheatCodes';
import { CodeBlock, CodeInline, Preview } from '../../../../components/blocks/Blocks';

export const VelociraptorPack = () => {
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
						<dd>Image from Jurrasic World</dd>
					</div>
				</dl>
			</CheatCodesSection>

			<CheatCodesSection header={'Usage'}>
				<h5 className="h-remove-shadow">Source / repo</h5>
				<p>
					<a href="//github.com/displaycoffee/cheat-codes/tree/production/velociraptor-pack" target="_blank" rel="noreferrer">
						View @ displaycoffee
					</a>
				</p>

				<h5 className="h-remove-shadow">HTML</h5>
				<p>Copy the template HTML and place it on the page.</p>
				<p>
					<a
						href="//github.com/displaycoffee/cheat-codes/blob/production/velociraptor-pack/velociraptor-pack.html"
						target="_blank"
						rel="noreferrer"
					>
						velociraptor-pack/velociraptor-pack.html
					</a>
				</p>

				<h5 className="h-remove-shadow">React</h5>
				<p>Copy the JSX component from the link below and add according to your preferred method.</p>
				<p>
					<a
						href="//github.com/displaycoffee/cheat-codes/blob/production/velociraptor-pack/VelociraptorPack.jsx"
						target="_blank"
						rel="noreferrer"
					>
						velociraptor-pack/VelociraptorPack.jsx
					</a>
				</p>
				<CodeBlock header={'React import'}>{cb01}</CodeBlock>
				<CodeBlock header={'React component'}>{cb02}</CodeBlock>

				<h5 className="h-remove-shadow">CSS or Sass</h5>
				<p>
					The image is a background image in the styles and can be altered by updating the below url. If possible, please re-host any images
					and upload to your own server.
				</p>
				<CodeBlock header={'Images'}>{cb03}</CodeBlock>

				<h5 className="h-remove-shadow">CSS</h5>
				<p>If using CSS and not Sass, copy the styles from the link below and add according to your preferred method.</p>
				<p>
					<a
						href="//github.com/displaycoffee/cheat-codes/blob/production/velociraptor-pack/velociraptor-pack.css"
						target="_blank"
						rel="noreferrer"
					>
						velociraptor-pack/velociraptor-pack.css
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
					<a
						href="//github.com/displaycoffee/cheat-codes/blob/production/velociraptor-pack/velociraptor-pack.scss"
						target="_blank"
						rel="noreferrer"
					>
						velociraptor-pack/velociraptor-pack.scss
					</a>
				</p>
				<CodeBlock header={'Sass import'}>{cb09}</CodeBlock>
				<CodeBlock header={'React import'}>{cb10}</CodeBlock>
				<p>
					There is a variable configuration to change the <CodeInline>max-width</CodeInline> of the template:
				</p>
				<CodeBlock header={'Sass'}>{cb11}</CodeBlock>
			</CheatCodesSection>

			<Preview className="preview-cheat-codes preview-velociraptor-pack">
				<VelociraptorPackPreview />
			</Preview>
		</>
	);
};

export const VelociraptorPackPreview = () => {
	return (
		<div className="dc-velociraptor-pack displaycoffee">
			<div className="dc-velociraptor-pack-container">
				<nav className="dc-velociraptor-pack-navigation">
					<a className="dc-velociraptor-pack-title" href="#dc-velociraptor-pack-section-01">
						Link 1
					</a>
					<span className="dc-velociraptor-pack-separator">|</span>
					<a className="dc-velociraptor-pack-title" href="#dc-velociraptor-pack-section-02">
						Link 2
					</a>
					<span className="dc-velociraptor-pack-separator">|</span>
					<a className="dc-velociraptor-pack-title" href="#dc-velociraptor-pack-section-03">
						Link 3
					</a>
				</nav>

				<main className="dc-velociraptor-pack-content">
					<div className="dc-velociraptor-pack-scroll">
						<section id="dc-velociraptor-pack-section-01" className="dc-velociraptor-pack-section">
							<h3 className="dc-velociraptor-pack-title">Section 01</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mi mi, luctus vitae odio a, fermentum eleifend
								quam. Praesent accumsan placerat neque nec euismod. Nulla mollis diam ex, ut facilisis libero viverra a. Donec congue
								luctus efficitur. Vivamus vel ligula ultricies, ornare magna nec, posuere velit. Proin efficitur lorem sit amet eros
								rhoncus, sit amet dignissim leo sagittis. Proin vel mi orci. Suspendisse egestas nec turpis sed rhoncus.
							</p>
							<p>
								Fusce magna augue, viverra sed sodales at, malesuada vel velit. Nunc a neque magna. Phasellus justo nulla, consectetur
								sit amet mi vel, imperdiet hendrerit turpis. Maecenas euismod augue sit amet aliquet mollis. Integer ut augue eu elit
								accumsan accumsan sed eget neque. Nullam egestas lacinia urna. Sed vitae consequat ex, in mollis nisl. Aenean accumsan
								nisl sit amet auctor sodales. Morbi id est quam. Mauris nisl nibh, faucibus ultrices tempus eget, tristique venenatis
								augue. Ut sollicitudin posuere lectus, in venenatis mauris auctor vel. Nam a aliquam turpis, a placerat metus. Morbi
								in arcu laoreet, elementum dolor sit amet, bibendum ex.
							</p>
							<p>
								Praesent vestibulum ante id urna lacinia, in lobortis nibh porttitor. Ut sodales rhoncus turpis, eu dapibus lorem
								aliquet vitae. In mattis sollicitudin felis, non tristique tellus posuere eu. Mauris eget facilisis augue. Praesent
								imperdiet pharetra arcu et lobortis. Quisque fringilla rhoncus convallis. Suspendisse eget eros pellentesque, tempus
								lectus ac, laoreet ex. Sed ipsum nulla, auctor et ligula ultricies, ornare pellentesque purus. Aenean tempor sed augue
								vel sodales. Integer tortor nisl, lacinia sit amet pellentesque vitae, maximus vel ante. Mauris vulputate nisl justo,
								ac dictum metus condimentum et. Etiam metus neque, bibendum et magna mattis, tincidunt ornare nulla. Nullam nisl
								neque, sagittis sit amet auctor in, lobortis et arcu. Nunc facilisis pharetra tortor, et commodo metus ultrices vel.
								Praesent ultricies, quam at tempus feugiat, risus mi rhoncus velit, non consequat orci urna nec orci. Nullam vehicula
								sit amet lectus non ultrices.
							</p>
						</section>
						<section id="dc-velociraptor-pack-section-02" className="dc-velociraptor-pack-section">
							<h3 className="dc-velociraptor-pack-title">Section 02</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mi mi, luctus vitae odio a, fermentum eleifend
								quam. Praesent accumsan placerat neque nec euismod. Nulla mollis diam ex, ut facilisis libero viverra a. Donec congue
								luctus efficitur. Vivamus vel ligula ultricies, ornare magna nec, posuere velit. Proin efficitur lorem sit amet eros
								rhoncus, sit amet dignissim leo sagittis. Proin vel mi orci. Suspendisse egestas nec turpis sed rhoncus.
							</p>
							<p>
								Fusce magna augue, viverra sed sodales at, malesuada vel velit. Nunc a neque magna. Phasellus justo nulla, consectetur
								sit amet mi vel, imperdiet hendrerit turpis. Maecenas euismod augue sit amet aliquet mollis. Integer ut augue eu elit
								accumsan accumsan sed eget neque. Nullam egestas lacinia urna. Sed vitae consequat ex, in mollis nisl. Aenean accumsan
								nisl sit amet auctor sodales. Morbi id est quam. Mauris nisl nibh, faucibus ultrices tempus eget, tristique venenatis
								augue. Ut sollicitudin posuere lectus, in venenatis mauris auctor vel. Nam a aliquam turpis, a placerat metus. Morbi
								in arcu laoreet, elementum dolor sit amet, bibendum ex.
							</p>
							<p>
								Praesent vestibulum ante id urna lacinia, in lobortis nibh porttitor. Ut sodales rhoncus turpis, eu dapibus lorem
								aliquet vitae. In mattis sollicitudin felis, non tristique tellus posuere eu. Mauris eget facilisis augue. Praesent
								imperdiet pharetra arcu et lobortis. Quisque fringilla rhoncus convallis. Suspendisse eget eros pellentesque, tempus
								lectus ac, laoreet ex. Sed ipsum nulla, auctor et ligula ultricies, ornare pellentesque purus. Aenean tempor sed augue
								vel sodales. Integer tortor nisl, lacinia sit amet pellentesque vitae, maximus vel ante. Mauris vulputate nisl justo,
								ac dictum metus condimentum et. Etiam metus neque, bibendum et magna mattis, tincidunt ornare nulla. Nullam nisl
								neque, sagittis sit amet auctor in, lobortis et arcu. Nunc facilisis pharetra tortor, et commodo metus ultrices vel.
								Praesent ultricies, quam at tempus feugiat, risus mi rhoncus velit, non consequat orci urna nec orci. Nullam vehicula
								sit amet lectus non ultrices.
							</p>
							<p>
								Nunc purus mi, auctor ac risus ut, pulvinar feugiat ante. Sed id pulvinar felis. Suspendisse sit amet cursus ipsum.
								Maecenas efficitur orci vitae libero posuere ultricies. Aliquam bibendum tortor in ex congue scelerisque. Aenean
								eleifend eu risus sed ornare. Quisque ut pharetra lacus. Duis et tempus urna, sed tincidunt sapien. Praesent finibus
								pellentesque ante egestas dignissim. Quisque vehicula rutrum ultricies. Nunc mattis est eget orci tincidunt, id
								accumsan enim fringilla. Integer ultrices ullamcorper ex ac porttitor. Ut ultricies iaculis turpis vitae facilisis.
								Quisque quis molestie felis.
							</p>
						</section>
						<section id="dc-velociraptor-pack-section-03" className="dc-velociraptor-pack-section">
							<h3 className="dc-velociraptor-pack-title">Section 03</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mi mi, luctus vitae odio a, fermentum eleifend
								quam. Praesent accumsan placerat neque nec euismod. Nulla mollis diam ex, ut facilisis libero viverra a. Donec congue
								luctus efficitur. Vivamus vel ligula ultricies, ornare magna nec, posuere velit. Proin efficitur lorem sit amet eros
								rhoncus, sit amet dignissim leo sagittis. Proin vel mi orci. Suspendisse egestas nec turpis sed rhoncus.
							</p>
							<p>
								Fusce magna augue, viverra sed sodales at, malesuada vel velit. Nunc a neque magna. Phasellus justo nulla, consectetur
								sit amet mi vel, imperdiet hendrerit turpis. Maecenas euismod augue sit amet aliquet mollis. Integer ut augue eu elit
								accumsan accumsan sed eget neque. Nullam egestas lacinia urna. Sed vitae consequat ex, in mollis nisl. Aenean accumsan
								nisl sit amet auctor sodales. Morbi id est quam. Mauris nisl nibh, faucibus ultrices tempus eget, tristique venenatis
								augue. Ut sollicitudin posuere lectus, in venenatis mauris auctor vel. Nam a aliquam turpis, a placerat metus. Morbi
								in arcu laoreet, elementum dolor sit amet, bibendum ex.
							</p>
						</section>
					</div>
				</main>

				<aside className="dc-velociraptor-pack-sidebar">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, nisl a viverra eleifend, enim ipsum iaculis nisl, at
						viverra mi purus mattis urna. Donec semper tincidunt feugiat. Aliquam erat volutpat. Mauris facilisis augue eu odio aliquam
						ultricies in et risus. Fusce laoreet eros volutpat, tempor lacus quis, tristique leo. Morbi sapien enim, faucibus ut accumsan
						vel, tempor quis nibh. Sed cursus urna non ante vehicula fermentum.
					</p>
				</aside>

				<footer className="dc-velociraptor-pack-footer">
					A template by{' '}
					<a href="//display.coffee/cheat-codes" target="_blank" rel="noreferrer">
						displaycoffee
					</a>
					.
				</footer>
			</div>
		</div>
	);
};

/* Code blocks */
const cb01 = `import { VelociraptorPack } from './VelociraptorPack';`;
const cb02 = `<VelociraptorPack />`;
const cb03 = `background: url('//display.coffee/assets/images/cheat-codes/velociraptor-pack-bg.jpg') no-repeat;`;
const cb04 = `<style>
	/* Copied styles go here */
</style>`;
const cb05 = `<!-- Copy styles and paste into stylesheet -->
<link rel="stylesheet" href="velociraptor-pack.css" />`;
const cb06 = `@import url('velociraptor-pack.css');`;
const cb07 = `import 'velociraptor-pack.css';`;
const cb08 = `.dc-velociraptor-pack {
	max-width: 700px;
}`;
const cb09 = `@import 'velociraptor-pack.scss';`;
const cb10 = `import 'velociraptor-pack.scss';`;
const cb11 = `$velociraptor-pack-max-width: 700px; // max width`;
