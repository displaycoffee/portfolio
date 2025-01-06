/* React */
import React, { useEffect, useContext } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

/* Local styles */
import './styles/navigation.scss';

/* Local scripts */
import { navigation, createNavigationList } from './scripts/navigation';

/* Local components */
import { Context } from '../../context/Context';
import { Start } from '../../pages/start/Start';
import { About } from '../../pages/about/About';
import { Art } from '../../pages/art/Art';
import { Projects } from '../../pages/projects/Projects';
import { Articles } from '../../pages/articles/Articles';
import { CheatCodes } from '../../pages/cheat-codes/CheatCodes';
import { Resume } from '../../pages/resume/Resume';

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
							{nav.label}
						</Link>
					</li>
				))}
				<li className="navigation-list-item">
					<a href="mailto:adria.m.murphy@gmail.com?subject=From portfolio" alt="Contact me" title="Contact me">
						Contact
					</a>
				</li>
			</ul>
		</nav>
	) : null;
};

export const NavigationRoutes = () => {
	const navigationList = createNavigationList(navigation, true);

	return navigationList && navigationList.length != 0 ? (
		<Routes>
			{navigationList.map((nav) => (
				<React.Fragment key={nav.id}>
					{{
						'cheat codes': <Route path={nav.url} element={<CheatCodes />} />,
						articles: <Route path={nav.url} element={<Articles />} />,
						resume: <Route path={nav.url} element={<Resume />} />,
						art: <Route path={nav.url} element={<Art />} />,
						projects: <Route path={nav.url} element={<Projects />} />,
						about: <Route path={nav.url} element={<About />} />,
					}[nav.label.toLowerCase()] || <Route path={nav.url} element={<Start />} />}
				</React.Fragment>
			))}
		</Routes>
	) : null;
};
