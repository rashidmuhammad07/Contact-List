var path = require('path');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var port = 3000;

app.use(express.static(path.join(__dirname, '../client/dist/')));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 





app.listen(port);