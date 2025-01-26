/* Local scripts */
import { art } from './scripts/art';

/* Local scripts */
import { gallery } from '../../components/gallery/scripts/gallery';

/* Local components */
import { HeaderIcon } from '../../components/blocks/Blocks';
import { Gallery2 } from '../../components/gallery/Gallery';

export const Art = () => {
	const showContent = window.location.pathname == '/art' ? true : false;
	const backLink = 'Back to "Art"';

	// Create gallery object for art
	const modifiedGallery = gallery.build(art, true);

	return art && art.length !== 0 ? (
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

			{Object.keys(modifiedGallery).map((key) => {
				const current = modifiedGallery[key];

				return current.values && current.values.length !== 0 ? (
					<Gallery2 path={'/art'} gallery={current} backLink={backLink} key={current.handle} />
				) : null;
			})}
		</>
	) : null;
};
