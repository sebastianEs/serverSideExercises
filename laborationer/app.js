var mongoose = require('mongoose'),
    Movie = require('./models/movieModels.js'),
    Actor = require('./models/actorsModels.js');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/movieDB', {
    useMongoClient: true
});

var actor = new Actor({
    "name.first": "John",
    "name.last": "travolta"
})

var actor2 = new Actor({
    "name.first": "Bil",
    "name.last": "Skarsgård"
})

actor.save(function(err) {
    if(err) 
        console.log(err)
    
    var film1 = new Movie({
    title: "Pulp Fiction",
    year: 1994,
    actors: actor._id,
    ratings: [1,2,3,4,5]
})

var film2 = new Movie({
    title: "IT",
    year: 2017,
    actors: actor._id,
    ratings: [1,2,3,4,5]
})

film1.save(function(err,result) {
    if(err)
        console.log(err) 
    console.log('Filmen ' + film1.title + " sparades.")
})
film2.save(function(err,result) {
    if(err)
        console.log(err) 
    console.log('Filmen ' + film2.actors + " sparades.")
})
     
})

