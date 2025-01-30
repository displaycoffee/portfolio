/* Local scripts */
import { utils } from '../../../_config/scripts/utils';

export const pages = {
	build: (values) => {
		// Build values properties for pages
		if (values && values.length !== 0) {
			values.forEach((value, index) => {
				value.order = index;
				value.handle = utils.pageHandle(false, value, value.order);
			});
			return values;
		} else {
			return [];
		}
	},
};
