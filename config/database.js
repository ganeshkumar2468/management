const mysql = require('mysql');
var pool = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Mysql@123",
    database: "test"
  });
  
  pool.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  module.exports = pool