const distPath = '/assets/images/';
const articlesPath = `${distPath}articles/`;

/* Local components */
import { BoxSizing } from '../content/BoxSizing';
import { StructuringCode } from '../content/StructuringCode';
import { StylingText } from '../content/StylingText';

export const articles = [
	{
		id: 2,
		name: `Box-Sizing: My Best Friend`,
		date: `04.30.16`,
		updated: `02.22.15`,
		tags: `CSS`,
		thumb: `${articlesPath}box-sizing-600x400.jpg`,
		description: `If a person asked me what my favorite CSS property was, I'd tell them without a doubt, box-sizing. Not familiar with box-sizing? That's okay! The goal of this documentation is to teach you what it is and why it'll make writing CSS a little bit easier.`,
		component: BoxSizing,
	},
	{
		id: 1,
		name: `Structuring Code`,
		date: `04.30.16`,
		updated: `02.22.15`,
		tags: `CSS, HTML`,
		thumb: `${articlesPath}structuring-code-600x400.jpg`,
		description: `Not sure how to begin building your code? Sure, there's tons of formatters out there and even tools such as Prettier, but I feel it's a good idea to have a few ground rules for yourself. Or at the very least, so you don't drive others mad with ugly code.`,
		component: StructuringCode,
	},
	{
		id: 0,
		name: `Styling Text`,
		date: `05.30.15`,
		updated: `02.22.15`,
		tags: `CSS`,
		thumb: `${articlesPath}styling-text-600x400.jpg`,
		description: `The world of CSS text styling is large and vast. This article goes over only a small fraction of those rules (including the basics) and aims to show you how to use them.`,
		component: StylingText,
	},
];
