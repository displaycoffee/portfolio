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

type PixelSection = Navigation & {
	children?: ReactNode;
	className?: string;
};

type Preview = BlockShared;

/* Export prop types */
export type ButtonProps = Button;

export type CodeBlockProps = CodeBlock;

export type CodeInlineProps = CodeInline;

export type HeaderIconProps = HeaderIcon;

export type OutputProps = Output;

export type PixelSectionProps = PixelSection;

export type PreviewProps = Preview;
