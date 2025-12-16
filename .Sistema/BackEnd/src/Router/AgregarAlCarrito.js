const express = require('express');
const router = express.Router();

const { 
        AgregarAlCarrito, 
        verCarrito,
    } = require('../Controller/CarritoController');
const verificarToken = require('../Middlewares/auth');

// agregar producto al carrito
router.post('/agregar', verificarToken, AgregarAlCarrito);
router.get('/carrito', verificarToken, verCarrito);

module.exports = router;