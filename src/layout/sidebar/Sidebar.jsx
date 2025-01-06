/* Local styles */
import './styles/sidebar.scss';

/* Local components */
import { Navigation } from '../../components/navigation/Navigation';

export const Sidebar = (props) => {
	const show = props.show;

	return show ? (
		<aside className="sidebar">
			<Navigation />
		</aside>
	) : null;
};
