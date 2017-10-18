var mongoose =require('mongoose'),
    Schema = mongoose.Schema;

var actorsSchema = new Schema({
    name: {
        first: String,
        last: String
    }
})

module.exports =mongoose.model('Actor', actorsSchema);