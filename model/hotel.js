const mongoose = require('mongoose')

const hotelSchema = new mongoose.Schema({
    address: {
        building: String,
        coord: [Number],
        street: String,
        zipcode: String,
    },
    borough: String,
    cuisine: String,
    grades: [{
        date: Date,
        grade: String,
        score: Number
    }],
    name: String,
    restaurant_id: Number,

})

module.exports = mongoose.model('hotel', hotelSchema)