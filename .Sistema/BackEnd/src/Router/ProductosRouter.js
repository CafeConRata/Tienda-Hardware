const express = require('express');
const router = express.Router();
const { CargarProducto, ActualizarProducto } = require('../Controller/CargarProductos');

router.post('/CargarUnProducto', CargarProducto);
router.put('/productos/:id', ActualizarProducto);

module.exports = router;