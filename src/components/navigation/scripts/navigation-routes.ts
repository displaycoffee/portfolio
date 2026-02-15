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
import { Articles } from '../../../pages/articles/Articles';
import { CheatCodes } from '../../../pages/cheat-codes/CheatCodes';

/* Set up component mapping for routes */
/* Note: this should match the navigation.url value in navigation.ts (without the '/') */
const articlesMap = {
	articles: Articles,
	'boxsizing-my-best-friend': Articles,
	'structuring-code': Articles,
	'styling-text': Articles,
};

const cheatCodesMap = {
	'cheat-codes': CheatCodes,
	burmecia: CheatCodes,
	'banner-code-generator': CheatCodes,
	'best-friends': CheatCodes,
	'dreaming-of-snow': CheatCodes,
	'a-promise': CheatCodes,
	dragony: CheatCodes,
	'velociraptor-pack': CheatCodes,
	'friends-not-food': CheatCodes,
	'wish-you-were-here': CheatCodes,
	'hello-content': CheatCodes,
	'navigation-menus': CheatCodes,
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
				const isGallery = navKey == 'projects' || navKey == 'art' ? true : false;
				const buildChild = isGallery || (!isGallery && child.isRoute && routeMap[childKey]) ? true : false;

				if (buildChild) {
					const childConfig = navigationUtils.routes.build.config(child, routeMap, isGallery ? nav : undefined);
					navConfig.children.push(childConfig);
				}
			});
		}

		// Then push routes
		routes.push(navConfig);
	}
});

export const navigationRoutes = routes;
