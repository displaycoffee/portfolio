/* Local scripts */
import { utils } from '../../../_config/scripts/utils';

export const gallery = {
	get: {
		category: (modified, key, gallery) => {
			// Get category details for looping
			const current = modified[key];

			return {
				...current,
				navigation: gallery.navigation,
				path: gallery.path,
				thumbnails: gallery.thumbnails,
			};
		},
		navigation: (values, id) => {
			// Function to get navigation indexes
			const valuesCount = values.length - 1;

			// Find active index
			let selected = values.filter((value, index) => {
				value.index = index;
				return (value?.handle || value?.id) == id;
			});

			// Set current
			const current = selected.pop();

			// If previous / next index is out of bounds, loop around to start / end of values
			const nextIndex = current.index + 1;
			const previousIndex = current.index - 1;

			// Set navigation
			let navigation = {
				current: current,
				next: nextIndex > valuesCount ? values[0] : values[nextIndex],
				previous: previousIndex < 0 ? values[valuesCount] : values[previousIndex],
			};

			// Return navigation
			return navigation;
		},
	},
	create: {
		values: (modified, handle, value) => {
			// Create array of values for categories
			if (modified[handle]) {
				modified[handle].values.push({
					...value,
					handle: utils.handle(handle, value, modified[handle].values.length),
				});
			} else {
				modified[handle] = {
					header: value.categories,
					handle: handle,
					id: `gallery-${handle}`,
					values: [
						{
							...value,
							handle: utils.handle(handle, value, 0),
						},
					],
				};
			}
		},
	},
	build: (values, createAll) => {
		// Set initial modified gallery
		let modified = {};

		if (values && values.length !== 0) {
			if (createAll) {
				// Create grouping
				modified['all'] = {
					header: 'All',
					handle: 'all',
					id: 'gallery-all',
					values: [],
				};

				// Build values for "All" category
				values.forEach((value, index) => {
					value.index = index;
					gallery.create.values(modified, 'all', value);
				});
			}

			// Build values for other categories
			values.forEach((value, index) => {
				value.index = index;
				value.categories = value.categories ? value.categories : 'Uncategorized';
				const handle = utils.handleize(value.categories);
				gallery.create.values(modified, handle, value);
			});

			// Check if values can show
			Object.keys(modified).forEach((key) => {
				const current = modified[key];
				current.show = current.values && current.values.length !== 0 ? true : false;
			});
		}

		return modified;
	},
};
