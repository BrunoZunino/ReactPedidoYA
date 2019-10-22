const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: '10.1.2.2',
  database: 'picante',
  password: 'password',
  port: 5432,
})

client.connect(err => {
  if (err) {
    console.error('connection error', err.stack)
  } else {
    console.log('connected')
  }
});


module.exports = client;