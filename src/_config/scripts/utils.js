/* React */
import { createRoot } from 'react-dom/client';

/* Get today's date as a fallback for setting timestamps */
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const day = today.getDate();
const fallback = `${year}-${month < 10 ? '0' + month : month}-${day}`;

export const utils = {
	handle: (handle, value, index) => {
		// Create unique handle / path for url routes
		const category = handle ? `${handle}-` : ``;
		const name = value.name ? utils.handleize(value.name) : index;
		const number = value.date ? value.date.replace(/\./g, '') : index;
		return `${category}${name}-${number}`;
	},
	handleize: (value) => {
		// Format value for html classes
		return value
			.toLowerCase()
			.replace(/[^\w\s]/g, '')
			.replace(/\s/g, '-')
			.trim();
	},
	getNavigation: (values, id) => {
		// Function to get navigation indexes
		const valuesCount = values.length - 1;

		// Set initial variables for navigation
		let navigation = {
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
			navigation.current = selected.pop();

			// If previous / next index is out of bounds, loop around to start / end of values
			const previousIndex = navigation.current.index - 1;
			const nextIndex = navigation.current.index + 1;
			navigation.previous = previousIndex < 0 ? values[valuesCount] : values[previousIndex];
			navigation.next = nextIndex > valuesCount ? values[0] : values[nextIndex];
		}

		return navigation;
	},
	renderTarget: (element, component) => {
		// Render target for app
		const targetElement = document.querySelector(element);
		if (targetElement) {
			const targetHasChildren = targetElement && targetElement?.children && targetElement.children.length !== 0 ? true : false;
			if (!targetHasChildren) {
				const targetTarget = createRoot(targetElement);
				targetTarget.render(component);
			}
		}
	},
	scrollTo: (e, selector, offset) => {
		// Scroll to element on page
		if (e) {
			e.preventDefault();
		}
		const anchor = {
			selector: selector ? selector : false,
			offset: offset ? offset : 0,
			position: () => {
				const anchorElement = document.querySelector(anchor.selector) ? document.querySelector(anchor.selector) : false;
				return anchorElement ? anchorElement.getBoundingClientRect().top + window.scrollY - anchor.offset : 0 - anchor.offset;
			},
		};
		window.scroll({ top: anchor.position(), left: 0, behavior: 'smooth' });
	},
	setAttributes: (element, atttributes) => {
		// Set multiple attributes on an element
		for (const attribute in atttributes) {
			element.setAttribute(attribute, atttributes[attribute]);
		}
	},
	setIcon: (file, size) => {
		return `/assets/images/theme/${file}-${size}.png`;
	},
	setTimestamp: (value) => {
		// Set date for each value
		let date = fallback;
		if (value?.date) {
			const splitDate = value.date.split('.');
			date = splitDate.length === 3 ? `20${splitDate[2]}-${splitDate[0]}-${splitDate[1]}` : fallback;
		}

		// Create timestamp
		const dateFromString = new Date(date);
		const timestampFromString = dateFromString.getTime();
		value.timestamp = timestampFromString;
	},
};
