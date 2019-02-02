const mongoose = require('mongoose');

const songSchema = mongoose.Schema({
    name: String,
    contractAddress: String,
    genre: String,
    artist: String,
    price: Number,
    datePublished: String,
    numberContributers: Number,
    contributers: {
        address: String,
        cut: Number,
        accepted: {
            type: Boolean,
            default: false
        }
    }
});

module.exports = mongoose.model("Song",songSchema);