/* Local scripts */
import { art } from './scripts/art';

/* Local components */
import { HeaderIcon } from '../../components/blocks/Blocks';
import { Gallery } from '../../components/gallery/Gallery';

export const Art = () => {
	const showContent = window.location.pathname == '/art' ? true : false;
	const hasArt = art && art.length !== 0 ? true : false;

	// Options for gallery
	const galleryOptions = {
		navigation: {
			back: 'Back to "Art"',
		},
		path: '/art',
		tabs: {
			all: true,
			enabled: true,
		},
		values: hasArt ? art : [],
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

			<Gallery options={galleryOptions} />
		</>
	) : null;
};
