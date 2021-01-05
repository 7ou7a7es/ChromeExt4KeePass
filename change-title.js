chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({document.title = window.location.href});
});
