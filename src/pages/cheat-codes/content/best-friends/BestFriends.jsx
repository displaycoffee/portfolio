/* Local components */
import { HelloContentPreview } from '../hello-content/HelloContent';
import { CheatCodesSection } from '../../CheatCodes';
import { CodeBlock, CodeInline, Preview } from '../../../../components/blocks/Blocks';

export const BestFriends = () => {
	return (
		<>
			<CheatCodesSection header={'Information'}>
				<dl className="definition-list">
					<div className="definition-list-item">
						<dt>Skill level</dt>
						<dd>Medium</dd>
					</div>
					<div className="definition-list-item">
						<dt>Languages</dt>
						<dd>HTML / JavaScript or React, CSS or Sass</dd>
					</div>
					<div className="definition-list-item">
						<dt>Responsive</dt>
						<dd>Yes</dd>
					</div>
					<div className="definition-list-item">
						<dt>Note</dt>
						<dd>
							This requires code from{' '}
							<a href="/cheat-codes/hello-content-a-tabbing-script-091615">"Hello Content! (A Tabbing Script)"</a>. For more information
							on how to use this snippet, see the linked article.
						</dd>
					</div>
				</dl>
			</CheatCodesSection>

			<CheatCodesSection header={'Usage'}>
				<h5 className="h-remove-shadow">Source / repo</h5>
				<p>
					<a href="//github.com/displaycoffee/cheat-codes/tree/production/best-friends" target="_blank" rel="noreferrer">
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
				<p>If using HTML and not React, copy the template HTML and place it on the page.</p>
				<p>
					<a href="//github.com/displaycoffee/cheat-codes/blob/production/best-friends/best-friends.html" target="_blank" rel="noreferrer">
						best-friends/best-friends.html
					</a>
				</p>

				<h5 className="h-remove-shadow">JavaScript</h5>
				<p>If using JavaScript and not React, copy the script from the link below and add according to your preferred method.</p>
				<p>
					<a href="//github.com/displaycoffee/cheat-codes/blob/production/hello-content/hello-content.js" target="_blank" rel="noreferrer">
						hello-content/hello-content.js
					</a>
				</p>
				<CodeBlock header={'Script block'}>{cb02}</CodeBlock>
				<CodeBlock header={'Script src'}>{cb03}</CodeBlock>
				<p>
					You will then need to initialize tabs, which can be done with the below function. This function can also be initialized in a
					JavaScript file, but in either case, this initialization must come <strong>after</strong> adding the above script block.
				</p>
				<CodeBlock header={'JavaScript'}>{cb04}</CodeBlock>

				<h5 className="h-remove-shadow">React</h5>
				<p>
					If using React and not JavaScript, copy both JSX components from the link below and add according to your preferred method. If
					you're already using <CodeInline>HelloContent</CodeInline>, you don't need to get it again.
				</p>
				<p>
					<a href="//github.com/displaycoffee/cheat-codes/blob/production/hello-content/HelloContent.jsx" target="_blank" rel="noreferrer">
						hello-content/HelloContent.jsx
					</a>
				</p>
				<p>
					<a href="//github.com/displaycoffee/cheat-codes/blob/production/best-friends/BestFriends.jsx" target="_blank" rel="noreferrer">
						best-friends/BestFriends.jsx
					</a>
				</p>
				<CodeBlock header={'React import'}>{cb05}</CodeBlock>
				<CodeBlock header={'React component'}>{cb06}</CodeBlock>
				<p>
					You may need to change the import path in the <CodeInline>BestFriends</CodeInline> component (line 2) depending on where you've
					placed the <CodeInline>HelloContent</CodeInline> component.
				</p>

				<h5 className="h-remove-shadow">CSS</h5>
				<p>
					If using CSS and not Sass, copy the styles from both links below and add according to your preferred method. If you're already
					using <CodeInline>hello-content.css</CodeInline>, you don't need to get it again.
				</p>
				<p>
					<a href="//github.com/displaycoffee/cheat-codes/blob/production/hello-content/hello-content.css" target="_blank" rel="noreferrer">
						hello-content/hello-content.css
					</a>
				</p>
				<p>
					<a href="//github.com/displaycoffee/cheat-codes/blob/production/best-friends/best-friends.css" target="_blank" rel="noreferrer">
						best-friends/best-friends.css
					</a>
				</p>
				<CodeBlock header={'Style block'}>{cb07}</CodeBlock>
				<CodeBlock header={'Stylesheet'}>{cb08}</CodeBlock>
				<CodeBlock header={'CSS import'}>{cb09}</CodeBlock>
				<CodeBlock header={'React import'}>{cb10}</CodeBlock>

				<h5 className="h-remove-shadow">Sass</h5>
				<p>
					If using Sass and not CSS, copy the styles from both links below and add according to your preferred method. If you're already
					using <CodeInline>hello-content.scss</CodeInline>, you don't need to get it again.
				</p>
				<p>
					<a
						href="//github.com/displaycoffee/cheat-codes/blob/production/hello-content/hello-content.scss"
						target="_blank"
						rel="noreferrer"
					>
						hello-content/hello-content.scss
					</a>
				</p>
				<p>
					<a href="//github.com/displaycoffee/cheat-codes/blob/production/best-friends/best-friends.scss" target="_blank" rel="noreferrer">
						best-friends/best-friends.scss
					</a>
				</p>
				<CodeBlock header={'Sass import'}>{cb11}</CodeBlock>
				<CodeBlock header={'React import'}>{cb12}</CodeBlock>
			</CheatCodesSection>

			<Preview className="preview-cheat-codes preview-hello-content preview-best-friends">
				<BestFriendsPreview />
			</Preview>
		</>
	);
};

export const BestFriendsPreview = () => {
	// Define tab content
	const tabs = [
		{
			label: 'Tab 01',
			content: `<h4>This Is Tab 01 Content</h4>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis laudantium, fugiat pariatur, saepe tenetur accusantium ut voluptates neque hic dolorum! <a href="/">Placeat</a> unde qui cupiditate numquam aliquid, id illo. Quibusdam, ducimus.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illum dicta quidem laudantium sed voluptas ipsam repudiandae corporis veritatis, nostrum fugit harum, nihil dolorem saepe perferendis <a href="/">cumque</a> temporibus eum. Atque.</p>`,
		},
		{
			label: 'Tab 02',
			content: `<h4>This Is Tab 02 Content!</h4>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis laudantium, fugiat pariatur, saepe tenetur accusantium ut voluptates neque hic dolorum! Placeat unde qui cupiditate numquam aliquid, id illo. Quibusdam, ducimus.</p>
			<ul>
				<li>List item 01</li>
				<li>List item 02</li>
				<li>List item 03</li>
			</ul>`,
		},
		{
			label: 'Tab 03',
			content: `<h4>This Is Tab 03 Content!</h4>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos ipsa distinctio id, neque repellendus quod corrupti voluptas rerum accusantium minus molestiae. Deserunt, dolores ex sapiente iusto iure hic soluta assumenda.</p>`,
		},
		{
			label: 'Tab 04',
			content: `<h4>This Is Tab 04 Content!</h4>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>`,
		},
	];

	return tabs && tabs.length !== 0 ? (
		<div className="dc-best-friends displaycoffee">
			<header className="dc-best-friends-header">
				<img
					src="//display.coffee/assets/images/cheat-codes/best-friends-banner.jpg"
					alt="Best Friends - Banner"
					title="Best Friends - Banner"
				/>
				<h3>Best Friends</h3>
			</header>

			<HelloContentPreview tabs={tabs} defaultTab={1} />
		</div>
	) : null;
};

/* Code blocks */
const cb01 = `<img src="//display.coffee/assets/images/cheat-codes/best-friends-banner.jpg" alt="Best Friends - Banner" title="Best Friends - Banner" />`;
const cb02 = `<script type="text/javascript">
	// Copied JavaScript goes here
</script>`;
const cb03 = `<!-- Copy JavaScript and paste into script source -->
<script type="text/javascript" src="hello-content.js"></script>`;
const cb04 = `<script type="text/javascript">
	dcHelloContent.init();
</script>`;
const cb05 = `import { BestFriends } from './BestFriends';`;
const cb06 = `<BestFriends />`;
const cb07 = `<style>
	/* Copied styles go here */
</style>`;
const cb08 = `<!-- Copy styles and paste into stylesheet -->
<link rel="stylesheet" href="best-friends.css" />`;
const cb09 = `@import url('best-friends.css');`;
const cb10 = `import 'best-friends.css';`;
const cb11 = `@import 'best-friends';`;
const cb12 = `import 'best-friends.scss';`;
