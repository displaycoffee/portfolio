/* Local scripts */
import { pages } from '../scripts/pages';

/* Local components */
import { Gallery } from '../elements/Gallery';

export const Art = () => {
	const hasPixels = pages.pixels && pages.pixels.length !== 0;
	const hasArt = pages.art && pages.art.length !== 0;

	return hasPixels || hasArt ? (
		<>
			<p>
				Below are various different art pieces I have completed over the years. Please do not take any of these without permission as they are
				for my own use (and personal) or work that friends have commissioned.
			</p>

			{hasPixels && (
				<>
					<h4>Pixel art</h4>
					<Gallery gallery={pages.pixels} />
				</>
			)}

			{hasArt && (
				<>
					<h4>Traditional and digital art</h4>
					<Gallery gallery={pages.art} />
				</>
			)}
		</>
	) : null;
};
