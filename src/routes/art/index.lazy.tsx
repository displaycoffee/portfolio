/* Packages */
import { createLazyFileRoute } from '@tanstack/react-router';

/* Scripts */
import { artOptionsLinks } from './scripts/art-options';

/* Components */
import { HeaderIcon } from '../../components/blocks/Blocks';
import { Gallery } from '../../components/gallery/Gallery';

export const Route = createLazyFileRoute('/art/')({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<>
			<HeaderIcon>Art</HeaderIcon>

			<p>
				Below are various different art pieces I have completed over the years. Please do not take any of these without permission as they are
				for my own use (and personal) or work that friends have commissioned.
			</p>

			<Gallery {...artOptionsLinks} />
		</>
	);
}
