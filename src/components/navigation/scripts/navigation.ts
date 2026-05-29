/* Packages */
import { lazy, JSX, LazyExoticComponent } from 'react';

/* Scripts */
import { utils } from '../../../_config/scripts/utils';
import { NavigationType, NavigationChildType } from './navigation-types';
import { art } from '../../../pages/art/scripts/art';
import { articles } from '../../../pages/articles/scripts/articles';
import { cheatCodes } from '../../../pages/cheat-codes/scripts/cheat-codes';
import { projects } from '../../../pages/projects/scripts/projects';

/* Components */
const Start = lazy(() => import('../../../pages/start/Start').then((m) => ({ default: m.Start })));
const About = lazy(() => import('../../../pages/about/About').then((m) => ({ default: m.About })));
const Art = lazy(() => import('../../../pages/art/Art').then((m) => ({ default: m.Art })));
const Projects = lazy(() => import('../../../pages/projects/Projects').then((m) => ({ default: m.Projects })));
const Resume = lazy(() => import('../../../pages/resume/Resume').then((m) => ({ default: m.Resume })));
const Articles = lazy(() => import('../../../pages/articles/Articles').then((m) => ({ default: m.Articles })));
const CheatCodes = lazy(() => import('../../../pages/cheat-codes/CheatCodes').then((m) => ({ default: m.CheatCodes })));

/* Helper function to build children */
const buildChildren = (child: NavigationChildType, parent: string, element?: LazyExoticComponent<() => JSX.Element>) => {
	const name = child?.name2 ? child.name2 : child.name;

	// Child config
	const childConfig: NavigationType = {
		id: child.id,
		alt: child.name,
		isRoute: true,
		label: child.name,
		showInNav: false,
		url: `/${parent}/${utils.handleize(name)}`,
	};

	// Add component element if passed down
	if (element) {
		childConfig.element = element;
	}

	return childConfig;
};

/* Build art children */
const artChildren = [] as NavigationType[];
art.forEach((art) => {
	artChildren.push(buildChildren(art, 'art', Art));
});

/* Build articles children */
const articlesChildren = [] as NavigationType[];
articles.forEach((article) => {
	articlesChildren.push(buildChildren(article, 'articles', Articles));
});

/* Build cheat-codes children */
const cheatCodesChildren = [] as NavigationType[];
cheatCodes.forEach((code) => {
	cheatCodesChildren.push(buildChildren(code, 'cheat-codes', CheatCodes));
});

/* Build projects children */
const projectsChildren = [] as NavigationType[];
projects.forEach((projects) => {
	projectsChildren.push(buildChildren(projects, 'projects', Projects));
});

export const navigation = [
	{
		id: 0,
		alt: 'Back to start',
		element: Start,
		isRoute: true,
		label: 'Start',
		showInNav: true,
		url: '/',
	},
	{
		id: 1,
		alt: 'All about me, Adria',
		element: About,
		isRoute: true,
		label: 'About',
		showInNav: true,
		url: '/about',
	},
	{
		id: 2,
		alt: 'Web projects throughout the years',
		element: Projects,
		children: projectsChildren,
		isRoute: true,
		label: 'Projects',
		showInNav: true,
		url: '/projects',
	},
	{
		id: 3,
		alt: 'Pixel, traditional, and digital art',
		element: Art,
		children: artChildren,
		isRoute: true,
		label: 'Art',
		showInNav: true,
		url: '/art',
	},
	{
		id: 4,
		alt: 'Fancy online resume',
		element: Resume,
		isRoute: true,
		label: 'Resume',
		showInNav: true,
		url: '/resume',
	},
	{
		id: 5,
		alt: 'Words and things',
		element: Articles,
		children: articlesChildren,
		isRoute: true,
		label: 'Articles',
		showInNav: true,
		url: '/articles',
	},
	{
		id: 6,
		alt: 'Code snippets',
		element: CheatCodes,
		children: cheatCodesChildren,
		isRoute: true,
		label: 'Cheat codes',
		showInNav: true,
		url: '/cheat-codes',
	},
] as NavigationType[];
