const express = require('express');
const { Client } = require("pg");
const path = require('path');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connection to Postgresql on server.
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
})


app.post('/register/sign_up', (req, res) => {
  console.log(req.body);
  //console.log(req);
  res.send(req.body);
});



// In this section we are getting all the data from the table cliente 
app.get('/test/cliente', (req, res) => {
  console.log('test/cliente');
  client.query('SELECT * FROM cliente', (err, response) => {
    console.log(response);
    res.send(response.rows);
  });
});


app.get('/test/restaurante/:rut', (req, res) => {
  console.log(req.params.rut)
  client.query(`SELECT * FROM restaurante where rut=${req.params.rut}`, (err, response) => {
    res.send(response.rows);
  });
});

app.get('/restaurante_info', (req, res) => {
  console.log(req.params.rut)
  client.query('SELECT nombre, imagen, barrio, calle FROM restaurante where', (err, response) => {
    res.send(response.rows);
  });
});

app.get('/test/', (req, res) => {
  client.query('SELECT * FROM restaurante', (err, response) => {
    console.log(response);
    res.send(response);
  });
});

app.get('/test/food', (req, res) => {
  client.query('SELECT * FROM comida', (err, response) => {
    console.log(response);
    res.send(response);
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