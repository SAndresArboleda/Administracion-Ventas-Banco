const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define('Usuario', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            validate: {
                len: {
                    args: [3, 50],
                    msg: 'El nombre debe ser entre 3 y 50 caracteres'
                },
                isAlpha: {
                    msg: 'El nombre del pokemon solo puede tener letras'
                }
            }
        },
        correo: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: {
                    msg: 'El correo electrónico debe tener un formato válido',
                },
                isCorrectDomain(value) {
                    if (!value.endsWith('.com')) {
                        throw new Error('El correo debe terminar en ".com"');
                    }
                },
            },
        }
    },
    { timestamps: false }, // para que en la tabla no me arroje la columna de createdAT y updatedAT
    { freezeTableName: true },//{freezeTableName: true} // esto es para que no muestre en la tabla la s al final. en este ejemplo pokemons,
    // si lo ponemos despues de crear la tabla y sale con la s, entonces me creará otra tabla.
)
}