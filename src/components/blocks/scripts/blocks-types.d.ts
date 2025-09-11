/* React */
import { JSX, MouseEventHandler, ReactNode } from 'react';

/* Type definitions */
type GenericProps = {
	children?: ReactNode;
	className?: string;
};

type PixelSectionHandle = {
	handle: String;
};

/* Export types */
export type ButtonProps = GenericProps & {
	onClick: MouseEventHandler<HTMLButtonElement>;
	type?: string;
	size?: string;
};

export type CodeBlockProps = GenericProps & {
	header?: string;
};

export type CodeInlineProps = GenericProps;

export type HeaderIconProps = GenericProps & {
	tag?: keyof JSX.IntrinsicElements;
};

export type OutputProps = GenericProps & {
	code: string;
};

export type PixelSectionProps = GenericProps & {
	navigation?: {
		back: string | boolean;
		next: PixelSectionHandle;
		path: string;
		previous: PixelSectionHandle;
	};
};

export type PreviewProps = GenericProps;
