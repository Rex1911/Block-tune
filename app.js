const express    = require("express"),
      app        = express(),
      bodyParser = require('body-parser'),
      path       = require("path"),
      mongoose   = require("mongoose"),
      authRoutes = require("./routes/auth/authRoutes");

//=======================
// DATABASE CONFIG
//=======================
mongoose.connect("mongodb://localhost/blocktune", { useNewUrlParser: true });

app.use(express.static(path.resolve(__dirname,"client")));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

let testUser = {
    name: "Aryan",
    address: "0xD45A30c055D50545165268be8cff682Cd11f486c",
    publishedSongs: [],
    ownedSongs: []
}

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
