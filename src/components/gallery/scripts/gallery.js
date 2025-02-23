/* Local scripts */
import { utils } from '../../../_config/scripts/utils';

export const gallery = {
	get: {
		category: (modified, key, options) => {
			// Get category details for looping
			const current = modified[key];
			return {
				options: options,
				gallery: current,
			};
		},
		navigation: (values, id) => {
			// Get navigation for gallery
			return utils.getNavigation(values, id);
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
				values.forEach((value) => {
					gallery.create.values(modified, 'all', value);
				});
			}

			// Build values for other categories
			values.forEach((value) => {
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
