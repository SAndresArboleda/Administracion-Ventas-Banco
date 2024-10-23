export const validationProduct = (prod) => {
    const errors = {}
    if (prod.producto.length > 50) { errors.producto = 'El nombre no puede ser mayor a 50 caracteres' }
    if (!/^[^\d]*$/.test(prod.producto)) { errors.producto = 'El nombre no puede contener numeros' }

    if (prod.cupo.length > 20) { errors.cupo = 'El cupo no puede ser mayor a 20 caracteres' }

    return errors;
}