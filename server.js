var http = require('http');
var httpProxy = require('http-proxy');

var proxy = httpProxy.createProxy();
var options = {  
  'www.server1.com': 'http://127.0.0.1:3001',
  'www.server2.com': 'http://127.0.0.1:3002',
  'www.printhappily.com': 'http://127.0.0.1:3001',
  'www.bharatqrscan.com': 'http://127.0.0.1:3002',
  'printhappily.com': 'http://127.0.0.1:3001',
  'bharatqrscan.com': 'http://127.0.0.1:3002'
}


http.createServer(function(req, res) {
	if(options[req.headers.host]=== undefined){
		target='http://127.0.0.1:3001';
	}else{
		target=options[req.headers.host];
	}
  proxy.web(req, res, {
    target: target
  });
}).listen(80);