/* Local components */
import { CheatCodesSection } from '../CheatCodes';
import { CodeBlock, Preview } from '../../../components/blocks/Blocks';

export const WishYouWereHere = () => {
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

			<Preview className="preview-cheat-codes preview-wish-you-were-here">
				<style>
					@import
					url('//fonts.googleapis.com/css2?family=Damion&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
				</style>
				<div className="dc-wish-you-were-here displaycoffee">
					<div className="dc-wish-you-were-here-banner">
						<h3 className="dc-wish-you-were-here-title">Wish you were here...</h3>
						<div className="dc-wish-you-were-here-circles">
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>
					<div className="dc-wish-you-were-here-content">
						<div className="dc-wish-you-were-here-row">
							<div className="dc-wish-you-were-here-column dc-wish-you-were-here-column-01">
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
									<span className="dc-wish-you-were-here-separator"></span>
									<a href="/">Link 02</a>
									<span className="dc-wish-you-were-here-separator"></span>
									<a href="/">Link 03</a>
								</p>
							</div>
							<div className="dc-wish-you-were-here-column dc-wish-you-were-here-column-02">
								<h4 className="dc-wish-you-were-here-title">Biography</h4>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor omnis est quam accusantium! Ut corporis
									consequatur, <a href="/">nisi assumenda veniam</a>, necessitatibus. Obcaecati porro optio fuga quod itaque,
									quibusdam odit qui nobis.
								</p>
								<p>
									Neque possimus ipsam quas, corporis vitae at illo, ullam culpa non tempora dicta modi quibusdam saepe ipsa
									corrupti. <a href="/">Quae</a> aliquid fuga reiciendis ipsam suscipit ex, nobis maiores excepturi, tempora. Ab.
								</p>
								<p>
									Recusandae a <a href="/">ipsum</a> impedit laborum fugiat nihil esse quis libero hic quidem sapiente delectus cum
									aliquid laudantium suscipit dolore, <a href="/">consectetur dolor</a> incidunt nam ipsa voluptas eius sunt
									mollitia. Sit, animi!
								</p>
							</div>
						</div>
					</div>
				</div>
			</Preview>
		</>
	);
};

/* Code blocks */
const cb1 = `.dc-wish-you-were-here {
	max-width: 650px;
}`;
const cb2 = `$wish-you-were-here-breakpoint: 768px; // breakpoint for desktop styles`;
const cb3 = `@import url('https://fonts.googleapis.com/css2?family=Damion&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');`;
const cb4 = `background: url('//display.coffee/assets/images/cheat-codes/wish-you-were-here.jpg') no-repeat;`;
