/* Styles */
import './styles/view-transitions.scss';

/* Packages */
import { useState } from 'react';
import { flushSync } from 'react-dom';

export const ViewTransitions = (props) => {
	const { items } = props;

	// Set selected state
	const [selected, setSelected] = useState(null);

	// Set view-transition-name only for the duration of a transition
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
	const handleSelect = (item) => withPreviewTransition(() => setSelected(item));

	// Go back to selection list
	const handleBack = () => withPreviewTransition(() => setSelected(null));

	return (
		<div className="dc-view-transitions">
			<div className="dc-view-transitions-content">
				{selected ? (
					<div className="dc-view-transitions-selected">
						<div className="dc-view-transitions-item">
							<div className="dc-view-transitions-item-wrapper">
								<div className="dc-view-transitions-item-number">{selected.id}</div>

								<div className="dc-view-transitions-item-text">
									<h4>{selected.title}</h4>

									<p>{selected.body}</p>

									<button className="dc-view-transitions-back-button" onClick={handleBack} type="button">
										Back to list
									</button>
								</div>
							</div>
						</div>
					</div>
				) : (
					<ul className="dc-view-transitions-list unstyled">
						{items.map((item) => (
							<li className="dc-view-transitions-item" key={item.id}>
								<button
									className="dc-view-transitions-item-button dc-view-transitions-item-wrapper"
									onClick={() => handleSelect(item)}
									type="button"
								>
									<span id={`dc-view-transitions-item-number-${item.id}`} className="dc-view-transitions-item-number">
										{item.id}
									</span>

									<div className="dc-view-transitions-item-text">
										<h4>{item.title}</h4>

										<p>{item.excerpt}</p>
									</div>
								</button>
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};
