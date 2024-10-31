# Prueba-T-cnica--KCRM-BANCO
Sistema de Logeo y generación de un Crud.

<!-- Logo -->
<p align="center">
    <img width="180" src= ".\Frontend\Clanand3.JPG" >
</p>

<!-- Links Recursos Usados -->
<div align="center">
    <a href="https://github.com/SAndresArboleda?tab=repositories">
        <img width="110" src= "https://img.shields.io/github/followers/SAndresArboleda" >
    </a>
    <img width="65" src= "https://img.shields.io/badge/Javascrip-yellow" >
    <img width="80" src= "https://img.shields.io/badge/Axios 1.6.7-gray" >
    <img width="93" src= "https://img.shields.io/badge/React 18.2.0-blue" >
    <img width="145" src= "https://img.shields.io/badge/React Redux 18.05.0-orange" >
    <img width="100" src= "https://img.shields.io/badge/Node 20.11.0-gray" >
    <img width="48" src= "https://img.shields.io/badge/HTML-red" >
    <img width="40" src= "https://img.shields.io/badge/CSS-darkblue" >
</div>

<br>
<div></div>
<br>
<br>

<!-- TITLE -->
# Project setup Backend
``` code:
npm install
npm start
```
# Project setup Frontend 
``` code:
npm install
npm run dev
```
## Ingreso Login 
``` code:
Nota: En tu base de datos ingresa un usuario como Administrador y otro como Asesor para poder explorar el front
{
"nombre": And
"correo": and@gmail.com
"constraseña": and
"tipoUsuario": Administrador
}
{
"nombre": Sim
"correo": sim@gmail.com
"constraseña": sim
"tipoUsuario": Asesor
}
```

## Script Base de datos
``` code:
DB_HOST=localhost
PORT=3003
DB_NAME=banco
```

## Version Node
``` code:
20.11.0
```
### Explicación del código Backend

1. Abrir nuevo repositorio.

2. Creación de carpeta backend e instalación de paquetes, creamos la carpeta y abrimos terminal den carpeta Backend:
    * npm init -y
    * npm i nodemon -D(colocar "start": "nodemon ./src/index.js"), con D para que quede en la devDependence en packageJson.
    * npm i
    * npm i axios dotenv express morgan nodemon cors
    * npm i pg pg-hstore sequelize (para concexión de mi db)


3. Concexion a Puerto
    * Creación archivo .env (colocamos nuestras variables de entorno)
    * Creación archivo Index.js
    ````code:
    require('dotenv').config();
    const server = require('./src/app')

    const PORT = process.env.PORT || 3003
    server.listen(PORT, () => {
        console.log(`Conectado al puerto ${PORT}`);
    });   
    ````
    * Creación carpeta src
        * Creación archivo app.js
        ````code:
        const express = require('express')
        const app = express()

        module.exports = app
        ````
    * Levantamos el servidor ecribiendo en la terminal:
        * npm start

4. Creación carpeta base de datos
    * Creamos carpeta modelos
        * creamos los archivos de los modelos que necesitamos
        ````code:
        const { DataTypes } = require("sequelize")

        module.exports = (sequelize) => {
            sequelize.define('Usuario', {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement:true,
                },
                nombre: ...
            },
            { timestamps: true },
            { freezeTableName: true },
        )
        }
        ````
    * Creamos el archivo postgresql.js donde realizamos nuestra conexión a la base de datos y la relación de mis modelos.
    ### Nota: Antes de arrancar la conexión a mi base de datos debo crear mi base de datos en postgresql para que se pueda dar la conexión.

5. Creamos las rutas y controladores
    * Creamos en src carpeta Rutas
        * creamos archivo mainRouter.js, donde creamos nuestras rutas tipo CRUD y exportamos mainRouter para importarlo en app.js
        ````code:
        const {Router} = require('express');

        const mainRouter = Router();
        mainRouter.post('/login', loginUsuario)
        mainRouter.post('/crearUsuario', crearUsuario);
        mainRouter.get('/buscarUsuario', buscarTodosUsuario);
        mainRouter.put('/actualizarUsuario/:id', actualizarUsuario);
        mainRouter.delete('/borrarUsuario/:id', borrarUsuario);

        module.exports = mainRouter
        ````
    * Creamos en src, carpeta controladores donde crearemos todas nuestras funciones que controlaran cada una de nuestras rutas
        * creamos las carpetas Login, Usuarios y Ventas
        * instalar npm i bcrypt, npm i jsonwebtoken para encriptar la contraseña y aplicar jwt en el login



### Explicación del código Frontend

1. Creamos la carpeta Frontend
    * En la terminal del proyecto ctrl + ñ:
        * npm create vite@latest
    * Abrimos la terminal en la carpeta Frontend
        * npm install
        * npm i axios
        * npm i react-router react-router-dom
        * npm i redux-thunk
        * npm i redux@4 react-redux@8 redux-devtools-extension (compatibles "24-10-2024" redux@4 y react-redux@8)

2. En el archivo main.jsx, encerramos nuestra App de la siguiente manera:
    ````code:
    import { createRoot } from 'react-dom/client'
    import React from 'react'
    import {BrowserRouter} from 'react-router-dom'
    import App from './App.jsx'

    createRoot(document.getElementById('root')).render(
        <BrowserRouter>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </BrowserRouter>
    )
    ````
3. En el archivo App.jsx, creamos nuestras rutas:
    ````code:
    import { Route, Routes } from 'react-router-dom';

    function App() {
        return (
            <div>
            <Routes>
                <Route path="/" element="Login" />
                <Route path="/admin" element="administrador" />
                <Route path="/admin/users" element="productos y ventas administrador" />
                <Route path="/asesor" element="ventas Asesor" />
            </Routes>
            </div>
        )
    }
    export default App
    ````

4. Creamos en src, la carpeta Redux donde crearemos los siguientes archivos js:
    1. action.js: Son la única forma de enviar datos desde tu aplicación a la store de Redux.No modifican directamente el estado de la aplicación, sino que proporcionan información que los reducers usarán para actualizar el estado de manera adecuada.
    ````code:
    import axios from 'axios'

    export const getAllProducts = () => {
        return async (dispatch) => {
            try {
                const response = await axios.get(`http://localhost:3003/buscarVenta`);
                const data = response.data;
                
                dispatch({
                    type: "GET_ALL_PRODUCTS",
                    payload: data
                });
            } catch (error) {
                console.log(error);
                alert(error);
            }
        };
    };
    ````
    
    2. reducer.js: especifica cómo cambia el estado de la aplicación cuando se envían (dispatch) acciones. Este reducer es una función que toma el estado actual y una acción, y devuelve el nuevo estado.
    Importamos el type de la action:
    ````code:
    import {
        GET_ALL_PRODUCTS
    } from './action'

    let initialsState = {
    estado1: [],
    estado2: [], ...
    }
    export const reducer = (state = initialsState, action) => {
        switch (action.type) {
            case GET_ALL_PRODUCTS:
            return {
                ...state,
                estado1: action.payload
            }
        default:
            return state;
        }
    }
    ````
    3. store.js: Donde se guarda el estado global de tu aplicación se importa el reducer. Una store de Redux con capacidades asíncronas (usando thunk) y herramientas de depuración para hacer seguimiento del estado y acciones en el navegador.
    ````code:
    import { createStore} from 'redux'
    import { composeWithDevTools } from 'redux-devtools-extension'
    import { applyMiddleware } from 'redux'
    import {thunk} from 'redux-thunk'
    import reducer from "./reducer";

    export const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
    )
    ````
    4. Al tener creada nuestra store, la importamos en main.jsx y la agregamos en un Provider para que los componentes dentro de la aplicación puedan acceder al estado global de Redux y despachar acciones sin tener que pasar manualmente el store por props.
    ````code:
    import {Provider} from 'react-redux'
    import { store } from './Redux/store.js'

    ReactDOM.createRoot(document.getElementById('root')).render(
        <Provider store= {store}>
            <BrowserRouter>
                <React.StrictMode>
                    <App />
                </React.StrictMode>
            </BrowserRouter>
        </Provider>
    )
    ````
    ### De esta manera usando el action y el reducer, creamos las demas acciones que necesitamos para usar la información necesaria del backend y de nuestra base de datos.




    