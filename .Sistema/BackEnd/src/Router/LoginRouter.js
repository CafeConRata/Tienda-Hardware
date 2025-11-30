const Express = require('express')

const Rutas = Express.Router()

const {RegistrarUsuario} = require('../Controller/LoginController')

Rutas.post('/RegistrarUser', RegistrarUsuario)

module.exports = Rutas;