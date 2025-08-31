// ==UserScript==
// @name         Remove Google Flights Emissions Info
// @namespace    https://github.com/nullgull/userscripts
// @author   		 https://github.com/nullgull
// @version      1.0.0
// @description  Removes the container divs for emissions info on Google Flights
// @match        https://www.google.com/travel/flights*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/nullgull/userscripts/mainline/scripts/google-flights-remove-emissions.user.js
// @downloadURL  https://raw.githubusercontent.com/userscripts/mainline/scripts/google-flights-remove-emissions.user.js
// ==/UserScript==

(function () {
	'use strict';

	const removeParentDiv = (parent) => {
		if (parent?.tagName === 'DIV') parent.remove();
	};

	const removeEmissionsBlocks = () => {
		document.querySelectorAll('[data-relativeemissions]').forEach(element => {
			removeParentDiv(element.parentElement);
		});

		document.querySelectorAll('[aria-label*="CO2e"], [aria-label*="Carbon emissions"]').forEach(element => {
			removeParentDiv(element.closest('div'));
		});
	};

	removeEmissionsBlocks();

	const observer = new MutationObserver(removeEmissionsBlocks);
	observer.observe(document.body, {
		childList: true,
		subtree: true
	});
})();