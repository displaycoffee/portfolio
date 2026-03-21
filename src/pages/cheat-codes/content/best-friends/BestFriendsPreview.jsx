/* Local styles */
import './styles/best-friends-preview.scss';

/* Local components */
import { HelloContent } from '../hello-content/HelloContentPreview';

export const BestFriends = () => {
	// Define tab content
	const tabs = [
		{
			label: 'Tab 01',
			content: `<h4>This Is Tab 01 Content</h4>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis laudantium, fugiat pariatur, saepe tenetur accusantium ut voluptates neque hic dolorum! <a href="/">Placeat</a> unde qui cupiditate numquam aliquid, id illo. Quibusdam, ducimus.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illum dicta quidem laudantium sed voluptas ipsam repudiandae corporis veritatis, nostrum fugit harum, nihil dolorem saepe perferendis <a href="/">cumque</a> temporibus eum. Atque.</p>`,
		},
		{
			label: 'Tab 02',
			content: `<h4>This Is Tab 02 Content!</h4>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis laudantium, fugiat pariatur, saepe tenetur accusantium ut voluptates neque hic dolorum! Placeat unde qui cupiditate numquam aliquid, id illo. Quibusdam, ducimus.</p>
			<ul>
				<li>List item 01</li>
				<li>List item 02</li>
				<li>List item 03</li>
			</ul>`,
		},
		{
			label: 'Tab 03',
			content: `<h4>This Is Tab 03 Content!</h4>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos ipsa distinctio id, neque repellendus quod corrupti voluptas rerum accusantium minus molestiae. Deserunt, dolores ex sapiente iusto iure hic soluta assumenda.</p>`,
		},
		{
			label: 'Tab 04',
			content: `<h4>This Is Tab 04 Content!</h4>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>`,
		},
	];

	return tabs && tabs.length !== 0 ? (
		<div className="dc-best-friends displaycoffee">
			<header className="dc-best-friends-header">
				<img
					src="//display.coffee/assets/images/cheat-codes/best-friends-banner.jpg"
					alt="Best Friends - Banner"
					title="Best Friends - Banner"
					width="700"
					height="300"
				/>
				<h3>Best Friends</h3>
			</header>

			<HelloContent tabs={tabs} defaultTab={1} />
		</div>
	) : null;
};
