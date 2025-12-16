const express = require('express');
const router = express.Router();
const upload = require('../Config/MulterConfig');
const { verificarRol } = require('../Middlewares/roles');

const {
    CargarProductos,
    ActualizarProducto,
    EliminarProducto,
    ObtenerProductos
} = require('../Controller/CargarProductos');

router.post(
    '/CargarUnProducto',
     upload.single('imagen'),
     verificarRol([1, 2]),
     CargarProductos
    );

router.put('/productos/:id', upload.single('imagen'), verificarRol([1, 2]), ActualizarProducto);

router.delete('/productos/:id', verificarRol([1]), EliminarProducto);

router.get('/ObtenerProductos', ObtenerProductos)

module.exports = router;