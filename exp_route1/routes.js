var express = require('express');
var router = express.Router();

router.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html');
});

router.get('/user/:userID', (req,res) => {
    var userID = req.params.userID;
    console.log(userID);
    res.render('user', {
        username: 'sebbe',
        userID: userID
    })
})



router.get('*', (req, res) => {
    res.status(404).render('404', {
        title: '404 - not found'
    });
});

module.exports = router;
