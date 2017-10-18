var mongoose = require('mongoose'),
    Movie = require('./models/movieModels.js'),
    Actor = require('./models/actorsModels.js');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/movieDB', {
    useMongoClient: true
});

Movie
    .findOne({
    title: "Pulp Fiction"
})
.populate('actor')
.exec(function(err,movie) {
    if(err)
        console.log(err)
        console.log('name of actor is ' + movie.actor.first + ' ' + movie.actor.last)
})