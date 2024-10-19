require('dotenv').config();
const { Sequelize } = require('sequelize');
const usuarioModel = require('./modelos/usuario');
const productoModel = require('./modelos/producto');

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/banco`,
    {
        logging:false,
        native:false,
    }
);
sequelize.authenticate()
.then(()=>{
    console.log("BD conectada");
})
.catch((error)=>{
    console.log("problemas con DB", error);
    
})
console.log('Database config:', process.env.DB_HOST, process.env.DB_USER, process.env.DB_PASSWORD);

usuarioModel(sequelize);
productoModel(sequelize);

const {Usuario,Producto} = sequelize.models;

Usuario.belongsToMany(Producto, {through: 'UsuarioProducto', timestamps: false});
Producto.belongsToMany(Usuario, {through: 'UsuarioProducto', timestamps: false});


module.exports = {
    ...sequelize.models,
    conn: sequelize,
    Usuario,
    Producto
};