/* Local scripts */
import { art } from './scripts/art';

/* Local components */
import { HeaderIcon } from '../../components/blocks/Blocks';
import { Gallery } from '../../components/gallery/Gallery';

export const Art = () => {
	const showContent = window.location.pathname == '/art' ? true : false;
	const hasArt = art && art.length !== 0 ? true : false;

	// Options for gallery
	const options = {
		path: '/art',
		thumbnails: {
			headers: false,
			tabs: true,
		},
		navigation: {
			back: 'Back to "Art"',
		},
	};

	return hasArt ? (
		<>
			{showContent && (
				<>
					<HeaderIcon>Art</HeaderIcon>

					<p>
						Below are various different art pieces I have completed over the years. Please do not take any of these without permission as
						they are for my own use (and personal) or work that friends have commissioned.
					</p>
				</>
			)}

			<Gallery gallery={hasArt ? art : false} options={options} />
		</>
	) : null;
};
