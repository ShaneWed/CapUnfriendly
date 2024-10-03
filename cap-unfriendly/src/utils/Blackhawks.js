const {
    createPool
} = require('mysql');

const pool = createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "unfriendly_data",
    connectionLimit: 10
})

function Blackhawks() {
    pool.query(`select * from blackhawks where espnName='Connor Bedard'`, (err, result, fields) => {
        if(err) {
            return console.log(err);
        }
        return console.log(result);
    })
}

Blackhawks();