/* React */
import { useContext, useId } from 'react';

/* Local styles */
import './styles/cheat-codes.scss';

/* Local scripts */
import { cheatCodes } from './scripts/cheat-codes';

/* Local components */
import { Context } from '../../context/Context';
import { Contents } from '../../components/contents/Contents';
import { HeaderIcon } from '../../components/blocks/Blocks';

export const CheatCodes = () => {
	const showContent = window.location.pathname == '/cheat-codes' ? true : false;
	const hasCheatCodes = cheatCodes && cheatCodes.length !== 0 ? true : false;

	// Options for cheat codes
	const options = {
		path: '/cheat-codes',
		navigation: {
			back: 'Back to "Cheat Codes"',
		},
	};

	return (
		<>
			{showContent && <HeaderIcon>CheatCodes</HeaderIcon>}

			<Contents contents={hasCheatCodes ? cheatCodes : false} options={options} />
		</>
	);
};

export const CheatCodesIntroduction = (props) => {
	const { children } = props;

	return (
		<div className="cheat-codes-introduction">
			<h4>Introduction</h4>

			{children}
		</div>
	);
};

export const CheatCodesSection = (props) => {
	const { header, children } = props;
	const fallbackId = useId().replace(/:/g, '');
	const context = useContext(Context);
	const utils = context.utils;

	return (
		<section id={`cheat-codes-section-${utils.handleize(header ? header : fallbackId)}`} className={`cheat-codes-section spacing-reset`}>
			{header ? <h4>{header}</h4> : null}

			{children}

			<div className="cheat-codes-top">
				<button className="cheat-codes-top-button a" onClick={(e) => utils.scrollTo(e, 'body')}>
					<span className="icon icon-angle-up"></span>Back to top
				</button>
			</div>
		</section>
	);
};

export const CheatCodesToc = (props) => {
	const { sections, offset } = props;
	const context = useContext(Context);
	const utils = context.utils;

	return (
		<div className="cheat-codes-toc">
			<h4>Table of Contents</h4>

			<ol>
				{sections.map((section) => (
					<li key={section}>
						<button
							className="a"
							onClick={(e) => utils.scrollTo(e, `#cheat-codes-section-${utils.handleize(section)}`, offset ? offset : 0)}
						>
							{section}
						</button>
					</li>
				))}
			</ol>
		</div>
	);
};

export const CheatCodesPreview = (props) => {
	const { className, children } = props;
	const previewClass = className ? ` cheat-codes-preview-${className}` : '';

	return (
		<>
			<h5>Display / Output</h5>
			<div className={`cheat-codes-preview${previewClass}`}>{children}</div>
		</>
	);
};
