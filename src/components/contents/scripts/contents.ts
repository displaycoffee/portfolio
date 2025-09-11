/* Local scripts */
import { ContentTagType, ContentType } from './contents-types';
import { utils } from '../../../_config/scripts/utils';

export const contents = {
	build: (values: ContentType[]) => {
		// Build values properties for content
		if (values && values.length !== 0) {
			values.forEach((value, index) => {
				let name = `${index}`;
				if (value?.name2) {
					name = utils.handleize(value.name2);
				} else if (value?.name) {
					name = utils.handleize(value.name);
				}
				value.handle = name;
			});
			return values;
		} else {
			return [];
		}
	},
	get: {
		navigation: (values: ContentType[], id: string) => {
			// Function to get navigation indexes
			const valuesCount = values.length - 1;

			// Set initial variables for navigation
			let navigation: {
				[key: string]: Boolean | ContentType;
			} = {
				current: false,
				previous: false,
				next: false,
			};

			// Find active index
			let selected = values.filter((value, index) => {
				value.index = index;
				return (value?.handle || value?.id) == id;
			});

			// Update content details and create previous / next elements
			if (selected && selected.length !== 0) {
				// Set current
				navigation.current = selected.pop() as ContentType;

				// If previous / next index is out of bounds, loop around to start / end of values
				const previousIndex = navigation.current.index - 1;
				const nextIndex = navigation.current.index + 1;
				navigation.previous = previousIndex < 0 ? values[valuesCount] : values[previousIndex];
				navigation.next = nextIndex > valuesCount ? values[0] : values[nextIndex];
			}

			// Return navigation
			return navigation;
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
		const tags = [] as ContentTagType[];
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
