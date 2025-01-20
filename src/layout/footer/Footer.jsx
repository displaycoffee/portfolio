/* React */
import React, { useContext } from 'react';

/* Local styles */
import './styles/footer.scss';

/* Local scripts */
import { footer } from './scripts/footer';

/* Local components */
import { Context } from '../../context/Context';

export const Footer = () => {
	const context = useContext(Context);
	const { utils } = context;
	const date = new Date().getFullYear();

	return (
		<footer className="footer">
			<div className="row row-wrap row-auto row-spacing-10">
				<div className="footer-copyright column">&copy; {date}</div>

				{footer && footer.length != 0 ? (
					<div className="footer-navigation column">
						<nav className="footer-navigation-links">
							<FooterSeparator />

							<a
								className="footer-navigation-link"
								href="mailto:adria.m.murphy@gmail.com?subject=From portfolio"
								alt="Contact me"
								title="Contact me"
							>
								Contact
							</a>

							{footer.map((link, index) => (
								<React.Fragment key={link.id}>
									{index === 0 && <FooterSeparator />}

									<a
										className="footer-navigation-link"
										href={link.url}
										alt={link.alt || link.label}
										title={link.alt || link.label}
										target="_blank"
										rel="noreferrer"
									>
										{link.label}
									</a>

									<FooterSeparator />
								</React.Fragment>
							))}

							<button
								className="footer-navigation-link a pointer"
								onClick={(e) => utils.scrollTo(e, '#index')}
								alt="Scroll to top"
								title="Scroll to top"
							>
								^
							</button>
						</nav>
					</div>
				) : null}
			</div>
		</footer>
	);
};

export const FooterSeparator = () => {
	return <span className="footer-navigation-separator">&#9642;</span>;
};
