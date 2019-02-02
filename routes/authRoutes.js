const express   = require('express'),
      router    = express.Router(),
      User      = require('../models/userModel');

router.post('/login', async (req, res) => {
    console.log(req.body);
    User.find({address:req.body.address} , (err, userList) => {
        if(err) {
            console.log(err);
        } else if(!userList.length) {
            res.json({newUser: true});
        } else {
            let user = userList[0]
            let result = {newUser: false, user}
            res.json(result);
        }
    });
});

router.post('/signin', (req, res) => {
    const newUser = new User({
        name: req.body.name,
        address: req.body.address,
        publishedSongs: [],
        ownedSongs: []
    });
    newUser.save()
        .then(a => res.status(200).json({success: true}))
        .catch(err => res.status(404).json({success: false}));
});

module.exports = router;
