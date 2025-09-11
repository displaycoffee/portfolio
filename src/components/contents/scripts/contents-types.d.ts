/* React */
import { FunctionComponent, ReactNode } from 'react';

/* Type definitions */
type Content = {
	component: FunctionComponent;
	date: string;
	description: string;
	description2?: string;
	handle: string;
	id: number;
	index: number;
	name: string;
	name2?: string;
	tags: string;
	thumb: string;
	timestamp: number;
	updated: string;
};

type ContentsTag = {
	active: boolean;
	label: string;
	value: string;
};

type ContentsPage = {
	navigation: {
		back?: string;
	};
	path: string;
	values: ContentType[];
};

/* Export types */
export type ContentsBodyProps = ContentsPage;

export type ContentsLinksProps = ContentsPage;

export type ContentsDateProps = {
	content: Content;
};

export type ContentsProps = {
	contents: ContentsPage;
};

export type ContentsRoutesProps = {
	contents: ContentsPage;
};

export type ContentsTagsProps = {
	children: ReactNode;
};

export type ContentsTagsType = {
	[key: string]: ContentsTagType;
};

export type ContentsTagType = ContentsTag;

export type ContentType = Content;
