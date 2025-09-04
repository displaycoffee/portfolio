/* Local scripts */
import { codeBlocks } from './scripts/a-promise-code-blocks';

/* Local components */
import { APromise as APromisePreview } from './APromisePreview';
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
				<CodeBlock header={'Images'}>{codeBlocks[0]}</CodeBlock>

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
				<CodeBlock header={'React import'}>{codeBlocks[1]}</CodeBlock>
				<CodeBlock header={'React component'}>{codeBlocks[2]}</CodeBlock>

				<h5 className="h-remove-shadow">CSS</h5>
				<p>If using CSS and not Sass, copy the styles from the link below and add according to your preferred method.</p>
				<p>
					<a href="//github.com/displaycoffee/cheat-codes/blob/production/a-promise/a-promise.css" target="_blank" rel="noreferrer">
						a-promise/a-promise.css
					</a>
				</p>
				<CodeBlock header={'Style block'}>{codeBlocks[3]}</CodeBlock>
				<CodeBlock header={'Stylesheet'}>{codeBlocks[4]}</CodeBlock>
				<CodeBlock header={'CSS import'}>{codeBlocks[5]}</CodeBlock>
				<CodeBlock header={'React import'}>{codeBlocks[6]}</CodeBlock>
				<p>
					To change the <CodeInline>max-width</CodeInline>, look for the following code at the 768px breakpoint rule:
				</p>
				<CodeBlock header={'CSS'}>{codeBlocks[7]}</CodeBlock>

				<h5 className="h-remove-shadow">Sass</h5>
				<p>If using Sass and not CSS, copy the styles from the link below and add according to your preferred method.</p>
				<p>
					<a href="//github.com/displaycoffee/cheat-codes/blob/production/a-promise/a-promise.scss" target="_blank" rel="noreferrer">
						a-promise/a-promise.scss
					</a>
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
