/* Local scripts */
import { pages } from '../scripts/pages';

/* Local components */
import { Gallery } from '../elements/Gallery';

export const Projects = () => {
	return pages.projects && pages.projects.length !== 0 ? (
		<>
			<p>
				Here is a collection of <em>almost</em> all of the web projects that I have worked on. These projects are mostly personal ones, though
				there are quite a few that I have done for friends. I believe to maintain an interest in coding, it is best to have a project you want
				to do; something that helps with motivation and practice. This is not an inclusive list of everything, as I've completed plenty of
				custom frontend tasks throughout my career and things get lost along the years. Some screenshots are also purely mockups and were
				never fully coded out.
			</p>

			<Gallery gallery={pages.projects} />
		</>
	) : null;
};
