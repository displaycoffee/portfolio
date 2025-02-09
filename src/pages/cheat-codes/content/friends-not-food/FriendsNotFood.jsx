/* Local components */
import { CheatCodesSection } from '../../CheatCodes';
import { CodeBlock, CodeInline, Preview } from '../../../../components/blocks/Blocks';

export const FriendsNotFood = () => {
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
					<a href="//github.com/displaycoffee/cheat-codes/tree/production/friends-not-food" target="_blank" rel="noreferrer">
						View @ displaycoffee
					</a>
				</p>

				<h5 className="h-remove-shadow">HTML or React</h5>
				<p>
					The shark gif can be altered by changing the below <CodeInline>img</CodeInline> source. If possible, please re-host any images and
					upload to your own server.
				</p>
				<CodeBlock header={'Images'}>{cb1}</CodeBlock>

				<h5 className="h-remove-shadow">HTML</h5>
				<p>Copy the template HTML and place it on the page.</p>
				<p>
					<a
						href="//github.com/displaycoffee/cheat-codes/blob/production/friends-not-food/friends-not-food.html"
						target="_blank"
						rel="noreferrer"
					>
						friends-not-food/friends-not-food.html
					</a>
				</p>

				<h5 className="h-remove-shadow">React</h5>
				<p>Copy the JSX component from the link below and add according to your preferred method.</p>
				<p>
					<a
						href="//github.com/displaycoffee/cheat-codes/blob/production/friends-not-food/FriendsNotFood.jsx"
						target="_blank"
						rel="noreferrer"
					>
						friends-not-food/FriendsNotFood.jsx
					</a>
				</p>
				<CodeBlock header={'React import'}>{cb2}</CodeBlock>
				<CodeBlock header={'React component'}>{cb3}</CodeBlock>

				<h5 className="h-remove-shadow">CSS or Sass</h5>
				<p>
					The fonts are from{' '}
					<a href="//fonts.google.com" target="_blank" rel="noreferrer">
						Google Fonts
					</a>{' '}
					and are imported into the CSS files. You can change the fonts to whatever you'd like.
				</p>
				<CodeBlock header={'Fonts'}>{cb4}</CodeBlock>
				<p>
					The image is a background image in the styles and can be altered by updating the below url. If possible, please re-host any images
					and upload to your own server.
				</p>
				<CodeBlock header={'Images'}>{cb5}</CodeBlock>

				<h5 className="h-remove-shadow">CSS</h5>
				<p>If using CSS and not Sass, copy the styles from the link below and add according to your preferred method.</p>
				<p>
					<a
						href="//github.com/displaycoffee/cheat-codes/blob/production/friends-not-food/friends-not-food.css"
						target="_blank"
						rel="noreferrer"
					>
						friends-not-food/friends-not-food.css
					</a>
				</p>
				<CodeBlock header={'Style block'}>{cb6}</CodeBlock>
				<CodeBlock header={'Stylesheet'}>{cb7}</CodeBlock>
				<CodeBlock header={'CSS import'}>{cb8}</CodeBlock>
				<CodeBlock header={'React import'}>{cb9}</CodeBlock>
				<p>
					To change the <CodeInline>max-width</CodeInline>, look for the following code at the 541px breakpoint rule:
				</p>
				<CodeBlock header={'CSS'}>{cb10}</CodeBlock>

				<h5 className="h-remove-shadow">Sass</h5>
				<p>If using Sass and not CSS, copy the styles from the link below and add according to your preferred method.</p>
				<p>
					<a
						href="//github.com/displaycoffee/cheat-codes/blob/production/friends-not-food/friends-not-food.scss"
						target="_blank"
						rel="noreferrer"
					>
						friends-not-food/friends-not-food.scss
					</a>
				</p>
				<CodeBlock header={'Sass import'}>{cb11}</CodeBlock>
				<CodeBlock header={'React import'}>{cb12}</CodeBlock>
				<p>
					There is a variable configuration to change the <CodeInline>max-width</CodeInline> of the template:
				</p>
				<CodeBlock header={'Sass'}>{cb13}</CodeBlock>
			</CheatCodesSection>

			<Preview className="preview-cheat-codes preview-friends-not-food">
				<FriendsNotFoodPreview />
			</Preview>
		</>
	);
};

export const FriendsNotFoodPreview = () => {
	return (
		<div className="dc-friends-not-food displaycoffee">
			<div className="dc-friends-not-food-container dc-friends-not-food-vertical">
				<div className="dc-friends-not-food-hover dc-friends-not-food-font">Hover For More</div>

				<div className="dc-friends-not-food-information-01">
					<div className="dc-friends-not-food-top-bar">
						<div className="dc-friends-not-food-name">
							<h3 className="dc-friends-not-food-font">Imma Shark, Baby</h3>
						</div>

						<div className="dc-friends-not-food-species">
							<p>
								<strong>Species:</strong> Shark, duh.
							</p>
						</div>

						<div className="dc-friends-not-food-avatar dc-friends-not-food-absolute">
							<img
								src="//display.coffee/assets/images/cheat-codes/friends-not-food-shark.gif"
								alt="Shark swimming"
								title="Shark swimming"
							/>
						</div>
					</div>

					<div className="dc-friends-not-food-profile">
						<div className="dc-friends-not-food-row">
							<div className="dc-friends-not-food-title dc-friends-not-food-column">
								<div className="dc-friends-not-food-block">
									<h4 className="dc-friends-not-food-font">Best Shark In the Ocean!</h4>
								</div>
							</div>
							<div className="dc-friends-not-food-column">
								<div className="dc-friends-not-food-block">
									<p>
										482<span className="dc-friends-not-food-font">Posts</span>
									</p>
								</div>
							</div>
							<div className="dc-friends-not-food-column">
								<div className="dc-friends-not-food-block">
									<p>
										25<span className="dc-friends-not-food-font">Topics</span>
									</p>
								</div>
							</div>
							<div className="dc-friends-not-food-column">
								<div className="dc-friends-not-food-block">
									<p>
										22 years<span className="dc-friends-not-food-font">Age</span>
									</p>
								</div>
							</div>
							<div className="dc-friends-not-food-column">
								<div className="dc-friends-not-food-block">
									<p>
										Male<span className="dc-friends-not-food-font">Gender</span>
									</p>
								</div>
							</div>
							<div className="dc-friends-not-food-column">
								<div className="dc-friends-not-food-block">
									<p>
										Blood<span className="dc-friends-not-food-font">Likes</span>
									</p>
								</div>
							</div>
							<div className="dc-friends-not-food-column">
								<div className="dc-friends-not-food-block">
									<p>
										Being on land<span className="dc-friends-not-food-font">Dislikes</span>
									</p>
								</div>
							</div>
							<div className="dc-friends-not-food-quote dc-friends-not-food-column">
								<div className="dc-friends-not-food-block">
									<p>
										I am a nice shark, not a mindless eating machine. If I am to change this image, I must first change myself.
										Fish are friends, not food.
										<span className="dc-friends-not-food-font">- Bruce</span>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="dc-friends-not-food-information-02 dc-friends-not-food-vertical dc-friends-not-food-absolute">
					<div className="dc-friends-not-food-block">
						<p>
							Quagga mussel cat shark is batfish frogfish. . Peppered moray clownfish hawkfish at seahorse hammerhead a funny snake eel.
							Wobbegong shark blue whale gold damsel faucet snail, in snake eel sea coral grouper. The crackin crazy Neon goby nurse
							shark moon. Quagga musse.
						</p>
						<p>
							Grey whale mermaid appeared. Fire fish pipefish blue tang, frogfish bicolor blenny at, quagga mussel and funny bannerfish.
							Milk shark swim Asian clam soldierfish. Banana wrasse in yellow pseudochromis non mermaid parrotfish mystery snail. In
							seahorse banded eel, butter hamlet are butterflyfish blue tang, wabas.
						</p>
					</div>

					<div className="dc-friends-not-food-block">
						<p>
							Pigtoe sea coral king crab heelsplitter, in painted comber Banded eel bicolor blenny. Bursa trigger funny filefish, a
							Snaggletooth shark lobster in. Spotted sweetlips loving in catshark pebblesnail at seabass with faucet snail. Yellow
							pseudochromis weasel shark shadow, darkness in deap ocean an, Motionless Wabash pigtoe Full moon. Fishies asian cla
						</p>
						<p>
							Painted comber, king crab a elktoe a, grey whale seahorse. The crackin crazy Neon goby nurse shark moon. Hippo tang gold
							damsel peaclam.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

/* Code blocks */
const cb1 = `<img src="//display.coffee/assets/images/cheat-codes/friends-not-food-shark.gif" alt="Shark swimming" title="Shark swimming" />`;
const cb2 = `import { FriendsNotFood } from './FriendsNotFood';`;
const cb3 = `<FriendsNotFood />`;
const cb4 = `@import url('//fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Oswald:wght@200..700&display=swap');`;
const cb5 = `background: url('//display.coffee/assets/images/cheat-codes/friends-not-food-bg.jpg') no-repeat;`;
const cb6 = `<style>
	/* Copied styles go here */
</style>`;
const cb7 = `<!-- Copy styles and paste into stylesheet -->
<link rel="stylesheet" href="friends-not-food.css" />`;
const cb8 = `@import url('friends-not-food.css');`;
const cb9 = `import 'friends-not-food.css';`;
const cb10 = `.dc-friends-not-food {
	max-width: 400px;
}`;
const cb11 = `@import 'friends-not-food.scss';`;
const cb12 = `import 'friends-not-food.scss';`;
const cb13 = `$friends-not-food-max-width: 400px; // max width for desktop`;
