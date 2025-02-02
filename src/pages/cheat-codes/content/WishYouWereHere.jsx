/* Local components */
import { CheatCodesSection } from '../CheatCodes';
import { CodeBlock, Preview } from '../../../components/blocks/Blocks';

export const WishYouWereHere = () => {
	return (
		<>
			<CheatCodesSection header={'Description'}>
				<p>A summer-themed template. Not related to the Pink Floyd song.</p>
			</CheatCodesSection>

			<CheatCodesSection header={'Information'}>
				<dl className="definition-list">
					<div className="definition-list-item">
						<dt>Skill level</dt>
						<dd>Easy</dd>
					</div>
					<div className="definition-list-item">
						<dt>Languages</dt>
						<dd>HTML, CSS or Sass</dd>
					</div>
					<div className="definition-list-item">
						<dt>Responsive</dt>
						<dd>Yes</dd>
					</div>
				</dl>
			</CheatCodesSection>

			<CheatCodesSection header={'Notes'}>
				<ol>
					<li>
						There are three different styles. Pick whichever one you want and copy the appropriate code. You can also use the code for all
						three if you really need that many menus.
					</li>
					<li>Place the HTML on the page. The menu should easily adapt to any containing element you place it in.</li>
					<li>Change the links in the HTML to whatever you'd like them to link to. Remove or add links as needed.</li>
				</ol>
			</CheatCodesSection>

			<CheatCodesSection header={'Q&A'}>
				<p>
					<strong>Q: How do I change the width of the menu?</strong>
				</p>
				<p>
					<strong>A:</strong> By default, each menu has a max-width of 100%. You can lower, increase, or change the value to a px unit. Look
					for the following code:
				</p>
				<CodeBlock header={'CSS'}>{cb1}</CodeBlock>
				<p>In the Sass version, there is a variable configuration for this:</p>
				<CodeBlock header={'Sass'}>{cb2}</CodeBlock>
				<p>
					<strong>Q: Can I add more/less main nav items?</strong>
				</p>
				<p>
					<strong>A:</strong> Of course, but you'll need to adjust the width ofr the main nav items. By default, the menu is set up with
					five nav links at a 20% width (5 x 20 = 100). If you want to add six nav menus for example, adjust your width by dividing the
					number of nav items with 100 and edit the HTML to contain the new link.
				</p>
				<p>Four main nav items:</p>
				<CodeBlock header={'CSS'}>{cb3}</CodeBlock>
				<p>Five main nav items:</p>
				<CodeBlock header={'CSS'}>{cb4}</CodeBlock>
				<p>Six main nav items:</p>
				<CodeBlock header={'CSS'}>{cb5}</CodeBlock>
				<p>In the Sass version, there is a variable configuration for this:</p>
				<CodeBlock header={'Sass'}>{cb6}</CodeBlock>
				<p>
					<strong>Q: Can I change the menu id name?</strong>
				</p>
				<p>
					<strong>A:</strong> You can change the menu id (dc-navigation-menu-01, dc-navigation-menu-02, dc-navigation-menu-03) to whatever
					you'd like, just make sure you make changes in both the CSS and HTML.
				</p>
			</CheatCodesSection>

			<CheatCodesSection header={'Usage'}>
				<p>
					<strong>Source</strong> -{' '}
					<a href="//github.com/displaycoffee/cheat-codes/tree/production/navigation-menus" target="_blank" rel="noreferrer">
						navigation-menus
					</a>
				</p>

				<h5 className="h-remove-shadow">HTML</h5>
				<dl className="definition-list">
					<div className="definition-list-item">
						<dt>Menu 1</dt>
						<dd>
							<a
								href="//github.com/displaycoffee/cheat-codes/blob/production/navigation-menus/navigation-menus-01.html"
								target="_blank"
								rel="noreferrer"
							>
								navigation-menus/navigation-menus-01.html
							</a>
						</dd>
					</div>
					<div className="definition-list-item">
						<dt>Menu 2</dt>
						<dd>
							<a
								href="//github.com/displaycoffee/cheat-codes/blob/production/navigation-menus/navigation-menus-02.html"
								target="_blank"
								rel="noreferrer"
							>
								navigation-menus/navigation-menus-02.html
							</a>
						</dd>
					</div>
					<div className="definition-list-item">
						<dt>Menu 3</dt>
						<dd>
							<a
								href="//github.com/displaycoffee/cheat-codes/blob/production/navigation-menus/navigation-menus-03.html"
								target="_blank"
								rel="noreferrer"
							>
								navigation-menus/navigation-menus-03.html
							</a>
						</dd>
					</div>
				</dl>

				<h5 className="h-remove-shadow">CSS</h5>
				<p>If using CSS and not Sass, choose one of these links.</p>
				<dl className="definition-list">
					<div className="definition-list-item">
						<dt>Menu 1</dt>
						<dd>
							<a
								href="//github.com/displaycoffee/cheat-codes/blob/production/navigation-menus/navigation-menus-01.css"
								target="_blank"
								rel="noreferrer"
							>
								navigation-menus/navigation-menus-01.css
							</a>
						</dd>
					</div>
					<div className="definition-list-item">
						<dt>Menu 2</dt>
						<dd>
							<a
								href="//github.com/displaycoffee/cheat-codes/blob/production/navigation-menus/navigation-menus-02.css"
								target="_blank"
								rel="noreferrer"
							>
								navigation-menus/navigation-menus-02.css
							</a>
						</dd>
					</div>
					<div className="definition-list-item">
						<dt>Menu 3</dt>
						<dd>
							<a
								href="//github.com/displaycoffee/cheat-codes/blob/production/navigation-menus/navigation-menus-03.css"
								target="_blank"
								rel="noreferrer"
							>
								navigation-menus/navigation-menus-03.css
							</a>
						</dd>
					</div>
				</dl>

				<h5 className="h-remove-shadow">Sass</h5>
				<p>If using Sass and not CSS, choose one of these links.</p>
				<dl className="definition-list">
					<div className="definition-list-item">
						<dt>Menu 1</dt>
						<dd>
							<a
								href="//github.com/displaycoffee/cheat-codes/blob/production/navigation-menus/navigation-menus-01.scss"
								target="_blank"
								rel="noreferrer"
							>
								navigation-menus/navigation-menus-01.scss
							</a>
						</dd>
					</div>
					<div className="definition-list-item">
						<dt>Menu 2</dt>
						<dd>
							<a
								href="//github.com/displaycoffee/cheat-codes/blob/production/navigation-menus/navigation-menus-02.scss"
								target="_blank"
								rel="noreferrer"
							>
								navigation-menus/navigation-menus-02.scss
							</a>
						</dd>
					</div>
					<div className="definition-list-item">
						<dt>Menu 3</dt>
						<dd>
							<a
								href="//github.com/displaycoffee/cheat-codes/blob/production/navigation-menus/navigation-menus-03.scss"
								target="_blank"
								rel="noreferrer"
							>
								navigation-menus/navigation-menus-03.scss
							</a>
						</dd>
					</div>
				</dl>
			</CheatCodesSection>

			<Preview className="preview-cheat-codes preview-navigation-menus">
				<nav id="dc-navigation-menu-01" className="display-coffee dc-navigation-menu">
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
				<nav id="dc-navigation-menu-02" className="display-coffee dc-navigation-menu">
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
				<nav id="dc-navigation-menu-03" className="display-coffee dc-navigation-menu">
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
			</Preview>
		</>
	);
};

/* Code blocks */
const cb1 = `#dc-navigation-menu-01 {
	max-width: 100%;
}`;
const cb2 = `$menu-max-width: 100%; // max width of menu`;
const cb3 = `#dc-navigation-menu-01 .dc-navigation-list .dc-navigation-list-item {
	width: 25%;
}`;
const cb4 = `#dc-navigation-menu-01 .dc-navigation-list .dc-navigation-list-item {
	width: 20%;
}`;
const cb5 = `#dc-navigation-menu-01 .dc-navigation-list .dc-navigation-list-item {
	width: 16.66%;
}`;
const cb6 = `$menu-items-per-row: 5; // number of navigation items in main row`;
