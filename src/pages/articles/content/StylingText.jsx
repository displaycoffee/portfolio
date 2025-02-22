/* Local components */
import { ArticlesToc, ArticlesSection } from '../Articles';
import { CodeBlock, Output } from '../../../components/blocks/Blocks';

export const StylingText = () => {
	const sections = [
		'Introduction',
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
			<ArticlesToc sections={sections} offset={50} />

			<ArticlesSection header={sections[0]}>
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
			</ArticlesSection>

			<ArticlesSection header={sections[1]}>
				<CodeBlock header={'CSS'}>{cb01}</CodeBlock>
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
				<CodeBlock header={'HTML'}>{cb02}</CodeBlock>
				<CodeBlock header={'CSS'}>{cb03}</CodeBlock>
				<Output className="output-articles output-font-families" code={cb02} />
				<p>
					The first font listed is "Roboto" from{' '}
					<a href="//fonts.google.com/specimen/Roboto" target="_blank" rel="noreferrer">
						Google Fonts
					</a>
					. If that is not available for some strange reason, as long as my computer knows what "Tahoma" is, it will use that font.
					Otherwise, it fallsback to "Calibri" and so on.
				</p>
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

			<ArticlesSection header={sections[2]}>
				<CodeBlock header={'CSS'}>{cb04}</CodeBlock>
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
							Percentages are perhaps the most scalable of the units as they resize with whatever font size your browser is set to. You
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
				<CodeBlock header={'HTML'}>{cb05}</CodeBlock>
				<CodeBlock header={'CSS'}>{cb06}</CodeBlock>
				<Output className="output-articles output-font-size" code={cb05} />
			</ArticlesSection>

			<ArticlesSection header={sections[3]}>
				<CodeBlock header={'CSS'}>{cb07}</CodeBlock>
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
				<CodeBlock header={'HTML'}>{cb08}</CodeBlock>
				<CodeBlock header={'CSS'}>{cb09}</CodeBlock>
				<Output className="output-articles output-line-height-01" code={cb08} />
				<p>
					If we just add text to the div, the calculated line height is 24px. Now, let's add a child element with a different font size
					that's bigger than the normal text.
				</p>
				<CodeBlock header={'HTML'}>{cb10}</CodeBlock>
				<CodeBlock header={'CSS'}>{cb11}</CodeBlock>
				<Output className="output-articles output-line-height-02" code={cb10} />
				<p>
					The line height for that new div is calculated by the ems in the parent, which for a font size of 30px, is not very good.
					Basically, we still have a line height of 24px, so our 30px font is starting to look a little cramped. The higher font value we
					go, the more squished it gets and vice versa, the lower we go, the further the spacing is. Let's make some adjustments then.
				</p>
				<CodeBlock header={'HTML'}>{cb12}</CodeBlock>
				<CodeBlock header={'CSS'}>{cb13}</CodeBlock>
				<Output className="output-articles output-line-height-03" code={cb12} />
				<p>
					We still have a line height of 24px for any text in the first div. However, child elements are now calculating their line height
					value based on the font size rather than a unit determined in the parent. Our child div now has a calculated line height of 45px
					which looks much nicer. Using a unitless line height helps amazingly for making sure your child fonts scale correctly and it makes
					your job easier. In closing, if you're going to add a global line height somewhere (like on the body or html), in my opinion, use
					a unitless value.
				</p>
			</ArticlesSection>

			<ArticlesSection header={sections[4]}>
				<CodeBlock header={'CSS'}>{cb14}</CodeBlock>
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
						<dt>bold</dt>
						<dd>Turns font bold.</dd>
					</div>
					<div className="definition-list-item">
						<dt>lighter</dt>
						<dd>The font is lighter.</dd>
					</div>
					<div className="definition-list-item">
						<dt>bolder</dt>
						<dd>The font is bolder.</dd>
					</div>
					<div className="definition-list-item">
						<dt>numeric</dt>
						<dd>Differing weights such as 100, 200, 300, 400, 500, 600, 700, 800 and 900.</dd>
					</div>
				</dl>
				<p>
					After all that confusing math about font size and line height, we're going to get into "text decorating" starting with the
					property font weight. This property determines how bold or light your text is going to be.
				</p>
				<p>
					It is important to note that if you're using google fonts, certain fonts don't have a bold weight and if you use a value like bold
					or some number it can't interpret, it won't change anything. <strong>For example:</strong> The font Droid Sans has two values -
					400 and 700. If we choose 100 or 200 for a lighter version of this font, it does nothing. Likewise, if we choose 800 or 900 for a
					bolder style, there's also no change. Adding a value of 800 or 900 to this font will be the same as 700. If you're looking for a
					font with a lot of different weights, keep this in mind.
				</p>
				<CodeBlock header={'HTML'}>{cb15}</CodeBlock>
				<CodeBlock header={'CSS'}>{cb16}</CodeBlock>
				<Output className="output-articles output-font-weight" code={cb15} />
			</ArticlesSection>

			<ArticlesSection header={sections[5]}>
				<CodeBlock header={'CSS'}>{cb17}</CodeBlock>
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
						<dt>italic</dt>
						<dd>
							Looks for an italic version of the font if one is available. If there is none, it gets set to oblique. Italic fonts are
							usually cursive or script like in nature.
						</dd>
					</div>
					<div className="definition-list-item">
						<dt>oblique</dt>
						<dd>
							A slanted version of the font used when an italic version is not present. If neither italic nor oblique are available, the
							font becomes slanted to give it the effect of italics.
						</dd>
					</div>
				</dl>
				<p>
					The font style property has some similarities with font weight. Setting a font style to italic will slant the font even if there
					is not an italic version of the font. There is a difference though between using italic font style and a font that has an italic
					variant. Sometimes this is very subtle, but just be aware if are using font-face kits where you do not have the italic version of
					the font.
				</p>
				<CodeBlock header={'HTML'}>{cb18}</CodeBlock>
				<CodeBlock header={'CSS'}>{cb19}</CodeBlock>
				<Output className="output-articles output-font-style" code={cb18} />
			</ArticlesSection>

			<ArticlesSection header={sections[6]}>
				<CodeBlock header={'CSS'}>{cb20}</CodeBlock>
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
						<dt>small-caps</dt>
						<dd>Turns all characters to caps and decreases their size.</dd>
					</div>
				</dl>
				<p>
					There's not much to say about the font variant property. The one thing you may find useful is the small-caps value. This value
					will change everything to caps, but makes the rest of the text smaller. If you have a letter that is capped already, that letter
					will appear as its normal size. The word "Cat" set to 16px font with small-caps leaves the "C" at 16px and the "at" will now be
					uppercase, but a smaller size.
				</p>
				<CodeBlock header={'HTML'}>{cb21}</CodeBlock>
				<CodeBlock header={'CSS'}>{cb22}</CodeBlock>
				<Output className="output-articles output-font-variant" code={cb21} />
			</ArticlesSection>

			<ArticlesSection header={sections[7]}>
				<CodeBlock header={'CSS'}>{cb23}</CodeBlock>
				<h5>Values</h5>
				<dl className="definition-list">
					<div className="definition-list-item">
						<dt>inherit</dt>
					</div>
					<div className="definition-list-item">
						<dt>initial</dt>
					</div>
					<div className="definition-list-item">
						<dt>none</dt>
					</div>
					<div className="definition-list-item">
						<dt>capitalize</dt>
						<dd>
							Capitalizes the first letter of every word. If another character, such as the second or third character is capitalized, it
							does nothing to this character.
						</dd>
					</div>
					<div className="definition-list-item">
						<dt>lowercase</dt>
						<dd>Changes all characters to lowercase.</dd>
					</div>
					<div className="definition-list-item">
						<dt>uppercase</dt>
						<dd>Changes all characters to uppercase.</dd>
					</div>
				</dl>
				<p>
					Text transform gives us the flexibility to change the formatting of the text without worrying about how a user has inputted
					something. I often see a lot of forum admins asking their users to register in all caps or all lowercase, but if you are able to
					in your CSS, this effect can usually be achieved using text transform. My thoughts: write text how it should be written; like
					normal sentence case. Then, if needed, change it with text transform. This saves a lot of trouble down the road if you want to
					switch styles.
				</p>
				<p>
					One thing to note about the capitalize value is that it will not change subsequent letters that are already caps. If you have the
					word "CAT", it stays "CAT" instead of "Cat". And unfortunately, you can't set a parent element to have a lowercase value and then
					a child to have to have a capitalize value. I tried it; it doesn't work. :(
				</p>
				<CodeBlock header={'HTML'}>{cb24}</CodeBlock>
				<CodeBlock header={'CSS'}>{cb25}</CodeBlock>
				<Output className="output-articles output-text-transform" code={cb24} />
			</ArticlesSection>

			<ArticlesSection header={sections[8]}>
				<CodeBlock header={'CSS'}>{cb26}</CodeBlock>
				<h5>Values</h5>
				<dl className="definition-list">
					<div className="definition-list-item">
						<dt>inherit</dt>
					</div>
					<div className="definition-list-item">
						<dt>initial</dt>
					</div>
					<div className="definition-list-item">
						<dt>none</dt>
					</div>
					<div className="definition-list-item">
						<dt>blink</dt>
						<dd>
							Makes the text blink or flash. Though you can use this property, in a lot of browsers it's disabled or doesn't work.
							Probably for a good reason.
						</dd>
					</div>
					<div className="definition-list-item">
						<dt>line-through</dt>
						<dd>Places a 1px line through the text.</dd>
					</div>
					<div className="definition-list-item">
						<dt>overline</dt>
						<dd>Places a 1px line above the text.</dd>
					</div>
					<div className="definition-list-item">
						<dt>underline</dt>
						<dd>Places a 1px line below the text.</dd>
					</div>
				</dl>
				<p>
					My favorite value out of all text decoration choices is "none". I state this because I often use the value "none" to remove the
					underline from a link element. The other properties should be used mostly for decorative/emphasis purposes and I wouldn't
					recommend using them on the bulk of your text as they can be distracting.
				</p>
				<p>
					A little history about styling words that need to be underlined. Many years ago, there used to be a 'u' tag that was used for
					underlining text, but in HTML 4 this was deprecated. In HTML5, it was brought back and redefined. If you need to underline text,
					you should probably wrap that text in an element and style it using text decoration. Also, if you're underlining something in the
					middle of a paragraph of text, do make sure it won't be mistaken for a link.
				</p>
				<CodeBlock header={'HTML'}>{cb27}</CodeBlock>
				<CodeBlock header={'CSS'}>{cb28}</CodeBlock>
				<Output className="output-articles output-text-decoration" code={cb27} />
			</ArticlesSection>

			<ArticlesSection header={sections[9]}>
				<CodeBlock header={'CSS'}>{cb29}</CodeBlock>
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
						<dd>A defined value usually measured with something like %, px, em, pt, cm, etc.</dd>
					</div>
				</dl>
				<p>
					Letter spacing controls how much space is in-between each character. Positive values spread characters out, where negative values
					bring the letters closer together. (You probably shouldn't use negative values too much. ;))
				</p>
				<CodeBlock header={'HTML'}>{cb30}</CodeBlock>
				<CodeBlock header={'CSS'}>{cb31}</CodeBlock>
				<Output className="output-articles output-letter-spacing" code={cb30} />
			</ArticlesSection>

			<ArticlesSection header={sections[10]}>
				<CodeBlock header={'CSS'}>{cb32}</CodeBlock>
				<h5>Values</h5>
				<p>
					After going through all the above properties, we can combine some of these properties into one property called "font". This CSS
					property accepts a few different values (as noted above). It can be useful if you want to declare a bunch of styles in one go.
					This is the only shorthand I don't use that often. I find it easier to override font styles when they're not clumped together like
					this.
				</p>
				<p>
					If you're using the font property, you can leave certain values out and it should still work correctly. The two values that are
					required are font size and font family.
				</p>
				<CodeBlock header={'HTML'}>{cb33}</CodeBlock>
				<CodeBlock header={'CSS'}>{cb34}</CodeBlock>
				<Output className="output-articles output-font-shorthand" code={cb33} />
			</ArticlesSection>

			<ArticlesSection header={sections[11]}>
				<p>
					I hope you found this tutorial somewhat useful! There may be a second part to this that will go over things like text alignment,
					HTML elements that are suited for text and more (as I think of it). So, go forth my lovers of text and style with the knowledge
					you've been given!
				</p>
			</ArticlesSection>
		</>
	);
};

/* Code blocks */
const cb01 = `font-family: family-name, generic-family;`;
const cb02 = `<div class="fonts-are-awesome">
	We're using font families! Woohoo!
</div>`;
const cb03 = `.fonts-are-awesome {
	font-family: 'Roboto', Tahoma, Calibri, Arial, sans-serif;
}`;
const cb04 = `font-size: value;`;
const cb05 = `<div class="fonts-are-awesome">
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
const cb06 = `.fonts-are-awesome, .fonts-are-awesome > .child {
	font-size: 0.85em;
}
.fonts-are-awesome-part-02, .fonts-are-awesome-part-02 > .child {
	font-size: 20px;
}`;
const cb07 = `line-height: value;`;
const cb08 = `<body>
	<div class="fonts-are-awesome">
		This is a long paragraph to show you how the line height looks. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
	</div>
</body>`;
const cb09 = `body {
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
	Normal text (400 weight).
</div>
<div class="fonts-are-awesome-part-03">
	Bold text (900 weight).
</div>`;
const cb16 = `.fonts-are-awesome {
	font-weight: 100;
}
.fonts-are-awesome-part-02 {
	font-weight: 400;
}
.fonts-are-awesome-part-03 {
	font-weight: 900;
}`;
const cb17 = `font-style: value;`;
const cb18 = `<div class="fonts-are-awesome">
	This is font styled italic.
</div>
<div class="fonts-are-awesome-part-02">
	This is not!
</div>`;
const cb19 = `.fonts-are-awesome {
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
}`;
const cb23 = `text-transform: value;`;
const cb24 = `<div class="fonts-are-awesome">
	this TEXT is capitalized.
</div>
<div class="fonts-are-awesome-part-02">
	THIS TEXT IS NOW ALL LOWERCASE. MAGIC!
</div>
<div class="fonts-are-awesome-part-03">
	this text is now all uppercase. more magic!
</div>`;
const cb25 = `.fonts-are-awesome {
	text-transform: capitalize;
}
.fonts-are-awesome-part-02 {
	text-transform: lowercase;
}
.fonts-are-awesome-part-03 {
	text-transform: uppercase;
}`;
const cb26 = `text-decoration: value;`;
const cb27 = `<div class="fonts-are-awesome">
	Text with a line-through.
</div>
<div class="fonts-are-awesome-part-02">
	Text with a line above it.
</div>
<div class="fonts-are-awesome-part-03">
	Text with a line below it.
</div>`;
const cb28 = `.fonts-are-awesome {
	text-decoration: line-through;
}
.fonts-are-awesome-part-02 {
	text-decoration: overline;
}
.fonts-are-awesome-part-03 {
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
<div class="fonts-are-awesome-part-03">
	Shorthand example 03.
</div>`;
const cb34 = `.fonts-are-awesome {
	font: 14px 'Roboto', sans-serif;
}
.fonts-are-awesome-part-02 {
	font: italic bold 14px 'Roboto', sans-serif;
}
.fonts-are-awesome-part-03 {
	font: italic small-caps bold 14px/18px 'Roboto', sans-serif;
}`;
