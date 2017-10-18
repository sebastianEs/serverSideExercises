var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var movieSchema = new Schema({
    title: {
        type: String,
        requierd: "Filmen måste ha en titel",
        unique: true
    },
    year: Number,
    actors: { type: Schema.Types.ObjectId, ref: 'Actor'},
    ratings: [{type: Number}]
})

module.exports = mongoose.model('Movie', movieSchema)