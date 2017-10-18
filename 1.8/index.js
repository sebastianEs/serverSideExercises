const https = require('https');

https.get('https://yhjust16.herokuapp.com/nobel', (res) => {
    console.log('statusCode: ', res.statusCode);
    let data = "";
    res.on('data', (d) => {
        data = 
    });
}).on('error', (e) => {
    console.log('Error!: ' + e);
});