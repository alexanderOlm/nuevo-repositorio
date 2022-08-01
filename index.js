/*const http = require('http');
const colors = require('colors');
const handleserver = function(req ,res){
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write('<h1>Hola dennis pardo </h1>');
    res.end();

}
const server = http.createServer(handleserver);
server.listen(3800,function(){
    console.log('Server on port 3000' .cyan);
});
*/
const express= require('express');
const colors = require ('colors');
const server = express();

server.get('/', function(req, res){
    res.send('<h1>Hola trabajo con node y express');
    res.end();

} );
server.listen(3800, function(){
    console.log('Server on part 3800' .cyans);    
});