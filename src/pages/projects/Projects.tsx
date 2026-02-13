/* React */
import { useContext, useId } from 'react';
import { useLocation } from 'react-router-dom';

/* Local scripts */
import { projects } from './scripts/projects';

/* Local components */
import { Context } from '../../context/Context';
import { HeaderIcon } from '../../components/blocks/Blocks';
import { Gallery, Gallery2 } from '../../components/gallery/Gallery';

/* Options for contents */
const options = {
	navigation: {
		back: 'Back to "Projects"',
	},
	tabs: {
		all: true,
		enabled: true,
	},
};

export const Projects2 = () => {
	const location = useLocation();
	const showProjects = location.pathname == '/projects' ? true : false;

	return showProjects ? <ProjectsIndex /> : <ProjectsGallery />;
};

export const ProjectsIndex = () => {
	const contentsOptions = {
		...options,
		type: 'links',
		values: projects && projects.length !== 0 ? projects : [],
	};

	return (
		<>
			<HeaderIcon>Projects</HeaderIcon>

			<p>
				Here is a collection of <em>almost</em> all of the web projects that I have worked on. These projects are mostly personal ones, though
				there are quite a few that I have done for friends. I believe to maintain an interest in coding, it is best to have a project you want
				to do; something that helps with motivation and practice. This is not an inclusive list of everything, as I've completed plenty of
				custom frontend tasks throughout my career and things get lost along the years. Some screenshots are also purely mockups and were
				never fully coded out.
			</p>

			<Gallery2 {...contentsOptions} />
		</>
	);
};

export const ProjectsGallery = () => {
	const context = useContext(Context);
	const location = useLocation();
	const contentsOptions = {
		...options,
		type: 'body',
		values: projects && projects.length !== 0 ? projects : [],
	};

	// Get last path
	const last = context.utils.getLast(location.pathname, '/');

	// Default content
	const defaultContent = <p>Thank you! But the cheat code is in another castle.</p>;

	return <Gallery2 {...contentsOptions} />;
};

export const Projects = () => {
	const showContent = window.location.pathname == '/projects' ? true : false;
	const hasProjects = projects && projects.length !== 0 ? true : false;

	// Options for gallery
	const galleryOptions = {
		navigation: {
			back: 'Back to "Projects"',
		},
		path: '/projects',
		tabs: {
			all: true,
			enabled: true,
		},
		values: hasProjects ? projects : [],
	};

	return hasProjects ? (
		<>
			{showContent && (
				<>
					<HeaderIcon>Projects</HeaderIcon>

					<p>
						Here is a collection of <em>almost</em> all of the web projects that I have worked on. These projects are mostly personal
						ones, though there are quite a few that I have done for friends. I believe to maintain an interest in coding, it is best to
						have a project you want to do; something that helps with motivation and practice. This is not an inclusive list of everything,
						as I've completed plenty of custom frontend tasks throughout my career and things get lost along the years. Some screenshots
						are also purely mockups and were never fully coded out.
					</p>
				</>
			)}

			<Gallery options={galleryOptions} />
		</>
	) : null;
};
