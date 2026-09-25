/* Packages */
import { createRouter, Link, RouterProvider } from '@tanstack/react-router';

/* Scripts */
import { index } from './scripts';
import { search } from '../../_core/scripts/search';
import { variables } from '../../_core/scripts/variables';
import { routeTree } from '../../routeTree.gen';

/* Not found component */
function NotFound() {
	return (
		<p className="not-found">
			Page not found. <Link to={'/'}>Go back</Link>.
		</p>
	);
}

/* Create router */
const router = createRouter({
	routeTree,
	basepath: variables.paths.basename,
	defaultNotFoundComponent: NotFound,
	parseSearch: search.parse,
	stringifySearch: search.stringify,
});

/* Register router type for full type safety across the app */
declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router;
	}
}

/* Create main target entry point */
index.renderTarget('#index', <RouterProvider router={router} />);
