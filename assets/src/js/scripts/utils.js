/* React */
import { useState } from 'react';

export const utils = {
	respond : (bp) => {
		const rule = window.matchMedia(`(min-width: ${bp}px)`);
		let [match, setMatch] = useState(rule.matches);
		
		// update match state on media change
		rule.onchange = (e) => {
			if (e.matches) {
				match = true;
			} else {
				match = false;
			}
			setMatch(match);
		};

		return match;
	}
};