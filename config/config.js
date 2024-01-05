const mysql = require('mysql');
var pool = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
  });
  
  pool.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  module.exports = pool