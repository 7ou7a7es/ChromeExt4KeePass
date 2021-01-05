chrome.runtime.onInstalled.addListener(function() {
	chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
		chrome.tabs.sendMessage(tabId, {command: tab.title + ' ' + tab.url});
	});
})