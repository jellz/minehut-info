const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    if (!req.query.server) return res.render('index', {});
    res.render('server', {});
});

module.exports = router;