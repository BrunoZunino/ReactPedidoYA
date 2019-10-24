const express = require('express');
const router = express.Router();

const Restaurante = require('../modelos/restaurante');

router.get('/test/restaurante/:rut', async (req, res) => {
  let rut = req.params.rut
  result = await Restaurante.restaurantId(rut);
  res.send(result.rows);
});

router.get('/restaurant', async (req, res) => {
  result = await Restaurante.restaurant();
  res.send(result.rows);
});

router.get('/restaurantFood', async (req, res) => {
  result = await Restaurante.restaurantFood();
  res.send(result.rows);
});

module.exports = router;