const express = require('express');
const router = express.Router();
const { CargarProducto} = require('../Controller/CargarProductos');

router.post('/CargarUnProducto', CargarProducto);

module.exports = router;