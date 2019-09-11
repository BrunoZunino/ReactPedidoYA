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

const valorEncriptacion = 100;
let key = 'password';

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
});


app.post('/register/sign_up', (req, res) => {
  console.log(req);
  const password = req.body.pass;
  console.log('password -->', password);
  let salt = bcrypt.genSaltSync(10);
  let hash =  bcrypt.hashSync(password, salt);



  console.log('encripted password -->', hash);
  const query = `INSERT INTO cliente (nombre, apellido, correo, contraseña, pais) VALUES ('${req.body.name}', '${req.body.lastName}', '${req.body.email}', '${hash}','${req.body.country}');`
  console.log(query); 
  client.query(query, (err, response) => {
    console.log(response, err);
    res.send(response);
  });
});

app.post('/login/sign_in', (req, res) => {
  console.log('test/cliente');
  let email = req.body.email;
  let password = req.body.pass;
  client.query(`SELECT correo, contraseña FROM cliente where correo = '${email}'`, (err, response) => {
    console.log(response);
    try{
      if(response.rows.length > 0){
        let pass = response.rows[0].contraseña;
        if(bcrypt.compareSync(password, pass)){
          // TODO: Login valido
          res.send(true);
        }else{
          // TODO: Retornar un error
          throw 'login error'
        }
      }else{
        // TODO: retornar un error
        throw 'mail no existe'
      }
    }catch(err){
      res.status(500).send(err);
    }
  });
});

app.get('/test/restaurante/:rut', (req, res) => {
  console.log(req.params.rut)
  client.query(`SELECT * FROM restaurante where rut=${req.params.rut}`, (err, response) => {
    res.send(response.rows);
  });
});

app.get('/restaurant', async (req, res) => {
  let result = await client.query('SELECT * FROM restaurante');
  res.send(result.rows);
});

app.get('/food/:id', async (req, res) => {
  let id = req.params.id;
  let result = await client.query(`SELECT * FROM restaurantecomida rc inner join comida c on rc.codigo = c.codigo WHERE rc.rut = ${id}`);
  res.send(result.rows);
});

app.get('/food/ingredients/:codigo', async (req, res) => {
  let codigo = req.params.codigo;
  let result = await client.query(`SELECT * FROM ingredientescomida ic inner join comida c on ic.codigo = c.codigo WHERE ic.codigo = ${codigo}`);
  res.send(result.rows);
});

app.get('/test/', (req, res) => {
  client.query('SELECT * FROM ingredientescomida ic inner join comida c on ic.codigo = c.codigo WHERE ic.codigo = 1', (err, response) => {
    console.log(response);
    res.send(response.rows);
  });
});

app.get('/categories', async (req, res) => {
  let result = await client.query('SELECT tipo FROM comida');
  res.send(result.rows);
});

app.get('/restaurantFood', async (req, res) => {
  let result = await client.query('SELECT * FROM restaurantecomida');
  res.send(result.rows);
});

app.get('/test/cliente', async (req, res) => {
  let result = await client.query('SELECT * FROM cliente');
  res.send(result.rows);
});


// Web server 

app.use(express.static(path.join(__dirname, 'build/index.html')));

app.get('*', (req,res) => {
  res.sendFile('C:/Users/Alumno/Desktop/ReactPedidoYa/my-app/build/index.html');
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);