const express = require('express')

const App= express()

require('dotenv').config()

const PORT= process.env.PORT || 5000

const LoginController = require('./src|Router/LoginController')
App.use('/api',LoginController)

App.use(express.json())


App.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})