/* Type definitions */
type Galleries = Gallery[];

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
	headers?: {
		enabled?: boolean;
		label?: string;
	};
	navigation?: {
		back?: string;
	};
	tabs?: {
		all?: boolean;
		enabled?: boolean;
	};
	type: string;
	values: Galleries;
};

type GalleryPage = {
	headers: {
		enabled: boolean;
		label: string | boolean;
	};
	location: string;
	navigation: {
		back: string | boolean;
	};
	tabs: {
		all: boolean;
		enabled: boolean;
	};
	values: Galleries;
};

type GalleryTabsOptions = {
	all?: boolean;
	enabled?: boolean;
};

type GalleryTabsStorage = {
	default: number;
	active: {
		[key: string]: string;
	};
};

/* Export types */
export type GalleriesType = Galleries;

export type GalleryTabsOptionsType = GalleryTabsOptions;

export type GalleryTabsStorageType = GalleryTabsStorage;

export type GalleryType = Gallery;

/* Export prop types */
export type GalleryBodyProps = GalleryPage;

export type GalleryLinksProps = GalleryPage;

export type GalleryProps = GalleryOptions;

export type GalleryThumbnailProps = GalleryPage;
