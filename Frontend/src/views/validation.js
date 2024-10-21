export const registerValidation = ({ email,password }) => {
    const errors = {};


    // //EMAIL
    if (!/\S+@\S+\.\S+/.test(email)) { errors.email = "Debe contener @ y .com" }
    if (email.length > 30) { errors.email = "Debe ser menor a 30 caracteres." }
    if (!email.length) { errors.email = "El Email es obligatorio" }

    // //PASSWORD
    if (password.length > 1 & !/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/.test(password)) errors.password = 'Debe contener Aa2*'
    if (password.length < 6) { errors.password = "Debe tener al menos 6 caracteres" }
    if (!password.length) errors.password = "La Contraseña es obligatoria"


    // //IMAGE
    // // if (!regexImg.test(img))
    // //   errors.image = "permite solo archivos con extensión jpg o jpeg.";

    return errors;
};
