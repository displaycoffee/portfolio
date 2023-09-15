/* Local components */
import { About } from '../pages/About';
import { Art } from '../pages/Art';
import { Contact } from '../pages/Contact';
import { Projects } from '../pages/Projects';
import { Resume } from '../pages/Resume';
import { Start } from '../pages/Start';

export const elements = {
	navigation: [
		{
			id: 6,
			label: 'Start',
			path: '/',
			component: (props) => {
				return props ? <Start props={props} /> : <Start />; 
			}
		},
		{
			id: 5,
			label: 'About',
			path: '/about',
			component: (props) => {
				return props ? <About props={props} /> : <About />; 
			}
		},
		{
			id: 4,
			label: 'Projects',
			path: '/projects',
			component: (props) => {
				return props ? <Projects props={props} /> : <Projects />; 
			}
		},
		{
			id: 3,
			label: 'Art',
			path: '/art',
			component: (props) => {
				return props ? <Art props={props} /> : <Art />; 
			}
		},
		{
			id: 2,
			label: 'Resume',
			path: '/resume',
			component: (props) => {
				return props ? <Resume props={props} /> : <Resume />; 
			}
		},
		{
			id: 1,
			label: 'Contact',
			path: '/contact',
			component: (props) => {
				return props ? <Contact props={props} /> : <Contact />; 
			}
		},
	],
	footer: [
		{
			id: 3,
			label: 'GitHub',
			path: '//github.com/displaycoffee'
		},
		{
			id: 2,
			label: 'LinkedIn',
			path: '//www.linkedin.com/in/adriamurphy'
		},
		{
			id: 1,
			label: 'Twitch',
			path: '//www.twitch.tv/displaycoffee'
		},
	]
};