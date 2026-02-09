/* Type definitions */
type ChildPages = {
	url: string;
	childPages: Page[];
};

type Date = {
	date: string;
	timestamp?: number;
};

type Events = SyntheticEvent | Event;

type ObjectString = {
	[key: string]: string;
};

type ObjectPrimitive = {
	[key: string]: string | number | boolean;
};

type Page = {
	alt?: string;
	component: JSX.Element;
	hasChildren?: boolean;
	id: number;
	isRoute?: boolean;
	label: string;
	props?: ObjectPrimitive;
	showInNav?: boolean;
	url: string;
};

/* Declare global types */
declare global {
	/* Declare global types */
	type ChildPagesType = ChildPages;

	type DateType = Date;

	type EventsType = Events;

	type ObjectStringType = ObjectString;

	type ObjectPrimitiveType = ObjectPrimitive;

	type PageType = Page;

	/* Declare global prop types */
	type ObjectPrimitiveProps = ObjectPrimitive;
}

/* Export global types */
export {};
