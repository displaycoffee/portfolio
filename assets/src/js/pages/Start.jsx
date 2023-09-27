/* Local scripts */
import { pages } from '../scripts/pages';

export const Start = () => {
	return (
		<>
			<p>Welcome to the portfolio of Adria Murphy, frontend developer and expert pixel installer.</p>

			{pages.updates && pages.updates.length !== 0 ? (
				<>
					<h4>Updates</h4>

					{pages.updates.map((update, index) => (
						<p key={index}>
							<strong>{update.date}</strong> - {update.content}
						</p>
					))}
				</>
			) : null}
		</>
	);
};
