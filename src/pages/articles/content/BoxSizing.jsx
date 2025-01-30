/* Local components */
import { HeaderIcon, CodeBlock } from '../../../components/blocks/Blocks';

const test = `code block
	code block2`;

export const BoxSizing = () => {
	return (
		<>
			<HeaderIcon>Box-Sizing: My Best Friend</HeaderIcon>

			<p>herllo</p>

			<CodeBlock header="test">{test}</CodeBlock>

			<CodeBlock header="test">
				code block 2
				<br />
				line 3
			</CodeBlock>
		</>
	);
};
