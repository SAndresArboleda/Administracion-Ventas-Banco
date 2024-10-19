// const { Usuario } = require("../../bd/postgresql")

// const borrarUsuario = async(req, res) => {
//     const {id} = req.params
//     try {
//         const usuario = await Usuario.findByPk(id)
//         if(!usuario){
//             return res.status(404).json({ msg: `Usuario con id ${id} no existe` });
//         }
//         await Usuario.destroy({where:{id:id}})
//         return res.status(200).json({
//             msg: `Usuario con id ${id} eliminado correctamente`, 
//             usuario: usuario
//         })
//     } catch (error) {
//         res.status(404).send({error: error.message, msg:`Usuario con id ${id} no existe`})
//     }
// }

// module.exports = {borrarUsuario}