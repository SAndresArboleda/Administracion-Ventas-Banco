const { Venta } = require("../../bd/postgresql");

const crearVenta = async (req, res) => {
    const { producto, cupo, franquicia, tasa } = req.body;

    if (producto && cupo) {
        try {
            let nuevaVenta = { producto, cupo, franquicia };
            if (tasa) {
                nuevaVenta.tasa = tasa;
            }
            const response = await Venta.create(nuevaVenta);
            console.log(response);

            res.status(200).json(response);
        } catch (error) {
            res.status(400).send({ error: error.message + " no se creó la venta" });
        }
    } else {
        res.status(400).send({ error: "Faltan campos obligatorios: producto y cupo" });
    }
};

module.exports = { crearVenta };
 