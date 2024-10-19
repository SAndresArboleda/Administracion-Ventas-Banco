const { Venta } = require("../../bd/postgresql")

const crearVenta = async(req, res) => {
    const {producto, cupo, franquicia, tasa} = req.body
    if(producto && cupo && franquicia && tasa)
        try {
            const response = await Venta.create({producto, cupo, franquicia, tasa})
            res.status(200).json(response)
        } catch (error) {
            res.status(400).send({error: error.message * " no se creo "})
        }
}

module.exports = {crearVenta}   