$(function(){

$('#trackTask').click(function(){
chrome.tabs.query({active:true,currentWindow:true},function(tabs){

  //The task id are the digits after the last slash
  var taskId = tabs[0].url.substr(tabs[0].url.lastIndexOf('/')+1);

  //Insert entry in mongo using REST API
  $.ajax({ url: "https://api.mlab.com/api/1/databases/asana-time-tracker/collections/task-entry?apiKey=omy9HzMATiLB1SlUDJfkjvB-Q1LVV0tj",
  		  data: JSON.stringify({ "task_id" : taskId,"duration":$('#duration').val()}),
  		  type: "POST",
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
