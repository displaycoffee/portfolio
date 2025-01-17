/* Local scripts */
import { projects } from './scripts/projects';

/* Local components */
import { Gallery } from '../../components/gallery/Gallery';

export const Projects = () => {
	const showDescription = window.location.pathname == '/projects' ? true : false;
	const backLink = 'Back to "Projects"';

	return projects && projects.length !== 0 ? (
		<>
			{showDescription && (
				<p>
					Here is a collection of <em>almost</em> all of the web projects that I have worked on. These projects are mostly personal ones,
					though there are quite a few that I have done for friends. I believe to maintain an interest in coding, it is best to have a
					project you want to do; something that helps with motivation and practice. This is not an inclusive list of everything, as I've
					completed plenty of custom frontend tasks throughout my career and things get lost along the years. Some screenshots are also
					purely mockups and were never fully coded out.
				</p>
			)}

			<Gallery path={'/projects'} type={'projects'} header={false} gallery={projects} backLink={backLink} />
		</>
	) : null;
};
