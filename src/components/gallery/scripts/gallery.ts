/* Local scripts */
import { GalleriesType, GalleryTabsOptionsType, GalleryType } from './gallery-types';
import { utils } from '../../../_config/scripts/utils';

export const gallery = {
	build: (values: GalleriesType, tabs: GalleryTabsOptionsType) => {
		// Build values properties for content
		if (values && values.length !== 0) {
			values.forEach((value, index) => {
				// Create handle for value (needed for routes)
				let handle = `${index}`;
				if (value?.name2) {
					handle = utils.handleize(value.name2);
				} else if (value?.name) {
					handle = utils.handleize(value.name);
				}

				// Ensure category is set
				let categories = value?.categories ? value.categories : 'Uncategorized';

				// If tabs.all is set, add "All" category
				if (tabs.enabled && tabs.all && !categories.includes('All')) {
					categories = 'All, ' + categories;
				}

				// Set new properties
				value.categories = categories;
				value.handle = handle;
				value.index = index;
			});
			return values;
		} else {
			return [];
		}
	},
	includeValue: (enabled: boolean, categories?: string, storage?: string | boolean) => {
		// Determine whether value should be includes in loop
		let includeValue = true;
		if (enabled && categories && storage) {
			includeValue = categories.includes(storage as string) ? true : false;
		}
		return includeValue;
	},
	navigation: (values: GalleriesType, location: string) => {
		// Function to get navigation indexes
		const valuesCount = values.length - 1;

		// Get last path in location
		const lastPath = utils.getLast(location, '/');

		// Find active index
		let selected = values.filter((value, index) => {
			value.index = index; // Ensure value has correct index
			return value?.handle == lastPath;
		});

		// Set current
		const current = selected.pop() as GalleryType;

		// If previous / next index is out of bounds, loop around to start / end of values
		const nextIndex = (current.index as number) + 1;
		const previousIndex = (current.index as number) - 1;

		// Set navigation
		let navigation = {
			current: current,
			next: nextIndex > valuesCount ? values[0] : values[nextIndex],
			previous: previousIndex < 0 ? values[valuesCount] : values[previousIndex],
		};

		// Return navigation
		return navigation;
	},
};
