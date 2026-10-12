/* Styles */
import './styles/articles.scss';

/* Packages */
import { createLazyFileRoute } from '@tanstack/react-router';

/* Scripts */
import { articlesOptionsLinks } from './scripts/articles-options';

/* Components */
import { Title } from '@/components/title/Title';
import { Contents } from '@/components/contents/Contents';
import { HeaderIcon } from '@/components/blocks/Blocks';

/* Page title */
const title = 'Articles';

export const Route = createLazyFileRoute('/articles/')({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<>
			<Title title={title} />

			<HeaderIcon>{title}</HeaderIcon>

			<p>
				Below you'll find a few articles I wrote. Most of these are very basic (and some might be a little outdated), but maybe they're still
				useful.
			</p>

			<Contents {...articlesOptionsLinks} />
		</>
	);
}
