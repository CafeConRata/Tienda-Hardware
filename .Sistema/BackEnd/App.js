const Express = require('express')
const App= Express();

require('dotenv').config();

const PORT= process.env.PORT || 5000

App.use(Express.json());
const cors = require('cors')
App.use(cors())

const LoginRouter = require("./src/Router/LoginRouter");
App.use('/api', LoginRouter);

const Router = require('./src/Router/RegisterRouter')
App.use('/api', Router);

const ProductoRouter = require("./src/Router/ProductosRouter");
App.use("/cargar", ProductoRouter);

App.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})