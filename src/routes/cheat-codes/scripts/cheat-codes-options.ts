/* Scripts */
import { cheatCodes } from './cheat-codes';

const cheatCodesOptions = {
	navigation: {
		back: 'Back to "Cheat Codes"',
	},
	values: cheatCodes && cheatCodes.length !== 0 ? cheatCodes : [],
};

export const cheatCodesOptionsBody = {
	...cheatCodesOptions,
	type: 'body',
};

export const cheatCodesOptionsLinks = {
	...cheatCodesOptions,
	type: 'links',
};
