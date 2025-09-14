/* Local scripts */
import { codeBlocks } from './scripts/navigation-menus-code-blocks';

/* Local components */
import { NavigationMenus as NavigationMenusPreview } from './NavigationMenusPreview';
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
				<CodeBlock header={'React import'}>{codeBlocks[0]}</CodeBlock>
				<CodeBlock header={'React component'}>{codeBlocks[1]}</CodeBlock>
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
				<CodeBlock header={'Style block'}>{codeBlocks[2]}</CodeBlock>
				<CodeBlock header={'Stylesheet'}>{codeBlocks[3]}</CodeBlock>
				<CodeBlock header={'CSS import'}>{codeBlocks[4]}</CodeBlock>
				<CodeBlock header={'React import'}>{codeBlocks[5]}</CodeBlock>
				<p>
					By default, each menu has a <CodeInline>max-width</CodeInline> of <CodeInline>100%</CodeInline>. You can lower, increase, or
					change the value to a px unit.
				</p>
				<CodeBlock header={'CSS'}>{codeBlocks[6]}</CodeBlock>
				<p>If adding more navigation items, adjust the widths per the number of items. Four items:</p>
				<CodeBlock header={'CSS'}>{codeBlocks[7]}</CodeBlock>
				<p>Five items:</p>
				<CodeBlock header={'CSS'}>{codeBlocks[8]}</CodeBlock>
				<p>Six items:</p>
				<CodeBlock header={'CSS'}>{codeBlocks[9]}</CodeBlock>

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
				<CodeBlock header={'Sass import'}>{codeBlocks[10]}</CodeBlock>
				<CodeBlock header={'React import'}>{codeBlocks[11]}</CodeBlock>
				<p>
					To change the <CodeInline>max-width</CodeInline> of each menu, there is a variable configuration available.
				</p>
				<CodeBlock header={'Sass'}>{codeBlocks[12]}</CodeBlock>
				<p>To add or remove navigation items:</p>
				<CodeBlock header={'Sass'}>{codeBlocks[13]}</CodeBlock>
			</CheatCodesSection>

			<Preview className="preview-cheat-codes preview-navigation-menus">
				<NavigationMenusPreview />
				<NavigationMenusPreview id={'02'} />
				<NavigationMenusPreview id={'03'} />
			</Preview>
		</>
	);
};
