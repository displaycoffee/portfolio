/* React */
import { useContext, useId } from 'react';

/* Local scripts */
import { CheatCodesSectionProps } from './scripts/cheat-codes-types';
import { cheatCodes } from './scripts/cheat-codes';

/* Local components */
import { Context } from '../../context/Context';
import { Contents } from '../../components/contents/Contents';
import { HeaderIcon } from '../../components/blocks/Blocks';

export const CheatCodes = () => {
	const showContent = window.location.pathname == '/cheat-codes' ? true : false;
	const hasCheatCodes = cheatCodes && cheatCodes.length !== 0 ? true : false;

	// Options for content
	const contentsOptions = {
		navigation: {
			back: 'Back to "Cheat Codes"',
		},
		path: '/cheat-codes',
		values: hasCheatCodes ? cheatCodes : [],
	};

	return hasCheatCodes ? (
		<>
			{showContent && <HeaderIcon>Cheat Codes</HeaderIcon>}

			<Contents options={contentsOptions} />
		</>
	) : null;
};

export const CheatCodesSection = (props: CheatCodesSectionProps) => {
	const { children, header } = props;
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
