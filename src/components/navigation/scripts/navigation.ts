/* Local components */
import { Start } from '../../../pages/start/Start';
import { About } from '../../../pages/about/About';
import { Art } from '../../../pages/art/Art';
import { Projects } from '../../../pages/projects/Projects';
import { Articles } from '../../../pages/articles/Articles';
import { CheatCodes } from '../../../pages/cheat-codes/CheatCodes';
import { Resume } from '../../../pages/resume/Resume';

export const navigation = [
	{
		id: 6,
		label: 'Cheat codes',
		alt: 'Coming soon... code snippets',
		url: '/cheat-codes',
		showInNav: true,
		isRoute: true,
		hasChildren: true,
		component: CheatCodes,
	},
	{
		id: 5,
		label: 'Articles',
		alt: 'Coming soon... articles',
		url: '/articles',
		showInNav: true,
		isRoute: true,
		hasChildren: true,
		component: Articles,
	},
	{
		id: 4,
		label: 'Resume',
		alt: 'Fancy online resume',
		url: '/resume',
		showInNav: true,
		isRoute: true,
		hasChildren: false,
		component: Resume,
	},
	{
		id: 3,
		label: 'Art',
		alt: 'Pixel, traditional, and digital art',
		url: '/art',
		showInNav: true,
		isRoute: true,
		hasChildren: true,
		component: Art,
	},
	{
		id: 2,
		label: 'Projects',
		alt: 'Web projects throughout the years',
		url: '/projects',
		showInNav: true,
		isRoute: true,
		hasChildren: true,
		component: Projects,
	},
	{
		id: 1,
		label: 'About',
		alt: 'All about me, Adria',
		url: '/about',
		showInNav: true,
		isRoute: true,
		hasChildren: false,
		component: About,
	},
	{
		id: 0,
		label: 'Start',
		alt: 'Back to start',
		url: '/',
		showInNav: true,
		isRoute: true,
		hasChildren: false,
		component: Start,
	},
].sort((a, b) => {
	// Sort navigation by id
	return a.id - b.id;
});

/* Function to filter out navigation links */
export const createNavigationList = (navigation: PageType[], isRoute: boolean) => {
	// Determine initial navigaton check
	let hasNavigation = navigation && navigation.length !== 0 ? true : false;

	// Filter out navigation links
	navigation = navigation.filter((nav) => {
		const hasNavLink = (isRoute && nav.isRoute) || (!isRoute && nav.showInNav) ? true : false;
		return hasNavLink;
	});

	// Check navigation again
	hasNavigation = navigation && navigation.length !== 0 ? true : false;

	// Return final navigation
	return hasNavigation ? navigation : [];
};
