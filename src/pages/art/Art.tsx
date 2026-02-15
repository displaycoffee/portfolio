/* React */
import { useLocation } from 'react-router-dom';

/* Local scripts */
import { art } from './scripts/art';

/* Local components */
import { HeaderIcon } from '../../components/blocks/Blocks';
import { Gallery } from '../../components/gallery/Gallery';

/* Options for gallery */
const options = {
	navigation: {
		back: 'Back to "Art"',
	},
	tabs: {
		all: true,
		enabled: true,
	},
};

export const Art = () => {
	const location = useLocation();
	const showArt = location.pathname == '/art' ? true : false;

	return showArt ? <ArtIndex /> : <ArtGallery />;
};

export const ArtIndex = () => {
	const galleryOptions = {
		...options,
		type: 'links',
		values: art && art.length !== 0 ? art : [],
	};

	return (
		<>
			<HeaderIcon>Art</HeaderIcon>

			<p>
				Below are various different art pieces I have completed over the years. Please do not take any of these without permission as they are
				for my own use (and personal) or work that friends have commissioned.
			</p>

			<Gallery {...galleryOptions} />
		</>
	);
};

export const ArtGallery = () => {
	const galleryOptions = {
		...options,
		type: 'body',
		values: art && art.length !== 0 ? art : [],
	};

	return <Gallery {...galleryOptions} />;
};
