/* Scripts */
import type { NavigationChildType, NavigationMapType } from './navigation-types';
import { utils } from '../../../_core/scripts/utils';
import { navigationUtils } from './navigation-utils';
import { art } from '../../../routes/art/scripts/art';
import { articles } from '../../../routes/articles/scripts/articles';
import { cheatCodes } from '../../../routes/cheat-codes/scripts/cheat-codes';
import { projects } from '../../../routes/projects/scripts/projects';

const { create } = navigationUtils;

/* Helper function to build children */
const buildChildren = (child: NavigationChildType, parent: string) => {
	const name = child?.nameAlt ? child.nameAlt : child.name;
	const handle = utils.handleize(name);

	// Child config
	const childConfig: NavigationMapType = create({ key: handle, label: child.name, showInNav: false, url: `/${parent}/${handle}` });

	return childConfig[handle];
};

/* Build art children */
const artChildren = {} as NavigationMapType;
art.forEach((item) => {
	const config = buildChildren(item, 'art');
	artChildren[config.id] = config;
});

/* Build articles children */
const articlesChildren = {} as NavigationMapType;
articles.forEach((item) => {
	const config = buildChildren(item, 'articles');
	articlesChildren[config.id] = config;
});

/* Build cheat-codes children */
const cheatCodesChildren = {} as NavigationMapType;
cheatCodes.forEach((item) => {
	const config = buildChildren(item, 'cheat-codes');
	cheatCodesChildren[config.id] = config;
});

/* Build projects children */
const projectsChildren = {} as NavigationMapType;
projects.forEach((item) => {
	const config = buildChildren(item, 'projects');
	projectsChildren[config.id] = config;
});

export const navigationHeader: NavigationMapType = {
	...create({ key: 'index', label: 'Start', url: '/' }),
	...create({ key: 'about', label: 'About' }),
	...create({ key: 'art', label: 'Art', children: artChildren }),
	...create({ key: 'projects', label: 'Projects', children: projectsChildren }),
	...create({ key: 'resume', label: 'Resume' }),
	...create({ key: 'articles', label: 'Articles', children: articlesChildren }),
	...create({ key: 'cheat-codes', label: 'Cheat Codes', children: cheatCodesChildren }),
};
