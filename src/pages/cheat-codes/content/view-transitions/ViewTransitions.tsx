/* Local scripts */
import { codeBlocks } from './scripts/view-transitions-code-blocks';

/* Local components */
import { ViewTransitionsPreview } from './ViewTransitionsPreview';
import { CheatCodesSection } from '../../CheatCodes';
import { CodeBlock, CodeInline, Preview } from '../../../../components/blocks/Blocks';

export const ViewTransitions = () => {
	return (
		<>
			<CheatCodesSection header={'Information'}>
				<dl className="definition-list">
					<div className="definition-list-item">
						<dt>Skill level</dt>
						<dd>Intermediate</dd>
					</div>
					<div className="definition-list-item">
						<dt>Languages</dt>
						<dd>React, JavaScript, CSS</dd>
					</div>
					<div className="definition-list-item">
						<dt>Responsive</dt>
						<dd>Yes</dd>
					</div>
					<div className="definition-list-item">
						<dt>Dependency</dt>
						<dd>None (native browser API)</dd>
					</div>
					<div className="definition-list-item">
						<dt>Support</dt>
						<dd>
							<a href="//caniuse.com/view-transitions" target="_blank" rel="noreferrer">
								caniuse
							</a>
						</dd>
					</div>
				</dl>
			</CheatCodesSection>

			<CheatCodesSection header={'Usage'}>
				<h4 className="h-remove-shadow">Import</h4>
				<p>
					Import <CodeInline>flushSync</CodeInline> from <CodeInline>react-dom</CodeInline> to force React to flush state updates
					synchronously inside the transition callback. Without it, React may batch the update and the browser will capture an empty
					transition.
				</p>
				<CodeBlock header={'React'}>{codeBlocks[0]}</CodeBlock>

				<h4 className="h-remove-shadow">Basic usage</h4>
				<p>
					Wrap a state update in <CodeInline>document.startViewTransition()</CodeInline>. The browser captures a screenshot of the current
					state, runs the callback, then animates between the two snapshots. Always include a fallback for browsers that do not support the
					API.
				</p>
				<CodeBlock header={'JavaScript'}>{codeBlocks[1]}</CodeBlock>
			</CheatCodesSection>

			<Preview className="preview-cheat-codes preview-view-transitions">
				<ViewTransitionsPreview />
			</Preview>
		</>
	);
};
