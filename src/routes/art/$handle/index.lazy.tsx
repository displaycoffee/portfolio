/* Packages */
import { createLazyFileRoute } from '@tanstack/react-router';

/* Scripts */
import { artOptionsBody } from '../scripts/art-options';

/* Components */
import { Gallery } from '../../../components/gallery/Gallery';

export const Route = createLazyFileRoute('/art/$handle/')({
	component: RouteComponent,
});

function RouteComponent() {
	return <Gallery {...artOptionsBody} />;
}
