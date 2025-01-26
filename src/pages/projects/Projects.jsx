/* Local scripts */
import { projects } from './scripts/projects';

/* Local components */
import { HeaderIcon } from '../../components/blocks/Blocks';
import { Gallery } from '../../components/gallery/Gallery';

export const Projects = () => {
	const showContent = window.location.pathname == '/projects' ? true : false;
	const hasProjects = projects && projects.length !== 0 ? true : false;

	// Options for gallery
	const options = {
		path: '/projects',
		thumbnails: {
			headers: false,
			tabs: true,
		},
		navigation: {
			back: 'Back to "Projects"',
		},
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

			<Gallery gallery={hasProjects ? projects : false} options={options} />
		</>
	) : null;
};
