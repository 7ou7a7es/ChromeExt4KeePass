chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)    {

	/* console.log("command : "+Object.getOwnPropertyNames(request)); */
	
	if (request.action === "title" && request.command != null && request.command != document.title){
		document.title = request.command;
	}
});
