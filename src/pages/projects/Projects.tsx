/* React */
import { useLocation } from 'react-router-dom';

/* Local scripts */
import { projects } from './scripts/projects';

/* Local components */
import { HeaderIcon } from '../../components/blocks/Blocks';
import { Gallery } from '../../components/gallery/Gallery';

/* Options for gallery */
const options = {
	navigation: {
		back: 'Back to "Projects"',
	},
	tabs: {
		all: true,
		enabled: true,
	},
};

export const Projects = () => {
	const location = useLocation();
	const showProjects = location.pathname == '/projects';

	return showProjects ? <ProjectsIndex /> : <ProjectsGallery />;
};

export const ProjectsIndex = () => {
	const galleryOptions = {
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

			<Gallery {...galleryOptions} />
		</>
	);
};

export const ProjectsGallery = () => {
	const galleryOptions = {
		...options,
		type: 'body',
		values: projects && projects.length !== 0 ? projects : [],
	};

	return <Gallery {...galleryOptions} />;
};
