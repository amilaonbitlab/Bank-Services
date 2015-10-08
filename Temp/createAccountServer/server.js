var express		= require('express');
var app			= express();

var port = process.env.PORT || 8888;

app.use(express.static(__dirname))

app.listen(process.env.PORT || port);

console.log('Server start port : '+port);
