const express = require("express"),
    app = express()

app.set("view engine", "ejs");
require('dotenv').config();
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    currentDate = new Date();
    const timestamp = currentDate.toString();
    res.render("./index", { timeNow: timestamp });
});

app.listen(process.env.PORT, function () {
    console.log(`Closing Announcement Generator has started on port ${process.env.PORT} ...`);
});