var http = require('http');
var os = require('os');
var fs = require('fs');

var server = http.createServer(function(req,res){
    fs.appendFile('description.txt',os.platform(),function(err){
        if(err) throw err;
    })
    fs.readFile('description.txt','utf-8',function(err,data){
        if(err) throw err;
        res.write("You are using "+data);
        res.end()
    })
});

server.listen(9800);