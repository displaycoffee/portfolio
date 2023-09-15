/* React */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/* Local scripts */
import { theme } from '../scripts/theme';
import { utils } from '../scripts/utils';
import { elements } from '../scripts/elements';

/* Local components */
import { Header } from '../elements/Header';
import { Navigation } from '../elements/Navigation';
import { Footer } from '../elements/Footer';

export const Index = () => {
	const isDesktop = utils.respond(theme.bps.bp02);

	return (
		<Router basename={'/'}>
			<div className="wrapper wrapper-main">
				<Header isDesktop={isDesktop} />

				<div>
					<div className="pixel-border"></div>
				</div>

				<div className="main">
					<div className="row row-wrap row-auto row-40">
						<section className="main-content column">
							{elements.navigation && elements.navigation.length != 0 ? (
								<Routes>
									{elements.navigation.map((navigation) => (
										<Route path={navigation.path} element={navigation.component()} key={navigation.id} />
									))}
								</Routes>
							) : null}
						</section>

						{isDesktop && (
							<aside className="main-sidebar column">
								<Navigation />
							</aside>
						)}
					</div>
				</div>

				<Footer isDesktop={isDesktop} />
			</div>
		</Router>
	);
};
