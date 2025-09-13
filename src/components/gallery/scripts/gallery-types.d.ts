/* React */
import { Dispatch } from 'react';

/* Type definitions */
type Gallery = {
	categories: string;
	date: string;
	description: string;
	description2?: string;
	handle: string;
	id: number;
	image?: string;
	index: number;
	mediums?: string;
	name: string;
	name2?: string;
	technologies?: string;
	thumb: string;
	timestamp: number;
	url?: string;
};

type GalleryPage = {
	headers: boolean;
	navigation: {
		back?: string;
	};
	path: string;
	tabs: GalleryTabs;
	values: GalleryType[];
};

type GalleryState = {
	activeTab: string;
	setActiveTab: Dispatch<string>;
};

type GalleryTabs = {
	all: boolean;
	enabled: boolean;
	values?: string[];
};

type GalleryWithGallery = {
	gallery: GalleryPage;
};

/* Export types */
export type GalleryTabsType = GalleryTabs;

export type GalleryType = Gallery;

/* Export prop types */
export type GalleryBodyProps = GalleryPage & GalleryState;

export type GalleryLinksProps = GalleryPage & GalleryState;

export type GalleryProps = GalleryWithGallery;

export type GalleryRoutesProps = GalleryWithGallery;

export type GalleryThumbnailsProps = GalleryPage & GalleryState;
