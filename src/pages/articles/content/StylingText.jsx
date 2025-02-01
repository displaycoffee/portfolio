/* Local components */
import { ArticlesHeader, ArticlesIntroduction, ArticlesToc, ArticlesSection } from '../Articles';
import { CodeBlock, Preview } from '../../../components/blocks/Blocks';

export const StylingText = (props) => {
	const { name, date } = props;
	const sections = [
		'Font Family',
		'Font Size',
		'Line Height',
		'Font Weight',
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
				<dl className="definition-list">
					<div className="definition-list-item">
						<dt>inherit</dt>
						<dd>The value is inherited by the parent element.</dd>
					</div>
					<div className="definition-list-item">
						<dt>initial</dt>
						<dd>The default is determined by the browser/operating system.</dd>
					</div>
					<div className="definition-list-item">
						<dt>normal</dt>
						<dd>Pretty much the same as initial.</dd>
					</div>
					<div className="definition-list-item">
						<dt>none</dt>
						<dd>In so many words, this resets the value back to the default.</dd>
					</div>
				</dl>
				<p>
					<strong>Please note:</strong> Not all CSS properties share the above values, but they are very common.
				</p>
				<p>If you have questions or concerns, please feel free to send me a PM or respond to this topic. Thanks for reading!</p>
			</ArticlesIntroduction>

			<ArticlesToc sections={sections} offset={50} />

			<ArticlesSection header={sections[0]}>
				<CodeBlock header={'CSS'}>{cb1}</CodeBlock>
				<h5>Values</h5>
				<dl className="definition-list">
					<div className="definition-list-item">
						<dt>inherit</dt>
					</div>
					<div className="definition-list-item">
						<dt>initial</dt>
					</div>
					<div className="definition-list-item">
						<dt>family-name</dt>
						<dd>A specific font. Names with spaces should have single or double quotes around them. (e.g. "Times New Roman").</dd>
					</div>
					<div className="definition-list-item">
						<dt>generic-family</dt>
						<dd>A font meant to be used as a fallback method.</dd>
					</div>
				</dl>
				<p>
					Before getting into the font family property, it may be important to know the difference between the two major generic fonts
					families that we can use: sans-serif and serif.
				</p>
				<dl className="definition-list">
					<div className="definition-list-item">
						<dt>sans-serif</dt>
						<dd>Fonts that do not have hanging strokes or lines at the ends of characters. (e.g. Arial, Vedana, Calibri, etc.)</dd>
					</div>
					<div className="definition-list-item">
						<dt>serif</dt>
						<dd>
							Fonts that do have hanging strokes or lines at the ends of characters. (e.g. Times New Roman, Garamond, Georgia, etc.)
						</dd>
					</div>
				</dl>
				<p>There are some other (less used) generic families that you may need on occasion as a fallback:</p>
				<dl className="definition-list">
					<div className="definition-list-item">
						<dt>cursive</dt>
						<dd>
							Script type characters that are sometimes "joined" or brush-like in display. Might also be referred to as "script". (e.g.
							Corsive, Zapfino, etc.)
						</dd>
					</div>
					<div className="definition-list-item">
						<dt>fantasy</dt>
						<dd>Decorative characters. (e.g. Papyrus, Copperplate, Comic Sans, etc.)</dd>
					</div>
					<div className="definition-list-item">
						<dt>monospace</dt>
						<dd>
							Characters are the same size and appear as if from a typewriter. (e.g. Courier New, Lucida Sans Typewriter, Monaco, etc.)
						</dd>
					</div>
				</dl>
				<p>
					The actual font-family that renders when one of these generic types is used depends on the browser and/or operating system. A font
					like Arial can be widely found on both Windows and Mac machines, while something like Helvetica is used more on Mac rather than
					Windows.
				</p>
				<p>
					Now that we've gone through generic font families, the font family property is used to declare a set of fonts that you want to
					style your text with. You can put as many fonts as you want in your family, but the browser will render the first font that it
					recognizes. The last font in the family will usually be either sans-serif or serif meaning if all fonts in the family fail to
					render, it will fall back to the default style.
				</p>
				<CodeBlock header={'HTML'}>{cb2}</CodeBlock>
				<CodeBlock header={'CSS'}>{cb3}</CodeBlock>
				<Preview className="preview-articles preview-font-families">
					<div className="fonts-are-awesome">We're using font families! Woohoo!</div>
				</Preview>
				<p>As long as my computer knows what Tahoma is, it will use that font. Otherwise, it falls back to Calibri, then Arial, and so on.</p>
				<p>
					The above mostly relates to web safe fonts. Google fonts and font-face kits are an entirely different thing and I won't get into
					that here. It's good practice to declare fallbacks for font families, but if you're using something like Google fonts or hosting
					the font on your own website, you probably don't have to worry about this.
				</p>
				<p>
					You may want to try out{' '}
					<a href="//cssfontstack.com" target="_blank" rel="noreferrer">
						CSS Font Stack
					</a>
					, which will give you fonts that are related to each other and also the percentage of how common that font is on Windows versus
					Mac.
				</p>
			</ArticlesSection>

			<ArticlesSection header={sections[1]}>
				<CodeBlock header={'CSS'}>{cb4}</CodeBlock>
				<h5>Values</h5>
				<dl className="definition-list">
					<div className="definition-list-item">
						<dt>inherit</dt>
					</div>
					<div className="definition-list-item">
						<dt>initial</dt>
					</div>
					<div className="definition-list-item">
						<dt>size</dt>
						<dd>
							A value such as xx-small, x-small, smaller, small, medium, large, larger, x-large, xx-large. Medium is the default value.
						</dd>
					</div>
					<div className="definition-list-item">
						<dt>length</dt>
						<dd>A defined value measured with something like %, px, em, pt, cm, etc.</dd>
					</div>
				</dl>
				<p>
					Again, there's another thing we should know about before using the font size property and that is units of measurement (or
					length). There are quite a few, but let's focus on three: %, px and em.
				</p>
				<dl className="definition-list">
					<div className="definition-list-item">
						<dt>% (Percentage)</dt>
						<dd>
							ercentages are perhaps the most scalable of the units as they resize with whatever font size your browser is set to. You
							can change the font size of your browser by pressing 'Control' and '+' on Windows.
						</dd>
					</div>
					<div className="definition-list-item">
						<dt>em (Ems)</dt>
						<dd>
							A scalable unit equal to the current font size. I'll introduce em with an example. When coding, I usually declare a 100%
							font size on the body element. If I set another size on a child element to 1.0em, this makes that font equal to 16px.
							Whereas if I set the child element size to 0.85em, it's roughly equal to 14px. This gets a little tricky when you are
							changing sizes within child elements a bunch. If I had another child element within my element that had a font size of
							0.85em, my new child element will use 0.85em to calculate any font size changes. I apologize if that sounded confusing,
							but it's all a bunch of math, which I'm terrible at. In any case, ems are pretty useful for designs that need to be
							responsive or mobile-friendly.
						</dd>
					</div>
					<div className="definition-list-item">
						<dt>px (Pixels)</dt>
						<dd>
							Fixed units of measurements, which unlike ems, are not scalable. Using our previous example, if we set the body font size
							to 100% then set a child element to 14px or 20px or whatever, the percentage doesn't have any play in the pixel value. The
							pixel value will always be what you set it as.
						</dd>
					</div>
				</dl>
				<CodeBlock header={'HTML'}>{cb5}</CodeBlock>
				<CodeBlock header={'CSS'}>{cb6}</CodeBlock>
				<Preview className="preview-articles preview-font-size">
					<div className="fonts-are-awesome">
						Here we have some font that's set to 0.85em. With a body at a font size of 100%, this is about 14 pixels.
						<div className="child">Here is a child element. Look how it's smaller, even though the value is 0.85em again.</div>
					</div>
					<div className="fonts-are-awesome-part-02">
						This text, on the other hand, is set to 20px in font size.
						<div className="child">And it's child is 20px as well regardless of the parent elements.</div>
					</div>
				</Preview>
			</ArticlesSection>

			<ArticlesSection header={sections[2]}>
				<CodeBlock header={'CSS'}>{cb7}</CodeBlock>
				<h5>Values</h5>
				<dl className="definition-list">
					<div className="definition-list-item">
						<dt>inherit</dt>
					</div>
					<div className="definition-list-item">
						<dt>initial</dt>
					</div>
					<div className="definition-list-item">
						<dt>normal</dt>
					</div>
					<div className="definition-list-item">
						<dt>length</dt>
						<dd>A defined value measured with something like %, px, em, pt, cm, etc. It can also be unitless.</dd>
					</div>
				</dl>
				<p>
					I'd like to discuss the line height property next as I always felt this goes hand-in-hand with font sizes. Line height is a
					property that defines the amount of spacing in-between lines of text. I often see issues where people can't figure out why one
					line of text is layering on top of another. More often than not, this is because the line height is set to a size that's smaller
					than the font size or 0. In general, I recommend having a line height that's at least two pixels or just a bit bigger than your
					font size. If you're using 16px font, try 18px line height. I feel it's more readable that way.
				</p>
				<p>
					The calculated value of line height is determined by the font size and the line height that you do or do not specify. If you do
					not specify a line height, the default value can vary depending on the browser you use. Often, I give the body a line height value
					then adjust as needed for other elements. <strong>For example:</strong> a line height of 100% on the body element when the font
					size is set to 16px would make my line height 16px as well. If I give the body 150% line height, the line height is about 24px and
					with a body of 200% line height, I essentially have double spaces.
				</p>
				<p>
					Like font size, line height can be given the same units of measurement (%, px and em). Line height can also be added without a
					unit though and I had no idea about this for a long time and apparently, it makes a difference. Without a unit, child elements
					will take a number value rather than the computed value. Any child elements will then calculate the line height based on their
					font size. Essentially, this makes less overriding line height in CSS down the road.
				</p>
				<p>That might be a little confusing, so let's go over some examples. Yay!</p>
				<CodeBlock header={'HTML'}>{cb8}</CodeBlock>
				<CodeBlock header={'CSS'}>{cb9}</CodeBlock>
				<Preview className="preview-articles preview-line-height-01">
					<div className="fonts-are-awesome">
						This is a long paragraph to show you how the line height looks. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
						do eiusmod tempor.
					</div>
				</Preview>
				<p>
					If we just add text to the div, the calculated line height is 24px. Now, let's add a child element with a different font size
					that's bigger than the normal text.
				</p>
				<CodeBlock header={'HTML'}>{cb10}</CodeBlock>
				<CodeBlock header={'CSS'}>{cb11}</CodeBlock>
				<Preview className="preview-articles preview-line-height-02">
					<div className="fonts-are-awesome">
						This is a long paragraph to show you how the line height looks. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
						do eiusmod tempor.
						<div className="fonts-are-awesome-part-02">This is a long paragraph to show you how the line height looks.</div>
					</div>
				</Preview>
				<p>
					The line height for that new div is calculated by the ems in the parent, which for a font size of 30px, is not very good.
					Basically, we still have a line height of 24px, so our 30px font is starting to look a little cramped. The higher font value we
					go, the more squished it gets and vice versa, the lower we go, the further the spacing is. Let's make some adjustments then.
				</p>
				<CodeBlock header={'HTML'}>{cb12}</CodeBlock>
				<CodeBlock header={'CSS'}>{cb13}</CodeBlock>
				<Preview className="preview-articles preview-line-height-03">
					<div className="fonts-are-awesome">
						This is a long paragraph to show you how the line height looks. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
						do eiusmod tempor.
						<div className="fonts-are-awesome-part-02">This is a long paragraph to show you how the line height looks.</div>
					</div>
				</Preview>
				<p>
					We still have a line height of 24px for any text in the first div. However, child elements are now calculating their line height
					value based on the font size rather than a unit determined in the parent. Our child div now has a calculated line height of 45px
					which looks much nicer. Using a unitless line height helps amazingly for making sure your child fonts scale correctly and it makes
					your job easier. In closing, if you're going to add a global line height somewhere (like on the body or html), in my opinion, use
					a unitless value.
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
const cb1 = `font-family: family-name, generic-family;`;
const cb2 = `<div class="fonts-are-awesome">
	We're using font families! Woohoo!
</div>`;
const cb3 = `.fonts-are-awesome {
	font-family: Tahoma, Calibri, Arial, sans-serif;
}`;
const cb4 = `font-size: value;`;
const cb5 = `<div class="fonts-are-awesome">
	Here we have some font that's set to 0.85em. With a body at a font size of 100%, this is about 14 pixels.
	<div class="child">
		Here is a child element. Look how it's smaller, even though the value is 0.85em again.
	</div>
</div>
<div class="fonts-are-awesome-part-02">
	This text, on the other hand, is set to 20px in font size.
	<div class="child">
		And it's child is 20px as well regardless of the parent elements.
	</div>
</div>`;
const cb6 = `.fonts-are-awesome, .fonts-are-awesome > .child {
	font-size: 0.85em;
}
.fonts-are-awesome-part-02, .fonts-are-awesome-part-02 > .child {
	font-size: 20px;
}`;
const cb7 = `line-height: value;`;
const cb8 = `<body>
	<div class="fonts-are-awesome">
		This is a long paragraph to show you how the line height looks. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
	</div>
</body>`;
const cb9 = `body {
	font-size: 100%; /* Base font-size should be roughly 16px */
	line-height: 1.5em;
}`;
const cb10 = `<body>
	<div class="fonts-are-awesome">
		This is a long paragraph to show you how the line height looks. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
		<div class="fonts-are-awesome-part-02">
			This is a long paragraph to show you how the line height looks.
		</div>  
	</div>
</body>`;
const cb11 = `body {
	font-size: 100%; /* Base font-size should be roughly 16px */
	line-height: 1.5em;
}
.fonts-are-awesome-part-02 {
	font-size: 30px;
}`;
const cb12 = `<body>
	<div class="fonts-are-awesome">
		This is a long paragraph to show you how the line height looks. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
		<div class="fonts-are-awesome-part-02">
			This is a long paragraph to show you how the line height looks.
		</div>  
	</div>
</body>`;
const cb13 = `body {
	font-size: 100%; /* Base font-size should be roughly 16px */
	line-height: 1.5;
}
.fonts-are-awesome-part-02 {
	font-size: 30px;
}`;
const cb14 = `font-weight: value;`;
const cb15 = `<div class="fonts-are-awesome">
	Light text (100 weight).
</div>
<div class="fonts-are-awesome-part-02">
	Normal text (400 weight). Here we are using the font Roboto to demonstate.
</div>
<div class="fonts-are-awesome-part03">
	Bold text (900 weight).
</div>`;
const cb16 = `.fonts-are-awesome {
	font-weight: 100;
}
.fonts-are-awesome-part-02 {
	font-weight: 400;
}
.fonts-are-awesome-part03 {
	font-weight: 900;
}`;
const cb17 = `font-style: value;`;
const cb18 = `<div class="fonts-are-awesome">
	This is font styled italic.
</div>
<div class="fonts-are-awesome-part-02">
	This is not!
</div>`;
const cb19 = `.fonts-are-awesome, .fonts-are-awesome-part-02 {
	font-family: Tahoma, Calibri, Arial, sans-serif;
}
.fonts-are-awesome {
	font-style: italic;
}
.fonts-are-awesome-part-02 {
	font-style: normal;
}`;
const cb20 = `font-variant: value;`;
const cb21 = `<div class="fonts-are-awesome">
	This is an EXAMPLE testing casing with small-caps.
</div>`;
const cb22 = `.fonts-are-awesome {
	font-variant: small-caps;
	font-size: 16px;
}`;
const cb23 = `text-transform: value;`;
const cb24 = `<div class="fonts-are-awesome">
	this TEXT is capitalized.
</div>
<div class="fonts-are-awesome-part-02">
	THIS TEXT IS NOW ALL LOWERCASE. MAGIC!
</div>
<div class="fonts-are-awesome-part03">
	this text is now all uppercase. more magic!
</div>`;
const cb25 = `.fonts-are-awesome {
	text-transform: capitalize;
}
.fonts-are-awesome-part-02 {
	text-transform: lowercase;
}
.fonts-are-awesome-part03 {
	text-transform: uppercase;
}`;
const cb26 = `text-decoration: value;`;
const cb27 = `<div class="fonts-are-awesome">
	Text with a line-through.
</div>
<div class="fonts-are-awesome-part-02">
	Text with a line above it.
</div>
<div class="fonts-are-awesome-part03">
	Text with a line below it.
</div>`;
const cb28 = `.fonts-are-awesome {
	text-decoration: line-through;
}
.fonts-are-awesome-part-02 {
	text-decoration: overline;
}
.fonts-are-awesome-part03 {
	text-decoration: underline;
}`;
const cb29 = `letter-spacing: value;`;
const cb30 = `<div class="fonts-are-awesome">
	Text with adjusted letter spacing.
</div>
<div class="fonts-are-awesome-part-02">
	Text with negative letter spacing.
</div>`;
const cb31 = `.fonts-are-awesome {
	letter-spacing: 5px;
}
.fonts-are-awesome-part-02 {
	letter-spacing: -3px;
}`;
const cb32 = `font: font-style font-variant font-weight font-size/line-height font-family;`;
const cb33 = `<div class="fonts-are-awesome">
	Shorthand example 01.
</div>
<div class="fonts-are-awesome-part-02">
	Shorthand example 02.
</div>
<div class="fonts-are-awesome-part03">
	Shorthand example 03.
</div>`;
const cb34 = `.fonts-are-awesome {
	font: 12px Arial;
}
.fonts-are-awesome-part-02 {
	font: italic bold 12px Arial;
}
.fonts-are-awesome-part03 {
	font: italic small-caps bold 12px/16px Arial, sans-serif;
}`;
