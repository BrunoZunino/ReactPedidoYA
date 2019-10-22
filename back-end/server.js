const express = require('express');
const { Client } = require("pg");
const path = require('path');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(cors());
var bcrypt = require('bcrypt');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const https = require('https');


const routerComidas = require('./rutas/comidas');
const routerRestaurantes = require('./restaurantes');
const routerClientes = require('./rutas/clientes');

app.use('/comidas', routerComidas);
app.use('/restaurantes', routerRestaurantes);
app.use('/clientes', routerClientes);

// Web server 

app.use(express.static(path.join(__dirname, 'build/index.html')));

app.get('*', (req,res) => {
  res.sendFile('C:/Users/Alumno/Desktop/ReactPedidoYa/my-app/build/index.html');
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);