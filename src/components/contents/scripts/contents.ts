/* Local scripts */
import { ContentsTagType, ContentsType } from './contents-types';
import { utils } from '../../../_config/scripts/utils';

export const contents = {
	build: (values: ContentsType[]) => {
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
	get: {
		navigation: (values: ContentsType[], id: string) => {
			// Get navigation for contents
			const newValues: NavigationValueType[] = [];
			values.forEach((value, index) => {
				newValues.push({
					handle: value.handle,
					id: value.id,
					index: index,
				});
			});

			return utils.getNavigation(newValues, id);
		},
	},
	params: {
		add: (params: string, field: string, value: string, callback: Function) => {
			let newParams = new URLSearchParams(params);

			// Append new parameters to url
			newParams.append(field, value);

			// Run callback if defined
			if (callback) {
				callback(String(newParams));
			}
		},
		clear: (params: string, field: string, callback: Function) => {
			let newParams = new URLSearchParams(params);

			// Delete field from parameters
			newParams.delete(field);

			// Run callback if defined
			if (callback) {
				callback(String(newParams));
			}
		},
		get: () => {
			// Get decoded parameters from window location
			return decodeURIComponent(window.location.search.replace(/^\?/, '').replace(/\+/g, ' '));
		},
		remove: (params: string, field: string, value: string, callback: Function) => {
			let newParams = new URLSearchParams(params);

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
		url: {
			tag: 'tag',
		},
	},
	tags: (value: string) => {
		// Check tags and build values
		const splitValues = value ? value.split(', ') : [];
		const tags = [] as ContentsTagType[];
		const hasTags = splitValues && splitValues.length !== 0 ? true : false;

		// Format tag values
		if (hasTags) {
			splitValues.forEach((value: string) => {
				tags.push({
					label: value,
					value: value.toLowerCase(),
					active: false,
				});
			});
		}

		return {
			hasTags: hasTags,
			values: tags,
		};
	},
};
