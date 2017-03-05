var http = require('http');
var httpProxy = require('http-proxy');

var proxy = httpProxy.createProxy();
var options = {  
  'www.server1.com': 'http://127.0.0.1:3001',
  'www.server2.com': 'http://127.0.0.1:3002'
}
// var options = {
//   'www.printhappily.com': 'http://127.0.0.1:3001',
//   'www.bharatqrscan.com': 'http://127.0.0.1:3002'
// }

http.createServer(function(req, res) {
  proxy.web(req, res, {
    target: options[req.headers.host]
  });
}).listen(80);