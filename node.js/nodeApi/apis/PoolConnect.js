const Pool = require('pg').Pool

var pool = new Pool({
        user: "postgres",
        host: "127.0.0.1",
        database: "sheet",
        password: '1234',
        port: "5432"
    })

