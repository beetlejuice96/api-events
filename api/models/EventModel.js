'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EventSchema = new Schema({
    title:{
        type:String
    },
    description:{
        type:String
    },
    relates:{
        type:Array
    },
    bindings:{
        type:Array
    },
    owner_id:{
        type:String
    },
    view_count:{
        type:"number",
    },
    expiration_date:{
        type:Date
    }
});

module.exports = mongoose.model('Event',EventSchema);
