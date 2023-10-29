/* Local scripts */
import { art } from './scripts/art';

/* Local components */
import { Gallery } from '../../shared/gallery/Gallery';

export const Art = () => {
	const hasPixels = art.pixels && art.pixels.length !== 0;
	const hasArt = art.art && art.art.length !== 0;

	return hasPixels || hasArt ? (
		<>
			<p>
				Below are various different art pieces I have completed over the years. Please do not take any of these without permission as they are
				for my own use (and personal) or work that friends have commissioned.
			</p>

			{hasPixels && (
				<>
					<h4>Pixel art</h4>
					<Gallery gallery={art.pixels} />
				</>
			)}

			{hasArt && (
				<>
					<h4>Traditional and digital art</h4>
					<Gallery gallery={art.art} />
				</>
			)}
		</>
	) : null;
};
