export const validationUser = ({nombre, correo, contraseña}) => {
    const errors = {}
    if (nombre) {
        if (nombre.length > 50) {errors.nombre = 'Debe ser mayor a 50 caracteres';}
        if (!/^[^\d]*$/.test(nombre)) {errors.nombre = 'No puede contener números';}
    }
    if (correo) {
        if (correo.length > 50) {errors.correo = 'No puede ser mayor a 50 caracteres';}
        if (!/\S+@\S+\.\S+/.test(correo)) {errors.correo = 'Debe contener @ y .com';}
    }
    if (contraseña) {
        if (contraseña.length > 50) {errors.contraseña = 'El contraseña no puede ser mayor a 50 caracteres';}
        if (!/\S+@\S+\.\S+/.test(contraseña)) {errors.contraseña = 'Debe contener @ y un dominio válido (.com)';}
    }




    return errors;
    // if (/^[^\d]*$/.test(prod.cupo)) { errors.cupo = 'Debe contener solo numeros' }
    // if (correo.length > 30) { errors.correo = "Debe ser menor a 30 caracteres." }
    // if (!correo.length) { errors.correo = "El correo es obligatorio" }



    // if (prod.cupo.length > 20) { errors.cupo = 'La marca no puede ser mayor a 20 caracteres' }
    // if (!/^[^\d]*$/.test(prod.cupo)) { errors.cupo = 'La marca no puede contener numeros' }

    // if (prod.tasa.length > 10) { errors.cant = 'La cantidad no puede ser mayor a 10 caracteres' }

}