const { Usuario } = require("../../bd/postgresql")

const crearUsuario = async(req, res) => {
    const {nombre,correo, contraseña, tipoUsuario} = req.body
    if(nombre && correo && contraseña && tipoUsuario)
        try {
            const response = await Usuario.create({nombre,correo, contraseña, tipoUsuario})
            res.status(200).json(response)
        } catch (error) {
            res.status(400).send({error: error.message * " no se creo "})
        }
}

module.exports = {crearUsuario}