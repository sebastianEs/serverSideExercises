const https = require('https');

https.get('https://yhjust16.herokuapp.com/lorem', (res) => {
    
    console.log('statusCode: ', res.statusCode);
    
    res.on('data', (d) => {
        process.stdout.write(d);
    });
    
    
}).on('error', (e) => {
    console.log('Error!: ' + e);
})