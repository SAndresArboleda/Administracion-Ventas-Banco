export const registerValidation = ({ userName, lastName, age, email,password }) => {
    const errors = {};
    //USERNAME
    if (userName.length ==='') { errors.userName = "" }
    if (!/^[^\d]*$/.test(userName)) { errors.userName = "no puede contener numeros" }
    if (userName.length > 20) { errors.userName = "debe ser mayor a 20 caractares" }
    if (!userName.length) { errors.userName = "El nombre es obligatorio" }

    // //LASTNAME
    if (lastName.length ===' ') { errors.lastName = "" }
    if (!/^[A-Z][a-z]+(?: [A-Z][a-z]+)*$/.test(lastName)) { errors.lastName = "Primera letra en mayuscula" }
    if (!/^[^\d]*$/.test(lastName)) { errors.lastName = "no puede contener numeros" }
    if (lastName.length > 20) { errors.lastName = "debe ser mayor a 20 caractares" }
    if (!lastName.length) { errors.lastName = "El apellido es obligatorio" }

    // //AGE
    if (Number(age) > 90) { errors.age = "Debe ser menor a 90 años" }
    if (Number(age) < 18 ) { errors.age = "Debe ser mayor a 18 años." }
    if (isNaN(age)) {errors.age = 'Debe ser un Numero'}
    if (!age.length) { errors.age = "La Edad es obligatoria" }


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
