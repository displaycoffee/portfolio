/* Local styles */
import './styles/start.scss';

/* Local scripts */
import { updates } from './scripts/updates';

/* Local components */
import { HeaderIcon } from '../../components/blocks/Blocks';

export const Start = () => {
	return (
		<>
			<p>
				Welcome to the portfolio of <strong>Adria Murphy</strong>, frontend developer and expert pixel installer.
			</p>

			{updates && updates.length !== 0 ? (
				<>
					<HeaderIcon>Recent Updates</HeaderIcon>

					{updates
						.map((update) => (
							<p key={update.id}>
								<strong>{update.date}</strong> - <span dangerouslySetInnerHTML={{ __html: update.description }}></span>
							</p>
						))
						.slice(0, 5)}

					<p className="recent-updates">
						<em>The updates above are the last five updates to the site.</em>
					</p>
				</>
			) : null}
		</>
	);
};
