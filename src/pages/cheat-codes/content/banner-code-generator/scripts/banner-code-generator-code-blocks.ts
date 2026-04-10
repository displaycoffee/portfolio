/* Code block snippets */
export const codeBlocks = [
	`<div class="dc-banner-code-generator displaycoffee">
		<!-- Banner elements -->
	</div>
	<div class="dc-banner-code-generator displaycoffee">
		<!-- Banner elements -->
	</div>`,
	`<script type="text/javascript">
		// Copied JavaScript goes here
	</script>`,
	`<!-- Copy JavaScript and paste into script source -->
	<script type="text/javascript" src="banner-code-generator.js"></script>`,
	`<script type="text/javascript">
		dcBannerCodeGenerator.init();
	</script>`,
	`<script type="text/javascript">
		dcBannerCodeGenerator.init({
			default: 1, // default code to generate
			site: '/', // site url for code link
			container: '.dc-banner-code-generator',
			buttons: '.dc-banner-code-generator-button',
			code: '.dc-banner-code-generator-code code',
			select: '.dc-banner-code-generator-select-code',
		});
	</script>`,
	`import { BannerCodeGenerator } from './BannerCodeGenerator';`,
	`<BannerCodeGenerator banners={banners} defaultBanner={1} site={site} />`,
	`const banners = [
		{
			header: '88x31',
			values: [
				{
					alt: 'Banner - 88x31',
					src: 'banner-88x31.jpg',
				},
			],
		},
		{
			header: '100x50',
			values: [
				{
					alt: 'Banner - 100x50',
					src: 'banner-100x50.jpg',
				},
			],
		}
	];`,
	`<style>
		/* Copied styles go here */
	</style>`,
	`<!-- Copy styles and paste into stylesheet -->
	<link rel="stylesheet" href="banner-code-generator.css" />`,
	`@import url('banner-code-generator.css');`,
	`import 'banner-code-generator.css';`,
	`@import 'banner-code-generator';`,
	`import 'banner-code-generator.scss';`,
];
