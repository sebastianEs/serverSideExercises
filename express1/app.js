var express = require('express');
var app = express();

var users = require('./users.json');

app.use(express.static('css'));

var findUser = function(userName, callback) {
    if(!users[userName]) 
        return callback(new Error(
            'No username found ' 
        
        )
    );
    return callback(null, users[userName]);
}

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

app.get('/user', function(req,res) {
    var userName = req.query.userName;
    findUser(userName, function(error, user) {
        if(error) 
            return res.end("Error!: " + error);
        return res.json(user);
        console.log('userName: ', user);
    });
});


app.listen(3000, () => {
	console.log("Nu lyssnar vi på 3000.");
});
