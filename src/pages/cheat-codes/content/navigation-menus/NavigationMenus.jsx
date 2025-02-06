/* Local components */
import { CheatCodesSection } from '../../CheatCodes';
import { CodeBlock, CodeInline, Preview } from '../../../../components/blocks/Blocks';

export const NavigationMenus = () => {
	return (
		<>
			<CheatCodesSection header={'Information'}>
				<dl className="definition-list">
					<div className="definition-list-item">
						<dt>Skill level</dt>
						<dd>Easy</dd>
					</div>
					<div className="definition-list-item">
						<dt>Languages</dt>
						<dd>HTML or React, CSS or Sass</dd>
					</div>
					<div className="definition-list-item">
						<dt>Responsive</dt>
						<dd>Mostly, but might get squished on small screens</dd>
					</div>
				</dl>
			</CheatCodesSection>

			<CheatCodesSection header={'Usage'}>
				<h5 className="h-remove-shadow">Source / repo</h5>
				<p>
					<a href="//github.com/displaycoffee/cheat-codes/tree/production/navigation-menus" target="_blank" rel="noreferrer">
						View @ displaycoffee
					</a>
				</p>
				<p>
					There are three different styles. Pick whichever one you want and copy the appropriate code below. You can also use the code for
					all three if you really need that many menus.
				</p>

				<h5 className="h-remove-shadow">HTML</h5>
				<p>
					Copy the menu HTML and place it on the page. The menu should easily adapt to any containing element you place it in. Change the
					links in the HTML to whatever you'd like them to link to. Remove or add links as needed.
				</p>
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
				<p>
					To add more menu items, add additional <CodeInline>dc-navigation-list-item</CodeInline> or{' '}
					<CodeInline>dc-navigation-sublist-item</CodeInline> elements inside the HTML. If adding more{' '}
					<CodeInline>dc-navigation-list-item</CodeInline> elements, you'll need to adjust the width of the main navigation items. See the
					CSS or Sass examples below.
				</p>

				<h5 className="h-remove-shadow">React</h5>
				<p>Copy the JSX component from the link below and add according to your preferred method.</p>
				<p>
					<a
						href="//github.com/displaycoffee/cheat-codes/blob/production/navigation-menus/NavigationMenus.jsx"
						target="_blank"
						rel="noreferrer"
					>
						navigation-menus/NavigationMenus.jsx
					</a>
				</p>
				<CodeBlock header={'React import'}>{cb1}</CodeBlock>
				<CodeBlock header={'React component'}>{cb2}</CodeBlock>
				<p>
					The component accepts an <CodeInline>id</CodeInline> prop which is the id of the menu you want to use.
				</p>

				<h5 className="h-remove-shadow">CSS</h5>
				<p>If using CSS and not Sass, copy the styles from the links below and add according to your preferred method.</p>
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
				<CodeBlock header={'Style block'}>{cb3}</CodeBlock>
				<CodeBlock header={'Stylesheet'}>{cb4}</CodeBlock>
				<CodeBlock header={'CSS import'}>{cb5}</CodeBlock>
				<CodeBlock header={'React import'}>{cb6}</CodeBlock>
				<p>
					By default, each menu has a <CodeInline>max-width</CodeInline> of <CodeInline>100%</CodeInline>. You can lower, increase, or
					change the value to a px unit.
				</p>
				<CodeBlock header={'CSS'}>{cb7}</CodeBlock>
				<p>If adding more navigation items, adjust the widths per the number of items. Four items:</p>
				<CodeBlock header={'CSS'}>{cb8}</CodeBlock>
				<p>Five items:</p>
				<CodeBlock header={'CSS'}>{cb9}</CodeBlock>
				<p>Six items:</p>
				<CodeBlock header={'CSS'}>{cb10}</CodeBlock>

				<h5 className="h-remove-shadow">Sass</h5>
				<p>If using Sass and not CSS, copy the styles from the links below and add according to your preferred method.</p>
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
				<CodeBlock header={'Sass import'}>{cb11}</CodeBlock>
				<CodeBlock header={'React import'}>{cb12}</CodeBlock>
				<p>
					To change the <CodeInline>max-width</CodeInline> of each menu, there is a variable configuration available.
				</p>
				<CodeBlock header={'Sass'}>{cb13}</CodeBlock>
				<p>To add or remove navigation items:</p>
				<CodeBlock header={'Sass'}>{cb14}</CodeBlock>
			</CheatCodesSection>

			<Preview className="preview-cheat-codes preview-navigation-menus">
				<NavigationMenusPreview />
				<NavigationMenusPreview id={'02'} />
				<NavigationMenusPreview id={'03'} />
			</Preview>
		</>
	);
};

export const NavigationMenusPreview = (props) => {
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

/* Code blocks */
const cb1 = `import { NavigationMenus } from './NavigationMenus';`;
const cb2 = `<NavigationMenus id={'01'} />`;
const cb3 = `<style>
	/* Copied styles go here */
</style>`;
const cb4 = `<!-- Copy styles and paste into stylesheet -->
<link rel="stylesheet" href="navigation-menus.css" />`;
const cb5 = `@import url('navigation-menus.css');`;
const cb6 = `@import 'navigation-menus.css';`;
const cb7 = `#dc-navigation-menu-01 {
	max-width: 100%;
}`;
const cb8 = `#dc-navigation-menu-01 .dc-navigation-list .dc-navigation-list-item {
	width: 25%;
}`;
const cb9 = `#dc-navigation-menu-01 .dc-navigation-list .dc-navigation-list-item {
	width: 20%;
}`;
const cb10 = `#dc-navigation-menu-01 .dc-navigation-list .dc-navigation-list-item {
	width: 16.66%;
}`;
const cb11 = `@import 'navigation-menus.scss';`;
const cb12 = `import 'navigation-menus.scss';`;
const cb13 = `$menu-max-width: 100%; // max width of menu`;
const cb14 = `$menu-items-per-row: 5; // number of navigation items in main row`;
