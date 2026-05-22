/* React */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

/* Local styles */
import './styles/header.scss';

/* Local scripts */
import { useRespond, useViewTransition } from '../../_config/scripts/hooks';
import { useAppContext } from '../../context/scripts/context-hooks';

/* Local components */
import { Image } from '../../components/image/Image';

export const Header = () => {
	const { theme } = useAppContext();
	const desktopHeader = useRespond(theme.bps.bp01 as number);
	const handleTransition = useViewTransition();
	const [timer, setTimer] = useState(false);
	const headerText = desktopHeader ? `* { display : coffee; }` : `* {<br />\u00A0\u00A0display : coffee;<br />}`;
	const mugs = ['blue', 'green', 'purple', 'red', 'orange'];

	// Set a timer for cursor to turn off
	// Reset when desktopHeader changes
	useEffect(() => {
		if (!desktopHeader) return;

		const timeoutId = setTimeout(() => {
			setTimer(true);
		}, 10000);

		return () => {
			clearTimeout(timeoutId);
			setTimer(false);
		};
	}, [desktopHeader]);

	return (
		<header className="header spacing-reset">
			<h1 className={`header-title${desktopHeader && !timer ? ' header-title-cursor' : ''} h-shadow-lg`}>
				<Link to={'/'} title="Back to start" onClick={(e) => handleTransition(e, '/')}>
					<div className="header-type" dangerouslySetInnerHTML={{ __html: headerText }}></div>
				</Link>
			</h1>

			<div className="header-mugs">
				{mugs.map((mug, index) => (
					<Image alt={`${mug} coffee mug`} hasLazy={true} hasWrapper={false} image={`/assets/images/theme/mug-${mug}.svg`} key={index} />
				))}
			</div>
		</header>
	);
};
