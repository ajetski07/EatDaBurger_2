const mysql = require('mysql');

const connection = mysql.createConnection({
	port: '3306',
	host: 'localhost',
	user: 'root',
	password: 'ErinMolly07',
	database: 'burgers_db'
});

connection.connect(function (err) {
	if (err) {
		return console.error('error: ' + err.message);
	}

	console.log('Connected to the MySQL server.');
});

module.exports = connection;
