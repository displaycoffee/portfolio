/* Local scripts */
import { art } from './scripts/art';

/* Local components */
import { Gallery } from '../../components/gallery/Gallery';

export const Art = () => {
	const hasPixels = art.pixels && art.pixels.length !== 0;
	const hasArt = art.art && art.art.length !== 0;
	const showDescription = window.location.pathname == '/art' ? true : false;

	return hasPixels || hasArt ? (
		<>
			{showDescription && (
				<p>
					Below are various different art pieces I have completed over the years. Please do not take any of these without permission as they
					are for my own use (and personal) or work that friends have commissioned.
				</p>
			)}

			{hasArt && <Gallery path={'/art'} type={'art'} header={'Traditional and digital art'} gallery={art.art} />}

			{hasPixels && <Gallery path={'/art'} type={'pixels'} header={'Pixel art'} gallery={art.pixels} />}
		</>
	) : null;
};
