/* Local scripts */
import { NavigationMapType, NavigationRoutesType } from './navigation-types';
import { navigation } from './navigation';
import { navigationUtils } from './navigation-utils';

/* Local components */
import { Start } from '../../../pages/start/Start';
import { About } from '../../../pages/about/About';
import { Art } from '../../../pages/art/Art';
import { Projects } from '../../../pages/projects/Projects';
import { Resume } from '../../../pages/resume/Resume';

/* Local components - Articles */
import { Articles } from '../../../pages/articles/Articles';
import { Contents } from '../../contents/Contents';
import { BoxSizing } from '../../../pages/articles/content/box-sizing/BoxSizing';
import { StructuringCode } from '../../../pages/articles/content/structuring-code/StructuringCode';
import { StylingText } from '../../../pages/articles/content/styling-text/StylingText';

/* Local components - Cheat Codes */
import { CheatCodes } from '../../../pages/cheat-codes/CheatCodes';
import { Burmecia } from '../../../pages/cheat-codes/content/burmecia/Burmecia';
import { BannerCodeGenerator } from '../../../pages/cheat-codes/content/banner-code-generator/BannerCodeGenerator';
import { BestFriends } from '../../../pages/cheat-codes/content/best-friends/BestFriends';
import { DreamingOfSnow } from '../../../pages/cheat-codes/content/dreaming-of-snow/DreamingOfSnow';
import { APromise } from '../../../pages/cheat-codes/content/a-promise/APromise';
import { Dragony } from '../../../pages/cheat-codes/content/dragony/Dragony';
import { VelociraptorPack } from '../../../pages/cheat-codes/content/velociraptor-pack/VelociraptorPack';
import { FriendsNotFood } from '../../../pages/cheat-codes/content/friends-not-food/FriendsNotFood';
import { WishYouWereHere } from '../../../pages/cheat-codes/content/wish-you-were-here/WishYouWereHere';
import { HelloContent } from '../../../pages/cheat-codes/content/hello-content/HelloContent';
import { NavigationMenus } from '../../../pages/cheat-codes/content/navigation-menus/NavigationMenus';

/* Set up component mapping for routes */
/* Note: this should match the navigation.url value in navigation.ts (without the '/') */
const articlesMap = {
	articles: Articles,
	'boxsizing-my-best-friend': BoxSizing,
	'structuring-code': StructuringCode,
	'styling-text': StylingText,
};

const cheatCodesMap = {
	'cheat-codes': CheatCodes,
	burmecia: Burmecia,
	'banner-code-generator': BannerCodeGenerator,
	'best-friends': BestFriends,
	'dreaming-of-snow': DreamingOfSnow,
	'a-promise': APromise,
	dragony: Dragony,
	'velociraptor-pack': VelociraptorPack,
	'friends-not-food': FriendsNotFood,
	'wish-you-were-here': WishYouWereHere,
	'hello-content': HelloContent,
	'navigation-menus': NavigationMenus,
};

const routeMap = {
	start: Start,
	about: About,
	art: Art,
	projects: Projects,
	resume: Resume,
	...articlesMap,
	...cheatCodesMap,
} as NavigationMapType;

/* Create routes array */
const routes = [] as NavigationRoutesType[];

navigation.forEach((nav) => {
	const navKey = navigationUtils.routes.build.key(nav.url);

	if (nav.isRoute && routeMap[navKey]) {
		// Build parent nav config
		const navConfig = {
			...navigationUtils.routes.build.config(nav, routeMap),
			children: [] as NavigationRoutesType[],
		};

		// Build child config
		if (nav?.children && nav.children.length !== 0) {
			nav.children.forEach((child) => {
				const childKey = navigationUtils.routes.build.key(child.url);

				if (child.isRoute && routeMap[childKey]) {
					const childConfig = navigationUtils.routes.build.config(child, routeMap);
					navConfig.children.push(childConfig);
				}
			});
		}

		// Then push routes
		routes.push(navConfig);
	}
});

export const navigationRoutes = routes;
