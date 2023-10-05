/* Local components */
import { Index as IndexContent } from '../../../content/index/Index';
import { About } from '../../../content/about/About';
import { Art } from '../../../content/art/Art';
import { Projects } from '../../../content/projects/Projects';
import { Articles } from '../../../content/articles/Articles';
import { CheatCodes } from '../../../content/cheat-codes/CheatCodes';
import { Resume } from '../../../content/resume/Resume';

export const navigation = [
	{
		id: 6,
		label: 'Cheat codes',
		alt: 'Coming soon... code snippets',
		url: '/cheat-codes',
		showInNav: true,
		render: (props) => {
			return props ? <CheatCodes props={props} /> : <CheatCodes />;
		},
	},
	{
		id: 5,
		label: 'Articles',
		alt: 'Coming soon... articles',
		url: '/articles',
		showInNav: true,
		render: (props) => {
			return props ? <Articles props={props} /> : <Articles />;
		},
	},
	{
		id: 4,
		label: 'Resume',
		alt: 'Fancy online resume',
		url: '/resume',
		showInNav: true,
		render: (props) => {
			return props ? <Resume props={props} /> : <Resume />;
		},
	},
	{
		id: 3,
		label: 'Art',
		alt: 'Pixel, traditional, and digital art',
		url: '/art',
		showInNav: true,
		render: (props) => {
			return props ? <Art props={props} /> : <Art />;
		},
	},
	{
		id: 2,
		label: 'Projects',
		alt: 'Web projects throughout the years',
		url: '/projects',
		showInNav: true,
		render: (props) => {
			return props ? <Projects props={props} /> : <Projects />;
		},
	},
	{
		id: 1,
		label: 'About',
		alt: 'All about me, Adria',
		url: '/about',
		showInNav: true,
		render: (props) => {
			return props ? <About props={props} /> : <About />;
		},
	},
	{
		id: 0,
		label: 'Start',
		alt: 'Back to home',
		url: '/',
		showInNav: true,
		render: (props) => {
			return props ? <IndexContent props={props} /> : <IndexContent />;
		},
	},
].sort((a, b) => {
	// Sort navigation by id
	return a.id - b.id;
});
