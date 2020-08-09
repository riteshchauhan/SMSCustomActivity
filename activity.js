var connection = new Postmonger.session();

connection.trigger('ready');

connection.on('initActivity', function( data ){
document.getElementById('Configuration').value = JSON.stringify(data,null,2);
});

connection.on('clickedNext', function(){
var Configuration= JSON.parse(document.getElementById('Configuration').value);
connection.trigger('updateActivity', Configuration);  
});
