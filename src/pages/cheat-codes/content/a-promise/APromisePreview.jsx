/* Styles */
import './styles/a-promise.scss';

export const APromise = () => {
	const separator = (
		<img
			src="//display.coffee/assets/images/cheat-codes/a-promise-leaf.png"
			alt="A Promise - Leaf"
			title="A Promise - Leaf"
			width="24"
			height="12"
		/>
	);

	return (
		<div className="dc-a-promise displaycoffee">
			<div className="dc-a-promise-row">
				<div className="dc-a-promise-avatar dc-a-promise-column">
					<div className="dc-a-promise-image-wrapper">
						<img
							src="//display.coffee/assets/images/cheat-codes/a-promise-avatar.jpg"
							alt="A Promise - Avatar"
							title="A Promise - Avatar"
							width="444"
							height="273"
						/>
					</div>
				</div>

				<div className="dc-a-promise-quote dc-a-promise-column">
					<p>
						I made a promise, Mr. Frodo.{' '}
						<strong>
							<em>A promise.</em>
						</strong>{' '}
						"Don't you leave him Samwise Gamgee."
					</p>
					<p>And I don't mean to. I don't mean to.</p>
				</div>
			</div>

			<div className="dc-a-promise-row">
				<div className="dc-a-promise-column">
					<p>
						<a href="/">Link 01</a>
						<span className="dc-a-promise-separator">{separator}</span>
						<a href="/">Link 02</a>
						<span className="dc-a-promise-separator">{separator}</span>
						<a href="/">Link 03</a>
					</p>
				</div>
			</div>
		</div>
	);
};
