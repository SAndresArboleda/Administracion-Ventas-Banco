require('dotenv').config();
const { Sequelize } = require('sequelize');
const usuarioModel = require('./modelos/usuario');
const ventaModel = require('./modelos/venta');

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

usuarioModel(sequelize);
ventaModel(sequelize);

const {Usuario,Venta} = sequelize.models;

Usuario.belongsToMany(Venta, {through: 'UsuarioVenta', timestamps: false});
Venta.belongsToMany(Usuario, {through: 'UsuarioVenta', timestamps: false});


module.exports = {
    ...sequelize.models,
    conn: sequelize,
    Usuario,
    Venta
};