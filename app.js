const express    = require("express"),
      app        = express(),
      bodyParser = require('body-parser'),
      path       = require("path"),
      mongoose   = require("mongoose"),
      authRoutes = require("./routes/auth/authRoutes"),
      User       = require("./models/userModel");

//=======================
// DATABASE CONFIG
//=======================
mongoose.connect("mongodb://localhost/blocktune", { useNewUrlParser: true });

app.use(express.static(path.resolve(__dirname,"client")));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

let testUser = new User({
    name: "Aryan",
    address: "0x780b7F58b201ac352fBD22654d04D82926386aF8",
    publishedSongs: [],
    ownedSongs: []
});
testUser.save()
    .catch(console.log);

//=======================
// Routes
//=======================
// For all auth routes for login, signup etc.
app.use("/auth", authRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,"client","public","index.html"));
});

//=======================
// STARTING THE SERVER
//=======================

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('App listening on port ' + port);
});
