const Express = require('express')
const App= Express();

require('dotenv').config();

const PORT= process.env.PORT || 5000

App.use(Express.json());
const cors = require('cors')
App.use(cors())

const Router = require('./src/Router/Login.Router')
App.use('/api', Router);

const ProductoRouter = require("./src/Router/ProductosRouter");
App.use("/", ProductoRouter);

App.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})