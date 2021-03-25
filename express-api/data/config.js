const mysql = require('mysql');

//set database connection credentials 

const config = { 
    host: '162.243.235.211',
    user: 'user345',
    password: 'Password1@',
    database: 'db345',
}; 

//Create a MYSQL pool
const pool = mysql.createPool(config); 

//export the pool 
module.exports = pool;