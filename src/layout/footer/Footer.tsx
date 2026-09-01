/* Styles */
import './styles/footer.scss';

/* Packages */
import { Fragment } from 'react';

/* Scripts */
import { useAppContext } from '../../context/scripts/context-hooks';
import { footer } from './scripts/footer';

/* Components */
import { LinkExternal } from '../../components/blocks/Blocks';
import { Button } from '../../components/forms/Forms';
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

							<Button
								className="footer-navigation-link bounce-5"
								label="Back to top button"
								hideLabel={true}
								variant="unstyled"
								onClick={(e) => utils.scrollTo(e, 'body')}
							>
								<Icon animate={'bottom'} id={'angle-up'} isBold={true} size={'lg'} />
							</Button>
						</nav>
					</div>
				) : null}
			</div>
		</footer>
	);
};
