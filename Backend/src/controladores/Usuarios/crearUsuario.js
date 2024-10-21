const bcrypt = require('bcrypt');
const { Usuario } = require("../../bd/postgresql");

const crearUsuario = async (req, res) => {
    const { nombre, correo, contraseña, tipoUsuario } = req.body;

    // Verificar si todos los campos requeridos están presentes
    if (nombre && correo && contraseña && tipoUsuario) {
        try {
            // Comprobar si el correo ya está registrado
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

            // Responder con éxito
            res.status(201).json({
                msg: 'Usuario creado exitosamente',
                usuario: nuevoUsuario
            });

        } catch (error) {
            // Enviar una respuesta de error
            res.status(400).send({ error: error.message + " no se pudo crear el usuario" });
        }
    } else {
        // Responder si faltan parámetros
        return res.status(400).json({ error: 'Todos los campos son requeridos: nombre, correo, contraseña, tipoUsuario.' });
    }
};

module.exports = { crearUsuario };


// {
//     "id": 5,
//     "nombre": "Son",
//     "correo": "son@gmail.com",
//     "contraseña": "sonAsesor",
//     "tipoUsuario": "Asesor"
//   }