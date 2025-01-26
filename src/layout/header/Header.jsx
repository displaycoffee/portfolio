/* React */
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

/* Local styles */
import './styles/header.scss';

/* Local scripts */
import { useRespond } from '../../_config/scripts/hooks';

/* Local components */
import { Context } from '../../context/Context';

export const Header = () => {
	const context = useContext(Context);
	const theme = context.theme;
	const desktopHeader = useRespond(theme.bps.bp01 - 100);
	let [timer, setTimer] = useState(false);
	const headerText = desktopHeader ? `* { display : coffee; }` : `* {<br />\u00A0\u00A0display : coffee;<br />}`;
	const mugs = ['blue', 'green', 'purple', 'red', 'orange'];

	// Set a timer for cursor to turn off
	// Reset when desktopHeader changes
	useEffect(() => {
		if (desktopHeader) {
			setTimeout(() => {
				timer = true;
				setTimer(timer);
			}, 10000);
		} else {
			timer = false;
			setTimer(timer);
		}
	}, [desktopHeader]);

	return (
		<header className="header spacing-reset">
			<h1 className={`header-title${desktopHeader && !timer ? ' header-title-cursor' : ''} h-shadow-lg`}>
				<Link to={'/'} alt="Back to start" title="Back to start">
					<div className="header-type" dangerouslySetInnerHTML={{ __html: headerText }}></div>
				</Link>
			</h1>

			<div className="header-mugs">
				{mugs.map((mug, index) => (
					<img
						src={`/assets/images/theme/mug-${mug}-${desktopHeader ? '36x36' : '18x18'}.png`}
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
