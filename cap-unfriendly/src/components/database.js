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

export function callBlackhawks() {
    pool.query(`select * from blackhawks`, (err, result, fields) => {
        if(err) {
            return console.log(err);
        }
        
        return console.log(result);
    })
}

console.log('executed');