import { useEffect, useState } from "react";
import { getUserById, putUser } from "../../../redux/action";
import { useDispatch, useSelector } from 'react-redux';
import { IoSearchCircle } from "react-icons/io5";

export const ModifUser = ({userId}) => {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState(userId || "");
    const UserId = useSelector((state) => state.UserId);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const [user, setUser] = useState({
        id: "",
        nombre: "",
        correo: "",
        contraseña: "",
        createdAt: "",
        updatedAt: ""
    });

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleFetch = () => {
        if (String(searchTerm).trim() !== "") {
            setIsLoading(true);
            dispatch(getUserById(searchTerm));
            setSearchTerm("")
            setError("");
        } else {
            setError("Por favor ingresa un ID para buscar.");
        }
    };


    /*Con handleChange cambiamos los valores de cada casilla al que escribamos*/
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }))
    }
    /*Para enviar la actualización del Ventao o Venta */
    const handleUpdate = async () => {
        try {
            await dispatch(putUser(user.id, {
                nombre: user.nombre,
                correo: user.correo,
                contraseña: user.contraseña,
                tipoUsuario: user.tipoUsuario,
                createdAt: user.createdAt,
                updatedAt: new Date().toLocaleString()
            }));
            // Refresca los datos tras la actualización
            await dispatch(getUserById(user.id));

        } catch (error) {
            console.error("Error al actualizar el producto:", error);
        }
    };
    useEffect(()=>{
        if(userId){
            setSearchTerm(String(userId));
            handleFetch()
        }
    },[userId]);

    useEffect(() => {
        if (UserId) {
            setUser({
                id: UserId.id || "",
                nombre: UserId.nombre || "",
                correo: UserId.correo || "",
                contraseña: UserId.contraseña || "",
                tipoUsuario: UserId.tipoUsuario || "",
                createdAt: UserId.createdAt ? new Date(UserId.createdAt).toLocaleString() : "",
                updatedAt: UserId.updatedAt ? new Date(UserId.updatedAt).toLocaleString() : ""
            });
            setIsLoading(false);
        }
    }, [UserId]);

    return (
        <div id="ContModificar">
            <div>
                <div>
                    <span className="titulo-Id">
                        <h2>Buscar y Modificar Usuario</h2>
                        <p>ID Usuario: {user.id}</p>
                    </span>
                    <span className="searchId">
                        <input
                            type="search"
                            placeholder="ID de Usuario"
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                        <IoSearchCircle className="lupaSearch" type="submit" onClick={handleFetch} />
                    </span>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </div>
            </div>
            <div>


                {isLoading && <p>Cargando datos...</p>}
                {!isLoading && (
                    <>
                        <div className="label1">
                            <label>Nombre de Usuario: </label>
                            <input type="text" name="nombre" value={user.nombre}
                                onChange={handleChange} placeholder=" Nombre" />
                            {/* {errors.nombre && <label>{errors.nombre}</label>} */}
                        </div>
                        <div className="label1">
                            <label>Correo: </label>
                            <input type="email" name='correo' value={user.correo}
                                onChange={handleChange} placeholder=" Correo" />
                            {/* {errors.cupo && <label>{errors.cupo}</label>} */}
                        </div>
                        <div className="label1">
                            <label>Contraseña: </label>
                            <input type="password" name="contraseña" value={user.contraseña}
                                onChange={handleChange} placeholder=" Contraseña" />
                            {/* {errors.franquicia && <label>{errors.franquicia}</label>} */}
                        </div>
                        <div className="label1">
                            <label>Tipo de Usuario: </label>
                            <select name='tipoUsuario' value={user.tipoUsuario} onChange={handleChange}>
                                <option value="">Seleccionar Tipo de Usuario...</option>
                                <option value="Administrador">Administrador</option>
                                <option value="Asesor">Asesor</option>
                            </select>
                            {/* {errors.tasa && <label>{errors.tasa}</label>} */}
                        </div>
                        <div className="label1">
                            <label htmlFor="createdAt">Fecha de Creación: </label>
                            <span>{user.createdAt}</span>
                        </div>
                        <div className="label1">
                            <label htmlFor="updatedAt">Fecha de Modificación: </label>
                            <span>{user.updatedAt}</span>
                        </div>
                        <div>
                            <button type="button" onClick={handleUpdate}>
                                Modificar Usuario
                            </button>
                        </div>
                    </>
                )
                }
            </div>
        </div >
    );
};
