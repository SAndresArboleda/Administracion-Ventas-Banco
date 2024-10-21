export const validation = (prod) => {
    const errors = {}
    if (prod.producto.length > 50) { errors.producto = 'El nombre no puede ser mayor a 50 caracteres' }
    if (!/^[^\d]*$/.test(prod.producto)) { errors.producto = 'El nombre no puede contener numeros' }

    if (prod.cupo.length > 20) { errors.cupo = 'El cupo no puede ser mayor a 20 caracteres' }
    // if (/^[^\d]*$/.test(prod.cupo)) { errors.cupo = 'Debe contener solo numeros' }



    // if (prod.cupo.length > 20) { errors.cupo = 'La marca no puede ser mayor a 20 caracteres' }
    // if (!/^[^\d]*$/.test(prod.cupo)) { errors.cupo = 'La marca no puede contener numeros' }

    // if (prod.tasa.length > 10) { errors.cant = 'La cantidad no puede ser mayor a 10 caracteres' }

    return errors;
}