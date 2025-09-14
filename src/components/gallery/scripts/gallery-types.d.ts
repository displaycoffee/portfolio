/* React */
import { Dispatch } from 'react';

/* Type definitions */
type Gallery = {
	categories?: string;
	date: string;
	description?: string;
	description2?: string;
	handle?: string;
	id: number;
	image?: string;
	index?: number;
	mediums?: string;
	name: string;
	name2?: string;
	technologies?: string;
	thumb: string;
	timestamp?: number;
	url?: string;
};

type GalleryOptions = {
	options: {
		headers?: {
			enabled?: boolean;
			label?: string;
		};
		navigation?: {
			back?: string;
		};
		path: string;
		tabs?: {
			all?: boolean;
			enabled?: boolean;
		};
		values: Gallery[];
	};
};

type GalleryPage = {
	headers: {
		enabled: boolean;
		label: string | boolean;
	};
	navigation: {
		back: string | boolean;
	};
	path: string;
	tabs: GalleryTabs;
	values: Gallery[];
};

type GalleryTabs = {
	activeTab: string;
	all: boolean;
	enabled: boolean;
	setActiveTab: Dispatch<string>;
	values: string[];
};

/* Export types */
export type GalleryTabsType = GalleryTabs;

export type GalleryType = Gallery;

/* Export prop types */
export type GalleryBodyProps = GalleryPage;

export type GalleryLinksProps = GalleryPage;

export type GalleryProps = GalleryOptions;

export type GalleryRoutesProps = GalleryOptions;

export type GalleryThumbnailsProps = GalleryPage;
