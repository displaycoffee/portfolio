/* Packages */
import { AnchorHTMLAttributes, OlHTMLAttributes, ReactNode } from 'react';

/* Type definitions */
type BlockShared = {
	children: ReactNode;
	className?: string;
};

type Button = BlockShared & {
	onClick: MouseEvent<HTMLButtonElement>;
	type?: string;
	size?: string;
};

type CodeBlock = BlockShared & {
	header?: string;
};

type CodeInline = BlockShared;

type HeaderIcon = BlockShared & {
	tag?: string;
};

type LinkExternal = {
	children: ReactNode;
	className?: string;
	href: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children' | 'className' | 'href' | 'rel' | 'target'>;

type List = {
	children: ReactNode;
	className?: string;
	variant?: 'dl' | 'ol' | 'ol-unstyled' | 'ul' | 'ul-unstyled';
} & Omit<OlHTMLAttributes<HTMLOListElement>, 'children' | 'className' | 'variant'>;

type ListItem = {
	children: ReactNode;
	term: string | number;
};

type Navigation = {
	navigation?: {
		back: string | boolean;
		next: NavigationHandle;
		params?: string;
		path: string;
		previous: NavigationHandle;
	};
};

type NavigationHandle = {
	handle: string | boolean;
};

type Output = {
	children?: ReactNode;
	className?: string;
	code: string;
};

type PixelBlock = Navigation & {
	children?: ReactNode;
	className?: string;
};

type Preview = BlockShared;

/* Export prop types */
export type ButtonProps = Button;

export type CodeBlockProps = CodeBlock;

export type CodeInlineProps = CodeInline;

export type HeaderIconProps = HeaderIcon;

export type LinkExternalProps = LinkExternal;

export type ListProps = List;

export type ListItemProps = ListItem;

export type OutputProps = Output;

export type PixelBlockProps = PixelBlock;

export type PreviewProps = Preview;
