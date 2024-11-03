const { Usuario } = require("../../bd/postgresql");

const actualizarUsuario = async (req, res) => {
    const { id } = req.params;
    const { nombre, correo, contraseña, tipoUsuario } = req.body;
    try {
        const usuario = await Usuario.findByPk(id);
        if (!usuario) {
            return res.status(404).json({ msg: `Usuario con id ${id} no existe` });
        }
        const [updated] = await Usuario.update(
            { nombre, correo, contraseña, tipoUsuario },
            { where: { id: id } }
        );
        if (updated === 0) {
            return res.status(404).json({ msg: `No se pudo actualizar el usuario con id ${id}` });
        }
        const usuarioActualizado = await Usuario.findByPk(id);
        console.log(usuarioActualizado);
        return res.status(200).json({
            msg: `Usuario con id ${id} actualizado correctamente`,
            usuario: usuarioActualizado
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
};

module.exports = { actualizarUsuario };
