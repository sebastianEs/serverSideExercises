const https = require('https'),
      http = require('http');
let data = '';

    https.get('https://yhjust16.herokuapp.com/lorem', (res) =>{
      
        res.on('data', (d)=>{
            data += d;
            console.log(data)
        });
        res.on('end', () =>{
            
            http.createServer((req,result)=>{
                result.write('<h1>Lorem</h1>');
                result.write("<p>" + data + "</p>")
                result.end();
            }).listen(3000)
            
        })
        
    }).on('error', (err)=>{
        console.error(err);
    })
//************************* exercise 1.9 ********************************
// a server that uses get request from the url and writes the text content in the rowser.
      