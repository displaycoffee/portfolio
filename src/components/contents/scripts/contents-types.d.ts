/* React */
import { JSX, ReactNode } from 'react';

/* Type definitions */
type ContentsTag = {
	active: boolean;
	label: string;
	value: string;
};

type Contents = {
	component: JSX.Element;
	date: string;
	description: string;
	description2?: string;
	handle: string;
	id: number;
	name: string;
	name2?: string;
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
	values: ContentsType[];
};

/* Export types */
export type ContentsBodyProps = ContentsPage;

export type ContentsLinksProps = ContentsPage;

export type ContentsProps = {
	contents: ContentsPage;
};

export type ContentsRoutesProps = {
	contents: ContentsPage;
};

export type ContentsTagsType = {
	[key: string]: ContentsTagType;
};

export type ContentsTagType = ContentsTag;

export type ContentsType = Contents;
