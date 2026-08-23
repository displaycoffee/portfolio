/* Styles */
import './styles/footer.scss';

/* Packages */
import { Fragment } from 'react';

/* Scripts */
import { useAppContext } from '../../context/scripts/context-hooks';
import { footer } from './scripts/footer';

/* Components */
import { LinkExternal } from '../../components/blocks-2/Blocks';
import { Icon } from '../../components/icons/Icons';
import { Image } from '../../components/image/Image';

export const Footer = () => {
	const { utils } = useAppContext();
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
									<LinkExternal className="footer-navigation-link" href={link.url}>
										<Image
											alt={link.alt || link.label}
											hasLazy={true}
											hasWrapper={false}
											image={`/assets/images/theme/${link.label.toLowerCase()}.svg`}
										/>
									</LinkExternal>
								</Fragment>
							))}

							<button
								className="footer-navigation-link unstyled pointer bounce-5"
								type="button"
								aria-label="Back to top button"
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
