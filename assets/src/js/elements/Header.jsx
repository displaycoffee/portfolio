/* React */
import { Link } from 'react-router-dom';

/* Local components */
import { NavigationMenu } from '../elements/Navigation';

export const Header = (props) => {
	const { isDesktop } = props;
	const mugs = ['blue', 'green', 'purple', 'red', 'orange'];

	return (
		<header className="header spacing-reset">
			<h1 className="header-title">
				<Link to={'/'} alt="Back to home" title="Back to home">
					<span className="header-type">{`* { display : coffee; }`}</span>
				</Link>
			</h1>

			<div className="header-mugs">
				{mugs.map((mug, index) => (
					<img src={`./assets/dist/images/theme/mug-${mug}-${isDesktop ? '36x36' : '18x18'}.png`} alt={`${mug} coffee mug`} key={index} />
				))}
			</div>

			{!isDesktop && (
				<div className="header-navigation">
					<NavigationMenu />
				</div>
			)}
		</header>
	);
};
