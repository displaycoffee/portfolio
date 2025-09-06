/* React */
import { useContext, useId } from 'react';

/* Local scripts */
import { cheatCodes } from './scripts/cheat-codes';

/* Local components */
import { Context } from '../../context/Context';
import { Contents } from '../../components/contents/Contents';
import { HeaderIcon } from '../../components/blocks/Blocks';

export const CheatCodes = () => {
	const showContent = window.location.pathname == '/cheat-codes' ? true : false;
	const hasCheatCodes = cheatCodes && cheatCodes.length !== 0 ? true : false;

	// Contents for cheat codes
	const contents = {
		navigation: {
			back: 'Back to "Cheat Codes"',
		},
		path: '/cheat-codes',
		values: hasCheatCodes ? cheatCodes : false,
	};

	return (
		<>
			{showContent && <HeaderIcon>Cheat Codes</HeaderIcon>}

			<Contents contents={contents} />
		</>
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
		</section>
	);
};
