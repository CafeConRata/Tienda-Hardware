const Express = require('express')
const Rutas = Express.Router()

const {RegistrarUsuario} = require('../Controller/LoginController')
const {VerificarToken} = require('../Utils/Token')


Rutas.post('/RegistrarUser', RegistrarUsuario)

module.exports = Rutas;