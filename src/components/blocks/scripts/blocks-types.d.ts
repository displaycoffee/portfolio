/* Type definitions */
type BlockShared = {
	children?: ReactNode;
	className?: string;
};

type Button = {
	onClick: MouseEventHandler<HTMLButtonElement>;
	type?: string;
	size?: string;
};

type CodeBlock = {
	header?: string;
};

type HeaderIcon = {
	tag?: keyof JSX.IntrinsicElements;
};

type Navigation = {
	navigation?: {
		back: string | boolean;
		next: NavigationHandle;
		path: string;
		previous: NavigationHandle;
	};
};

type NavigationHandle = {
	handle: string | boolean;
};

type Output = {
	code: string;
};

/* Export prop types */
export type ButtonProps = BlockShared & Button;

export type CodeBlockProps = BlockShared & CodeBlock;

export type CodeInlineProps = BlockShared;

export type HeaderIconProps = BlockShared & HeaderIcon;

export type OutputProps = BlockShared & Output;

export type PixelSectionProps = BlockShared & Navigation;

export type PreviewProps = BlockShared;
