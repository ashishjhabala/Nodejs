const { response } = require('express');
const http = require('http');

const server = http.createServer((req, res) => {
    
const msg=console.log('request made');
res.send(msg);

});

server.listen(3000,'localhost', () => {
console.log('listening for requests on port 3000');
});