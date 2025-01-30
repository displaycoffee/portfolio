/* NOTE: this component is to map child pages. Not to be confused with the main "pages" folder. */

/* React */
import { Link, Routes, Route, useParams, Navigate } from 'react-router-dom';

/* Local styles */
import './styles/pages.scss';

/* Local scripts */
import { pages as pagesUtils } from './scripts/pages';

/* Local components */
import { PixelSection } from '../blocks/Blocks';

export const Pages = (props) => {
	const { pages, options } = props;
	const hasPages = options && pages && pages.length !== 0 && options.path ? true : false;

	return hasPages ? <PageRoutes pages={pages} options={options} /> : null;
};

export const PageRoutes = (props) => {
	const { pages, options } = props;

	// Ensure navigation is set
	if (!options.navigation) {
		options.navigation = {};
	}

	// Create modified pages
	const modifiedPages = pagesUtils.build(pages);

	// Get pages count
	const pagesCount = modifiedPages.length;

	return pagesCount !== 0 ? (
		<Routes>
			<Route path="/" element={<PageLinks {...props} />} />

			{modifiedPages.map((page) => {
				const pageContent = <PageContent {...props}>{page.component}</PageContent>;
				return <Route path=":id" element={pageContent} key={page.id} />;
			})}
		</Routes>
	) : null;
};

export const PageLinks = (props) => {
	const { pages, options } = props;

	return (
		<ul className="pages-list">
			{pages.map((page) => (
				<li className="pages-list-item" key={page.id}>
					<Link className="pages-list-link" to={`${options.path}/${page.handle}`}>
						{page.name}
					</Link>
				</li>
			))}
		</ul>
	);
};

export const PageContent = (props) => {
	const { pages, options, children } = props;
	const { id } = useParams();
	const Content = children;
	const showPage = window.location.href.includes(`${options.path}/${id}`) ? true : false; // Do not render current item if not in matching pages
	const pagesCount = pages.length - 1;

	// Set initial variables for page item details
	let current = false;
	let previous = false;
	let next = false;

	// Find active page
	let selected = pages.filter((page) => page.handle == id);

	// Update page details and create previous / next elements
	if (selected && selected.length !== 0) {
		// Set current
		current = selected.pop();

		// If previous / next order is out of bounds, loop around to start / end of pages
		const previousIndex = current.order - 1;
		const nextIndex = current.order + 1;
		previous = previousIndex < 0 ? pages[pagesCount] : pages[previousIndex];
		next = nextIndex > pagesCount ? pages[0] : pages[nextIndex];
	}

	return showPage ? (
		current ? (
			<div>
				<p>{current.name}</p>

				<Content />

				<PixelSection className={'page-section'}>
					<nav className="page-navigation">
						<ul className="page-navigation-list unstyled flex-wrap flex-align-items-center">
							{previous && (
								<li className="page-navigation-list-item page-navigation-previous">
									<Link className="page-navigation-link" to={`${options.path}/${previous.handle}`}>
										<span className="icon icon-angle-left icon-shadow-x1"></span>
										<span className="page-navigation-label">Previous</span>
									</Link>
								</li>
							)}

							{options?.navigation?.back && (
								<>
									<PageNavigationSeparator />

									<li className="page-navigation-list-item page-navigation-back">
										<Link className="page-navigation-link" to={options.path}>
											{options.navigation.back}
										</Link>
									</li>
								</>
							)}

							<PageNavigationSeparator />

							{next && (
								<li className="page-navigation-list-item page-navigation-next">
									<Link className="page-navigation-link" to={`${options.path}/${next.handle}`}>
										<span className="page-navigation-label">Next</span>
										<span className="icon icon-angle-right icon-shadow-x1"></span>
									</Link>
								</li>
							)}
						</ul>
					</nav>
				</PixelSection>
			</div>
		) : (
			<Navigate to={options.path} replace />
		)
	) : null;
};

export const PageNavigationSeparator = () => {
	return (
		<li className="page-navigation-list-item page-navigation-separator">
			<span className="icon icon-bullet icon-shadow-x1"></span>
		</li>
	);
};
