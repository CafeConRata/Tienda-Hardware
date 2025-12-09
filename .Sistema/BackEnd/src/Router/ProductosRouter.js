const express = require('express');
const router = express.Router();
const {
    CargarProductos,
    ActualizarProducto,
    EliminarProducto
} = require('../Controller/CargarProductos');

router.post('/CargarUnProducto', CargarProductos);

router.put('/productos/:id', ActualizarProducto);

router.delete('/productos/:id', EliminarProducto);

module.exports = router;