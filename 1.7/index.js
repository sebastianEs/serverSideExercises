const https = require('https');

https.get('https://yhjust16.herokuapp.com/lorem', (res) => {
    
    console.log('statusCode: ', res.statusCode);
    
    res.on('data', (d) => {
        process.stdout.write(d);
    });
    
    
}).on('error', (e) => {
    console.log('Error!: ' + e);
})
//************************** exercise 1.7 **************************
// makes a https get request at the url and writes the data in the console.