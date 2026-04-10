/* Local scripts */
import { NavigationRoutesType } from './navigation-types';
import { navigation } from './navigation';
import { navigationUtils } from './navigation-utils';

/* Create routes array */
const routes = [] as NavigationRoutesType[];

navigation.forEach((nav) => {
	if (nav.isRoute) {
		// Build parent nav config
		const navConfig = {
			...navigationUtils.routes.build.config(nav),
			children: [] as NavigationRoutesType[],
		};

		// Build child config
		if (nav?.children && nav.children.length !== 0) {
			nav.children.forEach((child) => {
				const isGallery = nav.id === 2 || nav.id === 3;
				const buildChild = isGallery || (!isGallery && child.isRoute) ? true : false;

				if (buildChild) {
					const childConfig = navigationUtils.routes.build.config(child);
					navConfig.children.push(childConfig);
				}
			});
		}

		// Then push routes
		routes.push(navConfig);
	}
});

export const navigationRoutes = routes;
