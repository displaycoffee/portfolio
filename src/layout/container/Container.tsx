/* React */
import { useContext } from 'react';
import { Link } from 'react-router-dom';

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

export const Container = () => {
	const context = useContext(Context);
	const { theme } = context;
	const isDesktop = useRespond(theme.bps.bp02 as number);

	// Set body class using custom hook
	useBodyClass('start');

	// Slideout options
	const slideoutOptions = {
		id: 'menu',
		isDesktop: isDesktop,
		label: 'Menu',
		content: <Navigation />,
		closeOnClick: true,
		button: {
			outside: true,
			show: true,
		},
	};

	return (
		<div className="container container-main">
			<ErrorBoundary message={<ContainerError />}>
				<SlideoutOverlay options={slideoutOptions} />

				<Header />

				<PixelSection className={'navigation-section'}>{isDesktop ? <Navigation /> : <Slideout options={slideoutOptions} />}</PixelSection>

				{isDesktop ? null : (
					<Slideout
						options={{
							...slideoutOptions,
							button: {
								outside: false,
								show: false,
							},
						}}
					/>
				)}

				<main className="main">
					<div className="main-layout flex-wrap">
						<Content />
					</div>
				</main>

				<Footer />
			</ErrorBoundary>
		</div>
	);
};

const ContainerError = () => {
	return (
		<p>
			Something went wrong. <Link to={'/'}>Go back.</Link>
		</p>
	);
};
