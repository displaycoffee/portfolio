/* Packages */
import { createLazyFileRoute } from '@tanstack/react-router';

/* Scripts */
import { cheatCodesOptionsLinks } from './scripts/cheat-codes-options';

/* Components */
import { Contents } from '../../components/contents/Contents';
import { HeaderIcon } from '../../components/blocks/Blocks';

export const Route = createLazyFileRoute('/cheat-codes/')({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<>
			<HeaderIcon>Cheat Codes</HeaderIcon>

			<p>
				This page contains code snippets for sites, projects, or whatever your heart fancies. A few of these snippets were originally created
				for things like forum templates or signatures, but they've been revised to drag and drop onto any platform.
			</p>

			<Contents {...cheatCodesOptionsLinks} />
		</>
	);
}
