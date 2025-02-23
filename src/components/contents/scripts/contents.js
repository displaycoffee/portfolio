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
	tags: (value) => {
		// Check tags and build values
		const values = value ? value.split(', ') : [];
		const hasTags = values && values.length !== 0 ? true : false;
		return {
			values: values,
			hasTags: hasTags,
		};
	},
	params: {
		url: {
			tag: 'tag',
		},
		get: () => {
			// Get decoded parameters from window location
			return decodeURIComponent(window.location.search.replace(/^\?/, '').replace(/\+/g, ' '));
		},
		add: (params, field, value, callback) => {
			let newParams = new URLSearchParams(String(params));

			// Append new parameters to url
			newParams.append(field, value);

			// Run callback if defined
			if (callback) {
				callback(String(newParams));
			}
		},
		remove: (params, field, value, callback) => {
			let newParams = new URLSearchParams(String(params));

			// Filter out values which should be retained
			const keepParams = newParams.getAll(field).filter((keep) => {
				return String(value).toLowerCase() != String(keep).toLowerCase();
			});

			// Delete field from parameters
			newParams.delete(field);

			// Add parameters without deleted field
			keepParams.forEach((keep) => {
				newParams.append(field, keep);
			});

			// Run callback if defined
			if (callback) {
				callback(String(newParams));
			}
		},
		clear: (params, field, callback) => {
			let newParams = new URLSearchParams(String(params));

			// Delete field from parameters
			newParams.delete(field);

			// Run callback if defined
			if (callback) {
				callback(String(newParams));
			}
		},
	},
};
