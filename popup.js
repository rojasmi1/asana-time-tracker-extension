$(function(){
    //Check for the current task in the database, if it already exists then the current duration is shown
  chrome.storage.sync.get(["asanaApiKey","mongolabApiKey"],function(items){
    var asanaApiKey = items.asanaApiKey;
    var mongolabApiKey = items.mongolabApiKey;
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
    //The task id are the digits after the last slash
    var taskId = tabs[0].url.substr(tabs[0].url.lastIndexOf('/')+1);
    $.ajax({ url: "https://api.mlab.com/api/1/databases/asana-time-tracker/collections/task-entry?q={\"taskId\":\""+taskId+"\",\"asanaApiKey\":\""+asanaApiKey+"\"}&apiKey="+mongolabApiKey,
          type: "GET"}).then(function(tasks){
            console.log(tasks[0]);
            $('#duration').val(tasks[0].duration)
          })
    });
  });


$('#trackTask').click(function(){
  chrome.storage.sync.get(["asanaApiKey","fullName","mongolabApiKey"],function(items){
    var asanaApiKey = items.asanaApiKey;
    var fullName = items.fullName;
    var mongolabApiKey = items.mongolabApiKey;
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
    
      //The task id are the digits after the last slash
      var taskId = tabs[0].url.substr(tabs[0].url.lastIndexOf('/')+1);
    
      //Insert entry in mongo using REST API
      $.ajax({ url: "https://api.mlab.com/api/1/databases/asana-time-tracker/collections/task-entry?u=true&q={\"taskId\":\""+ taskId +"\",\"asanaApiKey\":\""+asanaApiKey+"\"}&apiKey="+mongolabApiKey,
      		  data: JSON.stringify({ "$set":{"taskId" : taskId,"asanaApiKey":asanaApiKey,"fullName":fullName,"duration":$('#duration').val()}}),
      		  type: "PUT",
      		  contentType: "application/json" }).then(function(data){
              $('#duration').val('');
              var notificationOptions = {type:"basic",title:"Task Tracked",message:"The task has been successfully tracked.",iconUrl:"asana-exporter-icon.png"};
              chrome.notifications.create('tasktracked',notificationOptions,function(){
                window.close();
              });
            });
        });
  });
});

});
