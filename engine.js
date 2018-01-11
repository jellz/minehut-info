const fs = require('fs')

module.exports = function (filePath, options, callback) {
    fs.readFile(filePath, function (err, content) {
      if (err) return callback(err);
      var rendered = content.toString()
      .replace('{{{name}}}', options.name)
      .replace('{{{name}}}', options.name)
      .replace('{{{name}}}', options.name)
      .replace('{{{ip}}}', options.ip)
      .replace('{{{motd}}}', options.motd)
      .replace('{{{onlinePlayers}}}', options.onlinePlayers)
      .replace('{{{maxPlayers}}}', options.maxPlayers)
      .replace('{{{creation}}}', options.creation)
      .replace('{{{creditsPerDay}}}', options.creditsPerDay)
      .replace('{{{status}}}', options.status);
      return callback(null, rendered);
    });
};