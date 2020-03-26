var http = require('http');

var server = http.createServer(function(req,res){
    res.write('<h1>Welcome to Node js  App</h1>');
    res.end()
});

server.listen(7800);