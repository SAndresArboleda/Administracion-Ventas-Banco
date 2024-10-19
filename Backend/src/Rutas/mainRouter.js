const {Router} = require('express');
const { crearUsuario } = require('../controladores/crearUsuario');
const { buscarUsuario } = require('../controladores/buscarUsuario');
const { actualizarUsuario } = require('../controladores/actualizarUsuario');
const { borrarUsuario } = require('../controladores/borrarUsuario');

const mainRouter = Router();

mainRouter.post('/crearUsuario', crearUsuario);
mainRouter.get('/buscarUsuario', buscarUsuario);
mainRouter.put('/actualizarUsuario', actualizarUsuario);
mainRouter.delete('/borrarUsuario', borrarUsuario);


module.exports = mainRouter