
var express = require('express');

var app = express();
app.use(express.static(process.env.PWD));

app.get('/', function(request, response) {
  response.sendfile('./index.html');
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});