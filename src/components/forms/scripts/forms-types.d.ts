/* Packages */
import { ButtonHTMLAttributes, ReactNode } from 'react';

/* Type definitions */
type Button = {
	children?: ReactNode;
	className?: string;
	hideLabel?: boolean;
	label: string;
	size?: string;
	type?: 'button' | 'reset' | 'submit';
	variant?: 'link' | 'primary' | 'secondary' | 'tertiary' | 'unstyled';
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'className' | 'size' | 'type' | 'variant'>;

type ButtonScroll = Omit<Button, 'onClick' | 'type' | 'variant'> & {
	offset?: number;
	target: string;
};

/* Export prop types */
export type ButtonProps = Button;

export type ButtonScrollProps = ButtonScroll;
