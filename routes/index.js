const express = require('express');
const router = express.Router();
const mh = new (require("minehut-api"))();

router.get('/', async function(req, res) {
    if (!req.query.server) return res.render('index', {});
    var serverName = req.query.server;
    const serverSession = await mh.getServerSessionByName(serverName);
    const server = await mh.getServerByName(serverName);
    if (!server) return res.render('invalid', { name: serverName });
    if (!serverSession) {
        playerCount = 0;
        status = 'offline';
    } else {
        playerCount = serverSession['playerCount'];
        status = 'online';
    }
    const options = {
        name: serverName,
        ip: serverName + '.minehut.gg',
        motd: server['motd'],
        onlinePlayers: playerCount,
        maxPlayers: server.server_properties['max_players'],
        creation: new Date(server['creation']).toDateString(),
        creditsPerDay: server['credits_per_day'],
        status: status
    }
    res.render('server', options);
});

module.exports = router;