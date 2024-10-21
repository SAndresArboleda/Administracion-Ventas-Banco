const { Venta } = require("../../bd/postgresql")

const buscarVentas = async (req, res) => {
    const { } = req.query
    try {
        const response = await Venta.findAll()
        res.status(200).json(response)
    } catch (error) {
        res.status(400).send({ error: error.message, msg: "Error al llamar todos las Ventas" })
    }
}

const buscarVentaId =async(req, res)=>{
    const {id} = req.params
    try {
        const response = await Venta.findByPk(id)
        res.status(200).json(response)
    } catch (error) {
        res.status(404).send({error: error.message, msg: `id ${id} no existe`})
    }
}

module.exports = { buscarVentas,buscarVentaId }