/* React */
import { Link } from 'react-router-dom';
import { useState } from 'react';

/* Local scripts */
import { elements } from '../scripts/elements';

export const Navigation = () => {
	return elements.navigation && elements.navigation.length != 0 ? (
		<nav className="navigation">
			<ul className="navigation-list unstyled">
				{elements.navigation.map((navigation) => (
					<li className="navigation-list-item" key={navigation.id}>
						<Link to={navigation.path}>{navigation.label}</Link>
					</li>
				))}
			</ul>
		</nav>
	) : null;
};

export const NavigationMenu = () => {
	let [menu, setMenu] = useState(false);
	const navigationActiveClass = 'navigation-menu-active';
	
	// Toggle menu
	const toggleMenu = (e) => {
		e.preventDefault();
		const bodySelector = document.querySelector('body');
		
		// Change menu state and body class
		if (menu) {
			menu = false;
			bodySelector.classList.remove(navigationActiveClass);
		} else {
			menu = true;
			bodySelector.classList.add(navigationActiveClass);
		}
		
		// Set menu state
		setMenu(menu);
	};

	return (
		<div className="navigation-menu">
			<button className="navigation-menu-tigger" type="button" onClick={(e) => toggleMenu(e)}>
				&gt; Menu
			</button>

			<div className="navigation-menu-overlay" onClick={(e) => toggleMenu(e)}></div>

			<div className="navigation-menu-content">
				<header className="navigation-menu-header flex-nowrap flex-align-items-center">
					<h3 className="navigation-menu-title">Menu</h3>

					<button className="navigation-menu-close" type="button" onClick={(e) => toggleMenu(e)}>x</button>
				</header>

				<Navigation />
			</div>
		</div>
	);
};