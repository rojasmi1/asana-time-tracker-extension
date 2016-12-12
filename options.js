$(function(){
  chrome.storage.sync.get(["asanaApiKey","mongolabApiKey","fullName"],function(items){
    $('#asanaApiKey').val(items.asanaApiKey);
    $('#fullName').val(items.fullName);
    $('#mongolabApiKey').val(items.mongolabApiKey);
  });

  $('#updateOptions').click(function(){
    chrome.storage.sync.set({"asanaApiKey":$('#asanaApiKey').val(),"fullName":$('#fullName').val(),"mongolabApiKey":$('#mongolabApiKey').val()},function(){
      var notificationOptions = {type:"basic",title:"Options saved",message:"Options successfully saved.",iconUrl:"asana-exporter-icon.png"};
      chrome.notifications.create('optionsSaved',notificationOptions,function(){});
    });
  });

});
