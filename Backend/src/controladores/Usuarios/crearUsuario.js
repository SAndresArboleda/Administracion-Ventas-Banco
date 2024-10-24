const bcrypt = require('bcrypt');
const { Usuario } = require("../../bd/postgresql");

const crearUsuario = async (req, res) => {
    const { nombre, correo, contraseña, tipoUsuario } = req.body;

    if (nombre && correo && contraseña && tipoUsuario) {
        try {
            const usuarioExistente = await Usuario.findOne({ where: { correo } });
            if (usuarioExistente) {
                return res.status(400).json({ error: 'El correo ya está registrado.' });
            }

            // Generar un salt y encriptar la contraseña
            const salt = await bcrypt.genSalt(5);
            const contraseñaEncriptada = await bcrypt.hash(contraseña, salt);

            // Crear el nuevo usuario
            const nuevoUsuario = await Usuario.create({
                nombre,
                correo,
                contraseña: contraseñaEncriptada,
                tipoUsuario
            });
            
            return res.status(201).json({
                msg: 'Usuario creado exitosamente',
                usuario: nuevoUsuario
            });
            

        } catch (error) {
            res.status(400).send({ error: error.message + " no se pudo crear el usuario" });
        }
    } else {
        return res.status(400).json({ error: 'Todos los campos son requeridos: nombre, correo, contraseña, tipoUsuario.' });
    }
};

module.exports = { crearUsuario };