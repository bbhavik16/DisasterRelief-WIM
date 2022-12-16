const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');
const findOrCreate = require('mongoose-findorcreate');
const UserSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    details: {
        type: Schema.Types.ObjectId,
        ref: 'Volunteer'
    },
    googleId: {
        type: String
    }
});

UserSchema.plugin(passportLocalMongoose);
UserSchema.plugin(findOrCreate)
module.exports = mongoose.model('User', UserSchema);