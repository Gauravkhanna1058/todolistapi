var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema ({
    name :{
        type :String,
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    email : {
        type: String
    },
    password : {
        type:String
    }
});

module.exports = mongoose.model('User', UserSchema);