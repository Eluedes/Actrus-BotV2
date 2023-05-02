var mysql = require('mysql');
const config = require('../../configuration.json')
var connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE
});

module.exports = {
    name: 'online',
    type: 1,
    description: 'Nostra se o Hotel ta on',

    execute: (inter, client) => {
        connection.query("SELECT username FROM users WHERE online = '1'", function (err, result) {
            if (err) { console.log(err); return; }
            inter.reply(result.length + ` ${config.hotel.hotelName}'s online`);
        });
    },

};
