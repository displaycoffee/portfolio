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
	const iconSize = '32x32';
	const date = new Date().getFullYear();

	return (
		<footer className="footer">
			<div className="row row-wrap row-auto row-spacing-10 row-align-items-center">
				<div className="footer-copyright column">&copy; {date}</div>

				{footer && footer.length != 0 ? (
					<div className="footer-navigation column">
						<nav className="footer-navigation-links">
							{footer.map((link) => (
								<React.Fragment key={link.id}>
									<a className="footer-navigation-link" href={link.url} target="_blank" rel="noreferrer">
										<img
											src={utils.setIcon(`${link.label.toLowerCase()}-color`, iconSize)}
											alt={link.alt || link.label}
											title={link.alt || link.label}
										/>
									</a>
								</React.Fragment>
							))}

							<button
								className="footer-navigation-link unstyled pointer bounce-5"
								onClick={(e) => utils.scrollTo(e, 'body')}
								alt="Scroll to top"
								title="Scroll to top"
							>
								<span className="icon icon-angle-up icon-lg icon-bold icon-shadow-x1 animate-bottom"></span>
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
