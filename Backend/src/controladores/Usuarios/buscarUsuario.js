const { Usuario } = require("../../bd/postgresql")

const buscarTodosUsuario = async (req, res) => {
    const { } = req.query
    try {
        const response = await Usuario.findAll()
        res.status(200).json(response)
    } catch (error) {
        res.status(400).send({ error: error.message + 'error de busqueda', msg: "Error al llamar todos los Usuarios" })
    }
}

const buscarUsuarioId = async (req, res) => {
    const { id } = req.params
    try {
        const response = await Usuario.findByPk(id)
        res.status(200).json(response)
    } catch (error) {
            res.status(404).send({ error: error.message ,msg: `id ${id} no existe` })
    }
}

module.exports = { buscarTodosUsuario, buscarUsuarioId }