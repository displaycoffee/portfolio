/* Local scripts */
import { art } from './scripts/art';

/* Local components */
import { Gallery } from '../../components/gallery/Gallery';

export const Art = () => {
	const hasPixels = art.pixels && art.pixels.length !== 0;
	const hasArt = art.art && art.art.length !== 0;
	const showDescription = window.location.pathname == '/art' ? true : false;
	const backLink = 'Back to "Art"';

	return hasPixels || hasArt ? (
		<>
			{showDescription && (
				<p>
					Below are various different art pieces I have completed over the years. Please do not take any of these without permission as they
					are for my own use (and personal) or work that friends have commissioned.
				</p>
			)}

			{hasArt && <Gallery path={'/art'} category={'art'} header={'Traditional and digital art'} gallery={art.art} backLink={backLink} />}

			{hasPixels && <Gallery path={'/art'} category={'pixels'} header={'Pixel art'} gallery={art.pixels} backLink={backLink} />}
		</>
	) : null;
};
