/* Local scripts */
import { pages } from '../scripts/pages';

/* Local components */
import { Gallery } from '../elements/Gallery';

export const Art = () => {
	return pages.art && pages.art.length !== 0 ? (
		<>
			<p>Below are various different pieces of art I have done over the year. Please do not take any of these as they're for my own use or things I've made for friends.</p>

			<Gallery gallery={pages.art} />
		</>
	) : null;
};