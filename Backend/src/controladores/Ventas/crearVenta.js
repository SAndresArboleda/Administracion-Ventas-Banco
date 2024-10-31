const { Venta } = require("../../bd/postgresql");

const crearVenta = async (req, res) => {
    const { producto, cupo, franquicia, tasa, usuarioId } = req.body;

    console.log(req.body);

    if (producto && cupo) {
        try {
            const response = await Venta.create({
                producto,
                cupo,
                franquicia: franquicia || null,
                tasa: tasa || null,
                usuarioId: usuarioId
            });
            
            return res.status(200).json({
                msg: 'Venta creada exitosamente',
                response});
        } catch (error) {
            return res.status(400).send({ error: `${error.message} - No se creó la venta.` });
        }
    } else {
        return res.status(400).send({ error: "Producto y cupo son campos obligatorios." });
    }
};

module.exports = { crearVenta };
 