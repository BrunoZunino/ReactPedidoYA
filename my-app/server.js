const express = require('express');
const { Client } = require("pg");
const path = require('path');
const app = express();

// Connection to Postgresql in virtual box server.
const client = new Client({
  user: 'postgres',
  host: '10.1.8.43',
  database: 'Test',
  password: 'test1234',
  port: 5432,
})

client.connect(err => {
  if (err) {
    console.error('connection error', err.stack)
  } else {
    console.log('connected')
  }
})

app.get('/', (req, res) => {
  client.query('SELECT * FROM cliente', (err, response) => {
    console.log(response);
    res.send(response.rows);
    client.end()
  });
});


// Web server 

app.use(express.static(path.join(__dirname, 'build/index.html')));

app.get('*', (req,res) => {
  res.sendFile('C:/Users/Alumno/Desktop/ReactPedidoYa/my-app/build/index.html');
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);