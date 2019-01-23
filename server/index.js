const PORT = process.env.PORT || 8080;

const express = require('express'),
    cors = require('cors'),
    path = require('path'),
    bodyParser = require('body-parser'),
    _explore = require('./_explore.js'),
    app = express();

app.use(bodyParser.json({
    limit: '50mb'
}));

app.use('/', express.static('server/build'));
app.use(cors());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build/index.html'));
});

app.get('/dir', (req, res, next) => {
    if (process.env.ROOT) {
        res.json(_explore.dir(process.env.ROOT, req.query.path || ''));
    } else {
        res.error({msg: 'Oh, now'});
    }
});

app.listen(PORT);
