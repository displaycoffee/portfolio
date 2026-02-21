/* Type definitions */
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

/* Declare global types */
declare global {
	/* Declare global types */
	type DateType = Date;

	type EventsType = Events;

	type ObjectStringType = ObjectString;

	type ObjectPrimitiveType = ObjectPrimitive;

	/* Declare global prop types */
	type ObjectPrimitiveProps = ObjectPrimitive;
}

/* Export global types */
export {};
