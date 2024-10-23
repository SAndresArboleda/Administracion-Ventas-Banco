export const registerValidation = ({ correo,contraseña }) => {
    const errors = {};


    // //EMAIL
    if (!/\S+@\S+\.\S+/.test(correo)) { errors.correo = "Debe contener @ y .com" }
    // if (correo.length > 30) { errors.correo = "Debe ser menor a 30 caracteres." }
    // if (!correo.length) { errors.correo = "El correo es obligatorio" }

    // //CONTRASEÑA
    // if (contraseña.length > 1 & !/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/.test(contraseña)) errors.contraseña = 'Debe contener Aa2*'
    // if (contraseña.length < 6) { errors.contraseña = "Debe tener al menos 6 caracteres" }
    if (!contraseña.length) errors.contraseña = "La Contraseña es obligatoria"

    return errors;
};
