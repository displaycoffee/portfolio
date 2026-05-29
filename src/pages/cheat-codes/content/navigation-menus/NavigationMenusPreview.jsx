/* Styles */
import './styles/navigation-menus-01.scss';
import './styles/navigation-menus-02.scss';
import './styles/navigation-menus-03.scss';
import './styles/navigation-menus.scss';

export const NavigationMenus = (props) => {
	let { id } = props;
	id = typeof id == 'undefined' ? '01' : id;

	return (
		<nav id={`dc-navigation-menu-${id}`} className="dc-navigation-menu displaycoffee">
			<ul className="dc-navigation-list unstyled">
				<li className="dc-navigation-list-item">
					<a href="/">Link 1</a>

					<ul className="dc-navigation-sublist unstyled">
						<li className="dc-navigation-sublist-item">
							<span>Sub Menu Link 1</span>
						</li>
						<li className="dc-navigation-sublist-item">
							<a href="/">Sub Menu Link 2</a>
						</li>
						<li className="dc-navigation-sublist-item">
							<a href="/">Sub Menu Link 3</a>
						</li>
						<li className="dc-navigation-sublist-item">
							<a href="/">Sub Menu Link 4</a>
						</li>
					</ul>
				</li>

				<li className="dc-navigation-list-item">
					<span>Link 2</span>

					<ul className="dc-navigation-sublist unstyled">
						<li className="dc-navigation-sublist-item">
							<a href="/">Sub Menu Link 1</a>
						</li>
						<li className="dc-navigation-sublist-item">
							<a href="/">Sub Menu Link 2</a>
						</li>
						<li className="dc-navigation-sublist-item">
							<a href="/">Sub Menu Link 3</a>
						</li>
						<li className="dc-navigation-sublist-item">
							<a href="/">Sub Menu Link 4</a>
						</li>
					</ul>
				</li>

				<li className="dc-navigation-list-item">
					<a href="/">Link 3</a>

					<ul className="dc-navigation-sublist unstyled">
						<li className="dc-navigation-sublist-item">
							<a href="/">Sub Menu Link 1</a>
						</li>
						<li className="dc-navigation-sublist-item">
							<a href="/">Sub Menu Link 2</a>
						</li>
						<li className="dc-navigation-sublist-item">
							<a href="/">Sub Menu Link 3</a>
						</li>
						<li className="dc-navigation-sublist-item">
							<a href="/">Sub Menu Link 4</a>
						</li>
					</ul>
				</li>

				<li className="dc-navigation-list-item">
					<a href="/">Link 4</a>

					<ul className="dc-navigation-sublist unstyled">
						<li className="dc-navigation-sublist-item">
							<a href="/">Sub Menu Link 1</a>
						</li>
						<li className="dc-navigation-sublist-item">
							<a href="/">Sub Menu Link 2</a>
						</li>
						<li className="dc-navigation-sublist-item">
							<a href="/">Sub Menu Link 3</a>
						</li>
						<li className="dc-navigation-sublist-item">
							<a href="/">Sub Menu Link 4</a>
						</li>
					</ul>
				</li>

				<li className="dc-navigation-list-item">
					<span>Link 5</span>

					<ul className="dc-navigation-sublist unstyled">
						<li className="dc-navigation-sublist-item">
							<a href="/">Sub Menu Link 1</a>
						</li>
						<li className="dc-navigation-sublist-item">
							<a href="/">Sub Menu Link 2</a>
						</li>
						<li className="dc-navigation-sublist-item">
							<a href="/">Sub Menu Link 3</a>
						</li>
						<li className="dc-navigation-sublist-item">
							<a href="/">Sub Menu Link 4</a>
						</li>
					</ul>
				</li>
			</ul>
		</nav>
	);
};
