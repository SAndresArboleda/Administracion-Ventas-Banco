import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import './CreateUser.css';
import { postUser } from "../../../redux/action";
import { validationUser } from "./validation";

export const CreateUser = () => {

    const dispatch = useDispatch();

    const [newUser, setNewUser] = useState({
        nombre: "",
        correo: "",
        contraseña: "",
        tipoUsuario: "",
    });

    const [errors, setErrors] = useState({
        nombre: "",
        correo: "",
        contraseña: "",
        tipoUsuario: "",
    });

    useEffect(() => {
        setErrors(validationUser(newUser));
    }, [newUser]);

    const handleCreation = (e) => {
        e.preventDefault();
        if (Object.keys(errors).length === 0) {
            dispatch(postUser(newUser));
            setNewUser({
                nombre: "",
                correo: "",
                contraseña: "",
                tipoUsuario: "",
            });
            setErrors({
                nombre: "",
                correo: "",
                contraseña: "",
                tipoUsuario: "",
            });
        }
    };

    const handleChange = ({ target }) => {
            setErrors(validationUser({
            ...newUser
        }));
        setNewUser({
            ...newUser,
            [target.name]: target.value

        })

    };

    return (
        <div id="ContCrearUser">
            <div>
            <div className="label1">
                <label>Nombre</label>
                <input type="text" name='nombre' value={newUser.nombre}
                    onChange={handleChange} placeholder="ingresa Nombre" />
            </div>
            {errors.nombre &&<label className="errorUser">{errors.nombre}</label>}

            </div>
            <div>
            <div className="label1">
                <label>Correo</label>
                <input type="email" name='correo' value={newUser.correo}
                    onChange={handleChange} placeholder="ingresa correo" />
            </div>
                {errors.correo && <label>{errors.correo}</label>}

            </div>
            <div className="label1">
                <label>Contraseña</label>
                <input type="password" name='contraseña' value={newUser.contraseña}
                    onChange={handleChange} placeholder="ingresa contraseña" />
                {errors.contraseña && <label>{errors.contraseña}</label>}
            </div>
            <div className="label1">
                <label>Tipo de Usuario</label>
                <select name="tipoUsuario" id="tipoUsuario" value={newUser.tipoUsuario} onChange={handleChange}>
                    <option value="">Selecciona un tipo...</option>
                    <option value="Administrador">Administrador</option>
                    <option value="Asesor">Asesor</option>
                </select>
                {errors.tipoUsuario && <label>{errors.tipoUsuario}</label>}
            </div>
            <div>
                <button type="submit" onClick={handleCreation} disabled={Object.keys(errors).length > 0}>
                    Crear nuevo Usuario
                </button>
            </div>
        </div>
    );
};
