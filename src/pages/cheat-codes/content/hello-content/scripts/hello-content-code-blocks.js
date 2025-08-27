/* Code block snippets */
export const codeBlocks = [
	`<div class="dc-hello-content-tabs displaycoffee">
		<!-- Tab elements -->
	</div>
	<div class="dc-hello-content-tabs displaycoffee">
		<!-- Tab elements -->
	</div>`,
	`<script type="text/javascript">
		// Copied JavaScript goes here
	</script>`,
	`<!-- Copy JavaScript and paste into script source -->
	<script type="text/javascript" src="hello-content.js"></script>`,
	`<script type="text/javascript">
		dcHelloContent.init();
	</script>`,
	`<script type="text/javascript">
		dcHelloContent.init({
			default: 1, // default visible tab number
			container: '.dc-hello-content-tabs',
			button: '.dc-hello-content-button',
			content: '.dc-hello-content-block',
		});
	</script>`,
	`import { HelloContent } from './HelloContent';`,
	`<HelloContent tabs={tabs} defaultTab={1} />`,
	`const tabs = [
		{
			label: 'Tab 01',
			content: 'Tab 01 Content',
		},
		{
			label: 'Tab 02',
			content: Tab02Component,
		},
		{
			label: 'Tab 03',
			content: 'Tab 03 Content',
		},
	];`,
	`<div className={contentClass}>{tab.content}</div>`,
	`<style>
		/* Copied styles go here */
	</style>`,
	`<!-- Copy styles and paste into stylesheet -->
	<link rel="stylesheet" href="hello-content.css" />`,
	`@import url('hello-content.css');`,
	`import 'hello-content.css';`,
	`@import 'hello-content';`,
	`import 'hello-content.scss';`,
];
