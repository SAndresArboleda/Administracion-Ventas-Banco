const express = require("express");
const morgan = require("morgan");  //manda codigo de error en la api
// const mainRouter = require("./routes/mainRouter.js");
const cors = require('cors');  //para que haya buena comunicacion con el Front
const mainRouter = require("./Rutas/mainRouter");


const app = express();

app.use(cors());   //para que haya buena comunicacion con el Front

//Estos son los middlware: es un mediador, es una funcion que se ejecuta antes de que continue el flujo de informacion.

app.use(morgan("dev")) //para ver por consola lo que va llegando (errores)


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use(express.json()) //esto es para que el backend lea formato JSON, convierta los req.body en JSON


app.use(mainRouter)

module.exports = app
