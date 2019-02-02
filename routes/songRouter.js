const express   = require('express'),
      router    = express.Router(),
      Song      = require('../models/songModel');

// To add new song
router.post('/', async (req, res) => {
    const newSong = new Song({
        name: req.body.name,
        contractAddress: '',
        genre: req.body.genre,
        duration: req.body.duration,
        artist: req.body.artist,
        contributers: req.body.contributers
    });
    newSong.save()
        .then(a => res.status(200).json({success: true}))
        .catch(err => res.status(404).json({success: false}));
});

module.exports = router;