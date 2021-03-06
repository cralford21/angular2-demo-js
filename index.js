var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname + '/public')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/src/index.html'));
})

app.listen(3000, function() {
    console.log('Serving on port 3000...')
})
