const { Venta } = require("../../bd/postgresql")

const crearVenta = async(req, res) => {
    const {producto, cupo, franquicia, tasa} = req.body
    console.log(req.body);
    if(producto && cupo)
        try {
            const response = await Venta.create({producto, cupo, franquicia, tasa})
            res.status(200).json(response)
        } catch (error) {
            res.status(400).send({error: error.message + " no se creo "})
        }
}

module.exports = {crearVenta}   

// {
//     "producto": "Tarjeta de Credito",
//     "cupo": "8000000",
//     "franquicia": "AMEX",
//     "tasa": 10.00
//     }