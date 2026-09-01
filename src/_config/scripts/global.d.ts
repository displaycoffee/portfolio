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

type Theme = {
	bps: {
		bp01: Primitive;
		bp02: Primitive;
		bp03: Primitive;
		bp04: Primitive;
	};
	colors: {
		color01: Primitive;
		color02: Primitive;
		color03: Primitive;
		color04: Primitive;
		color05: Primitive;
		color06: Primitive;
		color07: Primitive;
		color08: Primitive;
		color09: Primitive;
		color10: Primitive;
		color11: Primitive;
		color12: Primitive;
	};
};

type Utils = {
	focusTrap: {
		activate: (container: HTMLElement, focusSelector?: string) => void;
		deactivate: (container: HTMLElement) => void;
	};
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
};

/* Declare global types */
declare global {
	/* Declare global types */
	type DateType = Date;

	type EventsType = Events;

	type ObjectStringType = ObjectString;

	type ObjectPrimitiveType = ObjectPrimitive;

	type ThemeType = Theme;

	type UtilsType = Utils;

	type VariablesType = Variables;

	/* Declare global prop types */
	type ObjectPrimitiveProps = ObjectPrimitive;
}

/* Export global types */
export {};
