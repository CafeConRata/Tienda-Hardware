const express = require('express')

const App= express()

require('dotenv').config()

const PORT= process.env.PORT || 5000

App.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})