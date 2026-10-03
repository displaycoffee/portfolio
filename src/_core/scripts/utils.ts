/* Packages */
import { utils as utilsShared, utilsBrowser as utilsBrowserShared } from '@displaycoffee/scripts/utils';

/* Get today's date as a fallback for setting timestamps */
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const day = today.getDate();
const fallback = `${year}-${month < 10 ? '0' + month : month}-${day}`;

/* Utils from @displaycoffee/scripts, plus any custom scripts for this project */
export const utils: UtilsType = {
	...utilsShared,
	linkExternal: (href: string, label: string) => {
		// Create external url in HTML string
		return `<a href="${href}" target="_blank" rel="noreferrer">${label}<span class="sr-only"> (opens in a new tab)</span></a>`;
	},
	setTimestamp: (value: DateType) => {
		// Set date for each value
		let date = fallback;
		if (value?.updated || value?.date) {
			const splitDate = value?.updated ? value.updated.split('.') : value?.date.split('.');
			date = splitDate.length === 3 ? `20${splitDate[2]}-${splitDate[0]}-${splitDate[1]}` : fallback;
		}

		// Create timestamp
		const dateFromString = new Date(date);
		const timestampFromString = dateFromString.getTime();
		value.timestamp = timestampFromString;
	},
};

export const utilsBrowser: UtilsBrowserType = {
	...utilsBrowserShared,
};
