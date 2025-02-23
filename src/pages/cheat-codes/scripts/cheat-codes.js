const distPath = '/assets/images/';
const cheatCodesPath = `${distPath}cheat-codes/`;

/* Local components */
import { NavigationMenus } from '../content/navigation-menus/NavigationMenus';
import { HelloContent } from '../content/hello-content/HelloContent';
import { WishYouWereHere } from '../content/wish-you-were-here/WishYouWereHere';
import { FriendsNotFood } from '../content/friends-not-food/FriendsNotFood';
import { VelociraptorPack } from '../content/velociraptor-pack/VelociraptorPack';
import { Dragony } from '../content/dragony/Dragony';
import { APromise } from '../content/a-promise/APromise';
import { DreamingOfSnow } from '../content/dreaming-of-snow/DreamingOfSnow';
import { BestFriends } from '../content/best-friends/BestFriends';
import { BannerCodeGenerator } from '../content/banner-code-generator/BannerCodeGenerator';
import { Burmecia } from '../content/burmecia/Burmecia';

export const cheatCodes = [
	{
		id: 10,
		name: `Burmecia`,
		date: `03.28.22`,
		updated: `02.16.25`,
		tags: `React, JavaScript, Sass, Vite, Framework`,
		thumb: `${cheatCodesPath}burmecia-600x400.jpg`,
		description: `React-based framework to create projects. Primarily built with React, JavaScript, Sass, and Vite. It is not very "pretty" and contains very basic styles so that the template may be used as a boilerplate to create something better.`,
		description2: `This is named after a city in the game Final Fantasy IX -- the "Realm of Eternal Rain" and home to the character Freya.`,
		component: Burmecia,
	},
	{
		id: 9,
		name: `Banner Code Generator`,
		date: `09.16.18`,
		updated: `02.21.25`,
		tags: `HTML, React, CSS, Sass, JavaScript, Functionality`,
		thumb: `${cheatCodesPath}banner-code-generator-600x400.jpg`,
		description: `A little bit of code that generates code for placing image banners on websites.`,
		component: BannerCodeGenerator,
	},
	{
		id: 8,
		name: `Best Friends`,
		date: `05.01.16`,
		updated: `02.16.25`,
		tags: `HTML, React, CSS, Sass, JavaScript, Functionality, Template`,
		thumb: `${cheatCodesPath}best-friends-600x400.jpg`,
		description: `A simple, responsive template with tabs. This can be used multiple times on a page. Also, it has a dog.`,
		component: BestFriends,
	},
	{
		id: 7,
		name: `Dreaming of Snow`,
		date: `01.17.16`,
		updated: `02.15.25`,
		tags: `HTML, React, CSS, Sass, Template`,
		thumb: `${cheatCodesPath}dreaming-of-snow-600x400.jpg`,
		description: `A wintery themed template. The images can be changed. The circle avatar has a hover where you can place a small bit of code.`,
		component: DreamingOfSnow,
	},
	{
		id: 6,
		name: `A Promise`,
		date: `10.03.15`,
		updated: `02.15.25`,
		tags: `HTML, React, CSS, Sass, Block`,
		thumb: `${cheatCodesPath}a-promise-600x400.jpg`,
		description: `A signature or quote block based on Samwise Gamgee from "Lord of the Rings".`,
		component: APromise,
	},
	{
		id: 5,
		name: `Dragony`,
		date: `10.03.15`,
		updated: `02.15.25`,
		tags: `HTML, React, CSS, Sass, Block`,
		thumb: `${cheatCodesPath}dragony-600x400.jpg`,
		description: `A character block template based on Toothless from "How to Train Your Dragon".`,
		component: Dragony,
	},
	{
		id: 4,
		name: `Velociraptor Pack`,
		date: `10.03.15`,
		updated: `02.15.25`,
		tags: `HTML, React, CSS, Sass, Template`,
		thumb: `${cheatCodesPath}velociraptor-pack-600x400.jpg`,
		description: `A template with scrollable areas. When you click on the links, it changes the content displayed. This takes me back to my iframe layout days.`,
		component: VelociraptorPack,
	},
	{
		id: 3,
		name: `Friends Not Food`,
		date: `10.03.15`,
		updated: `02.15.25`,
		tags: `HTML, React, CSS, Sass, Template`,
		thumb: `${cheatCodesPath}friends-not-food-600x400.jpg`,
		description: ` A shark/underwater themed template. It has a hover button on the bottom to display more content.`,
		component: FriendsNotFood,
	},
	{
		id: 2,
		name: `Wish You Were Here`,
		date: `10.03.15`,
		updated: `02.15.25`,
		tags: `HTML, React, CSS, Sass, Template`,
		thumb: `${cheatCodesPath}wish-you-were-here-600x400.jpg`,
		description: `A summer-themed template. Not related to the Pink Floyd song.`,
		component: WishYouWereHere,
	},
	{
		id: 1,
		name: `Hello Content! (A Tabbing Script)`,
		date: `09.16.15`,
		updated: `02.21.25`,
		tags: `HTML, React, CSS, Sass, JavaScript, Functionality`,
		thumb: `${cheatCodesPath}hello-content-600x400.jpg`,
		description: `Simple, responsive tab functionality. Tabs work independently, so you can have multiple groups on the same page. Have fun and use as you wish!`,
		component: HelloContent,
	},
	{
		id: 0,
		name: `Navigation Menus`,
		date: `06.01.14`,
		updated: `02.15.25`,
		tags: `HTML, React, CSS, Sass, Navigation, Layout`,
		thumb: `${cheatCodesPath}navigation-menus-600x400.jpg`,
		description: `Using unordered lists, this code creates navigation menus with hover effects. You can change the colors and add things to the CSS. Most of what I have is a base.`,
		component: NavigationMenus,
	},
];
