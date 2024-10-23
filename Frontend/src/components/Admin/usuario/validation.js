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
        if (contraseña.length > 20) {errors.contraseña = 'El contraseña no puede ser mayor a 20 caracteres';}
    }




    return errors;
}