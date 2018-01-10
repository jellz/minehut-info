const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    if (!req.query.server) return res.render('index', {});
    res.send('You requested the server: '+ req.query.server);
});

module.exports = router;