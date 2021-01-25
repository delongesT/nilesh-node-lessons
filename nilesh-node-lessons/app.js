var http = require('http');

http.createServer(function(req, res){
    let object = {
        name : "Prashant"
    }


    res.writeHead(200, {'Content-Type': 'text/json'});
    res.write(JSON.stringify(object));
    res.end();
}).listen(6700,function(){
    console.log("Server listening to ", 6700)
})