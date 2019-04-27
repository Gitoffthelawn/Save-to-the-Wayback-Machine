/*jslint node: true */
/*global settings, debug, global, Audio, browser */

"use strict";

/*
	Notify User
*/
function Notify() {
	
	/**
	 * Display a notification
	 * @param {string} url
	 * @param {string} title
	 * @param {string} message
	 */
	this.note = function note(title, message) {
		
		if (settings.get('contextMenuNote') === true) {
			
			browser.notifications.create('', {
				title: title,
				iconUrl: '/images/icons/96.png',
				type: 'basic',
				message: message
			});
			
			debug.log('Notification Displayed \n Title: ' + title + '\n Message: ' + message);
		}
		
	};
	
}
