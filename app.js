'use strict';

const http = require('http');

let counter = 150;

let reqHandler = (req, res) => {
	counter = counter + 1;
	res.writeHead(200, {'Content-Type': 'application/json'});
	res.write(JSON.stringify(counter));
	res.end();
}

const server = http.createServer(reqHandler);

server.listen(3000);
