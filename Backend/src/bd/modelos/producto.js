const { DataTypes } = require("sequelize")



module.exports = (sequelize) => {
    sequelize.define('Producto', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        producto: {
            type: DataTypes.ENUM("Credito de Consumo", "Libranza Libre Inversión", "Tarjeta de Credito”"),
            allowNull: false
        },
    },
        { timestamps: false }, // para que en la tabla no me arroje la columna de createdAT y updatedAT
        { freezeTableName: true },//{freezeTableName: true} // esto es para que no muestre en la tabla la s al final. en este ejemplo pokemons,
        // si lo ponemos despues de crear la tabla y sale con la s, entonces me creará otra tabla.
    );
};