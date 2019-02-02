const mongoose = require('mongoose');

const songSchema = mongoose.Schema({
    name: String,
    contractAddress: String,
    genre: String,
    artist: String,
    price: Number,
    datePublished: String,
    numberContributers: Number,
    contributers: [
        {
            address: String,
            cut: String,
            accepted: Boolean
        }
    ]
});

module.exports = mongoose.model("Song",songSchema);