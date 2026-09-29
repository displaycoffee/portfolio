/* Scripts */
import { articles } from './articles';

const articlesOptions = {
	navigation: {
		back: 'Back to "Articles"',
	},
	values: articles && articles.length !== 0 ? articles : [],
};

export const articlesOptionsBody = {
	...articlesOptions,
	type: 'body',
};

export const articlesOptionsLinks = {
	...articlesOptions,
	type: 'links',
};
