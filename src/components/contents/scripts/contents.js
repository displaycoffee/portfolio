/* Local scripts */
import { utils } from '../../../_config/scripts/utils';

export const contents = {
	get: {
		navigation: (values, id) => {
			// Get navigation for contents
			return utils.getNavigation(values, id);
		},
	},
	build: (values) => {
		// Build values properties for content
		if (values && values.length !== 0) {
			values.forEach((value, index) => {
				value.handle = utils.handle(false, value, index);
			});
			return values;
		} else {
			return [];
		}
	},
};
