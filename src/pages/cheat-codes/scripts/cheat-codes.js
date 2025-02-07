/* Local components */
import { Test } from '../content/_test/Test';
import { NavigationMenus } from '../content/navigation-menus/NavigationMenus';
import { HelloContent } from '../content/hello-content/HelloContent';
import { WishYouWereHere } from '../content/wish-you-were-here/WishYouWereHere';
import { FriendsNotFood } from '../content/friends-not-food/FriendsNotFood';

export const cheatCodes = [
	{
		id: 8,
		name: 'Best Friends',
		date: '05.01.16',
		updated: '02.02.25',
		tags: 'HTML, CSS, Sass, Template',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolores, facilis sapiente animi beatae non quaerat.',
		component: Test,
	},
	{
		id: 7,
		name: 'Dreaming of a White Christmas',
		date: '01.17.16',
		updated: '02.02.25',
		tags: 'HTML, CSS, Sass, Template',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolores, facilis sapiente animi beatae non quaerat.',
		component: Test,
	},
	{
		id: 6,
		name: 'A Promise',
		date: '10.03.15',
		updated: '02.02.25',
		tags: 'HTML, CSS, Sass, Template',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolores, facilis sapiente animi beatae non quaerat.',
		component: Test,
	},
	{
		id: 5,
		name: 'Dragony',
		date: '10.03.15',
		updated: '02.02.25',
		tags: 'HTML, CSS, Sass, Template',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolores, facilis sapiente animi beatae non quaerat.',
		component: Test,
	},
	{
		id: 4,
		name: 'Velociraptor Pack',
		date: '10.03.15',
		updated: '02.02.25',
		tags: 'HTML, CSS, Sass, Template',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolores, facilis sapiente animi beatae non quaerat.',
		component: Test,
	},
	{
		id: 3,
		name: 'Friends Not Food',
		date: '10.03.15',
		updated: '02.06.25',
		tags: 'HTML, CSS, Sass, Template',
		description: ' A shark/underwater themed layout. It has a hover button on the bottom to display more content.',
		component: FriendsNotFood,
	},
	{
		id: 2,
		name: 'Wish You Were Here',
		date: '10.03.15',
		updated: '02.05.25',
		tags: 'HTML, CSS, Sass, Template',
		description: 'A summer-themed template. Not related to the Pink Floyd song.',
		component: WishYouWereHere,
	},
	{
		id: 1,
		name: 'Hello Content! (A Tabbing Script)',
		date: '09.16.15',
		updated: '02.05.25',
		tags: 'HTML, CSS, Sass, JavaScript, React, Functionality, Template',
		description:
			'Simple, responsive tab functionality. Tabs work independently, so you can have multiple groups on the same page. Have fun and use as you wish!',
		component: HelloContent,
	},
	{
		id: 0,
		name: 'Navigation Menus',
		date: '06.01.14',
		updated: '02.05.25',
		tags: 'HTML, CSS, Sass, Navigation, Layout',
		description:
			'Using unordered lists, this code creates navigation menus with hover effects. You can change the colors and add things to the CSS. Most of what I have is a base.',
		component: NavigationMenus,
	},
];
