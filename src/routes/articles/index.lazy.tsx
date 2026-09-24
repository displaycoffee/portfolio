/* Styles */
import './styles/articles.scss';

/* Packages */
import { createLazyFileRoute } from '@tanstack/react-router';

/* Scripts */
import { articlesOptionsLinks } from './scripts/articles-options';

/* Components */
import { Contents } from '../../components/contents/Contents';
import { HeaderIcon } from '../../components/blocks/Blocks';

export const Route = createLazyFileRoute('/articles/')({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<>
			<HeaderIcon>Articles</HeaderIcon>

			<p>
				Below you'll find a few articles I wrote. Most of these are very basic (and some might be a little outdated), but maybe they're still
				useful.
			</p>

			<Contents {...articlesOptionsLinks} />
		</>
	);
}
