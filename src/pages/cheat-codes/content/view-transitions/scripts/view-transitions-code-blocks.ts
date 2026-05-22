/* Code block snippets */
export const codeBlocks = [
	`/* React */
	import { useState } from 'react';
	import { flushSync } from 'react-dom';`,
	`// Set view-transition-name only for the duration of a transition
	const withPreviewTransition = (callback) => {
		if (!document.startViewTransition) {
			callback();
			return false;
		} else {
			const el = document.querySelector('.dc-view-transitions-content');
			if (el) el.style.viewTransitionName = 'vt-preview-content';
			document
				.startViewTransition(() => {
					flushSync(callback);
				})
				.finished.finally(() => {
					if (el) el.style.viewTransitionName = '';
				});
		}
	};

	// Select item and transition between selections
	const handleSelect = (post) => withPreviewTransition(() => setSelected(post));

	// Go back to selection list
	const handleBack = () => withPreviewTransition(() => setSelected(null));`,
];
