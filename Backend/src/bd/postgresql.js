require('dotenv').config();
const { Sequelize } = require('sequelize');
const usuarioModel = require('./modelos/usuario');
const ventaModel = require('./modelos/venta');

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/Bank`,
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

Usuario.hasMany(Venta,{foreignKey:'usuarioId', sourceKey:'id'});
Venta.belongsTo(Usuario,{foreignKey:'usuarioId',targetKey:'id'});


module.exports = {
    ...sequelize.models,
    conn: sequelize,
    Usuario,
    Venta
};