/* React */
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

/* Local styles */
import './styles/index.scss';

/* Local components */
import { Context } from '../context/Context';
import { Index as IndexSidebar } from '../../sidebar/index/Index';
import { ErrorBoundary } from '../../shared/error-boundary/ErrorBoundary';
import { Header } from '../../shared/header/Header';
import { Footer } from '../../shared/footer/Footer';
import { NavigationRoutes } from '../../shared/navigation/Navigation';

export const Index = (props) => {
	const { theme, utils } = props;
	const isDesktop = utils.respond(theme.bps.bp02);

	return (
		<Context.Provider value={props}>
			<div className="wrapper wrapper-main">
				<IndexBody />

				<ErrorBoundary message={<IndexError />}>
					<Header isDesktop={isDesktop} />

					<main className="main">
						<div className="main-layout flex-wrap">
							<section className="main-content spacing-reset">
								<NavigationRoutes />
							</section>

							{isDesktop && (
								<aside className="main-sidebar">
									<IndexSidebar />
								</aside>
							)}
						</div>
					</main>

					<Footer isDesktop={isDesktop} />
				</ErrorBoundary>
			</div>
		</Context.Provider>
	);
};

/* Set indexCache mostly to get previous page */
let indexCache = {
	previous: '',
};

const IndexBody = () => {
	const location = useLocation();
	const bodySelector = document.querySelector('body');
	const bodyPrefix = 'page-';

	useEffect(() => {
		// Remove any previous body class
		bodySelector.classList.remove(`${bodyPrefix}${indexCache.previous || 'index'}`);

		// Replace any body prefix, remove first slash, and replace any other slash with hyphen
		indexCache.previous = location.pathname.replace(bodyPrefix, '').replace('/', '').replace(/\//g, '-');

		// Add new body class
		bodySelector.classList.add(`${bodyPrefix}${indexCache.previous || 'index'}`);
	}, [location]);

	return null;
};

const IndexError = () => {
	return (
		<p>
			Something went wrong. <Link to={'/'}>Go back.</Link>
		</p>
	);
};
