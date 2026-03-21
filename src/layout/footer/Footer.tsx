/* React */
import { Fragment, useContext } from 'react';

/* Local styles */
import './styles/footer.scss';

/* Local scripts */
import { footer } from './scripts/footer';

/* Local components */
import { Context } from '../../context/Context';
import { Icon } from '../../components/icons/Icons';
import { Image } from '../../components/image/Image';

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
								<Fragment key={link.id}>
									<a className="footer-navigation-link" href={link.url} target="_blank" rel="noreferrer">
										<Image
											alt={link.alt || link.label}
											hasLazy={true}
											hasWrapper={false}
											image={utils.setIcon(`${link.label.toLowerCase()}-color`, iconSize)}
										/>
									</a>
								</Fragment>
							))}

							<button
								className="footer-navigation-link unstyled pointer bounce-5"
								type="button"
								aria-label="Back to top button"
								title="Back to top button"
								onClick={(e) => utils.scrollTo(e, 'body')}
							>
								<Icon animate={'bottom'} id={'angle-up'} isBold={true} size={'lg'} />
							</button>
						</nav>
					</div>
				) : null}
			</div>
		</footer>
	);
};
