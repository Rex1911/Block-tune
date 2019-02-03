const express   = require('express'),
      router    = express.Router(),
      Song      = require('../models/songModel'),
      User      = require('../models/userModel');

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

    console.log(req.body.address)
    User.update({address:req.body.address}, {"$push" : {"publishedSongs": req.body.contractAddress}})
        .then(a => {
            res.status(200).json({success:true})
        })
        .catch(err => res.status(404).json({success:false}));
});

router.get('/', (req, res) => {
    Song.find()
        .then(list => res.json(list))
        .catch(console.log);
});

router.post('/purchase', (req, res) => {
    let query = { address: req.body.publishedUserAddress };
    console.log(query)
    User.update( query, { "$push": { "ownedSongs": req.body.publishedSongAddress }})
        .then(a => res.status(200).json({success: true}))
        .catch(err => res.status(404).json({success: false}));
});

router.post('/owned', (req, res) => {
    console.log("Recive rew")
    User.find({address: req.body.address})
        .then(user => res.json(user))
        .catch(err => res.status(404).json({success: false}));
})

router.post('/published', (req, res) => {
    console.log("Recive rew")
    User.find({address: req.body.address})
        .then(user => res.json(user))
        .catch(err => res.status(404).json({success: false}));
})

router.post('/ownedSong', (req, res) => {
    Song.find({contractAddress: req.body.ownedAddress})
        .then(song => res.json(song))
        .catch(err => res.status(404).json({success: false}));
})

router.post('/publishedSong', (req, res) => {
    Song.find({contractAddress: req.body.publishedAddress})
        .then(song => res.json(song))
        .catch(err => res.status(404).json({success: false}));
})

router.post('/search', (req, res) => {
    Song.find({$or: [{name: req.body.search}, {artist: req.body.search}, {genre: req.body.search}]})
        .then(searchResults => res.json(searchResults))
        .catch(console.log);
});

router.post("/upload",(req,res) => {
    let uploadFile = req.files.file;
    let fileName = req.files.file.name
    uploadFile.mv(
        `${__dirname}/files/${fileName}`,
        (err) => {
            if(err) {
                console.log("Error in uploading")
                console.log(err);
            } else {
                res.json({success:true})
            }
        }
    )
})

router.get("/download/:name", (req, res) => {
    let name = req.params.name;
    let path = __dirname + '/files/' + name;
    res.download(path);
})

module.exports = router;