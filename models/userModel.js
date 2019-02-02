const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: String,
    address: String,
    publishedSongs: [String],
    ownedSongs: [String],
});

module.exports = mongoose.model("User",userSchema);