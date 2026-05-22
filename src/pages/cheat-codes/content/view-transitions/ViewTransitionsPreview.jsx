/* Local styles */
import './styles/view-transitions-preview.scss';

/* React */
import { useState } from 'react';
import { flushSync } from 'react-dom';

/* Sample post content */
const posts = [
	{
		id: 1,
		title: 'Part I',
		excerpt: 'An introduction to the basics.',
		body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra, sapien vel suscipit tempus, nibh erat hendrerit libero, sed ultrices massa justo non lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed vitae ante quis lectus egestas placerat sed non eros. Nulla efficitur lectus massa, nec tincidunt tortor accumsan non. Phasellus bibendum, elit ut euismod varius, magna diam porta leo, vitae tincidunt arcu eros vel sem. Nullam et lacus quis dui imperdiet ornare eget a risus. Aenean vel congue quam. Etiam nulla eros, convallis quis purus eget, dignissim interdum mi. Duis sit amet consectetur felis.',
	},
	{
		id: 2,
		title: 'Part II',
		excerpt: 'Things get interesting.',
		body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra, sapien vel suscipit tempus, nibh erat hendrerit libero, sed ultrices massa justo non lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed vitae ante quis lectus egestas placerat sed non eros. Nulla efficitur lectus massa, nec tincidunt tortor accumsan non. Phasellus bibendum, elit ut euismod varius, magna diam porta leo, vitae tincidunt arcu eros vel sem. Nullam et lacus quis dui imperdiet ornare eget a risus. Aenean vel congue quam. Etiam nulla eros, convallis quis purus eget, dignissim interdum mi. Duis sit amet consectetur felis.',
	},
	{
		id: 3,
		title: 'Part III',
		excerpt: 'Where it all comes together.',
		body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra, sapien vel suscipit tempus, nibh erat hendrerit libero, sed ultrices massa justo non lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed vitae ante quis lectus egestas placerat sed non eros. Nulla efficitur lectus massa, nec tincidunt tortor accumsan non. Phasellus bibendum, elit ut euismod varius, magna diam porta leo, vitae tincidunt arcu eros vel sem. Nullam et lacus quis dui imperdiet ornare eget a risus. Aenean vel congue quam. Etiam nulla eros, convallis quis purus eget, dignissim interdum mi. Duis sit amet consectetur felis.',
	},
];

export const ViewTransitionsPreview = () => {
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
	const handleSelect = (post) => withPreviewTransition(() => setSelected(post));

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
						{posts.map((post) => (
							<li className="dc-view-transitions-item" key={post.id}>
								<button
									className="dc-view-transitions-item-button dc-view-transitions-item-wrapper"
									onClick={() => handleSelect(post)}
									type="button"
								>
									<span id={`dc-view-transitions-item-number-${post.id}`} className="dc-view-transitions-item-number">
										{post.id}
									</span>

									<div className="dc-view-transitions-item-text">
										<h4>{post.title}</h4>

										<p>{post.excerpt}</p>
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
