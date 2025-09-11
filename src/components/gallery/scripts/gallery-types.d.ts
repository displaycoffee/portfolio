/* React */
import { FunctionComponent, ReactNode } from 'react';

/* Type definitions */
type Galleries = {
	[key: string]: Gallery;
};

type Gallery = {
	handle: string;
	header: string;
	id: string;
	show: boolean;
	values: GalleryImage[];
};

type GalleryImage = {
	categories: string;
	date: string;
	description: string;
	description2?: string;
	id: number;
	image: string;
	thumb: string;
	mediums: string;
	name: string;
	name2?: string;
};

type GalleryOptions = {
	navigation: {
		back?: string;
	};
	path: string;
};

// type GalleryTag = {
// 	active: boolean;
// 	label: string;
// 	value: string;
// };

// type GalleryPage = {
// 	navigation: {
// 		back?: string;
// 	};
// 	path: string;
// 	values: ContentType[];
// };

/* Export types */
export type GalleriesType = Galleries;
// export type GalleryBodyProps = GalleryPage;

// export type GalleryLinksProps = GalleryPage;

// export type GalleryDateProps = {
// 	gallery: Content;
// };

// export type GalleryProps = {
// 	gallery: GalleryPage;
// };

// export type GalleryRoutesProps = {
// 	gallery: GalleryPage;
// };

// export type GalleryTagsProps = {
// 	children: ReactNode;
// };

// export type GalleryTagsType = {
// 	[key: string]: GalleryTagType;
// };

// export type GalleryTagType = GalleryTag;

// export type ContentType = Content;
