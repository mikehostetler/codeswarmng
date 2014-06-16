var express = require("express"),
    fs = require('fs'),
    app = express(),
    bodyParser = require('body-parser'),
    errorHandler = require('errorhandler'),
    methodOverride = require('method-override'),
    port = parseInt(process.env.PORT, 10) || 4567;

var index = fs.readFileSync(__dirname + '/../public/index.html');
fs.watchFile(__dirname + '/../public/index.html', function (curr, prev) {
    console.log("RELOADING INDEX.HTML!!!!!");
    index = fs.readFileSync(__dirname + '/../public/index.html');
});

app.get("/", function (req, res) {
    console.log("/ Address: ", req.connection.remoteAddress);
    console.log("CONNECTION FROM: ", req.headers)
    res.set('Content-Type', 'text/html');
    res.send(index);
});

app.use(methodOverride());
app.use(bodyParser());
app.use(express.static(__dirname + '/../public'));
app.use(errorHandler({
    dumpExceptions: true,
    showStack: true
}));

app.listen(port);