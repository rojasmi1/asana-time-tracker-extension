$(function(){
  chrome.storage.sync.get("apiKey",function(items){
    var apiKey = $('#apiKey').val(items.apiKey);
  });

  $('#updateOptions').click(function(){
    console.log($('#apiKey').val());
    chrome.storage.sync.set({"apiKey":$('#apiKey').val()},function(){
      var notificationOptions = {type:"basic",title:"Options saved",message:"Options successfully saved.",iconUrl:"asana-exporter-icon.png"};
      chrome.notifications.create('optionsSaved',notificationOptions,function(){});
    });
  });

});
