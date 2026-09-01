/* Scripts */
import { codeBlocks } from './scripts/a-promise-code-blocks';

/* Components */
import { APromise as APromisePreview } from './APromisePreview';
import { CheatCodesSection } from '../../CheatCodes';
import { CodeBlock, CodeInline, LinkExternal, List, ListItem, Preview } from '../../../../components/blocks/Blocks';

export const APromise = () => {
	return (
		<>
			<CheatCodesSection header={'Information'}>
				<List variant="dl">
					<ListItem term="Skill level">Easy</ListItem>
					<ListItem term="Languages">HTML or React, CSS or Sass</ListItem>
					<ListItem term="Responsive">Yes</ListItem>
				</List>
			</CheatCodesSection>

			<CheatCodesSection header={'Usage'}>
				<h4 className="h-remove-shadow">Source / repo</h4>
				<p>
					<LinkExternal href="//github.com/displaycoffee/cheat-codes/tree/production/a-promise">View @ displaycoffee</LinkExternal>
				</p>

				<h4 className="h-remove-shadow">HTML or React</h4>
				<p>
					The avatar or leaf image can be altered by changing the below <CodeInline>img</CodeInline> source. If possible, please re-host any
					images and upload to your own server.
				</p>
				<CodeBlock header={'Images'}>{codeBlocks[0]}</CodeBlock>

				<h4 className="h-remove-shadow">HTML</h4>
				<p>Copy the template HTML and place it on the page.</p>
				<p>
					<LinkExternal href="//github.com/displaycoffee/cheat-codes/blob/production/a-promise/a-promise.html">
						a-promise/a-promise.html
					</LinkExternal>
				</p>

				<h4 className="h-remove-shadow">React</h4>
				<p>Copy the JSX component from the link below and add according to your preferred method.</p>
				<p>
					<LinkExternal href="//github.com/displaycoffee/cheat-codes/blob/production/a-promise/APromise.jsx">
						a-promise/APromise.jsx
					</LinkExternal>
				</p>
				<CodeBlock header={'React import'}>{codeBlocks[1]}</CodeBlock>
				<CodeBlock header={'React component'}>{codeBlocks[2]}</CodeBlock>

				<h4 className="h-remove-shadow">CSS</h4>
				<p>If using CSS and not Sass, copy the styles from the link below and add according to your preferred method.</p>
				<p>
					<LinkExternal href="//github.com/displaycoffee/cheat-codes/blob/production/a-promise/a-promise.css">
						a-promise/a-promise.css
					</LinkExternal>
				</p>
				<CodeBlock header={'Style block'}>{codeBlocks[3]}</CodeBlock>
				<CodeBlock header={'Stylesheet'}>{codeBlocks[4]}</CodeBlock>
				<CodeBlock header={'CSS import'}>{codeBlocks[5]}</CodeBlock>
				<CodeBlock header={'React import'}>{codeBlocks[6]}</CodeBlock>
				<p>
					To change the <CodeInline>max-width</CodeInline>, look for the following code at the 768px breakpoint rule:
				</p>
				<CodeBlock header={'CSS'}>{codeBlocks[7]}</CodeBlock>

				<h4 className="h-remove-shadow">Sass</h4>
				<p>If using Sass and not CSS, copy the styles from the link below and add according to your preferred method.</p>
				<p>
					<LinkExternal href="//github.com/displaycoffee/cheat-codes/blob/production/a-promise/a-promise.scss">
						a-promise/a-promise.scss
					</LinkExternal>
				</p>
				<CodeBlock header={'Sass import'}>{codeBlocks[8]}</CodeBlock>
				<CodeBlock header={'React import'}>{codeBlocks[9]}</CodeBlock>
				<p>
					There is a variable configuration to change the <CodeInline>max-width</CodeInline> of the template:
				</p>
				<CodeBlock header={'Sass'}>{codeBlocks[10]}</CodeBlock>
			</CheatCodesSection>

			<Preview className="preview-cheat-codes preview-a-promise">
				<APromisePreview />
			</Preview>
		</>
	);
};
