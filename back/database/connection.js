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
}

check();
module.exports = client; 