/* Local scripts */
import { codeBlocks } from './scripts/framer-motion-code-blocks';

/* Local components */
import { FramerMotionPreview } from './FramerMotionPreview';
import { CheatCodesSection } from '../../CheatCodes';
import { CodeBlock, CodeInline, Preview } from '../../../../components/blocks/Blocks';

export const FramerMotion = () => {
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
						<dd>React, JavaScript</dd>
					</div>
					<div className="definition-list-item">
						<dt>Responsive</dt>
						<dd>Yes</dd>
					</div>
					<div className="definition-list-item">
						<dt>Dependency</dt>
						<dd>
							<a href="//www.framer.com/motion/" target="_blank" rel="noreferrer">
								framer-motion
							</a>
						</dd>
					</div>
				</dl>
			</CheatCodesSection>

			<CheatCodesSection header={'Usage'}>
				<h4 className="h-remove-shadow">Install</h4>
				<p>
					Add <CodeInline>framer-motion</CodeInline> to your project.
				</p>
				<CodeBlock header={'npm'}>{codeBlocks[0]}</CodeBlock>

				<h4 className="h-remove-shadow">Import</h4>
				<p>
					Import <CodeInline>motion</CodeInline> from <CodeInline>framer-motion</CodeInline> along with <CodeInline>useState</CodeInline>{' '}
					for the replay trigger.
				</p>
				<CodeBlock header={'React'}>{codeBlocks[1]}</CodeBlock>

				<h4 className="h-remove-shadow">Variants</h4>
				<p>
					Define a <CodeInline>container</CodeInline> variant that staggers its children and a <CodeInline>card</CodeInline> variant for the
					individual entrance animation.
				</p>
				<CodeBlock header={'JavaScript'}>{codeBlocks[2]}</CodeBlock>

				<h4 className="h-remove-shadow">Component</h4>
				<p>
					Pass <CodeInline>variants</CodeInline>, <CodeInline>initial</CodeInline>, and <CodeInline>animate</CodeInline> to the container{' '}
					<CodeInline>motion.div</CodeInline>. Child <CodeInline>motion.div</CodeInline> elements inherit the variant names and animate
					automatically. Changing the <CodeInline>key</CodeInline> prop remounts the element, replaying the animation.
				</p>
				<CodeBlock header={'React component'}>{codeBlocks[3]}</CodeBlock>
			</CheatCodesSection>

			<Preview className="preview-cheat-codes preview-framer-motion">
				<FramerMotionPreview />
			</Preview>
		</>
	);
};
