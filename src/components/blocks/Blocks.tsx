/* React */
import { RefObject, useRef } from 'react';
import { Link } from 'react-router-dom';

/* Local styles */
import './styles/blocks.scss';

/* Local scripts */
import { ButtonProps, CodeBlockProps, CodeInlineProps, HeaderIconProps, OutputProps, PixelSectionProps, PreviewProps } from './scripts/blocks-types';

/* Local components */
import { Icon } from '../icons/Icons';

export const Button = (props: ButtonProps) => {
	const { children, className, onClick, size } = props;
	let type = props.type;
	type = typeof type == 'undefined' ? 'primary' : type;
	const buttonClass = className ? `${className} ` : '';

	return (
		<button
			className={`${buttonClass}button button-${type}${size ? ' button-' + size : ''}`}
			type="button"
			aria-label={`${children} button`}
			onClick={(e) => onClick(e)}
		>
			<span>{children}</span>
		</button>
	);
};

export const CodeBlock = (props: CodeBlockProps) => {
	const { className, header } = props;
	let children = props.children;
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

				<button className="code-block-button a" type="button" aria-label="Select code button" onClick={() => selectCode()}>
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
	const { children, className } = props;
	const codeClass = className ? `${className} ` : '';

	return <code className={`${codeClass}code-inline`}>{children}</code>;
};

export const HeaderIcon = (props: HeaderIconProps) => {
	const { children, className, tag } = props;
	const Tag = (tag ? tag : 'h2') as React.ElementType; // This will define the element / tag to be used
	const headerClass = className ? `${className} ` : '';

	return (
		<Tag className={`${headerClass}h-icon`}>
			<Icon id={'angle-right'} isBold={true} shadowSize={'x2'} />
			{children}
		</Tag>
	);
};

export const Output = (props: OutputProps) => {
	const { children, className, code } = props;
	const outputClass = className ? ` ${className}` : '';
	const outputContentClass = 'output-content spacing-reset';

	return (
		<>
			<h4>Output</h4>
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

export const PixelSection = (props: PixelSectionProps) => {
	const { children, className, navigation } = props;
	const pixelClass = className ? `${className} ` : '';

	// Show pixel navigation if props are available
	const showNavigation = !children && navigation && navigation.path;

	// Separator for naviation
	const navigationSeparator = (
		<li className="pixel-navigation-list-item pixel-navigation-separator">
			<Icon id={'bullet'} />
		</li>
	);

	// Set params if available
	const params = navigation?.params ? navigation.params : '';

	// Set urls if navigation element
	let previousUrl = '';
	let nextUrl = '';
	let backUrl = '';

	if (showNavigation) {
		if (navigation?.previous?.handle) {
			previousUrl = `${navigation.path}/${navigation.previous.handle}${params}`;
		}
		if (navigation?.next?.handle) {
			nextUrl = `${navigation.path}/${navigation.next.handle}${params}`;
		}
		if (navigation?.back) {
			backUrl = `${navigation.path}${params}`;
		}
	}

	return (
		<div className={`${pixelClass}pixel-block`}>
			<div className="pixel-border-rounded"></div>

			<div className="pixel-block-wrapper">
				{children ? (
					children
				) : showNavigation ? (
					<nav className="pixel-navigation">
						<ul className="pixel-navigation-list unstyled flex-wrap flex-align-items-center">
							{previousUrl && (
								<li className="pixel-navigation-list-item pixel-navigation-previous">
									<Link className="pixel-navigation-link" to={previousUrl}>
										<Icon id={'angle-left'} />
										<span className="pixel-navigation-label">Previous</span>
									</Link>
								</li>
							)}

							{backUrl && (
								<>
									{navigation?.previous?.handle ? navigationSeparator : null}

									<li className="pixel-navigation-list-item pixel-navigation-back">
										<Link className="pixel-navigation-link" to={backUrl}>
											{navigation.back}
										</Link>
									</li>
								</>
							)}

							{nextUrl && (
								<>
									{navigationSeparator}

									<li className="pixel-navigation-list-item pixel-navigation-next">
										<Link className="pixel-navigation-link" to={nextUrl}>
											<span className="pixel-navigation-label">Next</span>
											<Icon id={'angle-right'} />
										</Link>
									</li>
								</>
							)}
						</ul>
					</nav>
				) : null}
			</div>
		</div>
	);
};

export const Preview = (props: PreviewProps) => {
	const { children, className } = props;
	const previewClass = className ? ` ${className}` : '';

	return (
		<>
			<h4>Preview</h4>
			<div className={`preview${previewClass}`}>{children}</div>
		</>
	);
};
