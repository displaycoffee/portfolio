/* Local components */
import { Test } from '../content/_test/Test';
import { NavigationMenus } from '../content/navigation-menus/NavigationMenus';
import { HelloContent } from '../content/hello-content/HelloContent';
import { WishYouWereHere } from '../content/wish-you-were-here/WishYouWereHere';

export const cheatCodes = [
	{
		id: 8,
		name: 'Best Friends',
		date: '05.01.16',
		component: Test,
	},
	{
		id: 7,
		name: 'Dreaming of a White Christmas',
		date: '01.17.16',
		component: Test,
	},
	{
		id: 6,
		name: 'A Promise',
		date: '10.03.15',
		component: Test,
	},
	{
		id: 5,
		name: 'Dragony',
		date: '10.03.15',
		component: Test,
	},
	{
		id: 4,
		name: 'Velociraptor Pack',
		date: '10.03.15',
		component: Test,
	},
	{
		id: 3,
		name: 'Friends Not Food',
		date: '10.03.15',
		component: Test,
	},
	{
		id: 2,
		name: 'Wish You Were Here',
		date: '10.03.15',
		updated: '02.02.25',
		tags: 'HTML, CSS, Sass, Template',
		component: WishYouWereHere,
	},
	{
		id: 1,
		name: 'Hello Content! (A Tabbing Script)',
		date: '09.16.15',
		updated: '02.02.25',
		tags: 'HTML, CSS, Sass, JavaScript, React, Functionality, Template',
		component: HelloContent,
	},
	{
		id: 0,
		name: 'Navigation Menus',
		date: '06.01.14',
		updated: '02.02.25',
		tags: 'HTML, CSS, Sass, Navigation, Layout',
		component: NavigationMenus,
	},
];
