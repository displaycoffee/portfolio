/* Local scripts */
import { updates } from './scripts/updates';

/* Local components */
import { HeaderIcon } from '../../components/blocks/Blocks';

export const Start = () => {
	return (
		<>
			<p>Welcome to the portfolio of Adria Murphy, frontend developer and expert pixel installer.</p>

			{updates && updates.length !== 0 ? (
				<>
					<HeaderIcon>Updates</HeaderIcon>

					{updates.map((update) => (
						<p key={update.id}>
							<strong>{update.date}</strong> - {update.description}
						</p>
					))}
				</>
			) : null}
		</>
	);
};
