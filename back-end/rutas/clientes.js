const express = require('express');
const router = express.Router();

const Clientes = require('../modelos/cliente');

const client = require('../client');

const valorEncriptacion = 100;
let key = 'password';

router.post('/register/sign_up', (req, res) => {
  console.log(req);

  const params = {
    password: req.body.pass,
    name: req.body.name,
    lastName: req.body.lastName,
    email: req.body.email,
    country: req.body.country,
  }
  let salt = bcrypt.genSaltSync(10);
  let hash =  bcrypt.hashSync(password, salt);

  result = await Clientes.register(params, hash);
  res.send(result.rows);
});

router.post('/login/sign_in', (req, res) => {
  const params = {
   email: req.body.email,
   pass: req.body.pass,
  }
  result = await Clientes.login(params);
  res.send(result.rows);
});

router.get('/test/cliente', async (req, res) => {
  let result = await client.query('SELECT * FROM cliente');
  res.send(result.rows);
});

module.exports = router;