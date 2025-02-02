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
			{showContent && <HeaderIcon>Cheat Codes</HeaderIcon>}

			<Contents contents={hasCheatCodes ? cheatCodes : false} options={options} />
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
