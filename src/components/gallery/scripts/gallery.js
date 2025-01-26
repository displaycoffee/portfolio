/* Local scripts */
import { utils } from '../../../_config/scripts/utils';

export const gallery = {
	create: {
		handle: (handle, value, order) => {
			// Create unique handle / path for values
			const name = value.name ? utils.handleize(value.name) : order;
			const number = value.date ? value.date.replace(/\./g, '') : order;
			return `${handle}-${name}-${number}`;
		},
		values: (modified, handle, value) => {
			// Create array of values for categories
			if (modified[handle]) {
				const order = modified[handle].values.length;
				modified[handle].values.push({
					...value,
					order: order,
					handle: gallery.create.handle(handle, value, order),
				});
			} else {
				modified[handle] = {
					header: value.categories,
					handle: handle,
					id: `gallery-${handle}`,
					values: [
						{
							...value,
							order: 0,
							handle: gallery.create.handle(handle, value, 0),
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
		}

		return modified;
	},
};
