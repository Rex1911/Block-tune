const express   = require('express'),
      router    = express.Router(),
      Song      = require('../models/songModel');

// To add new song
router.post('/temp', (req, res) => {
    console.log("Song Posted");
    console.log(req.body);
    const newSong = new Song({
        name: req.body.name,
        contractAddress: '',
        price: req.body.price,
        genre: req.body.genre,
        artist: req.body.artist,
        numberContributers: req.body.contributers,
        contributers: req.body.contributerArray
    });
    newSong.save()
        .then(a => res.status(200).json({success: true}))
        .catch(err => res.status(404).json({success: false}));
});

module.exports = router;