/* Packages */
import { Link } from 'react-router-dom';

/* Scripts */
import { codeBlocks } from './scripts/best-friends-code-blocks';

/* Components */
import { BestFriends as BestFriendsPreview } from './BestFriendsPreview';
import { CheatCodesSection } from '../../CheatCodes';
import { CodeBlock, CodeInline, LinkExternal, List, ListItem, Preview } from '../../../../components/blocks/Blocks';

export const BestFriends = () => {
	return (
		<>
			<CheatCodesSection header={'Information'}>
				<List variant="dl">
					<ListItem term="Skill level">Medium</ListItem>
					<ListItem term="Languages">HTML / JavaScript or React, CSS or Sass</ListItem>
					<ListItem term="Responsive">Yes</ListItem>
					<ListItem term="Note">
						This requires code from{' '}
						<Link to="/cheat-codes/hello-content-a-tabbing-script-091615">"Hello Content! (A Tabbing Script)"</Link>. For more information
						on how to use this snippet, see the linked article.
					</ListItem>
				</List>
			</CheatCodesSection>

			<CheatCodesSection header={'Usage'}>
				<h4 className="h-remove-shadow">Source / repo</h4>
				<p>
					<LinkExternal href="//github.com/displaycoffee/cheat-codes/tree/production/best-friends">View @ displaycoffee</LinkExternal>
				</p>

				<h4 className="h-remove-shadow">HTML or React</h4>
				<p>
					The banner can be altered by changing the below <CodeInline>img</CodeInline> source. If possible, please re-host any images and
					upload to your own server.
				</p>
				<CodeBlock header={'Images'}>{codeBlocks[0]}</CodeBlock>

				<h4 className="h-remove-shadow">HTML</h4>
				<p>If using HTML and not React, copy the template HTML and place it on the page.</p>
				<p>
					<LinkExternal href="//github.com/displaycoffee/cheat-codes/blob/production/best-friends/best-friends.html">
						best-friends/best-friends.html
					</LinkExternal>
				</p>

				<h4 className="h-remove-shadow">JavaScript</h4>
				<p>If using JavaScript and not React, copy the script from the link below and add according to your preferred method.</p>
				<p>
					<LinkExternal href="//github.com/displaycoffee/cheat-codes/blob/production/hello-content/hello-content.js">
						hello-content/hello-content.js
					</LinkExternal>
				</p>
				<CodeBlock header={'Script block'}>{codeBlocks[1]}</CodeBlock>
				<CodeBlock header={'Script src'}>{codeBlocks[2]}</CodeBlock>
				<p>
					You will then need to initialize tabs, which can be done with the below function. This function can also be initialized in a
					JavaScript file, but in either case, this initialization must come <strong>after</strong> adding the above script block.
				</p>
				<CodeBlock header={'JavaScript'}>{codeBlocks[3]}</CodeBlock>

				<h4 className="h-remove-shadow">React</h4>
				<p>
					If using React and not JavaScript, copy both JSX components from the link below and add according to your preferred method. If
					you're already using <CodeInline>HelloContent</CodeInline>, you don't need to get it again.
				</p>
				<p>
					<LinkExternal href="//github.com/displaycoffee/cheat-codes/blob/production/hello-content/HelloContent.jsx">
						hello-content/HelloContent.jsx
					</LinkExternal>
				</p>
				<p>
					<LinkExternal href="//github.com/displaycoffee/cheat-codes/blob/production/best-friends/BestFriends.jsx">
						best-friends/BestFriends.jsx
					</LinkExternal>
				</p>
				<CodeBlock header={'React import'}>{codeBlocks[4]}</CodeBlock>
				<CodeBlock header={'React component'}>{codeBlocks[5]}</CodeBlock>
				<p>
					You may need to change the import path in the <CodeInline>BestFriends</CodeInline> component (line 2) depending on where you've
					placed the <CodeInline>HelloContent</CodeInline> component.
				</p>

				<h4 className="h-remove-shadow">CSS</h4>
				<p>
					If using CSS and not Sass, copy the styles from both links below and add according to your preferred method. If you're already
					using <CodeInline>hello-content.css</CodeInline>, you don't need to get it again.
				</p>
				<p>
					<LinkExternal href="//github.com/displaycoffee/cheat-codes/blob/production/hello-content/hello-content.css">
						hello-content/hello-content.css
					</LinkExternal>
				</p>
				<p>
					<LinkExternal href="//github.com/displaycoffee/cheat-codes/blob/production/best-friends/best-friends.css">
						best-friends/best-friends.css
					</LinkExternal>
				</p>
				<CodeBlock header={'Style block'}>{codeBlocks[6]}</CodeBlock>
				<CodeBlock header={'Stylesheet'}>{codeBlocks[7]}</CodeBlock>
				<CodeBlock header={'CSS import'}>{codeBlocks[8]}</CodeBlock>
				<CodeBlock header={'React import'}>{codeBlocks[9]}</CodeBlock>

				<h4 className="h-remove-shadow">Sass</h4>
				<p>
					If using Sass and not CSS, copy the styles from both links below and add according to your preferred method. If you're already
					using <CodeInline>hello-content.scss</CodeInline>, you don't need to get it again.
				</p>
				<p>
					<LinkExternal href="//github.com/displaycoffee/cheat-codes/blob/production/hello-content/hello-content.scss">
						hello-content/hello-content.scss
					</LinkExternal>
				</p>
				<p>
					<LinkExternal href="//github.com/displaycoffee/cheat-codes/blob/production/best-friends/best-friends.scss">
						best-friends/best-friends.scss
					</LinkExternal>
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
