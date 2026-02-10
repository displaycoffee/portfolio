/* Type definitions */
type Contents = {
	component: FunctionComponent;
	date: string;
	description?: string;
	description2?: string;
	handle?: string;
	id: number;
	index?: number;
	name: string;
	name2?: string;
	tags?: string;
	thumb: string;
	timestamp?: number;
	updated?: string;
};

type ContentsOptions = {
	children?: ReactNode;
	location: string;
	navigation?: {
		back?: string;
	};
	path: string;
	type: string;
	values: Contents[];
};

type ContentsTag = {
	active: boolean;
	label: string;
	value: string;
};

type ContentsTags = {
	[key: string]: ContentsTag;
};

type ContentsPage = {
	navigation: {
		back: string | boolean;
	};
	path: string;
	values: Contents[];
};

type ContentsPage2 = {
	children: ReactNode;
	location: string;
	navigation: {
		back: string | boolean;
	};
	path: string;
	values: Contents[];
};

type ContentsWithChildren = {
	children: ReactNode;
};

type ContentsDate = {
	content: Contents;
};

/* Export types */
export type ContentsTagsType = ContentsTags;

export type ContentsTagType = ContentsTag;

export type ContentsType = Contents;

/* Export prop types */
export type ContentsBodyProps = ContentsPage;

export type ContentsBodyProps2 = ContentsPage2;

export type ContentsLinksProps = ContentsPage;

export type ContentsDateProps = ContentsDate;

export type ContentsProps = ContentsOptions;

export type ContentsTagsProps = ContentsWithChildren;
