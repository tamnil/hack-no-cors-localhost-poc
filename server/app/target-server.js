/**
 * the target
 *
 */

const express = require("express");
var bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

console.log("im the target");

app.use(
    cors({
        origin: "http://localhost",
        // origin: "https://asadf.com",
        credentials: true,
        methods: ["GET"]
    })
);

app.listen(80, function() {
    console.log("CORS-enabled web server listening on port 80");
});

app.get("/", (req, res) => {
    res.send("hello cors, im the target, you have got the flag!!!!");
});
