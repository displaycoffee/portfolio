/* React */
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

/* Local styles */
import './styles/container.scss';

/* Local scripts */
import { useBodyClass, useRespond } from '../../_config/scripts/hooks';

/* Local components */
import { Context } from '../../context/Context';
import { PixelSection } from '../../components/blocks/Blocks';
import { Navigation } from '../../components/navigation/Navigation';
import { ErrorBoundary } from '../../components/error-boundary/ErrorBoundary';
import { Slideout, SlideoutOverlay } from '../../components/slideout/Slideout';
import { Header } from '../../layout/header/Header';
import { Content } from '../../layout/content/Content';
import { Footer } from '../../layout/footer/Footer';

export const Container = (props) => {
	const { theme } = props;
	const location = useLocation();
	const isDesktop = useRespond(theme.bps.bp02);
	let [sidebar, setSidebar] = useState(true);

	// Set body class using custom hook
	useBodyClass('start');

	// Determine if layout should have sidebar or not
	const excludeSidebar = [];
	useEffect(() => {
		sidebar = excludeSidebar.includes(location.pathname) ? false : true;
		setSidebar(sidebar);
	}, [location.pathname]);

	// Shared slideout options
	const options = {
		id: 'menu',
		isDesktop: isDesktop,
		label: 'Menu',
		content: <Navigation />,
		closeOnClick: true,
	};

	// Button slideout options
	const buttonOptions = {
		...options,
		button: {
			outside: true,
			show: true,
		},
	};

	// Menu slideout options
	const menuOptions = {
		...options,
		button: {
			outside: false,
			show: false,
		},
	};

	return (
		<Context.Provider value={props}>
			<div className="container container-main">
				<ErrorBoundary message={<ContainerError />}>
					<SlideoutOverlay options={options} />

					<Header />

					<PixelSection className={'navigation-section'}>{isDesktop ? <Navigation /> : <Slideout options={buttonOptions} />}</PixelSection>

					{isDesktop ? null : <Slideout options={menuOptions} />}

					<main className="main">
						<div className="main-layout flex-wrap">
							<Content />
						</div>
					</main>

					<Footer />
				</ErrorBoundary>
			</div>
		</Context.Provider>
	);
};

const ContainerError = () => {
	return (
		<p>
			Something went wrong. <Link to={'/'}>Go back.</Link>
		</p>
	);
};
