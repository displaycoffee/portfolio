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
	getLast: (value: string | [], delimeter?: string) => {
		// Get last item in array
		let valueArray = [] as string[] | number[];
		if (Array.isArray(value)) {
			valueArray = value;
		} else if (delimeter) {
			valueArray = value.split(delimeter);
		}
		return valueArray[valueArray.length - 1];
	},
	getPage: () => {
		// Get previous / parent page
		return window.location.pathname.split('/').slice(0, -1).join('/');
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
				const target = createRoot(targetElement);
				target.render(component);
			}
		}
	},
	scrollTo: (e: EventsType, selector: string | undefined, offset: number) => {
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
