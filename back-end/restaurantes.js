const express = require('express');
const router = express.Router();

router.get('/test/restaurante/:rut', (req, res) => {
  console.log(req.params.rut)
  client.query(`SELECT * FROM restaurante where rut=${req.params.rut}`, (err, response) => {
    res.send(response.rows);
  });
});

router.get('/restaurant', async (req, res) => {
  let result = await client.query('SELECT * FROM restaurante');
  res.send(result.rows);
});

router.get('/restaurantFood', async (req, res) => {
  let result = await client.query('SELECT * FROM restaurantecomida');
  res.send(result.rows);
});

module.exports = router;