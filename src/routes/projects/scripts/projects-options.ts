/* Scripts */
import { projects } from './projects';

const projectsOptions = {
	navigation: {
		back: 'Back to "Projects"',
	},
	tabs: {
		all: true,
		enabled: true,
	},
	values: projects && projects.length !== 0 ? projects : [],
};

export const projectsOptionsBody = {
	...projectsOptions,
	type: 'body',
};

export const projectsOptionsLinks = {
	...projectsOptions,
	type: 'links',
};
