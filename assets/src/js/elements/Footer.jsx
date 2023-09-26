/* react imports */
import React from 'react';

/* Local scripts */
import { elements } from '../scripts/elements';

export const Footer = (props) => {
	const { isDesktop } = props;
	const date = new Date();
	const year = date.getFullYear();

	return (
		<footer className="footer">
			<div className="row row-wrap row-auto row-10">
				<div className="footer-copyright column">&copy; {year}</div>

				{elements.footer && elements.footer.length != 0 ? (
					<div className="footer-navigation column">
						<nav className="footer-navigation-links">
							{elements.footer.map((footer, index) => (
								<React.Fragment key={footer.id}>
									{isDesktop && index === 0 && <span className="footer-navigation-separator">&#9642;</span>}

									<a
										className="footer-navigation-link"
										href={footer.url}
										alt={footer.alt || footer.label}
										title={footer.alt || footer.label}
										target="_blank"
									>
										{footer.label}
									</a>

									{elements.footer.length - 1 != index && <span className="footer-navigation-separator">&#9642;</span>}
								</React.Fragment>
							))}
						</nav>
					</div>
				) : null}
			</div>
		</footer>
	);
};
