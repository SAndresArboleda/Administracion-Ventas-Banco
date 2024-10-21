const bcrypt = require('bcrypt');
const { Usuario } = require('../../bd/postgresql');

const loginUsuario = async (req, res) => {
  const { correo, contraseña } = req.body;
  console.log('hola correo:'+ correo);
  

  try {
    const usuario = await Usuario.findOne({ where: { correo } });
    if (!usuario) {
      return res.status(404).json({ msg: 'Usuario no encontrado' });
    }

    const contraseñaValida = await bcrypt.compare(contraseña, usuario.contraseña);
    if (!contraseñaValida) {
      return res.status(401).json({ msg: 'Contraseña incorrecta' });
    }

    return res.status(200).json({ msg: 'Login exitoso', usuario });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { loginUsuario };
