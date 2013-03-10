var express = require('express'),
	app = express(),
	path = require('path');
	
app.configure( function () {
	app.set('port', process.env.PORT || 3002);
	app.use(express.favicon('favicon.ico'));
	app.use(express.bodyParser());
  	app.use(express.methodOverride());
  	app.use(app.router);
  	app.use(express.static(path.join(__dirname, 'public')));
});

app.get('/', function(req, res) {
	res.redirect('/index.html');
});

app.listen(app.get('port'));