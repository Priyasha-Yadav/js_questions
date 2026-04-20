const mongoose = require('mongoose');


const reviewSchema = new mongoose.Schema({
    reviewer: {
        type: String,
        required: true,
        trim: true
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 10
    },
    comment: {
        type: String,
        trim: true,
        maxLength: 500
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})


const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Movie title is required.'],
        trim: true,
        maxLength: 200
    },

    genre: {
        type: String,
        enum: ['Thriller', 'Romance', 'Horror', 'Sci-Fi', 'Drama', 'Comedy', 'Action'],
        trim: true,
        required: true
    },
    year: {
        type: Number,
        min: 1888,
        max: new Date().getFullYear() + 5,
        required: true
    },
    director: {
        name: {
            type: String,
            required: true,
            trim: true
        },
        nationality: String
    },
    reviews: [reviewSchema]

}, { timestamps: true });



module.exports = mongoose.model('Movie', movieSchema);