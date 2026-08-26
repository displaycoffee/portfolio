/* Packages */
import { AnchorHTMLAttributes, OlHTMLAttributes, ReactNode } from 'react';

/* Type definitions */
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

type Section = {
	children: ReactNode;
	className?: string;
	hasScroll?: boolean;
	id?: string;
	title?: string;
};

/* Export prop types */
export type LinkExternalProps = LinkExternal;

export type ListProps = List;

export type ListItemProps = ListItem;

export type SectionProps = Section;
