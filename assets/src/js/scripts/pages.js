const thumbnailSize = '200x200';
const distPath = './assets/dist/images/';
const projectsPath = `${distPath}projects/`;
const artPath = `${distPath}art/`;

export const pages = {
	updates: [
		{
			id: 3,
			date: '09.25.23',
			content: 'Updated galleries for "Projects" and "Art". Also changed a few other things.'
		},
		{
			id: 2,
			date: '09.16.23',
			content: 'Still a work in progress.'
		},
		{
			id: 1,
			date: '09.14.23',
			content: 'Created portfolio. Amazing.'
		},
	],
	projects: [
		{ 
			id: 31,
			border: true,
			image:  `${projectsPath}2022-09-14-display-coffee.jpg`,
			thumb: `${projectsPath}2022-09-14-display-coffee-${thumbnailSize}.jpg`,
			name: 'Portfolio',
			date: '09.14.20',
			technologies: 'HTML, CSS, Sass, JavaScript, React',
			content: `The latest version of my portfolio. You're on it.`,
		},
		{ 
			id: 30,
			border: true,
			image:  `${projectsPath}2022-06-25-ff7-for-st-jude.jpg`,
			thumb: `${projectsPath}2022-06-25-ff7-for-st-jude-${thumbnailSize}.jpg`,
			name: 'FF7 for St. Jude',
			date: '12.28.20',
			technologies: 'HTML, CSS, Sass, JavaScript, React, Tiltify API',
			content: `Since December 28, 2020, my husband began a charity Final Fantasy VII speedrun event to support St. Jude. We have done this event twice a year since then. I get to help him out a little and specifically made this page using the Tiltify API to pull in donations, challenges, and rewards for all supporting campaigns. Right now, it's not fully working, but it'll be up and running for the next event.`,
			url: '//ff7forstjude.org'
		},
		{ 
			id: 29,
			border: true,
			image:  `${projectsPath}2019-01-13-khyeras.jpg`,
			thumb: `${projectsPath}2019-01-13-khyeras-${thumbnailSize}.jpg`,
			name: `Khy'eras`,
			date: '01.13.19',
			technologies: 'HTML, CSS, Sass, JavaScript, jQuery, PHP, phpBB',
			content: `This was a lighter theme I made for Khy'eras. You can only see it if registered. It shares the same code base as the dark layout, but basically changes CSS and images.`,
			url: '//khyeras.org'
		},
		{ 
			id: 28,
			border: true,
			image:  `${projectsPath}2017-06-11-khyeras.jpg`,
			thumb: `${projectsPath}2017-06-11-khyeras-${thumbnailSize}.jpg`,
			name: `Khy'eras`,
			date: '06.11.17',
			technologies: 'HTML, CSS, Sass, JavaScript, jQuery, PHP, phpBB',
			content: `Website for my latest RPG, Khy'eras. I'm quite proud of this one, not just for the coding customizations, but for all the lore I put together.`,
			url: '//khyeras.org'
		},
		{ 
			id: 27,
			border: true,
			image:  `${projectsPath}2016-09-12-muses-circle.jpg`,
			thumb: `${projectsPath}2016-09-12-muses-circle-${thumbnailSize}.jpg`,
			name: 'The Muses Circle',
			date: '09.12.16',
			technologies: 'HTML, CSS, Sass, JavaScript, jQuery, PHP, WordPress',
			content: `Second website layout for The Muses Circle. Currently not up, but we hope to bring it back in the future.`
		},
		{ 
			id: 26,
			border: true,
			image:  `${projectsPath}2014-02-22-aleris.jpg`,
			thumb: `${projectsPath}2014-02-22-aleris-${thumbnailSize}.jpg`,
			name: 'Aleris',
			date: '02.22.14',
			technologies: 'HTML, CSS, Sass, JavaScript, jQuery, PHP, phpBB',
			content: `My final website layout for Aleris before I shut it down. This is still one of my favorites and I really loved the foliage drooping over the brick wall.`
		},
		{ 
			id: 25,
			border: true,
			image:  `${projectsPath}2013-12-16-aleris.jpg`,
			thumb: `${projectsPath}2013-12-16-aleris-${thumbnailSize}.jpg`,
			name: 'Aleris',
			date: '12.16.13',
			technologies: 'HTML, CSS, Sass, JavaScript, jQuery, PHP, phpBB',
			content: `This came shortly after the previous layout and was a kind of darker version of the previous mockup. I do like the textured gradient here, but did not end up using it.`
		},
		{ 
			id: 24,
			border: true,
			image:  `${projectsPath}2013-10-10-aleris.jpg`,
			thumb: `${projectsPath}2013-10-10-aleris-${thumbnailSize}.jpg`,
			name: 'Aleris',
			date: '10.10.13',
			technologies: 'HTML, CSS, Sass, JavaScript, jQuery, PHP, phpBB',
			content: `Another layout for Aleris RPG. I don't thinK I used this, though I did like the lightness and textures in it.`
		},
		{ 
			id: 23,
			border: true,
			image:  `${projectsPath}2013-01-01-mattandadria.jpg`,
			thumb: `${projectsPath}2013-01-01-mattandadria-${thumbnailSize}.jpg`,
			name: 'Matt and Adria',
			date: '01.01.13',
			technologies: 'HTML, CSS, Sass',
			content: `Wedding website for myself and my husband. I think this was my fist "single page" website.`,
			url: '//mattandadria.com'
		},
		{ 
			id: 22,
			border: true,
			image:  `${projectsPath}2012-12-01-invalid.jpg`,
			thumb: `${projectsPath}2012-12-01-invalid-${thumbnailSize}.jpg`,
			name: 'Invalid Character Detection',
			date: '12.01.12',
			technologies: 'HTML, CSS, Sass, JavaScript, jQuery',
			content: `This tool was build by myself and a friend, Nathan Pennington a long time ago! The date is not accurate. It was meant to take characters and convert them to HTML safe or Unicode conversions. I still use it to this day here and there, though it could use some love at some point.`,
			url: '//neverend.org/invalid'
		},
		{ 
			id: 21,
			border: true,
			image:  `${projectsPath}2012-07-15-aleris.jpg`,
			thumb: `${projectsPath}2012-07-15-aleris-${thumbnailSize}.jpg`,
			name: 'Aleris',
			date: '07.15.12',
			technologies: 'HTML, CSS, Sass, JavaScript, jQuery, PHP, phpBB',
			content: `Design for Aleris RPG. I don't think I ever used this as there were a few things I wasn't a fan of.`
		},
		{ 
			id: 20,
			border: true,
			image:  `${projectsPath}2012-06-04-carol.jpg`,
			thumb: `${projectsPath}2012-06-04-carol-${thumbnailSize}.jpg`,
			name: 'Nutrition Consulting Services',
			date: '06.04.12',
			technologies: 'HTML, CSS, Sass, JavaScript, jQuery, PHP',
			content: `This one was never fully finished, hence the iStock photo. It was a website for a nutrionist.`
		},
		{ 
			id: 19,
			border: true,
			image:  `${projectsPath}2012-03-23-colorado-home-base.jpg`,
			thumb: `${projectsPath}2012-03-23-colorado-home-base-${thumbnailSize}.jpg`,
			name: 'Colorado Home Base',
			date: '03.23.12',
			technologies: 'HTML, CSS, Sass, JavaScript, jQuery, PHP',
			content: `Website for previous real estate agent, Robin Murphy.`
		},
		{ 
			id: 18,
			border: true,
			image:  `${projectsPath}2011-12-28-muses-circle.jpg`,
			thumb: `${projectsPath}2011-12-28-muses-circle-${thumbnailSize}.jpg`,
			name: 'The Muses Circle',
			date: '12.28.11',
			technologies: 'HTML, CSS, Sass, JavaScript, jQuery, PHP, WordPress',
			content: `Blog website for a friend of mine, who reviews books and movies.`
		},
		{ 
			id: 17,
			border: true,
			image:  `${projectsPath}2011-01-09-aleris.jpg`,
			thumb: `${projectsPath}2011-01-09-aleris-${thumbnailSize}.jpg`,
			name: 'Aleris',
			date: '01.09.11',
			technologies: 'HTML, CSS, Sass, JavaScript, jQuery, PHP, phpBB',
			content: `First website for Aleris RPG.`
		},
		{ 
			id: 16,
			border: true,
			image:  `${projectsPath}2010-08-02-federal-mailing.jpg`,
			thumb: `${projectsPath}2010-08-02-federal-mailing-${thumbnailSize}.jpg`,
			name: 'Federal Mailing',
			date: '08.02.10',
			technologies: 'HTML, CSS, Sass, JavaScript, jQuery, PHP',
			content: `Website for a small, mailing business.`
		},
		{ 
			id: 15,
			border: true,
			image:  `${projectsPath}2009-12-18-matt.jpg`,
			thumb: `${projectsPath}2009-12-18-matt-${thumbnailSize}.jpg`,
			name: 'Matt Murphy Music',
			date: '12.18.09',
			technologies: 'HTML, CSS, JavaScript, jQuery, PHP',
			content: `Second website for my husband's music. At one point, there was a music player for the songs, but it seems to have broken.`,
			url: '//mattmurphymusic.org'
		},
		{ 
			id: 14,
			border: true,
			image:  `${projectsPath}2009-08-14-portfolio.jpg`,
			thumb: `${projectsPath}2009-08-14-portfolio-${thumbnailSize}.jpg`,
			name: 'Portfolio',
			date: '08.14.09',
			technologies: 'HTML, CSS, JavaScript, jQuery, PHP',
			content: `Third portfolio layout. At one point, I think the bright latern in here was animated, because I had big dreams of being able to animate gifs.`
		},
		{ 
			id: 13,
			border: true,
			image:  `${projectsPath}2009-07-10-portfolio.jpg`,
			thumb: `${projectsPath}2009-07-10-portfolio-${thumbnailSize}.jpg`,
			name: 'Portfolio',
			date: '07.10.09',
			technologies: 'HTML, CSS',
			content: `Second portfolio layout. I don't think I actually ever used this, but I was getting into a lot of textures then.`
		},
		{ 
			id: 12,
			border: true,
			image:  `${projectsPath}2009-05-29-portfolio.jpg`,
			thumb: `${projectsPath}2009-05-29-portfolio-${thumbnailSize}.jpg`,
			name: 'Portfolio',
			date: '05.29.09',
			technologies: 'HTML, CSS',
			content: `First portfolio layout.`
		},
		{ 
			id: 11,
			border: true,
			image:  `${projectsPath}2007-04-28-ro-diary.jpg`,
			thumb: `${projectsPath}2007-04-28-ro-diary-${thumbnailSize}.jpg`,
			name: 'RO Diary',
			date: '04.28.07',
			technologies: 'HTML, CSS',
			content: `Last RO Diary layout. I don't think I lasted long on there.`
		},
		{ 
			id: 10,
			border: true,
			image:  `${projectsPath}2007-03-02-neverend.jpg`,
			thumb: `${projectsPath}2007-03-02-neverend-${thumbnailSize}.jpg`,
			name: 'Neverend',
			date: '03.02.07',
			technologies: 'HTML, CSS',
			content: `Website for my Ragnarok Online guild, Neverend.`
		},
		{ 
			id: 9,
			border: true,
			image:  `${projectsPath}2006-11-26-neverend.jpg`,
			thumb: `${projectsPath}2006-11-26-neverend-${thumbnailSize}.jpg`,
			name: 'Neverend',
			date: '11.26.06',
			technologies: 'HTML, CSS',
			content: `Website for my Ragnarok Online guild, Neverend.`
		},
		{ 
			id: 8,
			border: true,
			image:  `${projectsPath}2006-11-16-ro-diary.jpg`,
			thumb: `${projectsPath}2006-11-16-ro-diary-${thumbnailSize}.jpg`,
			name: 'RO Diary',
			date: '11.16.06',
			technologies: 'HTML, CSS',
			content: `Back in the day, some one created this spin off of diaries for Ragnarok Online. Kinda like LiveJournal, but for Ragnarok Online so you can rant about card drop rates.`
		},
		{ 
			id: 7,
			border: true,
			image:  `${projectsPath}2006-07-06-matt.jpg`,
			thumb: `${projectsPath}2006-07-06-matt-${thumbnailSize}.jpg`,
			name: 'Matt Murphy Music',
			date: '07.06.06',
			technologies: 'HTML, CSS',
			content: `First music website for my husband. I don't know if I actually ever built this out.`
		},
		{ 
			id: 6,
			border: true,
			image:  `${projectsPath}2006-06-07-neverend.jpg`,
			thumb: `${projectsPath}2006-06-07-neverend-${thumbnailSize}.jpg`,
			name: 'Neverend',
			date: '06.07.06',
			technologies: 'HTML, CSS',
			content: `Website for my Ragnarok Online guild, Neverend.`
		},
		{
			id: 5,
			border: true,
			image:  `${projectsPath}2006-02-04-neverend.jpg`,
			thumb: `${projectsPath}2006-02-04-neverend-${thumbnailSize}.jpg`,
			name: 'Neverend',
			date: '02.04.06',
			technologies: 'HTML, CSS',
			content: `Website for my Ragnarok Online guild, Neverend.`
		},
		{
			id: 4,
			border: true,
			image:  `${projectsPath}2005-12-19-be-careful.jpg`,
			thumb: `${projectsPath}2005-12-19-be-careful-${thumbnailSize}.jpg`,
			name: 'Be Careful',
			date: '12.19.05',
			technologies: 'HTML, CSS',
			content: `Website for a Care Bear Cousins fanlisting, back when fanlistings were a thing and super popular. I liked my clever use of the "Be Careful" website name.`
		},
		{
			id: 3,
			border: true,
			image:  `${projectsPath}2005-06-18-neverend.jpg`,
			thumb: `${projectsPath}2005-06-18-neverend-${thumbnailSize}.jpg`,
			name: 'Neverend',
			date: '06.18.05',
			technologies: 'HTML, CSS',
			content: `Website for my Ragnarok Online guild, Neverend.`
		},
		{
			id: 2,
			border: true,
			image:  `${projectsPath}2005-05-09-terrae.jpg`,
			thumb: `${projectsPath}2005-05-09-terrae-${thumbnailSize}.jpg`,
			name: 'Terrae',
			date: '05.09.05',
			technologies: 'HTML, CSS',
			content: `First iteration of a website for a story I want to write... some day.`
		},
		{
			id: 1,
			border: true,
			image:  `${projectsPath}2004-08-20-oneiro.jpg`,
			thumb: `${projectsPath}2004-08-20-oneiro-${thumbnailSize}.jpg`,
			name: 'Oneiro-Zoe',
			date: '08.20.04',
			technologies: 'HTML, CSS',
			content: `Not my very first design, but a quick website for an RPG.`
		}
	],
	art: [
		{
			id: 71,
			border: false,
			thumb: `${artPath}2022-11-20-ff7-materia.png`,
			name: 'Support Materia',
			date: '11.20.22',
			mediums: 'Aseprite',
			content: `A blue support materia, which is used for the <a href="//ff7forstjude.org" target="_blank">FF7 for St. Jude</a> page as the favicon.`
		},
		{
			id: 70,
			border: false,
			thumb: `${artPath}2021-12-04-toastmatt-sad-bread.png`,
			name: 'Sad Bread',
			date: '12.04.21',
			mediums: 'Aseprite',
			content: `Does a sad bread make itself soggy? For <a href="//twitch.tv/toast_matt" target="_blank">toast_matt</a>.`
		},
		{
			id: 69,
			border: false,
			thumb: `${artPath}2021-12-04-toastmatt-materia-bread.png`,
			name: 'Materia Bread',
			date: '12.04.21',
			mediums: 'Aseprite',
			content: `I kinda hate this one, lol, but it's bread with materia slots. For <a href="//twitch.tv/toast_matt" target="_blank">toast_matt</a>.`
		},
		{
			id: 68,
			border: false,
			thumb: `${artPath}2021-11-28-money-bread.gif`,
			name: 'Money Bread',
			date: '11.28.21',
			mediums: 'Aseprite',
			content: `Currency with a bread icon. It's even animated! For <a href="//twitch.tv/toast_matt" target="_blank">toast_matt</a>.`
		},
		{
			id: 67,
			border: false,
			thumb: `${artPath}2021-11-26-toastmatt-rip-bread.png`,
			name: 'RIP Bread',
			date: '11.26.21',
			mediums: 'Aseprite',
			content: `Okay, it's not really bread, but a tombstone shaped like bread. I felt kinda clever. For <a href="//twitch.tv/toast_matt" target="_blank">toast_matt</a>.`
		},
		{
			id: 66,
			border: false,
			thumb: `${artPath}2021-11-26-toastmatt-mad-bread.png`,
			name: 'Mad Breads',
			date: '11.26.21',
			mediums: 'Aseprite',
			content: `The bread is back and this one is mad. For <a href="//twitch.tv/toast_matt" target="_blank">toast_matt</a>.`
		},
		{
			id: 65,
			border: false,
			thumb: `${artPath}2021-03-13-khyeras-heart-badge.png`,
			name: 'Heart Badge',
			date: '03.13.21',
			mediums: 'Aseprite',
			content: `A heart badge for a Valentine's Day writing prompt event at <a href="//khyeras.org" target="_blank">Khy'eras</a>.`
		},
		{
			id: 64,
			border: false,
			thumb: `${artPath}2020-12-20-displaycofee-wave.png`,
			name: 'Wave',
			date: '12.20.20',
			mediums: 'Aseprite',
			content: `Feena from "Grandia" doing a little wave. For my <a href="//twitch.tv/displaycoffee" target="_blank">channel</a>.`
		},
		{
			id: 63,
			border: false,
			thumb: `${artPath}2020-12-20-displaycofee-hmm.png`,
			name: 'Hmmm',
			date: '12.20.20',
			mediums: 'Aseprite',
			content: `Alundra from "Alundra" thinking about puzzles. For my <a href="//twitch.tv/displaycoffee" target="_blank">channel</a>.`
		},
		{
			id: 62,
			border: false,
			thumb: `${artPath}2020-12-20-displaycofee-charge.png`,
			name: 'Charge',
			date: '12.20.20',
			mediums: 'Aseprite',
			content: `Frog from "Chrono Trigger" for my <a href="//twitch.tv/displaycoffee" target="_blank">channel</a>.`
		},
		{
			id: 61,
			border: false,
			thumb: `${artPath}2020-10-25-khyeras-pumpkin-badge.png`,
			name: 'Pumpkin Badge',
			date: '10.25.20',
			mediums: 'Aseprite',
			content: `A pumpkin badge for a Halloween writing prompt event at <a href="//khyeras.org" target="_blank">Khy'eras</a>.`
		},
		{
			id: 60,
			border: false,
			thumb: `${artPath}2020-08-24-displaycofee-hello.png`,
			name: 'Hello',
			date: '08.24.20',
			mediums: 'Aseprite',
			content: `I created this for my <a href="//twitch.tv/displaycoffee" target="_blank">channel</a>, but ended up removing it. It's Toothless from "How to Train Your Dragon" waving.`
		},
		{
			id: 59,
			border: false,
			thumb: `${artPath}2020-07-25-chestermcfisty-git-gud.png`,
			name: 'Git Gud',
			date: '07.25.20',
			mediums: 'Aseprite',
			content: `Also known as "get good". For <a href="//twitch.tv/chestermcfisty" target="_blank">chestermcfisty</a>.`
		},
		{
			id: 58,
			border: false,
			thumb: `${artPath}2020-07-19-scubasaul-pineapple.png`,
			name: 'No Hints Please',
			date: '07.19.20',
			mediums: 'Aseprite',
			content: `<a href="//twitch.tv/scubasaul" target="_blank">scubasaul</a>'s safe word to get a hint in a game is "pineapple", so I made him a not-so-impressed Terminator pineapple.`
		},
		{
			id: 57,
			border: false,
			thumb: `${artPath}2020-07-12-displaycofee-coffee-bean.png`,
			name: 'Coffee Bean',
			date: '07.12.20',
			mediums: 'Aseprite',
			content: `A coffee bean used for the channel point icon on my <a href="//twitch.tv/displaycoffee" target="_blank">channel</a>.`
		},
		{
			id: 56,
			border: false,
			thumb: `${artPath}2020-07-11-displaycoffee-red-mug.png`,
			name: 'Red Coffee Mug',
			date: '07.11.20',
			mediums: 'Aseprite',
			content: `<a href="//twitch.tv/displaycoffee" target="_blank">My</a> sub-badge of a red coffee mug with a paw print.`
		},
		{
			id: 55,
			border: false,
			thumb: `${artPath}2020-07-11-displaycoffee-purple-mug.png`,
			name: 'Purple Coffee Mug',
			date: '07.11.20',
			mediums: 'Aseprite',
			content: `<a href="//twitch.tv/displaycoffee" target="_blank">My</a> sub-badge of a purple coffee mug with a starburst (not the candy).`
		},
		{
			id: 54,
			border: false,
			thumb: `${artPath}2020-07-11-displaycoffee-orange-mug.png`,
			name: 'Orange Coffee Mug',
			date: '07.11.20',
			mediums: 'Aseprite',
			content: `<a href="//twitch.tv/displaycoffee" target="_blank">My</a> sub-badge of a orange coffee mug with a crescent moon.`
		},
		{
			id: 53,
			border: false,
			thumb: `${artPath}2020-07-11-displaycoffee-green-mug.png`,
			name: 'Green Coffee Mug',
			date: '07.11.20',
			mediums: 'Aseprite',
			content: `<a href="//twitch.tv/displaycoffee" target="_blank">My</a> sub-badge of a green coffee mug with a swirl.`
		},
		{
			id: 52,
			border: false,
			thumb: `${artPath}2020-07-11-displaycoffee-blue-mug.png`,
			name: 'Blue Coffee Mug',
			date: '07.11.20',
			mediums: 'Aseprite',
			content: `<a href="//twitch.tv/displaycoffee" target="_blank">My</a> sub-badge of a blue coffee mug with a heart.`
		},
		{
			id: 51,
			border: false,
			thumb: `${artPath}2020-07-11-displaycofee-love.png`,
			name: 'Vivi Love',
			date: '07.11.20',
			mediums: 'Aseprite',
			content: `Vivi from Final Fantasy IX. For my <a href="//twitch.tv/displaycoffee" target="_blank">channel</a>.`
		},
		{
			id: 50,
			border: false,
			thumb: `${artPath}2020-07-05-novakatebs-medkit.png`,
			name: 'Support',
			date: '07.05.20',
			mediums: 'Aseprite',
			content: `A medkit for all those viewers that support <a href="//twitch.tv/novakatebs" target="_blank">novakatebs</a>.`
		},
		{
			id: 49,
			border: false,
			thumb: `${artPath}2020-07-05-chestermcfisty-ggez.png`,
			name: 'GGEZ',
			date: '07.05.20',
			mediums: 'Aseprite',
			content: `Gold knuckles with GGEZ. I think that's "good game easy" for all you hip youngesters out there. For <a href="//twitch.tv/chestermcfisty" target="_blank">chestermcfisty</a>.`
		},
		{
			id: 48,
			border: false,
			thumb: `${artPath}2020-07-04-savko-tilt.png`,
			name: 'Tilt',
			date: '07.04.20',
			mediums: 'Aseprite',
			content: `An enraged, tilted <a href="//twitch.tv/savko" target="_blank">savko</a>.`
		},
		{
			id: 47,
			border: false,
			thumb: `${artPath}2020-07-04-savko-platforming.png`,
			name: 'Platforming Bad',
			date: '07.04.20',
			mediums: 'Aseprite',
			content: `An attempt at platforming for <a href="//twitch.tv/savko" target="_blank">savko</a> as there's always some sort of fail.`
		},
		{
			id: 46,
			border: false,
			thumb: `${artPath}2020-07-04-savko-greed.png`,
			name: 'Greed',
			date: '07.04.20',
			mediums: 'Aseprite',
			content: `One of my favorite RPG / fantasy monsters, the mimic. For <a href="//twitch.tv/savko" target="_blank">savko</a>.`
		},
		{
			id: 45,
			border: false,
			thumb: `${artPath}2020-07-03-savko-lore.png`,
			name: 'Lore',
			date: '07.03.20',
			mediums: 'Aseprite',
			content: `Made for <a href="//twitch.tv/savko" target="_blank">savko</a> as he always has the coolest stories to tell.`
		},
		{
			id: 44,
			border: false,
			thumb: `${artPath}2020-07-03-savko-kwr.png`,
			name: 'Kate Was Right',
			date: '07.03.20',
			mediums: 'Aseprite',
			content: `Was Kate right? According to <a href="//twitch.tv/savko" target="_blank">savko</a> she was, so we gave her a little crown.`
		},
		{
			id: 43,
			border: false,
			thumb: `${artPath}2020-06-06-toastmatt-wave-bread.png`,
			name: 'Wave Bread',
			date: '06.06.20',
			mediums: 'Aseprite',
			content: `Just bread saying hello. For <a href="//twitch.tv/toast_matt" target="_blank">toast_matt</a>.`
		},
		{
			id: 42,
			border: false,
			thumb: `${artPath}2020-06-06-toastmatt-gold-bread.png`,
			name: 'Gold',
			date: '06.06.20',
			mediums: 'Aseprite',
			content: `That's some shiny bread. Probably doesn't taste good. For <a href="//twitch.tv/toast_matt" target="_blank">toast_matt</a>.`
		},
		{
			id: 41,
			border: false,
			thumb: `${artPath}2020-05-24-toastmatt-pb-bread.png`,
			name: 'PB Bread',
			date: '05.24.20',
			mediums: 'Aseprite',
			content: `Peanut butter or personal best? The choice is yours and yours alone.`
		},
		{
			id: 40,
			border: false,
			thumb: `${artPath}2020-05-23-toastmatt-smile-bread.png`,
			name: 'Smile Bread',
			date: '05.23.20',
			mediums: 'Aseprite',
			content: `Smile. :) For <a href="//twitch.tv/toast_matt" target="_blank">toast_matt</a>.`
		},
		{
			id: 39,
			border: false,
			thumb: `${artPath}2020-05-23-toastmatt-love-bread.png`,
			name: 'Love Bead',
			date: '05.23',
			mediums: 'Aseprite',
			content: `This bread is in love. <3 For <a href="//twitch.tv/toast_matt" target="_blank">toast_matt</a>.`
		},
		{
			id: 38,
			border: false,
			thumb: `${artPath}2020-05-07-toastmatt-well-done.png`,
			name: 'Well Done',
			date: '05.07.20',
			mediums: 'Aseprite',
			content: `Well done toast for <a href="//twitch.tv/toast_matt" target="_blank">toast_matt</a>.`
		},
		{
			id: 37,
			border: false,
			image:  `${artPath}2020-04-30-toatmatt-bread-badges.png`,
			thumb: `${artPath}2020-04-30-toatmatt-bread-badges-18x18.png`,
			name: 'Bread Badges',
			date: '04.30.20',
			mediums: 'Aseprite',
			content: `Bread sub-badges for <a href="//twitch.tv/toast_matt" target="_blank">toast_matt</a>. We didn't use all of these, but the gradient is cool.`
		},
		{
			id: 36,
			border: false,
			thumb: `${artPath}2020-04-30-toastmatt-dead-bread.png`,
			name: 'Dead Bread',
			date: '04.30.20',
			mediums: 'Aseprite',
			content: `Dead Bread for <a href="//twitch.tv/toast_matt" target="_blank">toast_matt</a>. Reminds us of the Nirvana smiley face, most likely inspired by it.`
		},
		{
			id: 35,
			border: false,
			thumb: `${artPath}2020-04-17-toastmatt-soft-lock.png`,
			name: 'Soft Lock',
			date: '04.17.20',
			mediums: 'Aseprite',
			content: `My first twitch emote for <a href="//twitch.tv/toast_matt" target="_blank">toast_matt</a>.`
		},
		{
			id: 34,
			border: true,
			image:  `${artPath}2019-12-12-khyeras-map.jpg`,
			thumb: `${artPath}2019-12-12-khyeras-map-200x200.jpg`,
			name: `Khy'eras Map`,
			date: '12.12.19',
			mediums: 'Photoshop',
			content: `My second attempt at making a map, for Khy'eras, and a much improved version. This is an interactive version of the map <a href="//khyeras.org/setting-map" target="_blank">found here</a>.`
		},
		{
			id: 33,
			border: true,
			image:  `${artPath}2013-03-23-charlie-rabbit.jpg`,
			thumb: `${artPath}2013-03-23-charlie-rabbit-200x200.jpg`,
			name: 'Charlie Rabiit',
			date: '03.23.13',
			mediums: 'Watercolor, colored pencil, pen',
			content: `A marionette named Charlie Rabbit. This was based on my husband's song, Charlie Rabbit, and later we used it for his album cover.`
		},
		{
			id: 32,
			border: true,
			image:  `${artPath}2012-12-01-aleris-map.jpg`,
			thumb: `${artPath}2012-12-01-aleris-map-200x200.jpg`,
			name: 'Aleris Map',
			date: '12.01.12',
			mediums: 'Photoshop',
			content: `One of my first attempts at map making for my RPG Aleris.`
		},
		{
			id: 31,
			border: true,
			image:  `${artPath}2011-02-14-beatrix.jpg`,
			thumb: `${artPath}2011-02-14-beatrix-200x200.jpg`,
			name: 'Beatrix',
			date: '02.14.11',
			mediums: 'Watercolor, colored pencil, pen',
			content: `I drew this for my husband, but we both love the character Beatrix from Final Fantasy IX.`
		},
		{
			id: 30,
			border: true,
			image:  `${artPath}2008-12-21-pachico.jpg`,
			thumb: `${artPath}2008-12-21-pachico-200x200.jpg`,
			name: 'Pachico',
			date: '12.21.08',
			mediums: 'Wacom tablet, Photoshop',
			content: `Pachico, a friend's mastersmith from Ragnarok Online.`
		},
		{
			id: 29,
			border: true,
			image:  `${artPath}2008-08-03-cantrixe.jpg`,
			thumb: `${artPath}2008-08-03-cantrixe-200x200.jpg`,
			name: 'Cantrixe',
			date: '08.03.08',
			mediums: 'Wacom tablet, Photoshop',
			content: `A punked/gothed out version of Ragnarok Online high priestess, Cantrixe.`
		},
		{
			id: 28,
			border: true,
			image:  `${artPath}2008-05-24-levanth.jpg`,
			thumb: `${artPath}2008-05-24-levanth-200x200.jpg`,
			name: 'Levanth',
			date: '05.24.08',
			mediums: 'Wacom tablet, Photoshop',
			content: `Levanth the paladin from Ragnarok Online. I like a man in armor and kitty ears.`
		},
		{
			id: 27,
			border: true,
			image:  `${artPath}2008-05-20-yours-truly.jpg`,
			thumb: `${artPath}2008-05-20-yours-truly-200x200.jpg`,
			name: 'Yours Truly',
			date: '05.20.08',
			mediums: 'Wacom tablet, Photoshop',
			content: `My Ragnarok Online sage named Yours Truly. The name was stolen from "Snow Crash" by Neal Stephenson.`
		},
		{
			id: 26,
			border: true,
			image:  `${artPath}2008-04-12-eleotea.jpg`,
			thumb: `${artPath}2008-04-12-eleotea-200x200.jpg`,
			name: 'Eleotea',
			date: '04.12.08',
			mediums: 'Wacom tablet, Photoshop',
			content: `A goth-style battle high priestess named Eleotea. From, you guessed it, Ragnarok Online. I did some coloring here with my tablet for once, which I was never great at.`
		},
		{
			id: 25,
			border: true,
			image:  `${artPath}2008-03-01-sol.jpg`,
			thumb: `${artPath}2008-03-01-sol-200x200.jpg`,
			name: 'Sol',
			date: '03.01.08',
			mediums: 'Wacom tablet, Photoshop',
			content: `Sol the high priest (from Ragnarok Online) lovingly caressing his long braid.`
		},
		{
			id: 24,
			border: true,
			image:  `${artPath}2008-02-22-melody.jpg`,
			thumb: `${artPath}2008-02-22-melody-200x200.jpg`,
			name: 'Melody',
			date: '02.22.08',
			mediums: 'Wacom tablet, Photoshop',
			content: `Melody, a Ragnarok Online dancer.`
		},
		{
			id: 23,
			border: true,
			image:  `${artPath}2008-02-16-harpe.jpg`,
			thumb: `${artPath}2008-02-16-harpe-200x200.jpg`,
			name: 'Harpe',
			date: '02.16.08',
			mediums: 'Wacom tablet, Photoshop',
			content: `I believe this was a ninja named, Harpe, in Ragnarok Online.`
		},
		{
			id: 22,
			border: true,
			image:  `${artPath}2008-02-11-pachico.jpg`,
			thumb: `${artPath}2008-02-11-pachico-200x200.jpg`,
			name: 'Pachico',
			date: '02.11.08',
			mediums: 'Wacom tablet, Photoshop',
			content: `Pachico, a friend's mastersmith from Ragnarok Online.`
		},
		{
			id: 21,
			border: true,
			image:  `${artPath}2007-07-31-docks.jpg`,
			thumb: `${artPath}2007-07-31-docks-200x200.jpg`,
			name: 'Emfei Fien Docks',
			date: '07.31.07',
			mediums: 'Watercolor, colored pencil, pen',
			content: `Tempest sitting on the docks of his hometown, Emfei Fien.`
		},
		{
			id: 20,
			border: true,
			image:  `${artPath}2007-05-05-heart-umbrella.jpg`,
			thumb: `${artPath}2007-05-05-heart-umbrella-200x200.jpg`,
			name: 'Heart Umbrella',
			date: '05.05.07',
			mediums: 'Watercolor, colored pencil, pen',
			content: `I kinda liked drawing umbrellas, so this is my husband's high priest and my assassin cross from Ragnarok Online.`
		},
		{
			id: 19,
			border: true,
			image:  `${artPath}2007-04-13-kyra-jazzy.jpg`,
			thumb: `${artPath}2007-04-13-kyra-jazzy-200x200.jpg`,
			name: 'Kyra Darkblood and Jazz',
			date: '04.13.07',
			mediums: 'Watercolor, colored pencil, pen',
			content: `Two wizards from Ragnarok Online; one of these wizard's belonged to Kyra Darkblood.`
		},
		{
			id: 18,
			border: true,
			image:  `${artPath}2007-03-16-caiin.jpg`,
			thumb: `${artPath}2007-03-16-caiin-200x200.jpg`,
			name: 'Caiin',
			date: '03.16.07',
			mediums: 'Watercolor, colored pencil, pen',
			content: `A Ragnarok Online priestess with her drooping kitty, both decked out to be thug-like. I called her "Caiin" one day do to my fat-fingered typing.`
		},
		{
			id: 17,
			border: true,
			image:  `${artPath}2006-10-02-rhio-tempest.jpg`,
			thumb: `${artPath}2006-10-02-rhio-tempest-200x200.jpg`,
			name: 'Rhio and Tempest',
			date: '10.02.06',
			mediums: 'Watercolor, colored pencil, pen',
			content: `This is a re-do of the previous drawing as I wasn't too fond of the colors. I wanted them to be a little more nuetral.`
		},
		{
			id: 16,
			border: true,
			image:  `${artPath}2005-11-02-nightmare.jpg`,
			thumb: `${artPath}2005-11-02-nightmare-200x200.jpg`,
			name: '"N" is for "Nightmare"',
			date: '11.02.05',
			mediums: 'Watercolor, colored pencil, pen',
			content: `I'm unsure of the exact date on this, but it was an art school project where we had to draw the letters of the alphabet, but make them represent a concept.`
		},
		{
			id: 15,
			border: true,
			image:  `${artPath}2005-10-28-kyra.jpg`,
			thumb: `${artPath}2005-10-28-kyra-200x200.jpg`,
			name: 'Kyra Darkblood',
			date: '10.28.05',
			mediums: 'Watercolor, colored pencil, pen',
			content: `Ragnarok Online priestess named Kyra Darkblood.`
		},
		{
			id: 14,
			border: true,
			image:  `${artPath}2005-10-12-slash-kis.jpg`,
			thumb: `${artPath}2005-10-12-slash-kis-200x200.jpg`,
			name: '/kis',
			date: '10.12.05',
			mediums: 'Watercolor, colored pencil, pen',
			content: `My Ragnarok Online assassin (Kaila) and my husband's prest (Iezu). Doin' a little /kis command.`
		},
		{
			id: 13,
			border: true,
			image:  `${artPath}2005-09-30-reid.jpg`,
			thumb: `${artPath}2005-09-30-reid-200x200.jpg`,
			name: 'Reid Feral',
			date: '09.30.05',
			mediums: 'Watercolor, colored pencil, pen',
			content: `My roleplaying character, Reid Feral.`
		},
		{
			id: 12,
			border: true,
			image:  `${artPath}2005-09-16-manaeros.jpg`,
			thumb: `${artPath}2005-09-16-manaeros-200x200.jpg`,
			name: 'Manaeros',
			date: '09.16.05',
			mediums: 'Pen',
			content: `Messy sketch of an angel type race in Terrae.`
		},
		{
			id: 11,
			border: true,
			image:  `${artPath}2005-08-21-wait-for-me.jpg`,
			thumb: `${artPath}2005-08-21-wait-for-me-200x200.jpg`,
			name: 'Wait for Me',
			date: '08.21.05',
			mediums: 'Watercolor, colored pencil, pen',
			content: `Inspire by a song my husband wrote, features me and my husband in the rain under the cutest star umbrella.`
		},
		{
			id: 10,
			border: true,
			image:  `${artPath}2005-04-06-cantrixe.jpg`,
			thumb: `${artPath}2005-04-06-cantrixe-200x200.jpg`,
			name: 'Cantrixe',
			date: '04.06.05',
			mediums: 'Pen',
			content: `Pen sketch of a Ragnarok Online priestess named Cantrixe.`
		},
		{
			id: 9,
			border: true,
			image:  `${artPath}2005-01-14-rhio-tempest.jpg`,
			thumb: `${artPath}2005-01-14-rhio-tempest-200x200.jpg`,
			name: 'Rhio and Tempest',
			date: '01.14.05',
			mediums: 'Watercolor, colored pencil, pen',
			content: `Characters (Rhio and Tempest) from a story called Terrae. I might write it some day.`
		},
		{
			id: 8,
			border: true,
			image:  `${artPath}2004-10-13-kiska.jpg`,
			thumb: `${artPath}2004-10-13-kiska-200x200.jpg`,
			name: 'Kiska',
			date: '10.13.04',
			mediums: 'Watercolor, colored pencil, pen',
			content: `Kiska, a hunter from Ragnarok Online.`
		},
		{
			id: 7,
			border: true,
			image:  `${artPath}2004-10-13-kaila.jpg`,
			thumb: `${artPath}2004-10-13-kaila-200x200.jpg`,
			name: 'Kaila',
			date: '10.13.04',
			mediums: 'Watercolor, colored pencil, pen',
			content: `My Ragnarok Online assassin, Kaila.`
		},
		{
			id: 6,
			border: true,
			image:  `${artPath}2004-02-24-kaila-zomba.jpg`,
			thumb: `${artPath}2004-02-24-kaila-zomba-200x200.jpg`,
			name: 'Kaila and Zomba',
			date: '02.24.04',
			mediums: 'Watercolor, colored pencil, pen',
			content: `My Ragnarok Online assassin, Kaila, and her pet spore, Zomba.`
		},
		{
			id: 5,
			border: true,
			image:  `${artPath}2003-06-09-never-falling.jpg`,
			thumb: `${artPath}2003-06-09-never-falling-200x200.jpg`,
			name: 'Never Falling',
			date: '06.09.03',
			mediums: 'Watercolor, colored pencil, pen',
			content: `My RPG character and his wife, Necia.`
		},
		{
			id: 4,
			border: true,
			image:  `${artPath}2003-01-23-reid.jpg`,
			thumb: `${artPath}2003-01-23-reid-200x200.jpg`,
			name: 'Reid Feral',
			date: '01.23.03',
			mediums: 'Watercolor, colored pencil, pen',
			content: `My roleplaying character, Reid Feral.`
		},
		{
			id: 3,
			border: true,
			image:  `${artPath}2003-01-11-flower.jpg`,
			thumb: `${artPath}2003-01-11-flower-200x200.jpg`,
			name: `I'll Miss You`,
			date: '01.11.03',
			mediums: 'Pen',
			content: `Pen sketch of a character (Tempest) from a story of mine.`
		},
		{
			id: 2,
			border: true,
			image:  `${artPath}2002-10-23-verial-sorvynia.jpg`,
			thumb: `${artPath}2002-10-23-verial-sorvynia-200x200.jpg`,
			name: 'Verial and Sorvynia',
			date: '10.23.02',
			mediums: 'Pencil',
			content: `My RPG character as a kid and his mom, Sorvynia.`
		},
		{
			id: 1,
			border: true,
			image:  `${artPath}2002-10-23-verial-necia.jpg`,
			thumb: `${artPath}2002-10-23-verial-necia-200x200.jpg`,
			name: 'Verial and Necia',
			date: '10.23.02',
			mediums: 'Pencil',
			content: `My RPG character and his wife, Necia.`
		},
	]
};