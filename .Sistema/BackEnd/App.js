const express = require('express')

const App= express()

require('dotenv').config()

const PORT= process.env.PORT || 5000

App.use(express.json())
const cors = require('cors')
App.use(cors())

const Router = require('./src/Router/Login.Router')
App.use('/api', Router)

App.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})