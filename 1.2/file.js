
var port =3000;
var http =require('http');

const server=http.createServer((req,res) => {
   res.write("this is my server!");
   res.end();
});
console.log("server listening to port "+ port)
server.listen(port);
//****************** exercise 1.2 *********************
// creates a server at port 3000 and the response (res) writes the string in the browser.
