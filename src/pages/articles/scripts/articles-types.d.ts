/* Type definitions */
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
export type ArticlesSectionProps = ArticlesSection;

export type ArticlesTocProps = ArticlesToc;
