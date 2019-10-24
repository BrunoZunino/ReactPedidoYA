const express = require('express');
const router = express.Router();

const Comidas = require('../modelos/comidas');

router.get('/categories', async (req, res) => {
  result = await Comidas.categories();
  res.send(result.rows);
});

router.get('/food/:id', async (req, res) => {
  let id = req.params.id;
  result = await Comidas.getIdFood(id);
  res.send(result.rows);
});

router.get('/food/ingredients/:codigo', async (req, res) => {
  let codigo = req.params.codigo;
  result = await Comidas.ingredientesCode(codigo);
  res.send(result.rows);
});

module.exports = router;

