/* Local scripts */
import { art } from './scripts/art';

/* Local components */
import { GalleryNew } from '../../components/gallery/Gallery';

export const Art = () => {
	const hasPixels = art.pixels && art.pixels.length !== 0;
	const hasArt = art.art && art.art.length !== 0;

	return hasPixels || hasArt ? (
		<>
			<p>
				Below are various different art pieces I have completed over the years. Please do not take any of these without permission as they are
				for my own use (and personal) or work that friends have commissioned.
			</p>

			{hasArt && <GalleryNew path={'/art'} type={'art'} header={'Traditional and digital art'} gallery={art.art} />}

			{hasPixels && <GalleryNew path={'/art'} type={'pixels'} header={'Pixel art'} gallery={art.pixels} />}
		</>
	) : null;
};
