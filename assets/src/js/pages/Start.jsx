/* Local scripts */
import { pages } from '../scripts/pages';

export const Start = () => {
	return (
		<>
			<p>
				Welcome to the portfolio of Adria Murphy, frontend developer and expert pixel installer.
			</p>

			{pages.updates && pages.updates.length !== 0 ? (
				<>
					<h4>Updates</h4>

					{pages.updates.map((update) => (
						<p key={update.id}><strong>{update.date}</strong> - {update.content}</p>
					))}
				</>
			) : (null)}
		</>
	);
};