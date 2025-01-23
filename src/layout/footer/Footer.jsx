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
	const iconSize = '16x16';
	const date = new Date().getFullYear();

	return (
		<footer className="footer">
			<h4>
				<img style={{ display: 'inline-block' }} src={utils.setIcon('angle-down', iconSize)} alt={'test'} title={'test'} /> Testing
			</h4>
			<img src={utils.setIcon('angle-right', iconSize)} alt={'test'} title={'test'} />
			<img src={utils.setIcon('angle-left', iconSize)} alt={'test'} title={'test'} />

			<img src={utils.setIcon('angle-up', iconSize)} alt={'test'} title={'test'} />
			<img src={utils.setIcon('x', iconSize)} alt={'test'} title={'test'} />

			<div className="row row-wrap row-auto row-spacing-10">
				<div className="footer-copyright column">&copy; {date}</div>

				{footer && footer.length != 0 ? (
					<div className="footer-navigation column">
						<nav className="footer-navigation-links">
							{footer.map((link) => (
								<React.Fragment key={link.id}>
									<a className="footer-navigation-link" href={link.url} target="_blank" rel="noreferrer">
										<img
											src={utils.setIcon(link.label.toLowerCase(), iconSize)}
											alt={link.alt || link.label}
											title={link.alt || link.label}
										/>
									</a>
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
