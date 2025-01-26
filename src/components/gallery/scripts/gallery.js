/* Local scripts */
import { utils } from '../../../_config/scripts/utils';

export const gallery = {
	build: (content, showAll) => {
		// Set initial modified gallery
		let modified = {};

		// Determine if we should group by all
		if (showAll) {
			modified['all'] = {
				header: 'All',
				handle: 'all',
				id: 'gallery-all',
				values: [],
			};
		}

		// Build gallery with categories
		if (content && content.length !== 0) {
			content.forEach((item, index) => {
				const category = item.categories ? item.categories : 'Uncategorized';
				const handle = utils.handleize(category);

				// Add additional item props
				item.handle = `${handle}-${item.name ? utils.handleize(item.name) : index}`;

				// Push to all if enabled
				if (showAll) {
					modified.all.values.push({
						...item,
						index: modified.all.values.length,
					});
				}

				// Create specific gallery category
				if (modified[handle]) {
					modified[handle].values.push({
						...item,
						index: modified[handle].values.length,
					});
				} else {
					modified[handle] = {
						header: item.categories,
						handle: handle,
						id: `gallery-${handle}`,
						values: [
							{
								...item,
								index: 0,
							},
						],
					};
				}
			});
		}

		return modified;
	},
};
