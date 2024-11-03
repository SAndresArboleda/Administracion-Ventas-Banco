import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import './SeguiVenta.css'
import { deleteVenta, getAllVentas } from "../../../redux/action"
import { FaDeleteLeft } from "react-icons/fa6";
import { TfiWrite } from "react-icons/tfi";

import { Link } from "react-router-dom"


export const SeguiVenta = ({setSettings}) => {

    const dispatch = useDispatch()
    const allVentas = useSelector((state) => state.allVentas)


    useEffect(() => {
        dispatch(getAllVentas())
    }, [dispatch])


    const handleDelete = (id) => {
        if (window.confirm(`¿Estás seguro de que deseas eliminar la venta con ID ${id}?`)) {
            dispatch(deleteVenta(id)).then(() => { //Encadenamiento de Promesas (.then): dispatch(deleteVenta(id)) devuelve una promesa, lo que nos permite llamar a getAllVentas en el método .then después de que se complete la eliminación.
                dispatch(getAllVentas());
            });
        }
    };

    return (
        <div id="Tabla">
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>Num</th>
                        <th>Id</th>
                        <th>Producto</th>
                        <th>Cupo</th>
                        <th>Franquicia</th>
                        <th>Tasa</th>
                        <th>Fecha de Venta</th>
                        <th>Fecha de Modificación</th>
                        <th>Usuario Venta</th>
                        <th>Modificar</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allVentas?.map((ele, index) => (
                            <tr key={ele.id} className="table-row">
                                <td>{index + 1}</td>
                                <td>{ele.id}</td>
                                <td>{ele.producto}</td>
                                <td>{ele.cupo}</td>
                                <td>{ele.franquicia}</td>
                                <td>{ele.tasa}</td>
                                <td>{new Date(ele.createdAt).toLocaleString()}</td>
                                <td>{new Date(ele.updatedAt).toLocaleString()}</td>
                                <td>{ele.usuarioId}</td>
                                <td><Link className="modify-link"><TfiWrite onClick={()=>setSettings(ele.id)} /></Link></td>
                                <td><FaDeleteLeft onClick={() => handleDelete(ele.id)} className="delete-icon" /></td>
                            </tr>
                        ))
                   }
                </tbody>
            </table>
        </div>
    )
}