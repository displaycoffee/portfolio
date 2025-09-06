/* React */
import { ReactNode } from 'react';
import { createRoot } from 'react-dom/client';

/* Get today's date as a fallback for setting timestamps */
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const day = today.getDate();
const fallback = `${year}-${month < 10 ? '0' + month : month}-${day}`;

export const utils = {
	getNavigation: (values: NavigationValueType[], id: string) => {
		// Function to get navigation indexes
		const valuesCount = values.length - 1;

		// Set initial variables for navigation
		let navigation: {
			[key: string]: Boolean | NavigationValueType;
		} = {
			current: false,
			previous: false,
			next: false,
		};

		// Find active index
		let selected = values.filter((value: NavigationValueType, index: number) => {
			value.index = index;
			return (value?.handle || value?.id) == id;
		});

		// Update content details and create previous / next elements
		if (selected && selected.length !== 0) {
			// Set current
			navigation.current = selected.pop() as NavigationValueType;

			// If previous / next index is out of bounds, loop around to start / end of values
			const previousIndex = navigation.current.index - 1;
			const nextIndex = navigation.current.index + 1;
			navigation.previous = previousIndex < 0 ? values[valuesCount] : values[previousIndex];
			navigation.next = nextIndex > valuesCount ? values[0] : values[nextIndex];
		}

		return navigation;
	},
	handle: (handle: string | boolean, value: DateType, index: number) => {
		// Create unique handle / path for url routes
		const category = handle ? `${handle}-` : ``;
		const name = value.name ? utils.handleize(value.name) : index;
		const number = value.date ? value.date.replace(/\./g, '') : index;
		return `${category}${name}-${number}`;
	},
	handleize: (value: string) => {
		// Format value for html classes
		return value
			.toLowerCase()
			.replace(/[^\w\s]/g, '')
			.replace(/\s/g, '-')
			.trim();
	},
	renderTarget: (element: string, component: ReactNode) => {
		// Render target for app
		const targetElement = document.querySelector(element);
		if (targetElement) {
			const targetHasChildren = targetElement?.children && targetElement.children.length !== 0 ? true : false;
			if (!targetHasChildren) {
				const targetTarget = createRoot(targetElement);
				targetTarget.render(component);
			}
		}
	},
	scrollTo: (e: EventType, selector: string | undefined, offset: number) => {
		// Scroll to element on page
		if (e) {
			e.preventDefault();
		}
		const anchor = {
			selector: selector,
			offset: offset ? offset : 0,
			position: () => {
				const anchorElement = anchor.selector && document.querySelector(anchor.selector) ? document.querySelector(anchor.selector) : false;
				return anchorElement ? anchorElement.getBoundingClientRect().top + window.scrollY - anchor.offset : 0 - anchor.offset;
			},
		};
		window.scroll({ top: anchor.position(), left: 0, behavior: 'smooth' });
	},
	setAttributes: (element: HTMLElement, attributes: ObjectStringType) => {
		// Set multiple attributes on an element
		for (const attribute in attributes) {
			element.setAttribute(attribute, attributes[attribute]);
		}
	},
	setIcon: (file: string, size: string) => {
		return `/assets/images/theme/${file}-${size}.png`;
	},
	setTimestamp: (value: DateType) => {
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
