/* Scripts */
import { codeBlocks } from './scripts/structuring-code-code-blocks';

/* Components */
import { ArticlesToC, ArticlesSection } from '../../Articles';
import { CodeBlock, CodeInline, LinkExternal, List } from '../../../../components/blocks/Blocks';

export const StructuringCode = () => {
	const sections = ['Introduction', 'Classes versus IDs', "Don't Be Generic", 'Formatting CSS', 'Tabbing', 'Comments', 'Choosing Fonts', 'Closing'];

	return (
		<>
			<ArticlesToC sections={sections} offset={50} />

			<ArticlesSection header={sections[0]}>
				<p>
					So, what is this tutorial for and what am I going to attempt to teach you all? If you're looking to create templates or other
					snippets for people to copy and paste on their site, but are not sure where to begin, this guide might be a good read. To be
					specific, I'm not going to go over what you <em>should</em> be making and how you <em>should</em> be visually designing your
					templates, but rather good coding practices and how to structure your code so it's easier for people to understand.
				</p>
				<p>
					When I say "good coding practices", keep in mind that most of this is my opinion. You don't have to do anything I say, but after
					working with code for years, my tips could be helpful.
				</p>
				<p>
					You may also be wondering why you should even care what your code looks like when you're merely providing it for free. There are
					benefits to providing good code.
				</p>
				<List>
					<li>You're making it easier for people to understand and the masses will love you for it.</li>
					<li>Less people ask you questions in the future about issues that might arise.</li>
					<li>Proper code documentation means people can customize things to their liking.</li>
				</List>
			</ArticlesSection>

			<ArticlesSection header={sections[1]}>
				<p>
					If you're not sure what the difference between the two are, I'm going to break it down with the most basic definition ever. IDs
					are unique while classes are not. Okay, I realize that may not be entirely helpful, so I'll explain in a bit more detail.
				</p>
				<p>
					Think of an ID as a really important element on a page. It should only appear once on your page; it should not be repeated.
					Imagine yourself as an element. You have a name which is your ID. If I were code, I might look like this:
				</p>
				<CodeBlock header={'HTML'}>{codeBlocks[0]}</CodeBlock>
				<p>
					Typically, there should only ever be one of me in one place at a time (unless we enter the world of science-fiction). To add, a
					single ID may only be present on an element. Meaning, you can't do the following:
				</p>
				<CodeBlock header={'HTML'}>{codeBlocks[1]}</CodeBlock>
				<p>In the past, I've spent time debugging my own code wondering why something wasn't working only to realize I had two IDs.</p>
				<p>
					Classes, on the other hand, are generic. They can be used any number of times and you can have multiple classes on an element.
					They should be used when similar styles apply to multiple elements. Using the example I provided earlier, imagine there's two
					unique elements on the page: <CodeInline>displaycoffee</CodeInline> and <CodeInline>displaycoffees-friend</CodeInline>. We're very
					different beings, but we might have similar characteristics.
				</p>
				<CodeBlock header={'HTML'}>{codeBlocks[2]}</CodeBlock>
				<p>
					At this point you might be asking, "Why does this all matter? I've used multiple IDs per page and my styles were fine!" It's true
					that CSS couldn't care less about any of this. Styles will still apply even if you have IDs repeated multiple times throughout a
					page, but there are situations when using the same ID repeatedly doesn't work. This is mostly in the case of JavaScript
					functionality, though it applies to HTML as well. You might want to design a template with "jump/anchor links" where clicking on
					link brings you to another spot on the page. This requires the use of an ID, but if you have code like this:
				</p>
				<CodeBlock header={'HTML'}>{codeBlocks[3]}</CodeBlock>
				<p>You're only ever going to be able to jump to one of those elements.</p>
				<p>
					Another reason why you should avoid using IDs more than once is because, well, it's good practice and one of the most basic and
					beginner "rules" of coding.
				</p>
			</ArticlesSection>

			<ArticlesSection header={sections[2]}>
				<p>
					Now that we've talked about IDs and classes, forgoing IDs in your template codes might not be a bad idea. You avoid any potential
					naming conflicts. <strong>For example:</strong> a person might be using the same ID on their website that you're using in your
					template. If you're going to go with classes, that's awesome, but there are still things to consider. It's difficult to know what
					classes everyone under the sun is going to be using, but try to at least create class names that are specific to your snippets.
				</p>
				<p>
					Using classes like <CodeInline>header</CodeInline>, <CodeInline>title</CodeInline>, <CodeInline>name</CodeInline>, etc. are all
					kind of risky because they are so generic. People may already be using these classes and as such, styles from one set of rules can
					clash with another set. CSS = Clashing Styles Suck. Perhaps make your classes relate to the snippets you're building. This can be
					done by adding a prefix. If I'm writing a template that's themed on "marshmallows", I might want to use classes such as{' '}
					<CodeInline>marshmallow-header</CodeInline>, <CodeInline>marshmallow-title</CodeInline>, and{' '}
					<CodeInline>marshmallow-name</CodeInline>.
				</p>
			</ArticlesSection>

			<ArticlesSection header={sections[3]}>
				<p>
					I'm going to try and keep this as simple as possible, though I do have a tendency to ramble on passionately about code. A typical
					best practice is to put all your CSS in an external stylesheet, minify those styles, and then link to that stylesheet. However,
					with code you're building for people, this is not always practical as people want to be able to copy and paste, possibly alter the
					code, then be done. You might end up with something like this:
				</p>
				<CodeBlock header={'HTML'}>{codeBlocks[4]}</CodeBlock>
				<p>
					However, you can still give people the option to place styles in an external stylesheet. Placing the styles in the external
					stylesheet means people are not repeating the same CSS over and over again if they're using your template more than once per page.
					You could do something like this:
				</p>
				<CodeBlock header={'CSS'}>{codeBlocks[5]}</CodeBlock>
				<CodeBlock header={'HTML'}>{codeBlocks[6]}</CodeBlock>
				<p>
					Placing the CSS in a stylesheet gives people more control too. When the styles are hosted in an external stylesheet, the styles
					are managed by those who built the site. Thus, the template should remain consistent for members who are using the template in
					areas like forum posts. Even better, you don't have to worry about people accidentally deleting styles that may be required for
					your code to be functional.
				</p>
				<p>
					No matter how you choose to add CSS to your posting template, I always recommend avoiding inline styles as it creates clutter and
					is difficult to read, especially when you have elements that use the same styles. <strong>For example:</strong>
				</p>
				<CodeBlock header={'HTML'}>{codeBlocks[7]}</CodeBlock>
				<p>
					<strong>
						<em>versus</em>
					</strong>
				</p>
				<CodeBlock header={'HTML'}>{codeBlocks[8]}</CodeBlock>
				<p>
					The second block is much more readable and manageable. And we can take this formatting even further! Notice how{' '}
					<CodeInline>green-div</CodeInline> and <CodeInline>purple-div</CodeInline> share some similar styles? Group common styles by
					targeting more than one CSS selector separated by a comma. <strong>For example:</strong>
				</p>
				<CodeBlock header={'HTML'}>{codeBlocks[9]}</CodeBlock>
				<p>If someone wants to alter the font, styles are ruled in one place instead of two places.</p>
				<p>
					In relation to the above, group your CSS rules and structure them in a way that makes sense. If <CodeInline>green-div</CodeInline>{' '}
					and <CodeInline>purple-div</CodeInline> are close together on the same page and are meant to style content, keep them together. In
					other words, if you have a bunch of styles, don't do this:
				</p>
				<CodeBlock header={'CSS'}>{codeBlocks[10]}</CodeBlock>
				<p>
					There's one more thing I want to mention on the topic of formatting. Write CSS so it can be read, even by someone who is not
					coding savvy. That might be difficult to imagine how to do, but by following the pointers I mentioned above, you'll be off to a
					good start. I've encountered people who say they write CSS a certain way to differentiate their code between everyone else's code.
					I have three words to say about this.
				</p>
				<p>
					<em>It doesn't matter.</em>
				</p>
				<p>
					In the end, if I need to read your CSS, I can copy the code and put it in one of the many CSS Beautifiers found around the
					internet (or use <LinkExternal href="//code.visualstudio.com">VS Code</LinkExternal> formatters). Take for example the following:
				</p>
				<CodeBlock header={'CSS'}>{codeBlocks[11]}</CodeBlock>
				<p>
					Yikes, right? I'm just going to take that and paste it into{' '}
					<LinkExternal href="//codebeautify.org/css-beautify-minify">CSS Beautifier</LinkExternal> and end up with the following:
				</p>
				<CodeBlock header={'CSS'}>{codeBlocks[12]}</CodeBlock>
			</ArticlesSection>

			<ArticlesSection header={sections[4]}>
				<p>
					Now that I've gone over how to improve your CSS through formatting, you better believe I have something to say about formatting
					HTML. Keeping your HTML clean is done through a process called "tabbing" which means indenting each new block of code so you can
					easily see where one element ends and begins. This indentation can be done with a tab character or a number of spaces; I
					personally use tabs as I detest seeing tons of spaces in VS Code. But, to each their own.
				</p>
				<p>As an example, here is unstructured HTML:</p>
				<CodeBlock header={'HTML'}>{codeBlocks[13]}</CodeBlock>
				<p>
					It's difficult to tell where one element ends and another begins. If I wanted to add a new <CodeInline>p</CodeInline> tag inside
					the <CodeInline>polka-dot-trex div</CodeInline>, without formatting, it takes longer to scan the code for correct placement. If we
					tab it out, we're left with nice, readable code where new line or element insertion is easy.
				</p>
				<CodeBlock header={'HTML'}>{codeBlocks[14]}</CodeBlock>
			</ArticlesSection>

			<ArticlesSection header={sections[5]}>
				<p>
					I'm not going to tell you to comment <strong>ALL THE THINGS</strong> as that can get tiring really fast. However, where you think
					someone might want to alter a color or a font face, it's' helpful to point out where to change that using comments.
				</p>
				<CodeBlock header={'CSS'}>{codeBlocks[15]}</CodeBlock>
				<p>The above code illustrates adding comments to CSS, but comments are available in pretty much all coding languages.</p>
				<CodeBlock header={'CSS'}>{codeBlocks[16]}</CodeBlock>
				<CodeBlock header={'HTML'}>{codeBlocks[17]}</CodeBlock>
				<p>
					I'm not going to get into commenting for all the other languages, but know that comments are your friends and they are there for
					you to provide directions. Keep in mind that when using comments, they must be closed properly. So{' '}
					<CodeInline>{`/* `}</CodeInline> should always be closed with <CodeInline>{` */`}</CodeInline>. Otherwise, not closing out
					comments may result in entire blocks of HTML or styles not rendering as they are nested inside a comment.
				</p>
			</ArticlesSection>

			<ArticlesSection header={sections[6]}>
				<p>
					I want to preface this section by saying, I love being able to use hosted font families. Back when I began coding, that was not an
					option and I was left to use standard, browser provided fonts. And even then, I had to determine what percentage of that font
					worked on Mac and what percentage worked on Windows. These days, adding different fonts is amazingly easy thanks in part to things
					like <LinkExternal href="//fonts.google.com">Google Fonts</LinkExternal>. New font styles don't end with Google. We can get even
					more decorative by uploading fonts to our web servers that are permitted for web usage and turning them into{' '}
					<LinkExternal href="//www.fontsquirrel.com/tools/webfont-generator">font kits</LinkExternal>.
				</p>
				<p>
					All of that said, I completely understand the temptation to add Google Fonts to your templates. I'm not saying don't do it, but
					what I am going to say is, be cautious about it. Inform people that they need to load a specific font to replicate the look of a
					template and keep your font selections to a minimum. Let's say you want to add two fonts to your template: "Open Sans" and
					"Roboto". The load time for these two fonts is not bad in the slightest, but when you start selecting different font weights (such
					as bold and italic) or even adding more fonts, which may increase the load time of a page.
				</p>
				<p>
					Make people aware of fonts being added because of the template; don't sneak them into your code. A person might see you're using
					"Open Sans" in the template and may already be loading that font on their site. Linking to it a second time would be useless and
					an extra unnecessary resource. Alternatively, provide font family fallbacks in your CSS so that if a person doesn't want to use
					Google Fonts, they don't need to. Here's an example:
				</p>
				<CodeBlock header={'CSS'}>{codeBlocks[18]}</CodeBlock>
				<p>
					The above template will use "Open Sans" if that font is available. If not, the browser will try "Tahoma", then "Arial", and then
					sans-serif, which is the generic font provided by the browser.
				</p>
			</ArticlesSection>

			<ArticlesSection header={sections[7]}>
				<p>You've reached the end of this tutorial! Congrats! If anyone has any comments or questions about any of the above, let me know!</p>
			</ArticlesSection>
		</>
	);
};
