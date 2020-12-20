// configuring database connection

const mariadb = require('mariadb/callback');

const connection = mariadb.createConnection({
    socketPath: process.env.DB_SOCKET_PATH,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE
});

exports.connection = connection;