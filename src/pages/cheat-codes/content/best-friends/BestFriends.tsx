/* Local scripts */
import { codeBlocks } from './scripts/best-friends-code-blocks';

/* Local components */
import { BestFriends as BestFriendsPreview } from './BestFriendsPreview';
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
				<CodeBlock header={'Images'}>{codeBlocks[0]}</CodeBlock>

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
				<CodeBlock header={'Script block'}>{codeBlocks[1]}</CodeBlock>
				<CodeBlock header={'Script src'}>{codeBlocks[2]}</CodeBlock>
				<p>
					You will then need to initialize tabs, which can be done with the below function. This function can also be initialized in a
					JavaScript file, but in either case, this initialization must come <strong>after</strong> adding the above script block.
				</p>
				<CodeBlock header={'JavaScript'}>{codeBlocks[3]}</CodeBlock>

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
				<CodeBlock header={'React import'}>{codeBlocks[4]}</CodeBlock>
				<CodeBlock header={'React component'}>{codeBlocks[5]}</CodeBlock>
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
				<CodeBlock header={'Style block'}>{codeBlocks[6]}</CodeBlock>
				<CodeBlock header={'Stylesheet'}>{codeBlocks[7]}</CodeBlock>
				<CodeBlock header={'CSS import'}>{codeBlocks[8]}</CodeBlock>
				<CodeBlock header={'React import'}>{codeBlocks[9]}</CodeBlock>

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
				<CodeBlock header={'Sass import'}>{codeBlocks[10]}</CodeBlock>
				<CodeBlock header={'React import'}>{codeBlocks[11]}</CodeBlock>
			</CheatCodesSection>

			<Preview className="preview-cheat-codes preview-hello-content preview-best-friends">
				<BestFriendsPreview />
			</Preview>
		</>
	);
};
