/* Scripts */
import { codeBlocks } from './scripts/framer-motion-code-blocks';

/* Components */
import { FramerMotion as FramerMotionPreview } from './FramerMotionPreview';
import { CheatCodesSection } from '../../CheatCodes';
import { CodeBlock, CodeInline, Preview } from '../../../../components/blocks/Blocks';

export const FramerMotion = () => {
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
				</dl>
			</CheatCodesSection>

			<CheatCodesSection header={'Usage'}>
				<h4 className="h-remove-shadow">Source / repo</h4>
				<p>
					<a href="//github.com/displaycoffee/cheat-codes/tree/production/framer-motion" target="_blank" rel="noreferrer">
						View @ displaycoffee
					</a>
				</p>

				<h4 className="h-remove-shadow">React</h4>
				<p>Add dependencies for "Framer Motion".</p>
				<CodeBlock header={'Framer Motion install'}>{codeBlocks[0]}</CodeBlock>
				<p>Then, copy the JSX component from the link below.</p>
				<p>
					<a href="//github.com/displaycoffee/cheat-codes/blob/production/framer-motion/FramerMotion.jsx" target="_blank" rel="noreferrer">
						framer-motion/FramerMotion.jsx
					</a>
				</p>
				<CodeBlock header={'React import'}>{codeBlocks[1]}</CodeBlock>
				<CodeBlock header={'React component'}>{codeBlocks[2]}</CodeBlock>
				<p>
					Within the component, there is a <CodeInline>container</CodeInline> object that staggers its children and a{' '}
					<CodeInline>card</CodeInline> variant object for the individual entrance animation. Then we pass <CodeInline>variants</CodeInline>
					, <CodeInline>initial</CodeInline>, and <CodeInline>animate</CodeInline> to the container <CodeInline>motion.div</CodeInline> (
					<CodeInline>dc-framer-motion-row</CodeInline>). Child <CodeInline>motion.div</CodeInline> elements inherit the variant names and
					animate automatically. Changing the <CodeInline>key</CodeInline> prop remounts the element, replaying the animation.
				</p>
				<p>
					An additional thing to note is that the <CodeInline>motion.div</CodeInline> element can be any HTML element. For example:{' '}
					<CodeInline>motion.div</CodeInline> can be replaced with <CodeInline>motion.section</CodeInline> for a{' '}
					<CodeInline>section</CodeInline> tag.
				</p>
				<p>
					The component accepts a <CodeInline>cards</CodeInline> prop which is an array of cards. Each item in the array is an object and
					should contain an <CodeInline>id</CodeInline>, <CodeInline>title</CodeInline>, and <CodeInline>description</CodeInline> (though
					this can be modified as needed).
				</p>
				<CodeBlock header={'Cards array'}>{codeBlocks[3]}</CodeBlock>

				<h4 className="h-remove-shadow">CSS</h4>
				<p>If using CSS and not Sass, copy the styles from the link below and add according to your preferred method.</p>
				<p>
					<a href="//github.com/displaycoffee/cheat-codes/blob/production/framer-motion/framer-motion.css" target="_blank" rel="noreferrer">
						framer-motion/framer-motion.css
					</a>
				</p>
				<CodeBlock header={'Style block'}>{codeBlocks[4]}</CodeBlock>
				<CodeBlock header={'Stylesheet'}>{codeBlocks[5]}</CodeBlock>
				<CodeBlock header={'CSS import'}>{codeBlocks[6]}</CodeBlock>
				<CodeBlock header={'React import'}>{codeBlocks[7]}</CodeBlock>

				<h4 className="h-remove-shadow">Sass</h4>
				<p>If using Sass and not CSS, copy the styles from the link below and add according to your preferred method.</p>
				<p>
					<a
						href="//github.com/displaycoffee/cheat-codes/blob/production/framer-motion/framer-motion.scss"
						target="_blank"
						rel="noreferrer"
					>
						framer-motion/framer-motion.scss
					</a>
				</p>
				<CodeBlock header={'Sass import'}>{codeBlocks[7]}</CodeBlock>
				<CodeBlock header={'React import'}>{codeBlocks[8]}</CodeBlock>
			</CheatCodesSection>

			<Preview className="preview-cheat-codes preview-framer-motion">
				<FramerMotionPreview cards={cards} />
			</Preview>
		</>
	);
};

const cards = [
	{
		id: 1,
		title: 'Stagger',
		description: 'Children animate in sequence using staggerChildren on the container variant.',
	},
	{
		id: 2,
		title: 'Fade + Slide',
		description: 'Opacity and Y-axis transitions combine for a smooth entrance effect.',
	},
	{
		id: 3,
		title: 'Hover',
		description: 'whileHover and whileTap respond to pointer interactions in real time.',
	},
];
