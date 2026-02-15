/* Local scripts */
import { utils } from '../../../_config/scripts/utils';
import { NavigationType, NavigationChildType } from './navigation-types';
import { art } from '../../../pages/art/scripts/art';
import { articles } from '../../../pages/articles/scripts/articles';
import { cheatCodes } from '../../../pages/cheat-codes/scripts/cheat-codes';
import { projects } from '../../../pages/projects/scripts/projects';

/* Helper function to build children */
const buildChildren = (child: NavigationChildType, parent: string) => {
	const name = child?.name2 ? child.name2 : child.name;
	return {
		id: child.id,
		alt: child.name,
		isRoute: true,
		label: child.name,
		showInNav: false,
		url: `/${parent}/${utils.handleize(name)}`,
	};
};

/* Build art children */
const artChildren = [] as NavigationType[];
art.forEach((art) => {
	artChildren.push(buildChildren(art, 'art'));
});

/* Build articles children */
const articlesChildren = [] as NavigationType[];
articles.forEach((article) => {
	articlesChildren.push(buildChildren(article, 'articles'));
});

/* Build cheat-codes children */
const cheatCodesChildren = [] as NavigationType[];
cheatCodes.forEach((code) => {
	cheatCodesChildren.push(buildChildren(code, 'cheat-codes'));
});

/* Build projects children */
const projectsChildren = [] as NavigationType[];
projects.forEach((projects) => {
	projectsChildren.push(buildChildren(projects, 'projects'));
});

export const navigation = [
	{
		id: 0,
		alt: 'Back to start',
		isRoute: true,
		label: 'Start',
		showInNav: true,
		url: '/',
	},
	{
		id: 1,
		alt: 'All about me, Adria',
		isRoute: true,
		label: 'About',
		showInNav: true,
		url: '/about',
	},
	{
		id: 2,
		alt: 'Web projects throughout the years',
		children: projectsChildren,
		isRoute: true,
		label: 'Projects',
		showInNav: true,
		url: '/projects',
	},
	{
		id: 3,
		alt: 'Pixel, traditional, and digital art',
		children: artChildren,
		isRoute: true,
		label: 'Art',
		showInNav: true,
		url: '/art',
	},
	{
		id: 4,
		alt: 'Fancy online resume',
		isRoute: true,
		label: 'Resume',
		showInNav: true,
		url: '/resume',
	},
	{
		id: 5,
		alt: 'Words and things',
		children: articlesChildren,
		isRoute: true,
		label: 'Articles',
		showInNav: true,
		url: '/articles',
	},
	{
		id: 6,
		alt: 'Code snippets',
		children: cheatCodesChildren,
		isRoute: true,
		label: 'Cheat codes',
		showInNav: true,
		url: '/cheat-codes',
	},
] as NavigationType[];
