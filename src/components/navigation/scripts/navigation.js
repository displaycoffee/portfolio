export const navigation = [
	{
		id: 6,
		label: 'Cheat codes',
		alt: 'Coming soon... code snippets',
		url: '/cheat-codes',
		showInNav: true,
		isRoute: true,
	},
	{
		id: 5,
		label: 'Articles',
		alt: 'Coming soon... articles',
		url: '/articles',
		showInNav: true,
		isRoute: true,
	},
	{
		id: 4,
		label: 'Resume',
		alt: 'Fancy online resume',
		url: '/resume',
		showInNav: true,
		isRoute: true,
	},
	{
		id: 3,
		label: 'Art',
		alt: 'Pixel, traditional, and digital art',
		url: '/art',
		showInNav: true,
		isRoute: true,
	},
	{
		id: 2,
		label: 'Projects',
		alt: 'Web projects throughout the years',
		url: '/projects',
		showInNav: true,
		isRoute: true,
	},
	{
		id: 1,
		label: 'About',
		alt: 'All about me, Adria',
		url: '/about',
		showInNav: true,
		isRoute: true,
	},
	{
		id: 0,
		label: 'Start',
		alt: 'Back to start',
		url: '/',
		showInNav: true,
		isRoute: true,
	},
].sort((a, b) => {
	// Sort navigation by id
	return a.id - b.id;
});

/* Function to filter out navigation links */
export const createNavigationList = (navigation, isRoute) => {
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
