export const navigation = [
	{
		id: 6,
		label: 'Cheat codes',
		alt: 'Coming soon... code snippets',
		url: '/cheat-codes',
		showInNav: true,
	},
	{
		id: 5,
		label: 'Articles',
		alt: 'Coming soon... articles',
		url: '/articles',
		showInNav: true,
	},
	{
		id: 4,
		label: 'Resume',
		alt: 'Fancy online resume',
		url: '/resume',
		showInNav: true,
	},
	{
		id: 3,
		label: 'Art',
		alt: 'Pixel, traditional, and digital art',
		url: '/art',
		showInNav: true,
	},
	{
		id: 2,
		label: 'Projects',
		alt: 'Web projects throughout the years',
		url: '/projects',
		showInNav: true,
	},
	{
		id: 1,
		label: 'About',
		alt: 'All about me, Adria',
		url: '/about',
		showInNav: true,
	},
	{
		id: 0,
		label: 'Start',
		alt: 'Back to home',
		url: '/',
		showInNav: true,
	},
].sort((a, b) => {
	// Sort navigation by id
	return a.id - b.id;
});
