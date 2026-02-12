/* React */
import { useContext, useId } from 'react';
import { useLocation } from 'react-router-dom';

/* Local styles */
import './styles/articles.scss';

/* Local scripts */
import { ArticlesSectionProps, ArticlesToCProps } from './scripts/articles-types';
import { articles } from './scripts/articles';

/* Local components */
import { Context } from '../../context/Context';
import { Contents } from '../../components/contents/Contents';
import { HeaderIcon } from '../../components/blocks/Blocks';
import { BoxSizing } from './content/box-sizing/BoxSizing';
import { StructuringCode } from './content/structuring-code/StructuringCode';
import { StylingText } from './content/styling-text/StylingText';

/* Options for contents */
const options = {
	navigation: {
		back: 'Back to "Articles"',
	},
};

export const Articles = () => {
	const location = useLocation();
	const showArticles = location.pathname == '/articles' ? true : false;

	return showArticles ? <ArticlesIndex /> : <ArticlesContent />;
};

export const ArticlesIndex = () => {
	const contentsOptions = {
		...options,
		type: 'links',
		values: articles && articles.length !== 0 ? articles : [],
	};

	return (
		<>
			<HeaderIcon>Articles</HeaderIcon>

			<Contents {...contentsOptions} />
		</>
	);
};

export const ArticlesContent = () => {
	const context = useContext(Context);
	const location = useLocation();
	const contentsOptions = {
		...options,
		type: 'body',
		values: articles && articles.length !== 0 ? articles : [],
	};

	// Get last path
	const last = context.utils.getLast(location.pathname, '/');

	// Default content
	const defaultContent = <p>Thank you! But the article is in another castle.</p>;

	return (
		<Contents {...contentsOptions}>
			{{
				'boxsizing-my-best-friend': <BoxSizing />,
				'structuring-code': <StructuringCode />,
				'styling-text': <StylingText />,
			}[last as string] || defaultContent}
		</Contents>
	);
};

export const ArticlesSection = (props: ArticlesSectionProps) => {
	let { children, header, scrollTop } = props;
	scrollTop = typeof scrollTop == 'undefined' ? true : scrollTop;
	const fallbackId = useId().replace(/:/g, '');
	const context = useContext(Context);
	const utils = context.utils;

	return (
		<section id={`articles-section-${utils.handleize(header ? header : fallbackId)}`} className={`articles-section spacing-reset`}>
			{header ? <h4>{header}</h4> : null}

			{children}

			{scrollTop ? (
				<div className="articles-top">
					<button className="articles-top-button a" onClick={(e) => utils.scrollTo(e, 'body')}>
						<span className="icon icon-angle-up"></span>Back to top
					</button>
				</div>
			) : null}
		</section>
	);
};

export const ArticlesToC = (props: ArticlesToCProps) => {
	const { offset, sections } = props;
	const context = useContext(Context);
	const utils = context.utils;

	return (
		<div className="articles-toc">
			<h4>Table of Contents</h4>

			<ol>
				{sections.map((section) => (
					<li key={section}>
						<button
							className="a"
							onClick={(e) => utils.scrollTo(e, `#articles-section-${utils.handleize(section)}`, offset ? offset : 0)}
						>
							{section}
						</button>
					</li>
				))}
			</ol>
		</div>
	);
};
