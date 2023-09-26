/* Local components */
import { About } from '../pages/About';
import { Art } from '../pages/Art';
import { Contact } from '../pages/Contact';
import { Projects } from '../pages/Projects';
import { CheatCodes } from '../pages/CheatCodes';
import { Resume } from '../pages/Resume';
import { Start } from '../pages/Start';

export const elements = {
	navigation: [
		{
			id: 7,
			label: 'Start',
			alt: 'Back to home',
			url: '/',
			component: (props) => {
				return props ? <Start props={props} /> : <Start />;
			},
		},
		{
			id: 6,
			label: 'About',
			alt: 'All about me, Adria',
			url: '/about',
			component: (props) => {
				return props ? <About props={props} /> : <About />;
			},
		},
		{
			id: 5,
			label: 'Projects',
			alt: 'Web projects throughout the years',
			url: '/projects',
			component: (props) => {
				return props ? <Projects props={props} /> : <Projects />;
			},
		},
		{
			id: 4,
			label: 'Art',
			alt: 'Pixel, traditional, and digital art',
			url: '/art',
			component: (props) => {
				return props ? <Art props={props} /> : <Art />;
			},
		},
		{
			id: 3,
			label: 'Cheat codes',
			alt: 'Coming soon... code snippets',
			url: '/cheat-codes',
			component: (props) => {
				return props ? <CheatCodes props={props} /> : <CheatCodes />;
			},
		},
		{
			id: 2,
			label: 'Resume',
			alt: 'Fancy online resume',
			url: '/resume',
			component: (props) => {
				return props ? <Resume props={props} /> : <Resume />;
			},
		},
		{
			id: 1,
			label: 'Contact',
			alt: 'Get in touch',
			url: '/contact',
			component: (props) => {
				return props ? <Contact props={props} /> : <Contact />;
			},
		},
	],
	footer: [
		{
			id: 4,
			label: 'GitHub',
			url: '//github.com/displaycoffee',
		},
		{
			id: 3,
			label: 'LinkedIn',
			alt: 'LinkedIn (serious stuff only)',
			url: '//www.linkedin.com/in/adriamurphy',
		},
		{
			id: 2,
			label: 'BGA',
			alt: 'Challenge me on BoardGame Arena!',
			url: '//boardgamearena.com/player?id=88435295',
		},
		{
			id: 1,
			label: 'Twitch',
			alt: 'Play video games with me on twitch',
			url: '//www.twitch.tv/displaycoffee',
		},
	],
};
