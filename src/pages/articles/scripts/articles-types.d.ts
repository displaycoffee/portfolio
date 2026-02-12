/* Type definitions */
type ArticlesSection = {
	children: ReactNode;
	header: string;
	scrollTop?: boolean;
};

type ArticlesToC = {
	offset: number;
	sections: string[];
};

/* Export prop types */
export type ArticlesSectionProps = ArticlesSection;

export type ArticlesToCProps = ArticlesToC;
