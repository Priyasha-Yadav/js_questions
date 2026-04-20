const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    email: String,

    mobile: {
        type: String,
        required: true
    }
})

module.exports = model('User', userSchema)