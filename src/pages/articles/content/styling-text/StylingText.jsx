/* Local scripts */
import { codeBlocks } from './scripts/styling-text-code-blocks';

/* Local components */
import { ArticlesToc, ArticlesSection } from '../../Articles';
import { CodeBlock, CodeInline, Output } from '../../../../components/blocks/Blocks';

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
					This documentation is meant to teach a person how to style text with CSS! I won't go into HTML elements commonly used with text at
					this stage. Throughout this article, I will mention that there are default values for CSS properties. I'm adding those definitions
					here in the beginning as the overall behavior should be treated the same way across CSS properties. Specifically, here are the
					values I am referring to:
				</p>
				<dl className="definition-list">
					<div className="definition-list-item">
						<dt>inherit</dt>
						<dd>The value is inherited by the parent element.</dd>
					</div>
					<div className="definition-list-item">
						<dt>initial</dt>
						<dd>The default is determined by the browser.</dd>
					</div>
					<div className="definition-list-item">
						<dt>normal</dt>
						<dd>Pretty much the same as initial.</dd>
					</div>
					<div className="definition-list-item">
						<dt>none</dt>
						<dd>Resets the value back to the default.</dd>
					</div>
				</dl>
				<p>
					<strong>Please note:</strong> Not all CSS properties share the above values, but they are very common.
				</p>
			</ArticlesSection>

			<ArticlesSection header={sections[1]}>
				<CodeBlock header={'CSS'}>{codeBlocks[0]}</CodeBlock>
				<h5>Values</h5>
				<dl className="definition-list">
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
					Before getting into the <CodeInline>font-family</CodeInline> property, it may be important to know the difference between the two
					major generic fonts families that we can use: <CodeInline>sans-serif</CodeInline> and <CodeInline>serif</CodeInline>.
				</p>
				<dl className="definition-list">
					<div className="definition-list-item">
						<dt>sans-serif</dt>
						<dd>
							<strong>Does not</strong> have hanging strokes or lines at the ends of characters (e.g. Arial, Vedana, Calibri, etc.).
						</dd>
					</div>
					<div className="definition-list-item">
						<dt>serif</dt>
						<dd>
							<strong>Does</strong> have hanging strokes or lines at the ends of characters (e.g. Times New Roman, Garamond, Georgia,
							etc.).
						</dd>
					</div>
				</dl>
				<p>There are some other (less used) generic families that you may need on occasion as a fallback:</p>
				<dl className="definition-list">
					<div className="definition-list-item">
						<dt>cursive</dt>
						<dd>
							Script type characters that are sometimes "joined" or brush-like in display. Might also be referred to as "script" (e.g.
							Corsive, Zapfino, etc.).
						</dd>
					</div>
					<div className="definition-list-item">
						<dt>fantasy</dt>
						<dd>Decorative characters (e.g. Papyrus, Copperplate, Comic Sans, etc.).</dd>
					</div>
					<div className="definition-list-item">
						<dt>monospace</dt>
						<dd>
							Characters are the same size and appear as if from a typewriter (e.g. Courier New, Lucida Sans Typewriter, Monaco, etc.).
						</dd>
					</div>
				</dl>
				<p>
					The actual family that renders when one of these generic types is used depends on the browser and/or operating system. A font like
					"Arial" can be widely found on both Windows and Mac, while something like Helvetica is used more on Mac rather than Windows.
				</p>
				<p>
					Now that we've gone through generic font families, the <CodeInline>font-family</CodeInline> property is used to declare a set of
					fonts that you want to style your text with. You can put as many fonts as you want in your family, but the browser will render the
					first font that it recognizes. The last font in the family will usually be either <CodeInline>sans-serif</CodeInline> or{' '}
					<CodeInline>serif</CodeInline> meaning if all fonts in the family fail to render, it will fall back to the default style.
				</p>
				<CodeBlock header={'HTML'}>{codeBlocks[1]}</CodeBlock>
				<CodeBlock header={'CSS'}>{codeBlocks[2]}</CodeBlock>
				<Output className="output-articles output-font-families" code={codeBlocks[1]} />
				<p>
					The first font listed is "Roboto" from{' '}
					<a href="//fonts.google.com/specimen/Roboto" target="_blank" rel="noreferrer">
						Google Fonts
					</a>
					. If that is not available for some reason, as long as my computer knows what "Tahoma" is, it will use that font. Otherwise, it
					falls back to "Calibri" and so on.
				</p>
				<p>
					The above mostly relates to web safe fonts. Google Fonts and{' '}
					<a href="//www.fontsquirrel.com/tools/webfont-generator" target="_blank" rel="noreferrer">
						font-face kits
					</a>{' '}
					are an entirely different thing and I won't get into that here. It's good practice to declare fallbacks for font families, but if
					you're using Google Fonts or hosting the font on your own website, you probably don't have to worry about this.
				</p>
				<p>
					You can also try out{' '}
					<a href="//cssfontstack.com" target="_blank" rel="noreferrer">
						CSS Font Stack
					</a>
					, which will give you fonts that are related to each other and also the percentage of how common that font is on Windows versus
					Mac.
				</p>
			</ArticlesSection>

			<ArticlesSection header={sections[2]}>
				<CodeBlock header={'CSS'}>{codeBlocks[3]}</CodeBlock>
				<h5>Values</h5>
				<dl className="definition-list">
					<div className="definition-list-item">
						<dt>size</dt>
						<dd>
							A value such as xx-small, x-small, smaller, small, medium, large, larger, x-large, xx-large. Medium is the default value.
						</dd>
					</div>
					<div className="definition-list-item">
						<dt>unit</dt>
						<dd>A defined value measured with %, px, em, pt, cm, etc.</dd>
					</div>
				</dl>
				<p>
					There's something we should know about before using the <CodeInline>font-size</CodeInline> property and that is units of
					measurement. There are quite a few, but let's focus on three: %, px and em.
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
							A scalable unit equal to the current font size. I usually declare <CodeInline>font-size: 100%</CodeInline> on the{' '}
							<CodeInline>body</CodeInline> element. If I set another size on a child element to <CodeInline>1.0em</CodeInline>, this
							makes that font equal to <CodeInline>16px</CodeInline>. Whereas if I set the child element size to{' '}
							<CodeInline>0.85em</CodeInline>, it's roughly equal to <CodeInline>14px</CodeInline>. This gets a little tricky when you
							are changing sizes within child elements. If I had another child element within my element that had{' '}
							<CodeInline>font-size: 0.85em</CodeInline>, my new child element will use <CodeInline>0.85em</CodeInline> to calculate any
							size changes. In any case, <CodeInline>em</CodeInline> is pretty useful for designs that need to be responsive or
							mobile-friendly.
						</dd>
					</div>
					<div className="definition-list-item">
						<dt>px (Pixels)</dt>
						<dd>
							Fixed units of measurements that are not scalable. Using our previous example, if we set the <CodeInline>body</CodeInline>{' '}
							to <CodeInline>font-size: 100%</CodeInline> then set a child element to <CodeInline>14px</CodeInline> or{' '}
							<CodeInline>20px</CodeInline>, the percentage doesn't have any play in the rendered size. The pixel value will always be
							what you set it as.
						</dd>
					</div>
				</dl>
				<CodeBlock header={'HTML'}>{codeBlocks[4]}</CodeBlock>
				<CodeBlock header={'CSS'}>{codeBlocks[5]}</CodeBlock>
				<Output className="output-articles output-font-size" code={codeBlocks[4]} />
			</ArticlesSection>

			<ArticlesSection header={sections[3]}>
				<CodeBlock header={'CSS'}>{codeBlocks[6]}</CodeBlock>
				<h5>Values</h5>
				<dl className="definition-list">
					<div className="definition-list-item">
						<dt>length</dt>
						<dd>A defined value measured with %, px, em, pt, cm, etc. It can also be unitless.</dd>
					</div>
				</dl>
				<p>
					I'd like to discuss the <CodeInline>line-height</CodeInline> property next as I always felt this goes hand-in-hand with font
					sizes. <CodeInline>line-height</CodeInline> is a property that defines the amount of spacing in-between lines of text. I often see
					issues where people can't figure out why one line of text is layering on top of another. More often than not, this is because the
					line height is set to a size that's smaller than the font size. In general, I recommend having a line height that's at least two
					pixels bigger than your font size. If you're using <CodeInline>16px</CodeInline> font, try{' '}
					<CodeInline>line-height: 18px</CodeInline>.
				</p>
				<p>
					The calculated value of line height is determined by the font size and line height that you do or do not specify. If you do not
					specify anything, the value can vary depending on the browser. Often I give the <CodeInline>body</CodeInline> an overall line
					height value then adjust as needed for other elements. <strong>For example:</strong> <CodeInline>line-height: 100%</CodeInline> on
					the <CodeInline>body</CodeInline> element when <CodeInline>font-size: 16px</CodeInline> is set would result in{' '}
					<CodeInline>line-height: 16px</CodeInline>. If I give <CodeInline>body</CodeInline> <CodeInline>line-height: 150%</CodeInline>,
					then the line height is about <CodeInline>24px</CodeInline> and with a <CodeInline>body</CodeInline> of{' '}
					<CodeInline>line-height: 200%</CodeInline>, I essentially have double spaces.
				</p>
				<p>
					Like <CodeInline>font-size</CodeInline>, <CodeInline>line-height</CodeInline> can be given the same units of measurement (%, px
					and em). Line height can also be added without a unit though and it makes a difference. Without a unit, child elements take a
					number value rather than the computed value. Any child elements will then calculate line height based on their font size.
					Essentially, this makes less overrides of line height in CSS down the road.
				</p>
				<p>Let's go over some examples.</p>
				<CodeBlock header={'HTML'}>{codeBlocks[7]}</CodeBlock>
				<CodeBlock header={'CSS'}>{codeBlocks[8]}</CodeBlock>
				<Output className="output-articles output-line-height-01" code={codeBlocks[7]} />
				<p>
					If we just add text to the <CodeInline>div</CodeInline>, the calculated line height is <CodeInline>24px</CodeInline>. Now, let's
					add a child element with a different font size that's bigger than the normal text.
				</p>
				<CodeBlock header={'HTML'}>{codeBlocks[9]}</CodeBlock>
				<CodeBlock header={'CSS'}>{codeBlocks[10]}</CodeBlock>
				<Output className="output-articles output-line-height-02" code={codeBlocks[9]} />
				<p>
					The line height for that new <CodeInline>div</CodeInline> is calculated by the parent <CodeInline>em</CodeInline>, which for a{' '}
					<CodeInline>font-size: 30px</CodeInline>, is not very good. Basically, we still have a line height of{' '}
					<CodeInline>24px</CodeInline>, so our <CodeInline>30px</CodeInline> font is starting to look a little cramped. The higher we go,
					the more squished it gets. Vice versa, the lower we go, the further the spacing is. Let's make adjustments.
				</p>
				<CodeBlock header={'HTML'}>{codeBlocks[11]}</CodeBlock>
				<CodeBlock header={'CSS'}>{codeBlocks[12]}</CodeBlock>
				<Output className="output-articles output-line-height-03" code={codeBlocks[11]} />
				<p>
					We still have <CodeInline>line-height: 24px</CodeInline> for any text in the first <CodeInline>div</CodeInline>. However, child
					elements are now calculating their line height value based on the font size rather than a unit determined in the parent. Our child{' '}
					<CodeInline>div</CodeInline> has a calculated line height of <CodeInline>45px</CodeInline> which looks much nicer. Using a
					unitless line height helps amazingly to makesure your child fonts scale correctly and it makes your job easier. If you're going to
					add a global line height somewhere (like on <CodeInline>body</CodeInline> or <CodeInline>html</CodeInline>), in my opinion, use
					unitless values.
				</p>
			</ArticlesSection>

			<ArticlesSection header={sections[4]}>
				<CodeBlock header={'CSS'}>{codeBlocks[13]}</CodeBlock>
				<h5>Values</h5>
				<dl className="definition-list">
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
					After all that confusing math about <CodeInline>font-size</CodeInline> and <CodeInline>line-height</CodeInline>, we're going to
					get decorating text starting with the property <CodeInline>font-weight</CodeInline>. This property determines how bold or light
					your text is going to be.
				</p>
				<p>
					It is important to note that if you're using Google Fonts, certain fonts don't have a bold weight and if you use a value like bold
					or a number it can't interpret, it won't change anything. <strong>For example:</strong> The font "Droid Sans" has two values -
					<CodeInline>400</CodeInline> and <CodeInline>700</CodeInline>. If we choose <CodeInline>100</CodeInline> or{' '}
					<CodeInline>200</CodeInline> for a lighter version of this font, it does nothing. Likewise, if we choose{' '}
					<CodeInline>800</CodeInline> or <CodeInline>900</CodeInline> for a bolder style, there's also no change. Adding a value of{' '}
					<CodeInline>800</CodeInline> or <CodeInline>900</CodeInline> to this font will be the same as <CodeInline>700</CodeInline>. If
					you're looking for a font with a lot of different variations, keep this in mind.
				</p>
				<CodeBlock header={'HTML'}>{codeBlocks[14]}</CodeBlock>
				<CodeBlock header={'CSS'}>{codeBlocks[15]}</CodeBlock>
				<Output className="output-articles output-font-weight" code={codeBlocks[14]} />
			</ArticlesSection>

			<ArticlesSection header={sections[5]}>
				<CodeBlock header={'CSS'}>{codeBlocks[16]}</CodeBlock>
				<h5>Values</h5>
				<dl className="definition-list">
					<div className="definition-list-item">
						<dt>italic</dt>
						<dd>
							Searches for an italic version of the font if one is available. If there is none, it gets set to "oblique". Italic fonts
							are usually cursive or script like in nature.
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
					The <CodeInline>font-style</CodeInline> property has similarities with <CodeInline>font-weight</CodeInline>. Setting a font style
					to italic will slant the font even if there is not an italic version of the font. There is a difference though between using
					italic font style and a font that has an italic variant. Sometimes this is very subtle, but be aware when using font-face kits
					where you do not have an italic version of the font.
				</p>
				<CodeBlock header={'HTML'}>{codeBlocks[17]}</CodeBlock>
				<CodeBlock header={'CSS'}>{codeBlocks[18]}</CodeBlock>
				<Output className="output-articles output-font-style" code={codeBlocks[17]} />
			</ArticlesSection>

			<ArticlesSection header={sections[6]}>
				<CodeBlock header={'CSS'}>{codeBlocks[19]}</CodeBlock>
				<h5>Values</h5>
				<dl className="definition-list">
					<div className="definition-list-item">
						<dt>small-caps</dt>
						<dd>Turns all characters to caps and decreases their size.</dd>
					</div>
				</dl>
				<p>
					There's not much to say about the <CodeInline>font-variant</CodeInline> property. It actually has a lot of values, but the one
					thing you may find useful is <CodeInline>small-caps</CodeInline>. This value will change everything to caps, but makes the rest of
					the text smaller. If you have a letter that is capped already, that letter appears as its normal size. The word "Cat" set to{' '}
					<CodeInline>font-size: 16px</CodeInline> with <CodeInline>small-caps</CodeInline> leaves the "C" at <CodeInline>16px</CodeInline>{' '}
					and the "at" will now be uppercase, but a smaller size.
				</p>
				<CodeBlock header={'HTML'}>{codeBlocks[20]}</CodeBlock>
				<CodeBlock header={'CSS'}>{codeBlocks[21]}</CodeBlock>
				<Output className="output-articles output-font-variant" code={codeBlocks[20]} />
			</ArticlesSection>

			<ArticlesSection header={sections[7]}>
				<CodeBlock header={'CSS'}>{codeBlocks[22]}</CodeBlock>
				<h5>Values</h5>
				<dl className="definition-list">
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
					Transforming text gives us the flexibility to change the formatting of the text without worrying about how a user has input a
					value. I often see alot of forum admins asking their users to register in all caps or lowercase, but this effect can usually be
					achieved using <CodeInline>text-transform</CodeInline>. My thoughts: write text how it should be written. Then, if needed, change
					it with <CodeInline>text-transform</CodeInline>. This saves a lot of trouble down the road if you want to switch styles.
				</p>
				<p>
					One thing to note about the capitalize value is that it will not change subsequent letters that are already caps. If you have the
					word "CAT", it stays "CAT" instead of "Cat". And unfortunately, you can't set a parent element to have a lowercase value and then
					a child to have to have a capitalize value. I've tried; it doesn't work. :(
				</p>
				<CodeBlock header={'HTML'}>{codeBlocks[23]}</CodeBlock>
				<CodeBlock header={'CSS'}>{codeBlocks[24]}</CodeBlock>
				<Output className="output-articles output-text-transform" code={codeBlocks[23]} />
			</ArticlesSection>

			<ArticlesSection header={sections[8]}>
				<CodeBlock header={'CSS'}>{codeBlocks[25]}</CodeBlock>
				<h5>Values</h5>
				<dl className="definition-list">
					<div className="definition-list-item">
						<dt>blink</dt>
						<dd>
							Makes the text blink or flash. Though you can use this property, in a lot of browsers it's disabled. Probably for a good
							reason.
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
					My favorite value out of all <CodeInline>text-decoration</CodeInline> choices above is "none". I state this because I often use
					the value "none" to remove the underline from a link element. The other properties should be used mostly for emphasis and I
					wouldn't recommend using them on the bulk of your text as they can be distracting.
				</p>
				<p>
					A little history about styling words that need to be underlined. There used to be a <CodeInline>u</CodeInline> (underline) tag,
					but in HTML4 this was deprecated. In HTML5, it was brought back and redefined to be semantic, now referred to as the
					"unarticulated annotation tag". If you need to underline text, the preference is to wrap that text in an element and style it by
					using <CodeInline>text-decoration</CodeInline>. If you're underlining something in the middle of a paragraph of text, do make sure
					it won't be mistaken for a link.
				</p>
				<CodeBlock header={'HTML'}>{codeBlocks[26]}</CodeBlock>
				<CodeBlock header={'CSS'}>{codeBlocks[27]}</CodeBlock>
				<Output className="output-articles output-text-decoration" code={codeBlocks[26]} />
			</ArticlesSection>

			<ArticlesSection header={sections[9]}>
				<CodeBlock header={'CSS'}>{codeBlocks[28]}</CodeBlock>
				<h5>Values</h5>
				<dl className="definition-list">
					<div className="definition-list-item">
						<dt>length</dt>
						<dd>A defined value usually measured with %, px, em, pt, cm, etc.</dd>
					</div>
				</dl>
				<p>
					The <CodeInline>letter-spacing</CodeInline> property controls how much space is in-between each character. Positive values spread
					characters out, where negative values bring the letters closer together. (You probably shouldn't use negative values <em>too</em>{' '}
					much. &#128521;)
				</p>
				<CodeBlock header={'HTML'}>{codeBlocks[29]}</CodeBlock>
				<CodeBlock header={'CSS'}>{codeBlocks[30]}</CodeBlock>
				<Output className="output-articles output-letter-spacing" code={codeBlocks[29]} />
			</ArticlesSection>

			<ArticlesSection header={sections[10]}>
				<CodeBlock header={'CSS'}>{codeBlocks[31]}</CodeBlock>
				<h5>Values</h5>
				<p>
					After going through all the above properties, we can combine certain values into one property called <CodeInline>font</CodeInline>
					. This CSS property accepts a string of different values (noted above). It can be useful if you want to declare a bunch of styles
					in one go. This is the only shorthand I don't use that often as I find it easier to override font styles when they're not clumped
					together like this.
				</p>
				<p>
					If you're using the <CodeInline>font</CodeInline> property, you can leave certain values out and it should still work correctly.
					The two values that are required are <CodeInline>font-size</CodeInline> and <CodeInline>font-family</CodeInline>.
				</p>
				<CodeBlock header={'HTML'}>{codeBlocks[32]}</CodeBlock>
				<CodeBlock header={'CSS'}>{codeBlocks[33]}</CodeBlock>
				<Output className="output-articles output-font-shorthand" code={codeBlocks[32]} />
			</ArticlesSection>

			<ArticlesSection header={sections[11]}>
				<p>
					I hope you found this tutorial useful! There may be a second part to this that will go over things like text alignment, HTML
					elements that are suited for text, and more (as I think of it). So, go forth my lovers of text and style with the knowledge you've
					been given!
				</p>
			</ArticlesSection>
		</>
	);
};
