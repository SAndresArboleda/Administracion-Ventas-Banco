import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getAllUsers } from "../../../redux/action";
import { Link } from "react-router-dom"
import { FaDeleteLeft } from "react-icons/fa6";
import { TfiWrite } from "react-icons/tfi";


export const SeguiUser = ({ setSettings }) => {

    const dispatch = useDispatch()
    const allUsers = useSelector((state) => state.allUsers)

    useEffect(() => {
        dispatch(getAllUsers())
    }, [dispatch])

    const handleDelete = (id) => {
        if (window.confirm(`¿Estas seguro de que deseas liminar el usuario id: ${id}`)) {
            dispatch(deleteUser(id)).then(() => {
                dispatch(getAllUsers())
            })
        }
    }

    return (
        <div id="Tabla">
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>Num</th>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Correo</th>
                        {/* <th>Constraseña</th> */}
                        <th>Tipo Usuario</th>
                        <th>Fecha de Venta</th>
                        <th>Fecha de Modificación</th>
                        <th>Modificar</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allUsers?.map((ele, index) => (
                            <tr key={ele.id} className="table-row">
                                <td>{index + 1}</td>
                                <td>{ele.id}</td>
                                <td>{ele.nombre}</td>
                                <td>{ele.correo}</td>
                                {/* <td>{ele.contraseña}</td> */}
                                <td>{ele.tipoUsuario}</td>
                                <td>{new Date(ele.createdAt).toLocaleString()}</td>
                                <td>{new Date(ele.updatedAt).toLocaleString()}</td>
                                <td><Link className="modify-link"><TfiWrite onClick={() => setSettings(ele.id)} /></Link></td>
                                <td><FaDeleteLeft onClick={() => handleDelete(ele.id)} className="delete-icon" /></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}