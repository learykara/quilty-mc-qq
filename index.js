var express = require('express');

var app = express();
var port = process.env.PORT || 8080;

app.use('/static', express.static(__dirname + '/public'));
app.use('/static', express.static(__dirname + '/assets'));
app.engine('html', require('ejs').renderFile);

app.get('/', function (req, res) {
  res.render('index_temp.html');
});

var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
});
