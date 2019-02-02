const express   = require('express'),
      router    = express.Router(),
      Song      = require('../models/songModel');

// To add new song
router.post('/temp', (req, res) => {
    const newSong = new Song({
        name: req.body.name,
        contractAddress: req.body.contractAddress,
        price: req.body.price,
        genre: req.body.genre,
        artist: req.body.artist,
        numberContributers: req.body.contributers,
        contributers: req.body.contributerArray,
        id: req.body.id
    });
    newSong.save()
        .then(a => res.status(200).json({success: true}))
        .catch(console.log);
});

router.get('/', (req, res) => {
    Song.find()
        .then(list => res.json(list))
        .catch(console.log);
})

module.exports = router;