/* Local scripts */
import { pages } from '../scripts/pages';

/* Local components */
import { Gallery } from '../elements/Gallery';

export const Projects = () => {
	return pages.projects && pages.projects.length !== 0 ? (
		<>
			<p>Below is a list of <em>almost</em> all of the website projects I have worked on. The projects below are mostly personal ones, though there are many that I have done for friends. I believe to maintain an interest in coding, it is best to have a project you <strong>want</strong> to do; something that helps with motivation. Suffice it to say, this is not an inclusive list of everything I've done, as I've done plenty of custom Frontend and JavaScript tasks at previous jobs.</p>

			<Gallery gallery={pages.projects} />
		</>
	) : null;
};