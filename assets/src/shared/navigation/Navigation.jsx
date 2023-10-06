/* React */
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

/* Local styles */
import './styles/navigation.scss';

/* Local scripts */
import { navigation } from './scripts/navigation';

/* Local components */
import { Index as IndexContent } from '../../content/index/Index';
import { About } from '../../content/about/About';
import { Art } from '../../content/art/Art';
import { Projects } from '../../content/projects/Projects';
import { Articles } from '../../content/articles/Articles';
import { CheatCodes } from '../../content/cheat-codes/CheatCodes';
import { Resume } from '../../content/resume/Resume';

export const Navigation = () => {
	return navigation && navigation.length != 0 ? (
		<nav className="navigation">
			<ul className="navigation-list unstyled">
				{navigation.map(
					(navigation) =>
						navigation.showInNav && (
							<li className="navigation-list-item" key={navigation.id}>
								<Link to={navigation.url} alt={navigation.alt || navigation.label} title={navigation.alt || navigation.label}>
									{navigation.label}
								</Link>
							</li>
						),
				)}
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
	return navigation && navigation.length != 0 ? (
		<Routes>
			{navigation.map((navigation) => (
				<React.Fragment key={navigation.id}>
					{{
						'cheat codes': <Route path={navigation.url} element={<CheatCodes />} />,
						articles: <Route path={navigation.url} element={<Articles />} />,
						resume: <Route path={navigation.url} element={<Resume />} />,
						art: <Route path={navigation.url} element={<Art />} />,
						projects: <Route path={navigation.url} element={<Projects />} />,
						about: <Route path={navigation.url} element={<About />} />,
					}[navigation.label.toLowerCase()] || <Route path={navigation.url} element={<IndexContent />} />}
				</React.Fragment>
			))}
		</Routes>
	) : null;
};
