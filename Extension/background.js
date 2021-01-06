chrome.runtime.onInstalled.addListener(function() {
	chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
		var splitUrl = tab.url.split("/",3);
		var msg = splitUrl[2];
		
		if (msg!=null && msg.includes("www.")){
			msg = msg.replace("www.","");
		}
		
		if (msg!=null && splitUrl[0].includes("https")){
			msg = msg + " (tls)"
		}
		
		if (msg!=null && tab.title != msg){
			window.alert("tilte : " + tab.title)
			window.alert("msg : "+msg);
			chrome.tabs.sendMessage(tabId, {command: msg});
		}
	});
})
