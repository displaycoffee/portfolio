/* Local components */
import { CheatCodesIntroduction, CheatCodesToc, CheatCodesSection } from '../CheatCodes';
import { CodeBlock } from '../../../components/blocks/Blocks';

export const Test = () => {
	const sections = ['1', '2', '3', '4', '5', '6'];

	return (
		<>
			<CheatCodesIntroduction>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat culpa nemo dolorum laboriosam architecto odio, vel repudiandae
					facere modi laudantium cupiditate officia doloremque quos necessitatibus natus cumque? Aut, perspiciatis aliquam?
				</p>
			</CheatCodesIntroduction>

			<CheatCodesToc sections={sections} offset={50} />

			<CheatCodesSection header={sections[0]}>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat culpa nemo dolorum laboriosam architecto odio, vel repudiandae
					facere modi laudantium cupiditate officia doloremque quos necessitatibus natus cumque? Aut, perspiciatis aliquam?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat culpa nemo dolorum laboriosam architecto odio, vel repudiandae
					facere modi laudantium cupiditate officia doloremque quos necessitatibus natus cumque? Aut, perspiciatis aliquam?
				</p>
				<CodeBlock header={'HTML'}>{cb1}</CodeBlock>
			</CheatCodesSection>

			<CheatCodesSection header={sections[1]}>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat culpa nemo dolorum laboriosam architecto odio, vel repudiandae
					facere modi laudantium cupiditate officia doloremque quos necessitatibus natus cumque? Aut, perspiciatis aliquam?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat culpa nemo dolorum laboriosam architecto odio, vel repudiandae
					facere modi laudantium cupiditate officia doloremque quos necessitatibus natus cumque? Aut, perspiciatis aliquam?
				</p>
				<CodeBlock header={'HTML'}>{cb2}</CodeBlock>
			</CheatCodesSection>

			<CheatCodesSection header={sections[2]}>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat culpa nemo dolorum laboriosam architecto odio, vel repudiandae
					facere modi laudantium cupiditate officia doloremque quos necessitatibus natus cumque? Aut, perspiciatis aliquam?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat culpa nemo dolorum laboriosam architecto odio, vel repudiandae
					facere modi laudantium cupiditate officia doloremque quos necessitatibus natus cumque? Aut, perspiciatis aliquam?
				</p>
				<CodeBlock header={'HTML'}>{cb3}</CodeBlock>
			</CheatCodesSection>

			<CheatCodesSection header={sections[3]}>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat culpa nemo dolorum laboriosam architecto odio, vel repudiandae
					facere modi laudantium cupiditate officia doloremque quos necessitatibus natus cumque? Aut, perspiciatis aliquam?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat culpa nemo dolorum laboriosam architecto odio, vel repudiandae
					facere modi laudantium cupiditate officia doloremque quos necessitatibus natus cumque? Aut, perspiciatis aliquam?
				</p>
				<CodeBlock header={'HTML'}>{cb4}</CodeBlock>
			</CheatCodesSection>

			<CheatCodesSection header={sections[4]}>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat culpa nemo dolorum laboriosam architecto odio, vel repudiandae
					facere modi laudantium cupiditate officia doloremque quos necessitatibus natus cumque? Aut, perspiciatis aliquam?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat culpa nemo dolorum laboriosam architecto odio, vel repudiandae
					facere modi laudantium cupiditate officia doloremque quos necessitatibus natus cumque? Aut, perspiciatis aliquam?
				</p>
				<CodeBlock header={'HTML'}>{cb5}</CodeBlock>
			</CheatCodesSection>

			<CheatCodesSection header={sections[5]}>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat culpa nemo dolorum laboriosam architecto odio, vel repudiandae
					facere modi laudantium cupiditate officia doloremque quos necessitatibus natus cumque? Aut, perspiciatis aliquam?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat culpa nemo dolorum laboriosam architecto odio, vel repudiandae
					facere modi laudantium cupiditate officia doloremque quos necessitatibus natus cumque? Aut, perspiciatis aliquam?
				</p>
				<CodeBlock header={'HTML'}>{cb6}</CodeBlock>
			</CheatCodesSection>
		</>
	);
};

/* Code blocks */
const cb1 = `test`;
const cb2 = `test`;
const cb3 = `test`;
const cb4 = `test`;
const cb5 = `test`;
const cb6 = `test`;
