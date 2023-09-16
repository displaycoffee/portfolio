/* Local components */
import { NavigationMenu } from '../elements/Navigation';

export const Header = (props) => {
	const { isDesktop } = props;
	const mugs = ['blue', 'green', 'purple', 'red', 'orange'];

	return (
		<header className="header">
			<h1 className="header-title">
				<span className="header-type">{`* { display : coffee; }`}</span>
			</h1>

			<div className="header-mugs">
				{mugs.map((mug) => (
					<img src={`./assets/dist/images/icons/mug-${mug}-${isDesktop ? '36x36' : '18x18'}.png`} alt={`${mug} coffee mug`} key={mug} />
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
