/* Packages */
import { useId } from 'react';

/* Scripts */
import type { CheatCodesSectionProps } from './scripts/cheat-codes-types';
import { useAppContext } from '../../context/scripts/context-hooks';

export const CheatCodesSection = (props: CheatCodesSectionProps) => {
	const { children, header } = props;
	const fallbackId = useId().replace(/:/g, '');
	const { utils } = useAppContext();

	return (
		<section id={`cheat-codes-section-${utils.handleize(header || fallbackId)}`} className={`cheat-codes-section margin-trim`}>
			{header ? <h3>{header}</h3> : null}

			{children}
		</section>
	);
};
