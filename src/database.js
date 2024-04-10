const mysql = require('mysql');
const {promisify} = require('util')
const {database} = require('./keys');

const pool = mysql.createPool(database);

pool.getConnection((err, conn) => {
    if(err){
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            console.error('DATABASE CONNECTION WAS CLOSED');
        }
        if(err.code === 'ER_CON_COUNT_ERROR'){
            console.error('DATABASE HAS TO MANY CONNECTIONS');
        }
        if(err.code === 'ECONNREFUSED'){
            console.error('DATABSE CONNECTION WAS REFUSED');
        }
    }
    if(conn) conn.release();
    console.log('►-----<-<-<- ◄◄◄ DB IS CONNECTED ►►► ->->->-----◄');
    return;   
})

//Promisify Pool Querys...............................
pool.query = promisify(pool.query);

module.exports = pool;