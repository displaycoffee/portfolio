/* Packages */
import { useId } from 'react';
import { useLocation } from 'react-router-dom';

/* Scripts */
import { useAppContext } from '../../context/scripts/context-hooks';
import { CheatCodesSectionProps } from './scripts/cheat-codes-types';
import { cheatCodes } from './scripts/cheat-codes';

/* Components */
import { Contents } from '../../components/contents/Contents';
import { HeaderIcon } from '../../components/blocks/Blocks';
import { APromise } from './content/a-promise/APromise';
import { BannerCodeGenerator } from './content/banner-code-generator/BannerCodeGenerator';
import { BestFriends } from './content/best-friends/BestFriends';
import { Burmecia } from './content/burmecia/Burmecia';
import { Dragony } from './content/dragony/Dragony';
import { DreamingOfSnow } from './content/dreaming-of-snow/DreamingOfSnow';
import { FramerMotion } from './content/framer-motion/FramerMotion';
import { FriendsNotFood } from './content/friends-not-food/FriendsNotFood';
import { HelloContent } from './content/hello-content/HelloContent';
import { NavigationMenus } from './content/navigation-menus/NavigationMenus';
import { VelociraptorPack } from './content/velociraptor-pack/VelociraptorPack';
import { ViewTransitions } from './content/view-transitions/ViewTransitions';
import { WishYouWereHere } from './content/wish-you-were-here/WishYouWereHere';

/* Options for contents */
const options = {
	navigation: {
		back: 'Back to "Cheat Codes"',
	},
};

export const CheatCodes = () => {
	const location = useLocation();
	const showCheatCodes = location.pathname == '/cheat-codes';

	return showCheatCodes ? <CheatCodesIndex /> : <CheatCodesContent />;
};

export const CheatCodesIndex = () => {
	const contentsOptions = {
		...options,
		type: 'links',
		values: cheatCodes && cheatCodes.length !== 0 ? cheatCodes : [],
	};

	return (
		<>
			<HeaderIcon>Cheat Codes</HeaderIcon>

			<p>
				This page contains code snippets for sites, projects, or whatever your heart fancies. A few of these snippets were originally created
				for things like forum templates or signatures, but they've been revised to drag and drop onto any platform.
			</p>

			<Contents {...contentsOptions} />
		</>
	);
};

export const CheatCodesContent = () => {
	const { utils } = useAppContext();
	const location = useLocation();
	const contentsOptions = {
		...options,
		type: 'body',
		values: cheatCodes && cheatCodes.length !== 0 ? cheatCodes : [],
	};

	// Get last path
	const last = utils.getLast(location.pathname, '/');

	// Default content
	const defaultContent = <p>Thank you! But the cheat code is in another castle.</p>;

	return (
		<Contents {...contentsOptions}>
			{{
				'a-promise': <APromise />,
				'banner-code-generator': <BannerCodeGenerator />,
				'best-friends': <BestFriends />,
				burmecia: <Burmecia />,
				dragony: <Dragony />,
				'dreaming-of-snow': <DreamingOfSnow />,
				'framer-motion': <FramerMotion />,
				'friends-not-food': <FriendsNotFood />,
				'hello-content-a-tabbing-script': <HelloContent />,
				'navigation-menus': <NavigationMenus />,
				'velociraptor-pack': <VelociraptorPack />,
				'view-transitions': <ViewTransitions />,
				'wish-you-were-here': <WishYouWereHere />,
			}[last as string] || defaultContent}
		</Contents>
	);
};

export const CheatCodesSection = (props: CheatCodesSectionProps) => {
	const { children, header } = props;
	const fallbackId = useId().replace(/:/g, '');
	const { utils } = useAppContext();

	return (
		<section id={`cheat-codes-section-${utils.handleize(header || fallbackId)}`} className={`cheat-codes-section margin-trim`}>
			{header ? <h3>{header}</h3> : null}

			{children}
		</section>
	);
};
