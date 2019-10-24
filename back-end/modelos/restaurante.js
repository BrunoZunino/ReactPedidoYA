const client = require('../client');

async function restaurantId(rut){
  let query = await client.query(`SELECT * FROM restaurante where rut=${rut}`);
  return query;
};

async function restaurant() {
  let query = await client.query('SELECT * FROM restaurante');
  return query;
};

async function restaurantFood() {
  let query = await client.query('SELECT * FROM restaurantecomida');
  return query;
};


module.exports = {
  restaurantId,
  restaurant,
  restaurantFood
};