/**
 * the  the vulnerabe app
 *
 */

const express = require("express"),
    bodyParser = require("body-parser"),
    cors = require("cors"),
    axios = require("axios");

const app = express();

console.log("im the  the vulnerable app");

app.use(
    cors({
        origin: "*",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE"
    })
);

app.listen(8081, function() {
    console.log("exploited app started on port 8081");
});

app.get("/", (req, res) => {
    console.log("calling target");
    axios
        .get("http://localhost:80")
        .then(response => {

let resToJson = JSON.stringify(response.data)
            res.send("cors call success" + resToJson);
            console.log(response,response.data);
        })
        .catch(error => {
            res.send("cors error");
            console.log(error);
        });
});
