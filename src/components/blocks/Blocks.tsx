/* React */
import { JSX, MouseEventHandler, ReactNode, RefObject, useRef } from 'react';
import { Link } from 'react-router-dom';

/* Local styles */
import './styles/blocks.scss';

export const HeaderIcon = (props: HeaderIconProps) => {
	const { tag, className, children } = props;
	const Tag = tag ? tag : 'h3'; // This will define the element / tag to be used
	const headerClass = className ? `${className} ` : '';

	return (
		<Tag className={`${headerClass}h-icon`}>
			<span className="icon icon-angle-right icon-bold icon-shadow-x2"></span>
			{children}
		</Tag>
	);
};

export const Button = (props: ButtonProps) => {
	let { type, size, className, onClick, children } = props;
	type = typeof type == 'undefined' ? 'primary' : type;
	const buttonClass = className ? `${className} ` : '';

	return (
		<button className={`${buttonClass}button button-${type}${size ? ' button-' + size : ''}`} onClick={(e) => onClick(e)} type="button">
			<span>{children}</span>
		</button>
	);
};

export const CodeBlock = (props: CodeBlockProps) => {
	let { className, header, children } = props;
	const codeClass = className ? `${className} ` : '';

	// Set code block ref
	const codeRef: RefObject<HTMLDivElement | null> = useRef(null);

	// Function to select code inside code block
	const selectCode = () => {
		const codeBlock = codeRef?.current;
		if (codeBlock) {
			const range = document.createRange();
			range.selectNodeContents(codeBlock);
			const selection = window.getSelection();
			if (selection) {
				selection.removeAllRanges();
				selection.addRange(range);
			}
		}
	};

	// Re-format children HTML to get aligned code blocks
	const childrenString = children as string;
	if (childrenString && childrenString.includes('\n\t')) {
		children = childrenString.replace(/\n\t/g, '\n');
	}

	return (
		<div className={`${codeClass}code-block`}>
			<header className="code-block-header flex-nowrap flex-align-items-center">
				{header ? <span className="code-block-label">{header}</span> : null}

				<button className="code-block-button a" onClick={() => selectCode()}>
					Select code
				</button>
			</header>

			<pre className="code-block-pre scrollbar">
				<code ref={codeRef}>{children}</code>
			</pre>
		</div>
	);
};

export const CodeInline = (props: CodeInlineProps) => {
	let { className, children } = props;
	const codeClass = className ? `${className} ` : '';

	return <code className={`${codeClass}code-inline`}>{children}</code>;
};

export const Output = (props: OutputProps) => {
	const { className, code, children } = props;
	const outputClass = className ? ` ${className}` : '';
	const outputContentClass = 'output-content spacing-reset';

	return (
		<>
			<h5>Output</h5>
			<div className={`output${outputClass}`}>
				{children ? (
					<div className={outputContentClass}>{children}</div>
				) : code ? (
					<div className={outputContentClass} dangerouslySetInnerHTML={{ __html: code }}></div>
				) : null}
			</div>
		</>
	);
};

export const Preview = (props: PreviewProps) => {
	const { className, children } = props;
	const previewClass = className ? ` ${className}` : '';

	return (
		<>
			<h5>Preview</h5>
			<div className={`preview${previewClass}`}>{children}</div>
		</>
	);
};

export const PixelSection = (props: PixelSectionProps) => {
	let { className, children, navigation } = props;
	const pixelClass = className ? `${className} ` : '';

	// Show pixel navigation if props are available
	const showNavigation = !children && navigation && navigation.path ? true : false;

	// Separator for naviation
	const navigationSeparator = (
		<li className="pixel-navigation-list-item pixel-navigation-separator">
			<span className="icon icon-bullet icon-shadow-x1"></span>
		</li>
	);

	return (
		<section className={`${pixelClass}pixel-section`}>
			<div className="pixel-border-rounded"></div>

			<div className="pixel-section-wrapper">
				{children ? (
					children
				) : showNavigation ? (
					<nav className="pixel-navigation">
						<ul className="pixel-navigation-list unstyled flex-wrap flex-align-items-center">
							{navigation?.previous && (
								<li className="pixel-navigation-list-item pixel-navigation-previous">
									<Link className="pixel-navigation-link" to={`${navigation.path}/${navigation.previous.handle}`}>
										<span className="icon icon-angle-left icon-shadow-x1"></span>
										<span className="pixel-navigation-label">Previous</span>
									</Link>
								</li>
							)}

							{navigation?.back && (
								<>
									{navigationSeparator}

									<li className="pixel-navigation-list-item pixel-navigation-back">
										<Link className="pixel-navigation-link" to={`${navigation.path}`}>
											{navigation.back}
										</Link>
									</li>
								</>
							)}

							{navigationSeparator}

							{navigation?.next && (
								<li className="pixel-navigation-list-item pixel-navigation-next">
									<Link className="pixel-navigation-link" to={`${navigation.path}/${navigation.next.handle}`}>
										<span className="pixel-navigation-label">Next</span>
										<span className="icon icon-angle-right icon-shadow-x1"></span>
									</Link>
								</li>
							)}
						</ul>
					</nav>
				) : null}
			</div>
		</section>
	);
};

/* Types */
type GenericProps = {
	className: string;
	children: ReactNode;
};
type HeaderIconProps = GenericProps & {
	tag?: keyof JSX.IntrinsicElements;
};
type ButtonProps = GenericProps & {
	type?: string;
	size: string;
	onClick: MouseEventHandler<HTMLButtonElement>;
};
type CodeBlockProps = GenericProps & {
	header?: string;
};
type CodeInlineProps = GenericProps;
type OutputProps = GenericProps & {
	code: string;
};
type PreviewProps = GenericProps;
type PixelSectionHandle = {
	handle: String;
};
type PixelSectionProps = GenericProps & {
	navigation: {
		path: String;
		back: String;
		previous: PixelSectionHandle;
		next: PixelSectionHandle;
	};
};
