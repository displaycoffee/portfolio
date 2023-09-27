/* Local components */
import { About } from '../pages/About';
import { Art } from '../pages/Art';
import { Contact } from '../pages/Contact';
import { Projects } from '../pages/Projects';
import { Articles } from '../pages/Articles';
import { CheatCodes } from '../pages/CheatCodes';
import { Resume } from '../pages/Resume';
import { Start } from '../pages/Start';

export const elements = {
	navigation: [
		{
			label: 'Start',
			alt: 'Back to home',
			url: '/',
			render: (props) => {
				return props ? <Start props={props} /> : <Start />;
			},
		},
		{
			label: 'About',
			alt: 'All about me, Adria',
			url: '/about',
			render: (props) => {
				return props ? <About props={props} /> : <About />;
			},
		},
		{
			label: 'Projects',
			alt: 'Web projects throughout the years',
			url: '/projects',
			render: (props) => {
				return props ? <Projects props={props} /> : <Projects />;
			},
		},
		{
			label: 'Art',
			alt: 'Pixel, traditional, and digital art',
			url: '/art',
			render: (props) => {
				return props ? <Art props={props} /> : <Art />;
			},
		},
		{
			label: 'Articles',
			alt: 'Coming soon... articles',
			url: '/articles',
			render: (props) => {
				return props ? <Articles props={props} /> : <Articles />;
			},
		},
		{
			label: 'Cheat codes',
			alt: 'Coming soon... code snippets',
			url: '/cheat-codes',
			render: (props) => {
				return props ? <CheatCodes props={props} /> : <CheatCodes />;
			},
		},
		{
			label: 'Resume',
			alt: 'Fancy online resume',
			url: '/resume',
			render: (props) => {
				return props ? <Resume props={props} /> : <Resume />;
			},
		},
		{
			label: 'Contact',
			alt: 'Get in touch',
			url: '/contact',
			render: (props) => {
				return props ? <Contact props={props} /> : <Contact />;
			},
		},
	],
	footer: [
		{
			label: 'GitHub',
			url: '//github.com/displaycoffee',
		},
		{
			label: 'LinkedIn',
			alt: 'LinkedIn (serious stuff only)',
			url: '//www.linkedin.com/in/adriamurphy',
		},
		{
			label: 'BGA',
			alt: 'Challenge me on BoardGame Arena!',
			url: '//boardgamearena.com/player?id=88435295',
		},
		{
			label: 'Twitch',
			alt: 'Play video games with me on twitch',
			url: '//www.twitch.tv/displaycoffee',
		},
	],
};
