const express = require('express');
const app = express();

app.set('views', './views');
app.set('view engine', 'ntl');
app.engine('ntl', require('./engine.js'));

app.use('/static', express.static('static'));

app.use('/', require('./routes/index.js'));

app.use(function(req, res) {
    res.status(404).send('404');
});

app.listen(6969);
console.log('Listening on 6969.');
