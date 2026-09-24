/* Packages */
import { createLazyFileRoute } from '@tanstack/react-router';

/* Scripts */
import { projectsOptionsBody } from '../scripts/projects-options';

/* Components */
import { Gallery } from '../../../components/gallery/Gallery';

export const Route = createLazyFileRoute('/projects/$handle/')({
	component: RouteComponent,
});

function RouteComponent() {
	return <Gallery {...projectsOptionsBody} />;
}
