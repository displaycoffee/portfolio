/* Styles */
import './styles/articles.scss';

/* Packages */
import { useId } from 'react';
import { useLocation } from 'react-router-dom';

/* Scripts */
import { useAppContext } from '../../context/scripts/context-hooks';
import { ArticlesSectionProps, ArticlesToCProps } from './scripts/articles-types';
import { articles } from './scripts/articles';

/* Components */
import { Contents } from '../../components/contents/Contents';
import { HeaderIcon, List } from '../../components/blocks/Blocks';
import { ButtonScroll } from '../../components/forms/Forms';
import { Icon } from '../../components/icons/Icons';
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
	const showArticles = location.pathname == '/articles';

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

			<p>
				Below you'll find a few articles I wrote. Most of these are very basic (and some might be a little outdated), but maybe they’re still
				useful.
			</p>

			<Contents {...contentsOptions} />
		</>
	);
};

export const ArticlesContent = () => {
	const { utils } = useAppContext();
	const location = useLocation();
	const contentsOptions = {
		...options,
		type: 'body',
		values: articles && articles.length !== 0 ? articles : [],
	};

	// Get last path
	const last = utils.getLast(location.pathname, '/');

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
	const { children, header } = props;
	let scrollTop = props.scrollTop;
	scrollTop = scrollTop ?? true;
	const fallbackId = useId().replace(/:/g, '');
	const { utils } = useAppContext();

	return (
		<section id={`articles-section-${utils.handleize(header || fallbackId)}`} className={`articles-section margin-trim`}>
			{header ? <h3>{header}</h3> : null}

			{children}

			{scrollTop ? (
				<div className="articles-top">
					<ButtonScroll className="articles-top-button" label="Back to top" target="body">
						<Icon id={'angle-up'} shadowSize={'none'} />
					</ButtonScroll>
				</div>
			) : null}
		</section>
	);
};

export const ArticlesToC = (props: ArticlesToCProps) => {
	const { offset, sections } = props;
	const { utils } = useAppContext();

	return (
		<div className="articles-toc">
			<h3>Table of Contents</h3>

			<List variant="ol">
				{sections.map((section) => (
					<li key={section}>
						<ButtonScroll
							className="articles-top-button"
							label={section}
							target={`#articles-section-${utils.handleize(section)}`}
							offset={offset ? offset : 0}
							aria-label={`${section} button`}
						/>
					</li>
				))}
			</List>
		</div>
	);
};
