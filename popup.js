$(function(){

$('#trackTask').click(function(){

chrome.tabs.query({active:true,currentWindow:true},function(tabs){
  var currentURL = tabs[0].url;
  //Insert entry in mongo using REST API
  $.ajax( { url: "https://api.mlab.com/api/1/databases/asana-time-tracker/collections/task-entry?apiKey=omy9HzMATiLB1SlUDJfkjvB-Q1LVV0tj",
  		  data: JSON.stringify({ "task_id" : currentURL,"duration":$('#duration').val()}),
  		  type: "POST",
  		  contentType: "application/json" } );
    });
});

});
