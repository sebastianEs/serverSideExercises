var http = require('http'),
    fs = require('fs');

let array=[]

fs.readFile('./text.txt', function(err,data){
    if(err)
        console.log(err)
    console.log(data)
    array.push(data.toString());
    array = data.split('t')
})

http.createServer((req,res) => {
    
    array.forEach(function(word){
        res.write(word);
    })
    res.end();
}).listen(3000)
console.log("server is alive at port 3000")
