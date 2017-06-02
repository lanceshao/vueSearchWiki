var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
  switch (req.url) {
    case '/search':
      fs.readFile('./pages/index.html',function(err,data){
        res.setHeader('Content-Type','text/html;charset=UTF-8');
        res.end(data.toString());
      })
      break;
    case '/stylesheet':
      fs.readFile('./css/style.css',function(err,data){
        res.setHeader('Content-Type','text/css');
        res.end(data.toString());
      })
      break;
    case '/vue':
      fs.readFile('./js/vue.min.js',function(err,data){
        res.setHeader('Content-Type','text/script');
        res.end(data.toString());
      })
      break;
    case '/main':
      fs.readFile('./js/main.js',function(err,data){
        res.setHeader('Content-Type','text/script');
        res.end(data.toString());
      })
      break;
    default:
      res.end(`<h1>Page Does Not Exist</h1>`)
  }
});

server.listen(3800, function(){
  console.log('Server running at http://localhost:' + server.address().port);
});
