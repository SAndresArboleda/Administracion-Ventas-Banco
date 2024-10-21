const { Venta } = require("../../bd/postgresql")

const borrarVenta = async(req, res) => {
    const {id} = req.params
    try {
        const venta = await Venta.findByPk(id)
        if(!venta){
            return res.status(404).json({ msg: `Venta con id ${id} no existe` });
        }
        await Venta.destroy({where:{id:id}})
        return res.status(200).json({
            msg: `Venta con id ${id} eliminada correctamente`, 
            venta: venta
        })
    } catch (error) {
        res.status(404).send({error: error.message, msg:`Venta con id ${id} no existe`})
    }
}

module.exports = {borrarVenta}