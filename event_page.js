chrome.tabs.onUpdated.addListener(function(tabId,changeInfo,tab){
  var asanaURLBase = /https:\/\/app.asana.com\//;
  if(tab.url.match(asanaURLBase)){
    chrome.pageAction.show(tabId);
  }
});
