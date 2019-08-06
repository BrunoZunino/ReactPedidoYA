const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const { Client } = require('pg')
const initDB = require('./initDB');

const client = new Client({
  user: 'postgres',
  host: '10.1.2.2',
  database: 'picante',
  password: 'password',
  port: 5432,
})

client.connect();

initDB(client, function(){
  console.log("BD lista");
});

app.listen(70);

app.get('/categorias', function(req, res){
  selectCategorias(function(err, result) {
    res.send(result);
  });
});

app.get('/categorias/:id', function(req, res){
  const id = req.params.id;
  selectCategoria(id, function(err, result) {
    res.send(result);
  });
});

app.get('/categorias/:id/cosas', function(req, res){
  const id = req.params.id;
  selectCosas(id, function(err, result){
    res.send(result);
  });
});

function selectCategorias(callback) {
  const query = `select * from categorias;`;
  client.query(query, callback)
}

function selectCategoria(id, callback) {
  const query = `select categorias.* from categorias
                where id = ${id};`;
  client.query(query, callback)
}

function selectCosas(categoria_id, callback) {
  const query =   `select cosas.nombre from cosas
                  inner join cosas_categorias on cosas_categorias.cosa_id=cosas.id 
                  where cosas_categorias.categoria_id=${categoria_id};`
  client.query(query, callback);
}