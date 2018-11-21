var http = require("http"),
httpProxy = require('http-proxy'),
url = require("url")
var proxy = httpProxy.createProxyServer({})

proxy.on('error', function (err, req, res) {  
  res.writeHead(500, {  
    'Content-Type': 'text/plain'  
  });  
  res.end('Something went wrong. And we are reporting a custom error message.');  
});

var server = http.createServer(function(req, res) {
  var path = url.parse(req.url, true)
  var query = path.query
  var target = 'http://www.google.com/'
  if (query.proxy){
    query.proxy = query.proxy.indexOf('http://') > -1 ? query.proxy : 'http://' + query.proxy
    target = query.proxy
    proxy.web(req, res, { target: target })
  } else {
    res.writeHead(200, {  
      'Content-Type': 'text/plain'  
    });  
    res.end('Welcome to my server!'); 
  }
})
server.listen(8183)
console.log("Server has started.")
console.log("请在浏览器访问http://localhost:8183")
