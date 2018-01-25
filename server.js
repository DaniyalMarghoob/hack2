var http = require('http');
const url = require('url');

const visits = {};

var handle_request = function(request, response){

	const { pathname } = url.parse(request.url)
	console.log('Received request for URL: ' + request.url);
		if (visits[pathname]) {
			visits[pathname] = visits[pathname] + 1;
		} else {
			visits[pathname] = 1;
		}
	response.writeHead(200);
	response.end(`This page has ${visits[pathname]} visits!`);
};
var www = http.createServer(handle_request);
www.listen(8080);




