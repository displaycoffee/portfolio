/* Scripts */
import { art } from './art';

const artOptions = {
	navigation: {
		back: 'Back to "Art"',
	},
	tabs: {
		all: true,
		enabled: true,
	},
	values: art && art.length !== 0 ? art : [],
};

export const artOptionsBody = {
	...artOptions,
	type: 'body',
};

export const artOptionsLinks = {
	...artOptions,
	type: 'links',
};
