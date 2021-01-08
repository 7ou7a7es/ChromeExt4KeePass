chrome.runtime.onInstalled.addListener(function() {
	chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
		var splitUrl;
		var msg;
		
		if (tab.url != null){
			splitUrl = tab.url.split("/",3);
			
			if (splitUrl.length > 2){
				msg = splitUrl[2];
			}

			if (msg!=null && msg.includes("www.")){
				msg = msg.replace("www.","");
			}

			if (msg!=null && splitUrl[0].includes("https")){
				msg = msg + " (tls)"
			}

			if (msg!=null && tab.title != msg){
				console.log("title : " + tab.title)
				console.log("msg : " + msg);
				chrome.tabs.sendMessage(tabId, {command: msg, action: "title"});
			}
		}
	});
})
