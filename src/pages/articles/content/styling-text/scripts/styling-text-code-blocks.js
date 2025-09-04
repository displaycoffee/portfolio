/* Code block snippets */
export const codeBlocks = [
	`font-family: family-name, generic-family;`,
	`<div class="fonts-are-awesome">
		We're using font families! Woohoo!
	</div>`,
	`.fonts-are-awesome {
		font-family: 'Roboto', Tahoma, Calibri, Arial, sans-serif;
	}`,
	`font-size: value;`,
	`<div class="fonts-are-awesome">
		Here we have some font that's set to 0.85em. With a body at a font size of 100%, this is about 14 pixels.
		<div class="child">
			Here is a child element. Look how it's smaller, even though the value is 0.85em again.
		</div>
	</div>
	<div class="fonts-are-awesome-part-02">
		This text, on the other hand, is set to 20px in font size.
		<div class="child">
			And its child is 20px as well regardless of the parent elements.
		</div>
	</div>`,
	`.fonts-are-awesome, .fonts-are-awesome > .child {
		font-size: 0.85em;
	}
	.fonts-are-awesome-part-02, .fonts-are-awesome-part-02 > .child {
		font-size: 20px;
	}`,
	`line-height: value;`,
	`<body>
		<div class="fonts-are-awesome">
			This is a long paragraph to show you how line-height looks. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
		</div>
	</body>`,
	`body {
		font-size: 100%; /* Base font-size should be roughly 16px */
		line-height: 1.5em;
	}`,
	`<body>
		<div class="fonts-are-awesome">
			This is a long paragraph to show you how line-height looks. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
			<div class="fonts-are-awesome-part-02">
				This is a long paragraph to show you how line-height looks.
			</div>  
		</div>
	</body>`,
	`body {
		font-size: 100%; /* Base font-size should be roughly 16px */
		line-height: 1.5em;
	}
	.fonts-are-awesome-part-02 {
		font-size: 30px;
	}`,
	`<body>
		<div class="fonts-are-awesome">
			This is a long paragraph to show you how line-height looks. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
			<div class="fonts-are-awesome-part-02">
				This is a long paragraph to show you how line-height looks.
			</div>  
		</div>
	</body>`,
	`body {
		font-size: 100%; /* Base font-size should be roughly 16px */
		line-height: 1.5;
	}
	.fonts-are-awesome-part-02 {
		font-size: 30px;
	}`,
	`font-weight: value;`,
	`<div class="fonts-are-awesome">
		Light text (100 weight).
	</div>
	<div class="fonts-are-awesome-part-02">
		Normal text (400 weight).
	</div>
	<div class="fonts-are-awesome-part-03">
		Bold text (900 weight).
	</div>`,
	`.fonts-are-awesome {
		font-weight: 100;
	}
	.fonts-are-awesome-part-02 {
		font-weight: 400;
	}
	.fonts-are-awesome-part-03 {
		font-weight: 900;
	}`,
	`font-style: value;`,
	`<div class="fonts-are-awesome">
		This is font styled italic.
	</div>
	<div class="fonts-are-awesome-part-02">
		This is not!
	</div>`,
	`.fonts-are-awesome {
		font-style: italic;
	}
	.fonts-are-awesome-part-02 {
		font-style: normal;
	}`,
	`font-variant: value;`,
	`<div class="fonts-are-awesome">
		This is an EXAMPLE testing casing with small-caps.
	</div>`,
	`.fonts-are-awesome {
		font-variant: small-caps;
	}`,
	`text-transform: value;`,
	`<div class="fonts-are-awesome">
		this TEXT is capitalized.
	</div>
	<div class="fonts-are-awesome-part-02">
		THIS TEXT IS NOW ALL LOWERCASE. MAGIC!
	</div>
	<div class="fonts-are-awesome-part-03">
		this text is now all uppercase. more magic!
	</div>`,
	`.fonts-are-awesome {
		text-transform: capitalize;
	}
	.fonts-are-awesome-part-02 {
		text-transform: lowercase;
	}
	.fonts-are-awesome-part-03 {
		text-transform: uppercase;
	}`,
	`text-decoration: value;`,
	`<div class="fonts-are-awesome">
		Text with a line-through.
	</div>
	<div class="fonts-are-awesome-part-02">
		Text with a line above it.
	</div>
	<div class="fonts-are-awesome-part-03">
		Text with a line below it.
	</div>`,
	`.fonts-are-awesome {
		text-decoration: line-through;
	}
	.fonts-are-awesome-part-02 {
		text-decoration: overline;
	}
	.fonts-are-awesome-part-03 {
		text-decoration: underline;
	}`,
	`letter-spacing: value;`,
	`<div class="fonts-are-awesome">
		Text with adjusted letter spacing.
	</div>
	<div class="fonts-are-awesome-part-02">
		Text with negative letter spacing.
	</div>`,
	`.fonts-are-awesome {
		letter-spacing: 5px;
	}
	.fonts-are-awesome-part-02 {
		letter-spacing: -3px;
	}`,
	`font: font-style font-variant font-weight font-size/line-height font-family;`,
	`<div class="fonts-are-awesome">
		Shorthand example 01.
	</div>
	<div class="fonts-are-awesome-part-02">
		Shorthand example 02.
	</div>
	<div class="fonts-are-awesome-part-03">
		Shorthand example 03.
	</div>`,
	`.fonts-are-awesome {
		font: 14px 'Roboto', sans-serif;
	}
	.fonts-are-awesome-part-02 {
		font: italic bold 14px 'Roboto', sans-serif;
	}
	.fonts-are-awesome-part-03 {
		font: italic small-caps bold 14px/18px 'Roboto', sans-serif;
	}`,
];
