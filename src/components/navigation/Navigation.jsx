/* React */
import { useEffect, useContext } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

/* Local styles */
import './styles/navigation.scss';

/* Local scripts */
import { navigation, createNavigationList } from './scripts/navigation';

/* Local components */
import { Context } from '../../context/Context';

export const Navigation = () => {
	const { pathname } = useLocation();
	const context = useContext(Context);
	const utils = context.utils;
	const navigationList = createNavigationList(navigation, false);

	// Scroll to top when navigation link is clicked on
	useEffect(() => {
		utils.scrollTo();
	}, [pathname]);

	return navigationList && navigationList.length != 0 ? (
		<nav className="navigation">
			<ul className="navigation-list unstyled">
				{navigationList.map((nav) => (
					<li className="navigation-list-item" key={nav.id}>
						<Link to={nav.url} alt={nav.alt || nav.label} title={nav.alt || nav.label}>
							<span className="icon icon-bullet icon-shadow-x1"></span>
							{nav.label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	) : null;
};

export const NavigationRoutes = () => {
	const navigationList = createNavigationList(navigation, true);

	return navigationList && navigationList.length != 0 ? (
		<Routes>
			{navigationList.map((nav) => {
				const path = nav.hasChildren ? `${nav.url}/*` : nav.url;
				const navProps = nav?.props ? nav.props : {};

				return <Route path={path} element={<nav.component {...navProps} />} key={nav.id} />;
			})}
		</Routes>
	) : null;
};
