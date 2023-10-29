/* React */
import React from 'react';

/* Local styles */
import './styles/footer.scss';

/* Local scripts */
import { footer } from './scripts/footer';

export const Footer = (props) => {
	const { isDesktop } = props;
	const date = new Date();
	const year = date.getFullYear();

	return (
		<footer className="footer">
			<div className="row row-wrap row-auto row-10">
				<div className="footer-copyright column">&copy; {year}</div>

				{footer && footer.length != 0 ? (
					<div className="footer-navigation column">
						<nav className="footer-navigation-links">
							{footer.map((link, index) => (
								<React.Fragment key={link.id}>
									{isDesktop && index === 0 && <span className="footer-navigation-separator">&#9642;</span>}

									<a
										className="footer-navigation-link"
										href={link.url}
										alt={link.alt || link.label}
										title={link.alt || link.label}
										target="_blank"
									>
										{link.label}
									</a>

									{footer.length - 1 != index && <span className="footer-navigation-separator">&#9642;</span>}
								</React.Fragment>
							))}
						</nav>
					</div>
				) : null}
			</div>
		</footer>
	);
};
