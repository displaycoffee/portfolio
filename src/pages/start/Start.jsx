/* Local scripts */
import { updates } from './scripts/updates';

export const Start = () => {
	return (
		<>
			<p>Welcome to the portfolio of Adria Murphy, frontend developer and expert pixel installer.</p>

			{updates && updates.length !== 0 ? (
				<>
					<h4>Updates</h4>

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
