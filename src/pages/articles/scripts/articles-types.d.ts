/* Local scripts */
import { ContentsType } from '../../../components/contents/scripts/contents-types';

/* Type definitions */
type ArticlesLocation = {
	location: string;
};

type ArticlesSection = {
	children: ReactNode;
	header: string;
	scrollTop?: boolean;
};

type ArticlesToc = {
	offset: number;
	sections: string[];
};

/* Export prop types */
export type ArticlesIndexProps = ArticlesLocation;

export type ArticlesContentProps = ArticlesLocation;

export type ArticlesSectionProps = ArticlesSection;

export type ArticlesTocProps = ArticlesToc;
