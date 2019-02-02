const mongoose = require('mongoose');

const songSchema = mongoose.Schema({
    name: String,
    contractAddress: String,
    genre: String,
    duration: String,
    artist: String,
    contributers: {
        address: String,
        accepted: {
            type: Boolean,
            default: false
        }
    }
});

module.exports = mongoose.model("Song",songSchema);