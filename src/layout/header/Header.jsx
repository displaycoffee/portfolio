/* React */
import { Link } from 'react-router-dom';

/* Local styles */
import './styles/header.scss';

export const Header = (props) => {
	const { isDesktop } = props;
	const mugs = ['blue', 'green', 'purple', 'red', 'orange'];

	return (
		<header className="header spacing-reset">
			<h1 className="header-title">
				<Link to={'/'} alt="Back to start" title="Back to start">
					<span className="header-type">{`* { display : coffee; }`}</span>
				</Link>
			</h1>

			<div className="header-mugs">
				{mugs.map((mug, index) => (
					<img
						src={`/assets/images/theme/mug-${mug}-${isDesktop ? '36x36' : '18x18'}.png`}
						alt={`${mug} coffee mug`}
						title={`${mug} coffee mug`}
						loading="lazy"
						key={index}
					/>
				))}
			</div>
		</header>
	);
};
