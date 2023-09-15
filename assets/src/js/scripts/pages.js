const thumbnailSize = '200x200';
const distPath = './assets/dist/images/';
const projectsPath = `${distPath}projects/`;
const artPath = `${distPath}art/`;

export const pages = {
	updates: [
		{
			id: 1,
			date: '09.14.23',
			content: 'Created portfolio. Amazing.'
		},
	],
	projects: [
		{ 
			id: 29,
			image: `${projectsPath}2019-01-13-khyeras.jpg`,
			thumb: `${projectsPath}2019-01-13-khyeras-${thumbnailSize}.jpg`,
			name: `Khy'eras`,
			date: '01.13.19',
			technologies: 'HTML, CSS, Sass, JavaScript, jQuery, PHP, phpBB',
			content: `This was a lighter theme I made for Khy'eras. You can only see it if registered. It shares the same code base as the dark layout, but basically changes CSS and images.`,
			url: '//khyeras.org'
		},
		{ 
			id: 28,
			image: `${projectsPath}2017-06-11-khyeras.jpg`,
			thumb: `${projectsPath}2017-06-11-khyeras-${thumbnailSize}.jpg`,
			name: `Khy'eras`,
			date: '06.11.17',
			technologies: 'HTML, CSS, Sass, JavaScript, jQuery, PHP, phpBB',
			content: `Website for my latest RPG, Khy'eras. I'm quite proud of this one, not just for the coding customizations, but for all the lore I put together.`,
			url: '//khyeras.org'
		},
		{ 
			id: 27,
			image: `${projectsPath}2016-09-12-muses-circle.jpg`,
			thumb: `${projectsPath}2016-09-12-muses-circle-${thumbnailSize}.jpg`,
			name: 'The Muses Circle',
			date: '09.12.16',
			technologies: 'HTML, CSS, Sass, JavaScript, jQuery, PHP, WordPress',
			content: `Second website layout for The Muses Circle. Currently not up, but we hope to bring it back in the future.`
		},
		{ 
			id: 26,
			image: `${projectsPath}2014-02-22-aleris.jpg`,
			thumb: `${projectsPath}2014-02-22-aleris-${thumbnailSize}.jpg`,
			name: 'Aleris',
			date: '02.22.14',
			technologies: 'HTML, CSS, Sass, JavaScript, jQuery, PHP, phpBB',
			content: `My final website layout for Aleris before I shut it down. This is still one of my favorites and I really loved the foliage drooping over the brick wall.`
		},
		{ 
			id: 25,
			image: `${projectsPath}2013-12-16-aleris.jpg`,
			thumb: `${projectsPath}2013-12-16-aleris-${thumbnailSize}.jpg`,
			name: 'Aleris',
			date: '12.16.13',
			technologies: 'HTML, CSS, Sass, JavaScript, jQuery, PHP, phpBB',
			content: `This came shortly after the previous layout and was a kind of darker version of the previous mockup. I do like the textured gradient here, but did not end up using it.`
		},
		{ 
			id: 24,
			image: `${projectsPath}2013-10-10-aleris.jpg`,
			thumb: `${projectsPath}2013-10-10-aleris-${thumbnailSize}.jpg`,
			name: 'Aleris',
			date: '10.10.13',
			technologies: 'HTML, CSS, Sass, JavaScript, jQuery, PHP, phpBB',
			content: `Another layout for Aleris RPG. I don't thinK I used this, though I did like the lightness and textures in it.`
		},
		{ 
			id: 23,
			image: `${projectsPath}2013-01-01-mattandadria.jpg`,
			thumb: `${projectsPath}2013-01-01-mattandadria-${thumbnailSize}.jpg`,
			name: 'Matt and Adria',
			date: '01.01.13',
			technologies: 'HTML, CSS, Sass',
			content: `Wedding website for myself and my husband. I think this was my fist "single page" website.`,
			url: '//mattandadria.com'
		},
		{ 
			id: 22,
			image: `${projectsPath}2012-12-01-invalid.jpg`,
			thumb: `${projectsPath}2012-12-01-invalid-${thumbnailSize}.jpg`,
			name: 'Invalid Character Detection',
			date: '12.01.12',
			technologies: 'HTML, CSS, Sass, JavaScript, jQuery',
			content: `This tool was build by myself and a friend, Nathan Pennington a long time ago! The date is not accurate. It was meant to take characters and convert them to HTML safe or Unicode conversions. I still use it to this day here and there, though it could use some love at some point.`,
			url: '//neverend.org/invalid'
		},
		{ 
			id: 21,
			image: `${projectsPath}2012-07-15-aleris.jpg`,
			thumb: `${projectsPath}2012-07-15-aleris-${thumbnailSize}.jpg`,
			name: 'Aleris',
			date: '07.15.12',
			technologies: 'HTML, CSS, Sass, JavaScript, jQuery, PHP, phpBB',
			content: `Design for Aleris RPG. I don't think I ever used this as there were a few things I wasn't a fan of.`
		},
		{ 
			id: 20,
			image: `${projectsPath}2012-06-04-carol.jpg`,
			thumb: `${projectsPath}2012-06-04-carol-${thumbnailSize}.jpg`,
			name: 'Nutrition Consulting Services',
			date: '06.04.12',
			technologies: 'HTML, CSS, Sass, JavaScript, jQuery, PHP',
			content: `This one was never fully finished, hence the iStock photo. It was a website for a nutrionist.`
		},
		{ 
			id: 19,
			image: `${projectsPath}2012-03-23-colorado-home-base.jpg`,
			thumb: `${projectsPath}2012-03-23-colorado-home-base-${thumbnailSize}.jpg`,
			name: 'Colorado Home Base',
			date: '03.23.12',
			technologies: 'HTML, CSS, Sass, JavaScript, jQuery, PHP',
			content: `Website for previous real estate agent, Robin Murphy.`
		},
		{ 
			id: 18,
			image: `${projectsPath}2011-12-28-muses-circle.jpg`,
			thumb: `${projectsPath}2011-12-28-muses-circle-${thumbnailSize}.jpg`,
			name: 'The Muses Circle',
			date: '12.28.11',
			technologies: 'HTML, CSS, Sass, JavaScript, jQuery, PHP, WordPress',
			content: `Blog website for a friend of mine, who reviews books and movies.`
		},
		{ 
			id: 17,
			image: `${projectsPath}2011-01-09-aleris.jpg`,
			thumb: `${projectsPath}2011-01-09-aleris-${thumbnailSize}.jpg`,
			name: 'Aleris',
			date: '01.09.11',
			technologies: 'HTML, CSS, Sass, JavaScript, jQuery, PHP, phpBB',
			content: `First website for Aleris RPG.`
		},
		{ 
			id: 16,
			image: `${projectsPath}2010-08-02-federal-mailing.jpg`,
			thumb: `${projectsPath}2010-08-02-federal-mailing-${thumbnailSize}.jpg`,
			name: 'Federal Mailing',
			date: '08.02.10',
			technologies: 'HTML, CSS, Sass, JavaScript, jQuery, PHP',
			content: `Website for a small, mailing business.`
		},
		{ 
			id: 15,
			image: `${projectsPath}2009-12-18-matt.jpg`,
			thumb: `${projectsPath}2009-12-18-matt-${thumbnailSize}.jpg`,
			name: 'Matt Murphy Music',
			date: '12.18.09',
			technologies: 'HTML, CSS, JavaScript, jQuery, PHP',
			content: `Second website for my husband's music. At one point, there was a music player for the songs, but it seems to have broken.`,
			url: '//mattmurphymusic.org'
		},
		{ 
			id: 14,
			image: `${projectsPath}2009-08-14-portfolio.jpg`,
			thumb: `${projectsPath}2009-08-14-portfolio-${thumbnailSize}.jpg`,
			name: 'Portfolio',
			date: '08.14.09',
			technologies: 'HTML, CSS, JavaScript, jQuery, PHP',
			content: `Third portfolio layout. At one point, I think the bright latern in here was animated, because I had big dreams of being able to animate gifs.`
		},
		{ 
			id: 13,
			image: `${projectsPath}2009-07-10-portfolio.jpg`,
			thumb: `${projectsPath}2009-07-10-portfolio-${thumbnailSize}.jpg`,
			name: 'Portfolio',
			date: '07.10.09',
			technologies: 'HTML, CSS',
			content: `Second portfolio layout. I don't think I actually ever used this, but I was getting into a lot of textures then.`
		},
		{ 
			id: 12,
			image: `${projectsPath}2009-05-29-portfolio.jpg`,
			thumb: `${projectsPath}2009-05-29-portfolio-${thumbnailSize}.jpg`,
			name: 'Portfolio',
			date: '05.29.09',
			technologies: 'HTML, CSS',
			content: `First portfolio layout.`
		},
		{ 
			id: 11,
			image: `${projectsPath}2007-04-28-ro-diary.jpg`,
			thumb: `${projectsPath}2007-04-28-ro-diary-${thumbnailSize}.jpg`,
			name: 'RO Diary',
			date: '04.28.07',
			technologies: 'HTML, CSS',
			content: `Last RO Diary layout. I don't think I lasted long on there.`
		},
		{ 
			id: 10,
			image: `${projectsPath}2007-03-02-neverend.jpg`,
			thumb: `${projectsPath}2007-03-02-neverend-${thumbnailSize}.jpg`,
			name: 'Neverend',
			date: '03.02.07',
			technologies: 'HTML, CSS',
			content: `Website for my Ragnarok Online guild, Neverend.`
		},
		{ 
			id: 9,
			image: `${projectsPath}2006-11-26-neverend.jpg`,
			thumb: `${projectsPath}2006-11-26-neverend-${thumbnailSize}.jpg`,
			name: 'Neverend',
			date: '11.26.06',
			technologies: 'HTML, CSS',
			content: `Website for my Ragnarok Online guild, Neverend.`
		},
		{ 
			id: 8,
			image: `${projectsPath}2006-11-16-ro-diary.jpg`,
			thumb: `${projectsPath}2006-11-16-ro-diary-${thumbnailSize}.jpg`,
			name: 'RO Diary',
			date: '11.16.06',
			technologies: 'HTML, CSS',
			content: `Back in the day, some one created this spin off of diaries for Ragnarok Online. Kinda like LiveJournal, but for Ragnarok Online so you can rant about card drop rates.`
		},
		{ 
			id: 7,
			image: `${projectsPath}2006-07-06-matt.jpg`,
			thumb: `${projectsPath}2006-07-06-matt-${thumbnailSize}.jpg`,
			name: 'Matt Murphy Music',
			date: '07.06.06',
			technologies: 'HTML, CSS',
			content: `First music website for my husband. I don't know if I actually ever built this out.`
		},
		{ 
			id: 6,
			image: `${projectsPath}2006-06-07-neverend.jpg`,
			thumb: `${projectsPath}2006-06-07-neverend-${thumbnailSize}.jpg`,
			name: 'Neverend',
			date: '06.07.06',
			technologies: 'HTML, CSS',
			content: `Website for my Ragnarok Online guild, Neverend.`
		},
		{
			id: 5,
			image: `${projectsPath}2006-02-04-neverend.jpg`,
			thumb: `${projectsPath}2006-02-04-neverend-${thumbnailSize}.jpg`,
			name: 'Neverend',
			date: '02.04.06',
			technologies: 'HTML, CSS',
			content: `Website for my Ragnarok Online guild, Neverend.`
		},
		{
			id: 4,
			image: `${projectsPath}2005-12-19-be-careful.jpg`,
			thumb: `${projectsPath}2005-12-19-be-careful-${thumbnailSize}.jpg`,
			name: 'Be Careful',
			date: '12.19.05',
			technologies: 'HTML, CSS',
			content: `Website for a Care Bear Cousins fanlisting, back when fanlistings were a thing and super popular. I liked my clever use of the "Be Careful" website name.`
		},
		{
			id: 3,
			image: `${projectsPath}2005-06-18-neverend.jpg`,
			thumb: `${projectsPath}2005-06-18-neverend-${thumbnailSize}.jpg`,
			name: 'Neverend',
			date: '06/18.05',
			technologies: 'HTML, CSS',
			content: `Website for my Ragnarok Online guild, Neverend.`
		},
		{
			id: 1,
			image: `${projectsPath}2004-08-20-oneiro.jpg`,
			thumb: `${projectsPath}2004-08-20-oneiro-${thumbnailSize}.jpg`,
			name: 'Oneiro-Zoe',
			date: '08.20.04',
			technologies: 'HTML, CSS',
			content: `Not my very first design, but a quick website for an RPG.`
		},
		{
			id: 2,
			image: `${projectsPath}2005-05-09-terrae.jpg`,
			thumb: `${projectsPath}2005-05-09-terrae-${thumbnailSize}.jpg`,
			name: 'Terrae',
			date: '05.09.05',
			technologies: 'HTML, CSS',
			content: `First iteration of a website for a story I want to write... some day.`
		},
	],
	art: [
		{
			id: 39,
			thumb: '2020-05-23-toastmatt-love-bread.png',
			name: 'Love Bead',
			date: '05.23',
			mediums: 'Aseprite',
			content: `This bread is in love. <3 For <a href="//twitch.tv/toast_matt" target="_blank">toast_matt</a>.`
		},
		{
			id: 38,
			thumb: '2020-05-07-toastmatt-well-done.png',
			name: 'Well Done',
			date: '05.07.20',
			mediums: 'Aseprite',
			content: `Well done toast for <a href="//twitch.tv/toast_matt" target="_blank">toast_matt</a>.`
		},
		{
			id: 37,
			image: '2020-04-30-toatmatt-bread-badges.png',
			thumb: '2020-04-30-toatmatt-bread-badges-18x18.png',
			name: 'Bread Badges',
			date: '04.30.20',
			mediums: 'Aseprite',
			content: `Bread sub-badges for <a href="//twitch.tv/toast_matt" target="_blank">toast_matt</a>. We didn't use all of these, but the gradient is cool.`
		},
		{
			id: 36,
			thumb: '2020-04-30-toastmatt-dead-bread.png',
			name: 'Dead Bread',
			date: '04.30.20',
			mediums: 'Aseprite',
			content: `Dead Bread for <a href="//twitch.tv/toast_matt" target="_blank">toast_matt</a>. Reminds us of the Nirvana smiley face, most likely inspired by it.`
		},
		{
			id: 35,
			thumb: '2020-04-17-toastmatt-soft-lock.png',
			name: 'Soft Lock',
			date: '04.17.20',
			mediums: 'Aseprite',
			content: `My first twitch emote for <a href="//twitch.tv/toast_matt" target="_blank">toast_matt</a>.`
		},
		{
			id: 34,
			image: '2019-12-12-khyeras-map.jpg',
			thumb: '2019-12-12-khyeras-map-200x200.jpg',
			name: `Khy'eras Map`,
			date: '12.12.19',
			mediums: 'Photoshop',
			content: `My second attempt at making a map, for Khy'eras, and a much improved version. This is an interactive version of the map <a href="//khyeras.org/setting-map" target="_blank">found here</a>.`
		},
		{
			id: 33,
			image: '2013-03-23-charlie-rabbit.jpg',
			thumb: '2013-03-23-charlie-rabbit-200x200.jpg',
			name: 'Charlie Rabiit',
			date: '03.23.13',
			mediums: 'Watercolor, colored pencil, pen',
			content: `A marionette named Charlie Rabbit. This was based on my husband's song, Charlie Rabbit, and later we used it for his album cover.`
		},
		{
			id: 32,
			image: '2012-12-01-aleris-map.jpg',
			thumb: '2012-12-01-aleris-map-200x200.jpg',
			name: 'Aleris Map',
			date: '12.01.12',
			mediums: 'Photoshop',
			content: `One of my first attempts at map making for my RPG Aleris.`
		},
		{
			id: 31,
			image: '2011-02-14-beatrix.jpg',
			thumb: '2011-02-14-beatrix-200x200.jpg',
			name: 'Beatrix',
			date: '02.14.11',
			mediums: 'Watercolor, colored pencil, pen',
			content: `I drew this for my husband, but we both love the character Beatrix from Final Fantasy IX.`
		},
		{
			id: 30,
			image: '2008-12-21-pachico.jpg',
			thumb: '2008-12-21-pachico-200x200.jpg',
			name: 'Pachico',
			date: '12.21.08',
			mediums: 'Wacom tablet, Photoshop',
			content: `Pachico, a friend's mastersmith from Ragnarok Online.`
		},
		{
			id: 29,
			image: '2008-08-03-cantrixe.jpg',
			thumb: '2008-08-03-cantrixe-200x200.jpg',
			name: 'Cantrixe',
			date: '08.03.08',
			mediums: 'Wacom tablet, Photoshop',
			content: `A punked/gothed out version of Ragnarok Online high priestess, Cantrixe.`
		},
		{
			id: 28,
			image: '2008-05-24-levanth.jpg',
			thumb: '2008-05-24-levanth-200x200.jpg',
			name: 'Levanth',
			date: '05.24.08',
			mediums: 'Wacom tablet, Photoshop',
			content: `Levanth the paladin from Ragnarok Online. I like a man in armor and kitty ears.`
		},
		{
			id: 27,
			image: '2008-05-20-yours-truly.jpg',
			thumb: '2008-05-20-yours-truly-200x200.jpg',
			name: 'Yours Truly',
			date: '05.20.08',
			mediums: 'Wacom tablet, Photoshop',
			content: `My Ragnarok Online sage named Yours Truly. The name was stolen from "Snow Crash" by Neal Stephenson.`
		},
		{
			id: 26,
			image: '2008-04-12-eleotea.jpg',
			thumb: '2008-04-12-eleotea-200x200.jpg',
			name: 'Eleotea',
			date: '04.12.08',
			mediums: 'Wacom tablet, Photoshop',
			content: `A goth-style battle high priestess named Eleotea. From, you guessed it, Ragnarok Online. I did some coloring here with my tablet for once, which I was never great at.`
		},
		{
			id: 25,
			image: '2008-03-01-sol.jpg',
			thumb: '2008-03-01-sol-200x200.jpg',
			name: 'Sol',
			date: '03.01.08',
			mediums: 'Wacom tablet, Photoshop',
			content: `Sol the high priest (from Ragnarok Online) lovingly caressing his long braid.`
		},
		{
			id: 24,
			image: '2008-02-22-melody.jpg',
			thumb: '2008-02-22-melody-200x200.jpg',
			name: 'Melody',
			date: '02.22.08',
			mediums: 'Wacom tablet, Photoshop',
			content: `Melody, a Ragnarok Online dancer.`
		},
		{
			id: 23,
			image: '2008-02-16-harpe.jpg',
			thumb: '2008-02-16-harpe-200x200.jpg',
			name: 'Harpe',
			date: '02.16.08',
			mediums: 'Wacom tablet, Photoshop',
			content: `I believe this was a ninja named, Harpe, in Ragnarok Online.`
		},
		{
			id: 22,
			image: '2008-02-11-pachico.jpg',
			thumb: '2008-02-11-pachico-200x200.jpg',
			name: 'Pachico',
			date: '02.11.08',
			mediums: 'Wacom tablet, Photoshop',
			content: `Pachico, a friend's mastersmith from Ragnarok Online.`
		},
		{
			id: 21,
			image: '2007-07-31-docks.jpg',
			thumb: '2007-07-31-docks-200x200.jpg',
			name: 'Emfei Fien Docks',
			date: '07.31.07',
			mediums: 'Watercolor, colored pencil, pen',
			content: `Tempest sitting on the docks of his hometown, Emfei Fien.`
		},
		{
			id: 20,
			image: '2007-05-05-heart-umbrella.jpg',
			thumb: '2007-05-05-heart-umbrella-200x200.jpg',
			name: 'Heart Umbrella',
			date: '05.05.07',
			mediums: 'Watercolor, colored pencil, pen',
			content: `I kinda liked drawing umbrellas, so this is my husband's high priest and my assassin cross from Ragnarok Online.`
		},
		{
			id: 19,
			image: '2007-04-13-kyra-jazzy.jpg',
			thumb: '2007-04-13-kyra-jazzy-200x200.jpg',
			name: 'Kyra Darkblood and Jazz',
			date: '04.13.07',
			mediums: 'Watercolor, colored pencil, pen',
			content: `Two wizards from Ragnarok Online; one of these wizard's belonged to Kyra Darkblood.`
		},
		{
			id: 18,
			image: '2007-03-16-caiin.jpg',
			thumb: '2007-03-16-caiin-200x200.jpg',
			name: 'Caiin',
			date: '03.16.07',
			mediums: 'Watercolor, colored pencil, pen',
			content: `A Ragnarok Online priestess with her drooping kitty, both decked out to be thug-like. I called her "Caiin" one day do to my fat-fingered typing.`
		},
		{
			id: 17,
			image: '2006-10-02-rhio-tempest.jpg',
			thumb: '2006-10-02-rhio-tempest-200x200.jpg',
			name: 'Rhio and Tempest',
			date: '10.02.06',
			mediums: 'Watercolor, colored pencil, pen',
			content: `This is a re-do of the previous drawing as I wasn't too fond of the colors. I wanted them to be a little more nuetral.`
		},
		{
			id: 16,
			image: '2005-11-02-nightmare.jpg',
			thumb: '2005-11-02-nightmare-200x200.jpg',
			name: '"N" is for "Nightmare"',
			date: '11.02.05',
			mediums: 'Watercolor, colored pencil, pen',
			content: `I'm unsure of the exact date on this, but it was an art school project where we had to draw the letters of the alphabet, but make them represent a concept.`
		},
		{
			id: 15,
			image: '2005-10-28-kyra.jpg',
			thumb: '2005-10-28-kyra-200x200.jpg',
			name: 'Kyra Darkblood',
			date: '10.28.05',
			mediums: 'Watercolor, colored pencil, pen',
			content: `Ragnarok Online priestess named Kyra Darkblood.`
		},
		{
			id: 14,
			image: '2005-10-12-slash-kis.jpg',
			thumb: '2005-10-12-slash-kis-200x200.jpg',
			name: '/kis',
			date: '10.12.05',
			mediums: 'Watercolor, colored pencil, pen',
			content: `My Ragnarok Online assassin (Kaila) and my husband's prest (Iezu). Doin' a little /kis command.`
		},
		{
			id: 13,
			image: '2005-09-30-reid.jpg',
			thumb: '2005-09-30-reid-200x200.jpg',
			name: 'Reid Feral',
			date: '09.30.05',
			mediums: 'Watercolor, colored pencil, pen',
			content: `My roleplaying character, Reid Feral.`
		},
		{
			id: 12,
			image: '2005-09-16-manaeros.jpg',
			thumb: '2005-09-16-manaeros-200x200.jpg',
			name: 'Manaeros',
			date: '09.16.05',
			mediums: 'Pen',
			content: `Messy sketch of an angel type race in Terrae.`
		},
		{
			id: 11,
			image: '2005-08-21-wait-for-me.jpg',
			thumb: '2005-08-21-wait-for-me-200x200.jpg',
			name: 'Wait for Me',
			date: '08.21.05',
			mediums: 'Watercolor, colored pencil, pen',
			content: `Inspire by a song my husband wrote, features me and my husband in the rain under the cutest star umbrella.`
		},
		{
			id: 10,
			image: '2005-04-06-cantrixe.jpg',
			thumb: '2005-04-06-cantrixe-200x200.jpg',
			name: 'Cantrixe',
			date: '04.06.05',
			mediums: 'Pen',
			content: `Pen sketch of a Ragnarok Online priestess named Cantrixe.`
		},
		{
			id: 9,
			image: '2005-01-14-rhio-tempest.jpg',
			thumb: '2005-01-14-rhio-tempest-200x200.jpg',
			name: 'Rhio and Tempest',
			date: '01.14.05',
			mediums: 'Watercolor, colored pencil, pen',
			content: `Characters (Rhio and Tempest) from a story called Terrae. I might write it some day.`
		},
		{
			id: 8,
			image: '2004-10-13-kiska.jpg',
			thumb: '2004-10-13-kiska-200x200.jpg',
			name: 'Kiska',
			date: '10.13.04',
			mediums: 'Watercolor, colored pencil, pen',
			content: `Kiska, a hunter from Ragnarok Online.`
		},
		{
			id: 7,
			image: '2004-10-13-kaila.jpg',
			thumb: '2004-10-13-kaila-200x200.jpg',
			name: 'Kaila',
			date: '10.13.04',
			mediums: 'Watercolor, colored pencil, pen',
			content: `My Ragnarok Online assassin, Kaila.`
		},
		{
			id: 6,
			image: '2004-02-24-kaila-zomba.jpg',
			thumb: '2004-02-24-kaila-zomba-200x200.jpg',
			name: 'Kaila and Zomba',
			date: '02.24.04',
			mediums: 'Watercolor, colored pencil, pen',
			content: `My Ragnarok Online assassin, Kaila, and her pet spore, Zomba.`
		},
		{
			id: 5,
			image: '2003-06-09-never-falling.jpg',
			thumb: '2003-06-09-never-falling-200x200.jpg',
			name: 'Never Falling',
			date: '06.09.03',
			mediums: 'Watercolor, colored pencil, pen',
			content: `My RPG character and his wife, Necia.`
		},
		{
			id: 4,
			image: '2003-01-23-reid.jpg',
			thumb: '2003-01-23-reid-200x200.jpg',
			name: 'Reid Feral',
			date: '01.23.03',
			mediums: 'Watercolor, colored pencil, pen',
			content: `My roleplaying character, Reid Feral.`
		},
		{
			id: 3,
			image: '2003-01-11-flower.jpg',
			thumb: '2003-01-11-flower-200x200.jpg',
			name: `I'll Miss You`,
			date: '01.11.03',
			mediums: 'Pen',
			content: `Pen sketch of a character (Tempest) from a story of mine.`
		},
		{
			id: 2,
			image: '2002-10-23-verial-sorvynia.jpg',
			thumb: '2002-10-23-verial-sorvynia-200x200.jpg',
			name: 'Verial and Sorvynia',
			date: '10.23.02',
			mediums: 'Pencil',
			content: `My RPG character as a kid and his mom, Sorvynia.`
		},
		{
			id: 1,
			image: '2002-10-23-verial-necia.jpg',
			thumb: '2002-10-23-verial-necia-200x200.jpg',
			name: 'Verial and Necia',
			date: '10.23.02',
			mediums: 'Pencil',
			content: `My RPG character and his wife, Necia.`
		},
	]
};