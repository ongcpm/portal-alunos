var express = require('express');
var app = express();
app.use(express.static('dist/frontend2'));
app.get('/', function (req, res,next) {
    res.redirect('/');
});
app.listen(8080)