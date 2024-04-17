// Create web server
// Create a web server that listens to a port and sends a response to the client. The server should return the following response to the client:
//
// {
//   "message": "Hello, world!"
// }
// The server should listen to the port number supplied as the first command-line argument.

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'Hello, world!' }));
});

server.listen(process.argv[2]);