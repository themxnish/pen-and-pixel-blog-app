const {Client} = require('pg');
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'blogdb',
    password: '6890',
    port: 5432
});

async function check(){
    await client.connect();
    // const res = await client.query("SELECT * FROM blogs");
    // console.log(res.rows);
    // await client.end();
}

check();
module.exports = client;