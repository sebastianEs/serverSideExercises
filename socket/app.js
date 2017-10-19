var express = require('express');
var app = express();
var http = require('http');
var server = http.Server(app)
var io = require('socket.io')(server);

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html');

})

io.on('connection', (socket) => {
    console.log("A user connected");
    socket.io('disconnect', () => {
        console.log('gone!');
    });
    socket.on('chat message', (msg) => {
        io.emit('chat message', (msg) );
    })
})

app.listen(4000, () => {
    console.log('Server is up and running at 4000!');
})