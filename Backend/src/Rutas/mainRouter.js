const {Router} = require('express');
const { crearUsuario } = require('../controladores/Usuarios/crearUsuario');
const { buscarTodosUsuario, buscarUsuarioId } = require('../controladores/Usuarios/buscarUsuario');
const { actualizarUsuario } = require('../controladores/Usuarios/actualizarUsuario');
const { borrarUsuario } = require('../controladores/Usuarios/borrarUsuario');
const { crearVenta } = require('../controladores/Ventas/crearVenta');
const { buscarTodosusuarioVentas, buscarVentaId } = require('../controladores/Ventas/buscarVenta');
const { actualizarVenta } = require('../controladores/Ventas/actualizarVenta');


const mainRouter = Router();

mainRouter.post('/crearUsuario', crearUsuario);
mainRouter.get('/buscarUsuario', buscarTodosUsuario);
mainRouter.get('/buscarUsuario/:id', buscarUsuarioId);
mainRouter.put('/actualizarUsuario/:id', actualizarUsuario);
mainRouter.delete('/borrarUsuario/:id', borrarUsuario);

mainRouter.post('/crearVenta', crearVenta);
mainRouter.get('/buscarVenta', buscarTodosusuarioVentas);
mainRouter.get('/buscarVenta/:id', buscarVentaId);
mainRouter.put('/actualizarVenta/:id', actualizarVenta);
// mainRouter.delete('/borrarVenta/:id', borrarVenta);


module.exports = mainRouter