const { Schema, model } = require('mongoose');


const authorSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    age: Number,
    address: {
        type: String,
        maxlength: 200
    },
    mobile: String,
    noOfBooksPublished: Number
})

module.exports = model('Author', authorSchema);