const { Venta } = require("../../bd/postgresql");

const actualizarVenta = async (req, res) => {
    const { id } = req.params;
    const { producto, cupo, franquicia, tasa, usuarioId } = req.body;

    try {
        const venta = await Venta.findByPk(id);
        if (!venta) {
            return res.status(404).json({ msg: `Venta con id ${id} no existe` });
        }

        const [updated] = await Venta.update(
            { producto, cupo, franquicia, tasa, usuarioId},
            { where: { id: id } }
        );

        if (updated === 0) {
            return res.status(404).json({ msg: `No se pudo actualizar la venta con id ${id}` });
        }

        const ventaActualizada = await Venta.findByPk(id);
        
        return res.status(200).json({
            msg: `Venta con id ${id} actualizada correctamente`,
            venta: ventaActualizada
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
};

module.exports = { actualizarVenta };
