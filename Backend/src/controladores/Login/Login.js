const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Usuario } = require('../../bd/postgresql');

const loginUsuario = async (req, res) => {
  const { correo, contraseña } = req.body;
  
  try {
    const usuario = await Usuario.findOne({ where: { correo } });
    if (!usuario) {
      return res.status(404).json({ msg: 'Usuario no encontrado' });
    }

    const contraseñaValida = await bcrypt.compare(contraseña, usuario.contraseña);
    if (!contraseñaValida) {
      return res.status(401).json({ msg: 'Contraseña incorrecta' });
    }


    const token = jwt.sign({ id: usuario.id }, 'tu_secreto', { expiresIn: '1h' }); 

    return res.status(200).json({ msg: 'Login exitoso', usuario, token });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};


module.exports = { loginUsuario };