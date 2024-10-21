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
                    args: [3, 50],
                    msg: 'El nombre debe ser entre 3 y 50 caracteres'
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
                    args: [3, 50],
                    msg: 'El correo debe ser entre 3 y 50 caracteres'
                },
            },
        },
        contraseña:{
            type: DataTypes.STRING,
            validate:{
                len: {
                    args: [4, 70],
                    msg: 'La contraseña debe ser entre 4 y 20 caracteres'
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

