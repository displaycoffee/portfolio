/* React */
import { useContext, useId } from 'react';

/* Local styles */
import './styles/articles.scss';

/* Local scripts */
import { ArticlesSectionProps, ArticlesTocProps } from './scripts/articles-types';
import { articles } from './scripts/articles';

/* Local components */
import { Context } from '../../context/Context';
import { Contents } from '../../components/contents/Contents';
import { HeaderIcon } from '../../components/blocks/Blocks';

export const Articles = () => {
	const showContent = window.location.pathname == '/articles' ? true : false;
	const hasArticles = articles && articles.length !== 0 ? true : false;

	// Options for content
	const contentsOptions = {
		navigation: {
			back: 'Back to "Articles"',
		},
		path: '/articles',
		values: hasArticles ? articles : [],
	};

	return hasArticles ? (
		<>
			{showContent && <HeaderIcon>Articles</HeaderIcon>}

			<Contents options={contentsOptions} />
		</>
	) : null;
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

export const ArticlesToc = (props: ArticlesTocProps) => {
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
