const express       = require("express"),
      app           = express(),
      bodyParser    = require('body-parser'),
      path          = require("path"),
      mongoose      = require("mongoose"),
      authRoutes    = require("./routes/authRoutes"),
      songRoutes    = require("./routes/songRoutes"),
      fileUpload    = require('express-fileupload'),
      cors          = require('cors');

//=======================
// DATABASE CONFIG
//=======================
mongoose.connect("mongodb://localhost/blocktune", { useNewUrlParser: true });

app.use(express.static(path.resolve(__dirname,"client")));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(fileUpload())

//=======================
// Routes
//=======================
// For all auth routes for login, signup etc.
app.use("/auth", authRoutes);
app.use("/song", songRoutes);

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
