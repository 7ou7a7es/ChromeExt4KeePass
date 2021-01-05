chrome.runtime.onInstalled.addListener(function() {
	chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
		if (tab.title != tab.url){
			chrome.tabs.sendMessage(tabId, {command: tab.url});
		}
	});
})
