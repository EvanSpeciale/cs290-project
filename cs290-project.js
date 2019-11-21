var express = require('express');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 6106);

app.get('/',function(req,res){
	res.render('home');
})

app.get('/resume',function(req,res){
  res.render('resume');
})

app.get('/contact',function(req,res){
  res.render('contact');
})

app.get('/blog',function(req,res){
  res.render('blog');
})

app.get('/blog/1',function(req,res){
  res.render('1');
})

app.get('/blog/2',function(req,res){
  res.render('2');
})

app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
