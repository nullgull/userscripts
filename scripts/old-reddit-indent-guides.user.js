// ==UserScript==
// @name         Old Reddit Indent Guides
// @namespace    https://github.com/nullgull/userscripts
// @author   		 https://github.com/nullgull
// @version      1.0.0
// @description  Add indent guides for comments on Old Reddit
// @match        https://old.reddit.com/r/*/comments/*
// @grant        GM_addStyle
// @run-at       document-start
// @updateURL    https://raw.githubusercontent.com/nullgull/userscripts/mainline/scripts/old-reddit-indent-guides.user.js
// @downloadURL  https://raw.githubusercontent.com/userscripts/mainline/scripts/old-reddit-indent-guides.user.js
// ==/UserScript==

(function () {
	'use strict';

	GM_addStyle(`
		/* ---- Tweakables ---- */
		.commentarea {
			--vm-indent-guide-width: 2px;
			--vm-indent-guide-gap: 6px; /* space between line and comment text */
			--vm-indent-guide-color: rgba(155, 89, 182, 0.35);  /* medium purple */
			--vm-indent-guide-color-strong: rgba(155, 89, 182, 0.65); /* stronger purple for first level */
		}

		/* ---- One vertical line per nesting level ---- */
		.commentarea .child {
			position: relative;
			border-left: var(--vm-indent-guide-width) solid var(--vm-indent-guide-color) !important;
			padding-left: var(--vm-indent-guide-gap) !important;
			box-sizing: border-box;
		}

		/* Stronger first-level line */
		.commentarea > .sitetable > .thing.comment > .child {
			border-left-color: var(--vm-indent-guide-color-strong) !important;
		}

		/* Keep "load more comments" blocks aligned */
		.commentarea .morechildren,
		.commentarea .morerecursion {
			border-left: var(--vm-indent-guide-width) dashed var(--vm-indent-guide-color) !important;
			padding-left: var(--vm-indent-guide-gap) !important;
			margin-left: 0 !important;
			box-sizing: border-box;
		}
	`);
})();