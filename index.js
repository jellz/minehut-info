const express = require('express');
const app = express();
const port = process.env.PORT || 3002;

app.set('views', './views');
app.set('view engine', 'ntl');
app.engine('ntl', require('./engine.js'));

app.use('/static', express.static('static'));

app.use('/', require('./routes/index.js'));

app.use(function(req, res) {
    res.status(404).send('404');
});

app.listen(port);
console.log(`Listening on ${port}.`);
