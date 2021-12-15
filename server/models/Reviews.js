const { Schema, model } = require("mongoose");

// Not sure what the return data will be for the rating 
// this might have to be adjusted later on

// The data will come from fb API
const reviewSchema = new Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    reviewText:{
        type: String,
        require: false,
        unique: false
    },
    rating: {
        type: String,
        require: true,
        unique: false
    }
});

const Reviews = model("Reviews", reviewSchema);

module.exports = Reviews;