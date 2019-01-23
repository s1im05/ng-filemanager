const PORT = process.env.PORT || 8080;

const express = require('express'),
    cors = require('cors'),
    path = require('path'),
    bodyParser = require('body-parser'),
    app = express();

app.use(bodyParser.json({
    limit: '50mb'
}));

app.use('/', express.static('server/build'));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname,'build/index.html'));
});

app.listen(PORT);
