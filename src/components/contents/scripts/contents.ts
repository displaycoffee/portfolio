/* Local scripts */
import { ContentsTagType, ContentsType } from './contents-types';
import { utils } from '../../../_config/scripts/utils';

export const contents = {
	build: (values: ContentsType[]) => {
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

				// Set new properties
				value.handle = handle;
				value.index = index;
			});
			return values;
		} else {
			return [];
		}
	},
	navigation: (values: ContentsType[], location: string) => {
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
		const current = selected.pop() as ContentsType;

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
