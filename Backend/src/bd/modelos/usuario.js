const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define('Usuario', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true,
        },
        nombre: {
            type: DataTypes.STRING,
            validate: {
                len: {
                    max: 50,
                    msg: 'El nombre es máximo de 50 caracteres'
                },
                isAlpha: {
                    msg: 'El nombre solo puede tener letras'
                }
            }
        },
        correo: {
            type: DataTypes.STRING,
            allowNull: false,
            unique:true,
            validate: {
                isEmail: {
                    msg: 'El correo debe tener @ y .com',
                },
                len: {
                    max: 50,
                    msg: 'El correo debe ser máximo de 50 caracteres'
                },
            },
        },
        contraseña:{
            type: DataTypes.STRING,
            validate:{
                len: {
                    max: 70,
                    msg: 'La contraseña debe ser máximo de 20 caracteres'
                }
            }
        },
        tipoUsuario:{
            type: DataTypes.ENUM("Administrador", "Asesor")
        }
    },
    { timestamps: true },
    { freezeTableName: true },
)
}

