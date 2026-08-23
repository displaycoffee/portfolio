/* Scripts */
import { codeBlocks } from './scripts/view-transitions-code-blocks';

/* Components */
import { ViewTransitions as ViewTransitionsPreview } from './ViewTransitionsPreview';
import { CheatCodesSection } from '../../CheatCodes';
import { CodeBlock, CodeInline, Preview } from '../../../../components/blocks/Blocks';
import { LinkExternal } from '../../../../components/blocks-2/Blocks';

export const ViewTransitions = () => {
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
						<dd>React, JavaScript, and CSS or Sass</dd>
					</div>
					<div className="definition-list-item">
						<dt>Responsive</dt>
						<dd>Yes</dd>
					</div>
					<div className="definition-list-item">
						<dt>Support</dt>
						<dd>
							<LinkExternal href="//caniuse.com/view-transitions">caniuse</LinkExternal>
						</dd>
					</div>
				</dl>
			</CheatCodesSection>

			<CheatCodesSection header={'Usage'}>
				<h4 className="h-remove-shadow">Source / repo</h4>
				<p>
					<LinkExternal href="//github.com/displaycoffee/cheat-codes/tree/production/view-transitions">View @ displaycoffee</LinkExternal>
				</p>

				<h4 className="h-remove-shadow">React</h4>
				<p>Copy the JSX component from the link below.</p>
				<p>
					<LinkExternal href="//github.com/displaycoffee/cheat-codes/blob/production/view-transitions/ViewTransitions.jsx">
						view-transitions/ViewTransitions.jsx
					</LinkExternal>
				</p>
				<CodeBlock header={'React import'}>{codeBlocks[0]}</CodeBlock>
				<CodeBlock header={'React component'}>{codeBlocks[1]}</CodeBlock>
				<p>
					<CodeInline>flushSync</CodeInline> is imported from <CodeInline>react-dom</CodeInline> to force React to flush state updates
					synchronously inside the transition callback. Without it, React may batch the update and the browser will capture an empty
					transition.
				</p>
				<p>
					Inside the <CodeInline>withPreviewTransition</CodeInline> function, the transition name is set dynamically - only for the duration
					of the transition - so the browser treats the content element as a named capture group just for that animation. Once finished, the
					name is removed to prevent it from interfering with future transitions. The browser captures a snapshot of the current state, runs
					the callback, then animates between the two snapshots.
				</p>
				<p>
					The component accepts an <CodeInline>items</CodeInline> prop which is an array of items. Each item in the array is an object and
					should contain an <CodeInline>id</CodeInline>, <CodeInline>title</CodeInline>, <CodeInline>excerpt</CodeInline>, and{' '}
					<CodeInline>body</CodeInline> (though this can be modified as needed).
				</p>
				<CodeBlock header={'Items array'}>{codeBlocks[2]}</CodeBlock>

				<h4 className="h-remove-shadow">CSS</h4>
				<p>If using CSS and not Sass, copy the styles from the link below and add according to your preferred method.</p>
				<p>
					<LinkExternal href="//github.com/displaycoffee/cheat-codes/blob/production/view-transitions/view-transitions.css">
						view-transitions/view-transitions.css
					</LinkExternal>
				</p>
				<CodeBlock header={'Style block'}>{codeBlocks[3]}</CodeBlock>
				<CodeBlock header={'Style block'}>{codeBlocks[4]}</CodeBlock>
				<CodeBlock header={'Stylesheet'}>{codeBlocks[5]}</CodeBlock>
				<CodeBlock header={'CSS import'}>{codeBlocks[6]}</CodeBlock>

				<h4 className="h-remove-shadow">Sass</h4>
				<p>If using Sass and not CSS, copy the styles from the link below and add according to your preferred method.</p>
				<p>
					<LinkExternal href="//github.com/displaycoffee/cheat-codes/blob/production/view-transitions/view-transitions.scss">
						view-transitions/view-transitions.scss
					</LinkExternal>
				</p>
				<CodeBlock header={'Sass import'}>{codeBlocks[7]}</CodeBlock>
				<CodeBlock header={'React import'}>{codeBlocks[8]}</CodeBlock>
			</CheatCodesSection>

			<Preview className="preview-cheat-codes preview-view-transitions">
				<ViewTransitionsPreview items={items} />
			</Preview>
		</>
	);
};

const items = [
	{
		id: 1,
		title: 'Part I',
		excerpt: 'An introduction to the basics.',
		body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra, sapien vel suscipit tempus, nibh erat hendrerit libero, sed ultrices massa justo non lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed vitae ante quis lectus egestas placerat sed non eros. Nulla efficitur lectus massa, nec tincidunt tortor accumsan non. Phasellus bibendum, elit ut euismod varius, magna diam porta leo, vitae tincidunt arcu eros vel sem. Nullam et lacus quis dui imperdiet ornare eget a risus. Aenean vel congue quam. Etiam nulla eros, convallis quis purus eget, dignissim interdum mi. Duis sit amet consectetur felis.',
	},
	{
		id: 2,
		title: 'Part II',
		excerpt: 'Things get interesting.',
		body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra, sapien vel suscipit tempus, nibh erat hendrerit libero, sed ultrices massa justo non lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed vitae ante quis lectus egestas placerat sed non eros. Nulla efficitur lectus massa, nec tincidunt tortor accumsan non. Phasellus bibendum, elit ut euismod varius, magna diam porta leo, vitae tincidunt arcu eros vel sem. Nullam et lacus quis dui imperdiet ornare eget a risus. Aenean vel congue quam. Etiam nulla eros, convallis quis purus eget, dignissim interdum mi. Duis sit amet consectetur felis.',
	},
	{
		id: 3,
		title: 'Part III',
		excerpt: 'Where it all comes together.',
		body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra, sapien vel suscipit tempus, nibh erat hendrerit libero, sed ultrices massa justo non lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed vitae ante quis lectus egestas placerat sed non eros. Nulla efficitur lectus massa, nec tincidunt tortor accumsan non. Phasellus bibendum, elit ut euismod varius, magna diam porta leo, vitae tincidunt arcu eros vel sem. Nullam et lacus quis dui imperdiet ornare eget a risus. Aenean vel congue quam. Etiam nulla eros, convallis quis purus eget, dignissim interdum mi. Duis sit amet consectetur felis.',
	},
];
