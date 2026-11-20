const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead (200,{
        "content-type" : 'text/plain text',
        "server" : 'node.js'
    });
    res.end('Hello World');

});
server.listen(3005, () => {
    console.log('Server running at http://localhost:3000');
});
