/* React */
import { JSX, ReactNode } from 'react';

/* Type definitions */
type ContentsTag = {
	active: boolean;
	label: string;
	value: string;
};

type Contents = {
	component: ReactNode;
	date: string;
	description: string;
	description2?: string;
	handle: string;
	id: number;
	name: string;
	tags: string;
	thumb: string;
	timestamp: number;
	updated: string;
};

type ContentsPage = {
	navigation: {
		back?: string;
	};
	path: string;
	values: Contents[];
};

/* Export types */
// export type ContentsBodyProps = Contents;

// export type ContentsLinksProps = Contents;

export type ContentsProps = {
	contents: ContentsType[];
	options: {
		path: string;
		navigation: {
			back?: string;
		};
	};
};

export type ContentsRoutesProps = ContentsProps;

// export type ContentsTagsType = {
// 	[key: string]: ContentsTagType;
// };

export type ContentsTagType = {
	active: boolean;
	label: string;
	value: string;
};

export type ContentsType = {
	component: ReactNode;
	date: string;
	description: string;
	description2?: string;
	handle: string;
	id: number;
	name: string;
	tags: string;
	thumb: string;
	timestamp: number;
	updated: string;
};
