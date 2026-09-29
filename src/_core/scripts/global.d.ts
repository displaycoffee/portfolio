/* Packages */
import type { SyntheticEvent } from 'react';
import type themeJson from '../tokens/theme.json';

/* Type definitions */
type Date = {
	date: string;
	timestamp?: number;
	updated?: string;
};

type Events = SyntheticEvent | Event;

type ObjectString = {
	[key: string]: string;
};

type ObjectPrimitive = {
	[key: string]: Primitive;
};

type Primitive = string | number | boolean;

type Site = {
	name: string;
	description: string;
	url: string;
};

type Target = {
	name: string;
	src: string;
	hasTabindex: boolean;
	isScript: boolean;
};

type Theme = {
	breakpoints: (typeof themeJson)['breakpoint'];
	colors: (typeof themeJson)['color'];
};

type Utils = {
	getLast: (value: string | string[], delimeter?: string) => string | number;
	getPage: () => string;
	handleize: (value: string) => string;
	linkExternal: (href: string, label: string) => string;
	scrollTo: (e?: Events, selector?: string, offset?: number) => void;
	setAttributes: (element: HTMLElement, attributes: ObjectString) => void;
	setTimestamp: (value: Date) => void;
};

type Variables = {
	paths: {
		basename: string;
	};
	site: Site;
};

declare global {
	// Declare global types
	type DateType = Date;

	type EventsType = Events;

	type ObjectStringType = ObjectString;

	type ObjectPrimitiveType = ObjectPrimitive;

	type SiteType = Site;

	type TargetType = Target;

	type ThemeType = Theme;

	type UtilsType = Utils;

	type VariablesType = Variables;

	// Declare global prop types
	type ObjectPrimitiveProps = ObjectPrimitive;
}

/* Export global types */
export {};
