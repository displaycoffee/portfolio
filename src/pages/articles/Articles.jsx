/* Local scripts */
import { articles } from './scripts/articles';

/* Local components */
import { Contents } from '../../components/contents/Contents';
import { HeaderIcon } from '../../components/blocks/Blocks';

export const Articles = () => {
	const showContent = window.location.pathname == '/articles' ? true : false;
	const hasArticles = articles && articles.length !== 0 ? true : false;

	// Options for articles
	const options = {
		path: '/articles',
		navigation: {
			back: 'Back to "Articles"',
		},
	};

	return (
		<>
			{showContent && <HeaderIcon>Articles</HeaderIcon>}

			<Contents contents={hasArticles ? articles : false} options={options} />
		</>
	);
};
