/* Local components */
import { ArticlesHeader, ArticlesIntroduction, ArticlesToc, ArticlesSection } from '../Articles';
import { CodeBlock } from '../../../components/blocks/Blocks';

export const StylingText = (props) => {
	const { name, date } = props;
	const sections = [
		'Font Family',
		'Font Size',
		'Line Height',
		' Font Weight',
		'Font Style',
		'Font Variant',
		'Text Transform',
		'Text Decoration',
		'Letter Spacing',
		'Font Shorthand',
		'Closing',
	];

	return (
		<>
			<ArticlesHeader name={name} date={date} />

			<ArticlesIntroduction>
				<p>
					This documentation is meant to teach a person how to style text with the magic of CSS! I won't go into to HTML elements commonly
					used with text at this stage. (Maybe with another tutorial at a later date!)
				</p>
				<p>
					Also, many times I will mention that there are default values for CSS properties. I'm only going to add the definitions here in
					the beginning as the overall behavior should be treated the same way across CSS properties. Specifically, here are the values I am
					referring to:
				</p>
				<ul>
					<li>
						<strong>inherit</strong> - The value is inherited by the parent element.
					</li>
					<li>
						<strong>initial</strong> - The default is determined by the browser/operating system.
					</li>
					<li>
						<strong>normal</strong> - Pretty much the same as initial.
					</li>
					<li>
						<strong>none</strong> - In so many words, this resets the value back to the default.
					</li>
				</ul>
				<p>
					<strong>Please note:</strong> Not all CSS properties share the above values, but they are very common.
				</p>
				<p>If you have questions or concerns, please feel free to send me a PM or respond to this topic. Thanks for reading!</p>
			</ArticlesIntroduction>

			<ArticlesToc sections={sections} offset={50} />

			<ArticlesSection header={sections[0]}>
				<p>
					Applied to almost every single HTML is something called <strong>"The Box Model"</strong>. On this model, there's an inside
					properties and outside properties. What makes up the size of an HTML element (or box) consists of the visible width/height of an
					element, padding, and border. It can be calculated like this:
				</p>
				<p>
					<strong>element size</strong> = width + padding ( left side + right side ) + border ( left side + right side )
				</p>
				<p>
					Margin is in this model as well, but it does not get added into the above. It can (and will) effect the size of how the element
					interacts with the rest of your page. I did not include "height" in the equation above, but it would be calculated the same way.
					This tutorial is going to focus mainly on width and if you have a static, set height on an element, you can go with the same
					lessons taught here.
				</p>
				<p>
					Moving on, "The Box Model" is present on every element, though certain elements will ignore these properties that you specifically
					define through CSS. "Block" level elements (body, div, p, etc.) can use things like margin and padding, while "inline" elements
					(span) tend to ignore it or only add certain dimensions. If we add padding to a "span", the top and bottom padding would be
					applied, but wouldn't visibly do anything to the element, while left and right padding does add spacing.
				</p>
				<p>
					Some browsers will even render default box model properties onto elements. For example: Chrome adds bottom and top margin of 1em
					to "p" tags.
				</p>
				<p>
					Because I am too lazy to make a fancy image of my own, here's a screenshot of what "The Box Model" looks like when viewed with
					Chrome Development Tools.
				</p>
				<div className="image-wrapper">
					<img
						src="/assets/images/articles/box-sizing-01.jpg"
						alt="The Box Model in Chrome"
						title="The Box Model in Chrome"
						loading="lazy"
					/>
				</div>
				<p>Here's the actual HTML:</p>
				<CodeBlock header={'HTML'}>{cb1}</CodeBlock>
				<p>
					This div currently has no styles applied to it, save for some font styling inheritence. As such, the width is 1903 pixels (the
					current size of my browser window) and the height is 11 pixels (roughly the size of the font). What if we want to start adding CSS
					properties like width, padding, and border and we have a certain width we want to stick to? This often creates a bunch of math
					that I personally prefer not to deal with, so I'm going to explain how we can deal with it.
				</p>
			</ArticlesSection>

			<ArticlesSection header={sections[1]}>
				<p>
					The way the sizing of "The Box Model" works is not really a problem per-say. The overall box width is calculated as it should be;
					it's just mildly annoying to fix things without the help of our friend box-sizing.
				</p>
				<p>Let's take our div above and add some styling to it:</p>
				<CodeBlock header={'CSS'}>{cb2}</CodeBlock>
				<p>
					<strong>Calculation:</strong>
				</p>
				<p>
					<strong>element size ( 700px )</strong> = width ( 700px ) + padding ( 0 + 0 ) + border ( 0 + 0 )
				</p>
				<p>
					Awesome. We have a div that's now 700 pixels in width and would like to keep it that way. Usually this is because we don't want it
					to overflow a parent container. More styles need to be applied though so we can make this the fanciest div possible.
				</p>
				<CodeBlock header={'CSS'}>{cb3}</CodeBlock>
				<p>
					Well, guess what size our element is now? 730 pixels. The padding was calculated and added into the boxes' width, the border is
					making everything too big, and our design doesn't look anything like it should. Here's the updated box model:
				</p>
				<div className="image-wrapper">
					<img src="/assets/images/articles/box-sizing-02.jpg" alt="Updated Box Model" title="Updated Box Model" loading="lazy" />
				</div>
				<p>
					<strong>Calculation:</strong>
				</p>
				<p>
					<strong>element size ( 730px )</strong> = width ( 700px ) + padding ( 10px + 10px ) + border ( 5px + 5px )
				</p>
				<p>Luckily, box-sizing can help us with this.</p>
			</ArticlesSection>

			<ArticlesSection header={sections[2]}>
				<p>
					The box-sizing property takes into account padding and border then adjusts the element's width for us. It can be added in the
					following way:
				</p>
				<CodeBlock header={'CSS'}>{cb4}</CodeBlock>
				<p>
					After applying box-sizing, we have a box that's 700px! Usually we would have to subtract the amount of padding and border then
					adjust the width property. Altered CSS without box-sizing would look something like this:
				</p>
				<CodeBlock header={'CSS'}>{cb5}</CodeBlock>
				<p>
					But that's annoying to do all the time for every element. Box-sizing takes care of those adjustments for us and says, "You want
					the box to be 700 pixels? I got this, yo." Here's the updated box model:
				</p>
				<div className="image-wrapper">
					<img src="/assets/images/articles/box-sizing-03.jpg" alt="Updated Box Model" title="Updated Box Model" loading="lazy" />
				</div>
				<p>
					<strong>Calculation:</strong>
				</p>
				<p>
					<strong>element size ( 700px )</strong> = width ( 670px = ( 700px ) - padding ( 10px + 10px ) - border ( 5px + 5px )) + padding (
					10px + 10px ) + border ( 5px + 5px )
				</p>
				<p>
					<em>Niiiceee.</em>
				</p>
			</ArticlesSection>

			<ArticlesSection header={sections[3]}>
				<p>
					There's an element to design where box-sizing really shines, at least in my opinion. That happens when working with pixels and
					percentages. Often in responsive design (or any for that matter), you may want to use a percentage width, but add padding and
					border. Without box-sizing, we end up with an element that is bigger than our page or parent containers. Subtracting pixels from
					percentages is almost impossible to calculate and never accurate. But again, that is coming from me and I dislike math of any
					sort.
				</p>
				<p>
					In the situation, box-sizing is amazing because again, it does the calculations for us. Let's add the following CSS instead to our
					div:
				</p>
				<CodeBlock header={'CSS'}>{cb6}</CodeBlock>
				<p>Here's what the dimensions of our div look like:</p>
				<div className="image-wrapper">
					<img src="/assets/images/articles/box-sizing-04.jpg" alt="Div dimensions" title="Div dimensions" loading="lazy" />
				</div>
				<p>
					As I mentioned above, my browser width is at 1903 pixels. Without box-sizing, my box would overflow and create a nasty horizontal
					scroll bar, because...
				</p>
				<p>
					<strong>element size ( 1933px )</strong> = width ( 100% aka 1903px ) + padding ( 10px + 10px ) + border ( 5px + 5px )
				</p>
				<p>
					And unfortunately, 1933 pixels is bigger than my screen width. And I'd like to highlight that: my screen width. Everyone's screen
					width is going to be different sizes, so when using percentages, we can't as easily say, "Wellll, I think it'll always be 1903
					pixels, so I'll just subtract this here and this here."
				</p>
			</ArticlesSection>

			<ArticlesSection header={sections[4]}>
				<p>When using box-sizing, honestly, I apply it to everything. At the top of my CSS, I usually add the following:</p>
				<CodeBlock header={'CSS'}>{cb7}</CodeBlock>
				<p>
					If you're not familiar with "*" in CSS, it means all elements. Applying box-sizing to all elements covers us for mathematical
					situations we might encounter when designing a layout. With box-sizing in place, we can focus on other things and not math. Shoo,
					math. You're not welcome here.
				</p>
				<p>
					As for browser support, unless you're using IE7 (???), you can pretty much{' '}
					<a href="//caniuse.com/?search=box-sizing" target="_blank" rel="noreferrer">
						use it with everything
					</a>
					. Go nuts. In my examples above, I include box-sizing vendor prefixes (-webkit-box-sizing and -moz-box-sizing), but these days,
					it's really not necessary.
				</p>
			</ArticlesSection>

			<ArticlesSection header={sections[5]}>
				<p>
					Earlier I mentioned that margin doesn't get calculated in the element width, but it takes up space, so don't rely on box-sizing
					for it. We still have to account for margin. However, box-sizing is a very useful tool and if it's not in your CSS book of codes
					yet, I would recommend adding it. Building your designs with this from the start will save you a lot of trouble.
				</p>
			</ArticlesSection>
		</>
	);
};

/* Code blocks */
const cb1 = `<div class="boxy">I'm a box! Or maybe you are the box...?</div>`;
const cb2 = `.boxy {
	width: 700px;
}`;
const cb3 = `.boxy {
	width: 700px;
	padding: 10px;
	border: 5px solid #000;
}`;
const cb4 = `.boxy {
	width: 700px;
	padding: 10px;
	border: 5px solid #000;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
}`;
const cb5 = `.boxy {
	width: 670px;
	padding: 10px;
	border: 5px solid #000;
}`;
const cb6 = `.boxy {
	width: 100%;
	padding: 10px;
	border: 5px solid #000;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;    
}`;
const cb7 = `*, *:before, *:after {
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;    
}`;
