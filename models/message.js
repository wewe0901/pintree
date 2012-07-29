// Message Model

var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,ObjectId = Schema.ObjectId;


var messageSchema = new Schema({
        title: String,
        date: {type: Date, default: Date.now},
        message: String
});


module.exports = mongoose.model('message',messageSchema);

