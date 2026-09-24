/* Packages */
import { useId } from 'react';

/* Scripts */
import type { ArticlesSectionProps, ArticlesToCProps } from './scripts/articles-types';
import { useAppContext } from '../../context/scripts/context-hooks';

/* Components */
import { List } from '../../components/blocks/Blocks';
import { ButtonScroll } from '../../components/forms/Forms';
import { Icon } from '../../components/icons/Icons';

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
					<ButtonScroll className={'articles-top-button'} label={'Back to top'} target={'body'}>
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

			<List variant={'ol'}>
				{sections.map((section) => (
					<li key={section}>
						<ButtonScroll
							className={'articles-top-button'}
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
