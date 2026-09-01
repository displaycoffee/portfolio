/* Styles */
import './styles/blocks.scss';

/* Packages */
import { RefObject, useRef } from 'react';
import { Link } from 'react-router-dom';

/* Scripts */
import {
	CodeBlockProps,
	CodeInlineProps,
	HeaderIconProps,
	LinkExternalProps,
	ListProps,
	ListItemProps,
	OutputProps,
	PixelBlockProps,
	PreviewProps,
} from './scripts/blocks-types';

/* Components */
import { Button } from '../forms/Forms';
import { Icon } from '../icons/Icons';

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

				<Button className="code-block-button a" label="Select code" variant="unstyled" onClick={() => selectCode()} />
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

export const LinkExternal = (props: LinkExternalProps) => {
	const { children, className, href, ...rest } = props;

	return (
		<a className={className} href={href} target="_blank" rel="noreferrer" {...rest}>
			{children}
			<span className="sr-only"> (opens in a new tab)</span>
		</a>
	);
};

export const List = (props: ListProps) => {
	const { children, className: propClassName, reversed, start, type: listType, variant = 'ul', ...rest } = props;
	const isOrdered = variant.includes('ol');
	const isUnstyled = variant.includes('unstyled');
	const Tag = variant === 'dl' ? 'dl' : isOrdered ? 'ol' : 'ul';

	// Create classes
	const classes = [];
	if (isUnstyled) {
		classes.push(`list-unstyled`);
	} else {
		if (isOrdered) {
			classes.push(`list-ordered`);
		} else {
			classes.push(`list-${variant == 'dl' ? 'definition' : 'unordered'}`);
		}
	}
	const className = propClassName ? `${propClassName} ${classes.join(' ')}` : classes.join(' ');

	// Set up ol attributes
	const olAttributes = isOrdered ? { reversed, start, type: listType } : {};

	return (
		<Tag className={className} {...rest} {...olAttributes}>
			{children}
		</Tag>
	);
};

export const ListItem = (props: ListItemProps) => {
	const { children, term } = props;

	return (
		<div className="list-item-definition">
			<dt>{term}</dt>
			<dd>{children}</dd>
		</div>
	);
};

export const Output = (props: OutputProps) => {
	const { children, className, code } = props;
	const outputClass = className ? ` ${className}` : '';
	const outputContentClass = 'output-content margin-trim';

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

export const PixelBlock = (props: PixelBlockProps) => {
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
						<List className="pixel-navigation-list flex-wrap flex-align-items-center" variant="ul-unstyled">
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
						</List>
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
