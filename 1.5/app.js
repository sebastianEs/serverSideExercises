var http = require('http')
var port = 3000;
var fs = require('fs');



var server = http.createServer((req,res) =>{
 res.statusCode = 200;
 var readMe = fs.readFileSync('file.txt', 'utf8');

console.log(readMe);
 res.end(readMe);
});

server.listen(port);
console.log('server is listening to ' + port)
//****************************** exercise 1.5 *********************
// creates a server on port 3000 and uses the fs module and readFileSync to write a lorem ipsum text in the browser.