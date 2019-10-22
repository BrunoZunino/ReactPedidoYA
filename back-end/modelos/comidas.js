const client = require('../client');

async function getIdFood(id){
  let query = await client.query(`SELECT * FROM restaurantecomida rc inner join comida c on rc.codigo = c.codigo WHERE rc.rut = ${id}`);
  return query;
};

async function categories() {
  let query = await client.query('SELECT tipo FROM comida');
  return query;
};

module.exports = {
  getIdFood,
  categories
};