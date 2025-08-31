// ==UserScript==
// @name         Old Reddit Center Content
// @namespace    https://github.com/nullgull/userscripts
// @author   		 https://github.com/nullgull
// @version      1.0.0
// @description  Center thread content on Old Reddit
// @match        https://old.reddit.com/r/*/comments/*
// @grant        GM_addStyle
// @updateURL    https://raw.githubusercontent.com/nullgull/userscripts/refs/heads/mainline/scripts/old-reddit-center-content.user.js
// @downloadURL  https://raw.githubusercontent.com/nullgull/userscripts/refs/heads/mainline/scripts/old-reddit-center-content.user.js
// ==/UserScript==

(function () {
	'use strict';

	GM_addStyle(`
		.commentarea,
		.sitetable.linklisting {
			margin: 0 auto !important;
			float: none !important;
			max-width: 900px;
		}
	`);
})();