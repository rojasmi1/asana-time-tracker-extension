$(function(){
  chrome.storage.sync.get(["apiKey","fullName"],function(items){
    $('#apiKey').val(items.apiKey);
    $('#fullName').val(items.fullName);
  });

  $('#updateOptions').click(function(){
    chrome.storage.sync.set({"apiKey":$('#apiKey').val(),"fullName":$('#fullName').val()},function(){
      var notificationOptions = {type:"basic",title:"Options saved",message:"Options successfully saved.",iconUrl:"asana-exporter-icon.png"};
      chrome.notifications.create('optionsSaved',notificationOptions,function(){});
    });
  });

});
