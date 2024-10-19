const { DataTypes } = require("sequelize");


module.exports = (sequelize) => {
    sequelize.define('Venta', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        producto: {
            type: DataTypes.ENUM("Credito de Consumo", "Libranza Libre Inversión", "Tarjeta de Credito"),
            allowNull: false
        },
        cupo: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: {
                    args: /^[0-9]{1,3}(,?[0-9]{3})*$/,
                    msg:'El monto debe estar en formato de miles, con comas separando los miles'
                },
                len: {
                    args: [1, 20],
                    msg: 'El monto no debe exceder los 20 caracteres, incluidas las comas'
                }
            }
        },
        franquicia: {
            type: DataTypes.ENUM("AMEX", "VISA", "MASTERCARD")
        },
        tasa: {
            type: DataTypes.DECIMAL(4, 2),
            allowNull: false,
            validate: {
                min: 0,
                max: 99.99
            }
        },
        // usuarioId:{
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: Usuario,
        //         key: "id"
        //     },
        //     allowNull: true
        // }


    },
        { timestamps: true },
        { freezeTableName: true },
    );
};