/* Local styles */
import './styles/dreaming-of-snow-preview.scss';

export const DreamingOfSnow = () => {
	return (
		<>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link
				href="https://fonts.googleapis.com/css2?family=La+Belle+Aurore&family=Vollkorn:ital,wght@0,400..700;1,400..700&display=swap"
				rel="stylesheet"
			/>

			<div className="dc-dreaming-of-snow displaycoffee">
				<header className="dc-dreaming-of-snow-header">
					<div className="dc-dreaming-of-snow-row">
						<div className="dc-dreaming-of-snow-column-title dc-dreaming-of-snow-column">
							<h3 className="dc-dreaming-of-snow-title dc-dreaming-of-snow-blue">
								I'm dreaming of snow,
								<br />
								Lorem ipsum dolor sit amet...
							</h3>
						</div>

						<div className="dc-dreaming-of-snow-column-avatar dc-dreaming-of-snow-column">
							<div className="dc-dreaming-of-snow-avatar">
								<div className="dc-dreaming-of-snow-image-wrapper">
									<img
										src="//display.coffee/assets/images/cheat-codes/dreaming-of-snow-avatar.jpg"
										alt="Dreaming of Snow - Avatar"
										title="Dreaming of Snow - Avatar"
										width="200"
										height="200"
									/>
								</div>

								<div className="dc-dreaming-of-snow-blue">
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt interdum vulputate.</p>
								</div>
							</div>
						</div>
					</div>
				</header>

				<main className="dc-dreaming-of-snow-content">
					<div className="dc-dreaming-of-snow-row">
						<div className="dc-dreaming-of-snow-column">
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor rutrum velit in porttitor. Integer imperdiet
								est et sem pretium, at dignissim nibh consequat. Suspendisse ex sapien, vestibulum eget mollis eu, facilisis nec nisl.
								Nulla facilisi.
							</p>
							<p>
								Praesent sollicitudin massa quis ultricies viverra. Duis sagittis neque dolor, ut gravida eros volutpat et. Curabitur
								tincidunt <a href="/">fringilla velit</a>, ut cursus erat. Cras ut euismod est, et dictum erat. Nam velit tellus,
								molestie sed nunc id, ultricies euismod massa. In sed sem quis lorem euismod euismod. Mauris eget nulla ultricies,
								tempus felis a, porta ipsum. Aliquam at arcu tellus.
							</p>
							<p>
								Nulla urna nisi, vulputate sit amet nisi ac, mollis eleifend nunc. Cum sociis natoque penatibus et magnis dis
								parturient montes, nascetur ridiculus mus. Nam auctor commodo purus, id dapibus erat viverra sit amet. Praesent{' '}
								<a href="/">et metus</a> vel erat porta gravida sed sed libero.
							</p>
						</div>

						<div className="dc-dreaming-of-snow-column">
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor rutrum velit in porttitor. Integer imperdiet
								est et sem pretium, at dignissim nibh consequat. Suspendisse ex sapien, vestibulum eget mollis eu, facilisis nec nisl.
								Nulla facilisi.
							</p>
							<p>
								Praesent sollicitudin massa quis ultricies viverra. Duis sagittis neque dolor, ut gravida eros volutpat et. Curabitur
								tincidunt fringilla velit, ut cursus erat. Cras ut euismod est, et dictum erat. Nam velit tellus, molestie sed nunc
								id, ultricies euismod massa. In sed sem quis lorem euismod euismod. Mauris <a href="/">eget nulla ultricies</a>,
								tempus felis a, porta ipsum. Aliquam at arcu tellus.
							</p>
							<p>
								Nulla urna nisi, vulputate sit amet nisi ac, mollis eleifend nunc. Cum sociis natoque penatibus et magnis dis
								parturient montes, nascetur ridiculus mus. Nam auctor commodo purus, id dapibus erat viverra sit amet. Praesent et
								metus vel erat porta gravida sed sed libero.
							</p>
						</div>
					</div>
				</main>

				<footer className="dc-dreaming-of-snow-footer dc-dreaming-of-snow-blue">
					<h4>
						Nulla urna nisi, vulputate sit amet nisi ac,
						<br />
						Nam auctor commodo purus, id dapibus erat viverra sit amet.
					</h4>
				</footer>
			</div>
		</>
	);
};
