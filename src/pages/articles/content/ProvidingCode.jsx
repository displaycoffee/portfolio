/* Local components */
import { ArticlesToc, ArticlesSection } from '../Articles';
import { CodeBlock } from '../../../components/blocks/Blocks';

export const ProvidingCode = () => {
	const sections = ['Classes versus IDs', "Don't Be Generic", 'Formatting CSS', 'Tabbing', 'Commenting', 'Choosing Fonts', 'Closing'];

	return (
		<>
			<ArticlesSection header={'Introduction'} scrollTop={false}>
				<p>
					Let me start off this tutorial by saying I had no idea what to use as a title, so you get the most generic, not-witty title ever!
					So, what is this tutorial for and what am I going to attempt to teach you all? If you're looking to create posting templates,
					mini-profiles, or other code for people to copy and paste on their forum, but are not sure where to start or what to do, this
					guide might be a good read over. To be specific, I'm not going to go over what you should be making and how you should be visually
					designing your templates, but rather good coding practices and how to structure your code so it's easier for non-technical people
					to understand.
				</p>
				<p>
					And when I say "good coding practices", keep in mind that most of this is my opinion. You don't have to do anything I say, but
					after working with code for numerous amounts of years, some of my tips could be helpful. (I'd like to also note that this is a
					general overview for submitting any code that some one else might use.)
				</p>
				<p>
					You may also be wondering why you should even care what your code looks like when you submit if for other people. I mean, it's
					free right? There are benefits to providing good code.
				</p>
				<ul>
					<li>You're making it easier for people to use your code and the masses will love you for it. (Or they should anyway!)</li>
					<li>Less people asking you questions in the future about issues that might arise.</li>
					<li>
						Proper code documentation means people can customize things to their liking (that is, if you allow for customization on your
						templates).
					</li>
				</ul>
				<p>
					If I've grabbed your attention, feel free to read on! And as always, if you have more questions afterwards, I'm happy to answer.
				</p>
			</ArticlesSection>

			<ArticlesToc sections={sections} offset={50} />

			<ArticlesSection header={sections[0]}>
				<p>
					If you're not sure what the difference between the two are, I'm going to break it down with the most basic definition ever. IDs
					are unique while classes are not. Okay, I realize that may not be entirely helpful, so I'll explain in a bit more detail.
				</p>
				<p>
					Think of an ID as a really important element on a page. It should only appear once on your page; it should not be repeated.
					Imagine yourself as an element. You have a name which is your ID. If I were code, I might look something like this:
				</p>
				<CodeBlock header={'HTML'}>{cb1}</CodeBlock>
				<p>
					Typically, there should only ever be one of me in one place at a time (unless I have a cloning machine). To add, one ID may only
					appear on an element. Meaning, you can't do the following:
				</p>
				<CodeBlock header={'HTML'}>{cb2}</CodeBlock>
				<p>
					That just fails and doesn't work at all. In the past, I've spent time debugging my own code wondering why something wasn't working
					only to realize I had two IDs.
				</p>
				<p>
					Classes, on the other hand, are more generic. They can be used any number of times and you can have multiple classes on an
					element. They should be used when similar styles apply to multiple elements. Using the example I provided earlier, say there's two
					unique elements on the page: "display-coffee" and "display-coffees-friend". We're very different beings, but we might have similar
					characteristics.
				</p>
				<CodeBlock header={'HTML'}>{cb3}</CodeBlock>
				<p>
					At this point you might be asking, "Why does this all matter? I've used multiple IDs per page and my styles were fine!" It's true
					that CSS couldn't care less about any of this. Styles will still apply even if you have IDs repeated multiple times throughout a
					page, but there are situations when using the same ID repeatedly doesn't work. This is mostly in the case of JavaScript
					functionality, though it applies to HTML as well. You might want to design a template with "jump/anchor links" where clicking on
					link brings you to another spot on the page. This requires the use of an ID, but if you have code like this:
				</p>
				<CodeBlock header={'HTML'}>{cb4}</CodeBlock>
				<p>You're only ever going to be able to jump to one of those elements or the others.</p>
				<p>
					Another reason why you should avoid using IDs more than once is because, well, it's good practice and one of the most basic and
					beginner "rules" of coding.
				</p>
			</ArticlesSection>

			<ArticlesSection header={sections[1]}>
				<p>
					Now that we've talked about IDs and classes, forgoing IDs in your template codes might not be a bad idea. You avoid any
					potentially naming conflicts where another person might be using the same ID on their website theme that you're using in your
					template. If you're going to go with classes, that's awesome, but there are things to consider. It's difficult to know what
					classes everyone under the sun is going to be using, but try to at least create class names that are specific to your template.
				</p>
				<p>
					Using classes like "header", "title", "name", etc etc are all kind of risky because they are so generic. People may already be
					using these classes and as such, style rules from one group of CSS can clash with another. Instead, perhaps make your classes
					relate to the code you're providing. This can be done simply by adding a prefix. If I'm writing a template that's based around the
					concept of marshmallows, I might want to use classes such as "msh-mllw-header", "msh-mllw-title", and "msh-mllw-name".
				</p>
			</ArticlesSection>

			<ArticlesSection header={sections[2]}>
				<p>
					An entire book could be written on formatting CSS, so I'm going to try and keep this as simple as possible, though I do have a
					tendency to ramble on passionately about code. A typical best practice is to put all your CSS in an external stylesheet and link
					to that stylesheet. However, I do realize that with code you're submitting for other people, this is not always practical as
					people want to be able to copy and paste code, then be done with it. Ideally, you'd end up with something like this:
				</p>
				<CodeBlock header={'HTML'}>{cb5}</CodeBlock>
				<p>
					However, you can still give people the option to place styles in an external stylesheet or to use the full code. Placing the
					styles in the external sheet means people are not repeating the same CSS over and over again if they're using your posting
					template more than once per page. You could do something like this:
				</p>
				<CodeBlock header={'CSS'}>{cb6}</CodeBlock>
				<CodeBlock header={'HTML'}>{cb7}</CodeBlock>
				<p>
					Placing the CSS in a stylesheet gives people more control too. When the styles are hosted in an external stylesheet, that should
					only ever be managed by the site's admin. Thus, the template should remain consistent for members who are using the template
					multiple times. Even better, you don't have to worry about members accidentally deleting styles that may be required for your code
					to be functional.
				</p>
				<p>
					No matter how you choose to add CSS to your posting template, I always recommend avoiding inline styles as it just creates clutter
					and is less easy to read, especially when you have elements that use the same styles. For example:
				</p>
				<CodeBlock header={'HTML'}>{cb8}</CodeBlock>
				<p>
					<strong>
						<em>versus</em>
					</strong>
				</p>
				<CodeBlock header={'HTML'}>{cb9}</CodeBlock>
				<p>
					The second one is much more readable and manageable. And we can take this formatting even further! Notice how "green-div" and
					"purple-div" share some similar styles? Group common styles by targeting more than one CSS selector separated by a comma. For
					example:
				</p>
				<CodeBlock header={'HTML'}>{cb10}</CodeBlock>
				<p>If some one wants to alter the font style, it's only in one place they need to change it for both divs, instead of two places.</p>
				<p>
					In relation to the above, group your CSS rules and structure them in a way that makes sense. If "green-div" and "purple-div" are
					close together on the same page and are meant to style content, keep them together. In other words, if you have a bunch of styles,
					don't do this:
				</p>
				<CodeBlock header={'CSS'}>{cb11}</CodeBlock>
				<p>
					There's one more thing I want to mention on the topic of formatting your CSS. Write CSS so it can be read even by some one who is
					not coding savvy. That might be difficult to imagine how to do, but by following some of the pointers I mentioned above, you'll be
					off to a good start. I've seen people who say that they write CSS a certain way to differentiate their code between everyone
					else's code. I have three words to say about this.
				</p>
				<p>
					<em>It doesn't matter.</em>
				</p>
				<p>
					In the end, if I need to read your CSS and pick out some detail, I can copy the code and put it in one of the many CSS Beautifiers
					found around the internet. Take for example the following formatted CSS:
				</p>
				<CodeBlock header={'CSS'}>{cb12}</CodeBlock>
				<p>
					Yikes, right? So I'm just going to take that and paste it into{' '}
					<a href="//codebeautify.org/css-beautify-minify" target="_blank" rel="noreferrer">
						CSS Beautifier
					</a>{' '}
					and end up with the following:
				</p>
				<CodeBlock header={'CSS'}>{cb13}</CodeBlock>
				<p>All clean!</p>
			</ArticlesSection>

			<ArticlesSection header={sections[3]}>
				<p>
					Now that I've gone over how to improve your CSS through formatting, you can be I have something to say about formatting HTML.
					Keeping your HTML clean is done through a process called "tabbing" which means indenting each new block of code so you can easily
					see where one element ends and begins. This indentation can be done with a tab character or a number of spaces; I personally use
					the tab key. As an example, here is unstructured HTML:
				</p>
				<CodeBlock header={'HTML'}>{cb14}</CodeBlock>
				<p>
					It's difficult to tell where one element ends and another begins. If I wanted to add a new paragraph tag inside the
					"polka-dot-trex" div, without formatted code, it takes longer to scan the code for correct placement. But, if we tab it out, we're
					left with nice, readable code where new line/element insertion is easy.
				</p>
				<CodeBlock header={'HTML'}>{cb15}</CodeBlock>
			</ArticlesSection>

			<ArticlesSection header={sections[4]}>
				<p>
					I'm not going to tell you to comment ALL THE THINGS as that can get tiring really fast. However, where you think some one might
					want to alter a color or a font face, it's' helpful to point out where to change that using comments.
				</p>
				<CodeBlock header={'CSS'}>{cb16}</CodeBlock>
				<p>The above code only shows adding comments to CSS, but comments are available in pretty much all coding languages.</p>
				<CodeBlock header={'CSS'}>{cb17}</CodeBlock>
				<CodeBlock header={'HTML'}>{cb18}</CodeBlock>
				<p>
					I'm not going to get into commenting for JavaScript, php, and all the other languages, but know that comments are your friends and
					they are there for you to use to provide direction. Keep in mind that when using comments, they must be closed properly. So "/* "
					should always be closed with " */" and vice versa, "". Otherwise, not closing out comments may result in entire blocks of HTML and
					styles not rendering as they are nested inside a comment.
				</p>
			</ArticlesSection>

			<ArticlesSection header={sections[5]}>
				<p>
					I'd want to preface this section by saying, I love being able to use hosted font families for websites. Back when I began coding,
					that was not an option and I was left to use standard, browser provided font styles. And even then, I had to determine what
					percentage of that font worked on Mac and what percentage worked on Windows. These days, adding different fonts is amazingly easy
					thanks in part to things like Google Fonts. New font styles don't end with Google either. We can get even more decorative by
					uploading fonts to our web servers that are, of course, legal to use for web and turning them into font kits.
				</p>
				<p>
					All of that being said, I completely understand the temptation to add Google Fonts to your templates. I'm not saying don't do it,
					but what I am going to say is, be cautious about it. Inform people that they need to load a specific font to replicate the look of
					a template and keep your font selections to a minimum. Let's say you want to add two fonts to your template: "Open Sans" and
					"Roboto". The load time for these two fonts is not bad in the slightest, but when you start selecting different font weights (such
					as bold and italic) or even adding more fonts, that increases the load time of a page.
				</p>
				<p>
					Make people aware of fonts being added because of the template; don't sneak them into your code. A person might see you're using
					"Open Sans" in the template and may already be loading that font on their site. Linking to it a second time would be useless and
					an extra unnecessary resource that's loaded. Alternatively, provide font family fallbacks in your CSS so that if a person doesn't
					want to load Google Fonts, they don't need to. Here's an example:
				</p>
				<CodeBlock header={'CSS'}>{cb19}</CodeBlock>
				<p>
					The above template will use "Open Sans" if that font is available. If not, the browser/operating system will try "Tahoma", then
					"Arial", and then sans-serif, which is the generic font provided by the browser/operating system.
				</p>
			</ArticlesSection>

			<ArticlesSection header={sections[6]}>
				<p>
					You've reached the end of this tutorial! Congrats! I have this nagging suspicion there was something else I needed to mention, but
					I've forgotten. If anyone has any comments or questions about any of the above, let me know! Want me to cover another topic here?
					I'd be happy to look into it.
				</p>
			</ArticlesSection>
		</>
	);
};

/* Code blocks */
const cb1 = `<div id="display-coffee">
	This is all the stuff that is unique and special to me.
</div>`;
const cb2 = `<div id="display-coffee dc">
	This is all the stuff that is unique and special to me.
</div>`;
const cb3 = `<div id="display-coffee">
	This is all the stuff that is unique and special to me.
	<div class="eye-color">
		Rainbow Sparkle
	</div>
</div>

<div id="display-coffees-friend">
	This is all the stuff that is unique to display coffee's friend.
	<div class="eye-color">
		Glittering ocean
	</div>
</div>`;
const cb4 = `<h3>Table of Contents</h3>
<a href="#thing-01">Thing 01</a>
<a href="#thing-01">Thing 02</a>

<h3 id="thing-01">Thing 01</h3>
<div>Here's a thing.</div>

<h3 id="thing-01">Thing 02</h3>
<div>Here's another thing.</div>`;
const cb5 = `<style>
	.fancy-pants-div {
		background: #ff00ff;
		color: #fff;
		padding: 10px;
		border: 1px dashed red;
	}
</style>
<div class="fancy-pants-div">Look at dem fancy pants.</div>`;
const cb6 = `.fancy-pants-div {
	background: #ff00ff;
	color: #fff;
	padding: 10px;
	border: 1px dashed red;
}`;
const cb7 = `<div class="fancy-pants-div">Look at dem fancy pants.</div>`;
const cb8 = `<div style="background: green; font-family: arial; color: #fff; padding: 20px;">Here's a green div.</div>
<div style="background: purple; font-family: arial; color: #fff; padding: 10px;">Here's a purple div.</div>`;
const cb9 = `<style>
	.green-div {
		background: green;
		font-family: arial;
		color: #fff;
		padding: 20px;
	}
	.purple-div {
		background: purple;
		font-family: arial;
		color: #fff;
		padding: 10px;
	}
</style>
<div class="green-div">Here's a green div.</div>
<div class="purple-div">Here's a purple div.</div>`;
const cb10 = `<style>
	.green-div, .purple-div {
		font-family: arial;
		color: #fff;  
	}
	.green-div {
		background: green;
		padding: 20px;
	}
	.purple-div {
		background: purple;
		padding: 10px;
	}
</style>
<div class="green-div">Here's a green div.</div>
<div class="purple-div">Here's a purple div.</div>`;
const cb11 = `.green-div {
	background: green;
	padding: 20px;
}
.random-style {
	text-transform: uppercase;
	font-size: 20px;
}
.a-new-style {
	margin: 0 0 20px 0;
}
.green-div, .purple-div {
	font-family: arial;
	color: #fff;  
}
.got-style-yo {
	float: left;
	width: 200px;
	height: 30px;
}
.purple-div {
	background: purple;
	padding: 10px;
}`;
const cb12 = `.green-div, .purple-div {font-family:arial;color:#fff;}
.green-div
{
    background: green;
 padding: 20px; }
.purple-div {


background: purple; padding: 10px;
   }`;
const cb13 = `.green-div, .purple-div {
	font-family: arial;
	color: #fff;
}
.green-div {
	background: green;
	padding: 20px;
}
.purple-div {
	background: purple;
	padding: 10px;
}`;
const cb14 = `<div class="polka-dot-trex">I got some text for you right here.<p>Okay, but be nice!</p><img src="https://placecats.com/millie/300/150" /><div class="glow-in-the-dark-triceratops">Maybe we'll put some new text here.</div>
<div class="dinosaur-broadway-musical"><p>What is this about?</p></div></div>`;
const cb15 = `<div class="polka-dot-trex">
	I got some text for you right here.

	<p>Okay, but be nice!</p>

	<img src="https://placecats.com/millie/300/150" />

	<div class="glow-in-the-dark-triceratops">
		Maybe we'll put some new text here.
	</div>
	
	<div class="dinosaur-broadway-musical">
		<p>What is this about?</p>
	</div>
</div>`;
const cb16 = `.green-div, .purple-div {
	font-family: arial; /* Change the font family here */
	color: #fff; /* Change the font color here */
}
.green-div {
	background: green; /* Green background color. Change to something else. */
	padding: 20px;
}
.purple-div {
	background: purple; /* Purple background color. Change to something else. */
	padding: 10px;
}`;
const cb17 = `/* CSS Comment! */

/* You can make fancy CSS Headers like this.
========================================================================== */`;
const cb18 = `<!-- HTML comment! -->

<!-- Look at this though!
I can span multiple lines. -->`;
const cb19 = `.fonts-are-great {
	font-family: "Open Sans", tahoma, arial, sans-serif;
}`;
