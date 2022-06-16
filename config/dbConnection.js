var mysql = require('mysql');

const connMySQL = function(){
	return mysql.createConnection({
			host : 'localhost',
			user : 'root',
			password : 'root',
			database : 'portal_noticias'
		});
}

module.exports = function () {
	return connMySQL;
}