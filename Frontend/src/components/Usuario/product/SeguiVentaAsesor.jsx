import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import './SeguiVentaAsesor.css'
import { getAllVentas } from "../../../redux/action"

export const SeguiVentaAsesor = () => {
    const storedUser = localStorage.getItem("IdUser");
    const userStorage = JSON.parse(storedUser);
    const IdUser = userStorage.usuario.id

    const dispatch = useDispatch()
    const allVentas = useSelector((state) => state.allVentas)
    const allVentasUserId = allVentas.filter((venId)=>venId.usuarioId === IdUser )


    useEffect(() => {
        dispatch(getAllVentas())
    }, [dispatch])


    return (
        <div id="Tabla">
            {
                allVentas.length > 0 ? (
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
                                <th>Usuario de Venta</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allVentasUserId.map((ven, index) => (
                                    <tr key={ven.id} className="table_row">
                                        <td>{index + 1}</td>
                                        <td>{ven.id}</td>
                                        <td>{ven.producto}</td>
                                        <td>{ven.cupo}</td>
                                        <td>{ven.franquicia}</td>
                                        <td>{ven.tasa}</td>
                                        <td>{new Date(ven.createdAt).toLocaleString()}</td>
                                        <td>{new Date(ven.updatedAt).toLocaleString()}</td>
                                        <td>{ven.usuarioId}</td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                ) : (
                    <div>No tienes ventas registradas</div>
                )
            }
        </div>
    )
}

{/* <div className="adminProdEncabTwo">
                <div style={{ width: '3%' }}>Num</div>
                <div style={{ width: '5%' }}>Id</div>
                <div style={{ width: '15%' }}>Nombre</div>
                <div style={{ width: '10%' }}>Cupo Solicitado</div>
                <div style={{ width: '12%' }}>Franquicia</div>
                <div style={{ width: '8%' }}>Tasa</div>
                <div style={{ width: '20%' }}>Fecha de Venta</div>
                <div style={{ width: '20%' }}>Fecha de Modificación</div>
            </div>
            <div className="adminProdScroll">
                {allVentas?.length > 0 ? (
                    allVentas?.map((ele, index) => (
                        <div className="ProductosAdm" key={ele.id}>
                            <div style={{ width: '3%' }}>{index + 1}</div>
                            <div style={{ width: '5%' }}>{ele.id}</div>
                            <div style={{ width: '15.5%' }}>{ele.producto}</div>
                            <div style={{ width: '10%' }}>{ele.cupo}</div>
                            <div style={{ width: '12%' }}>{ele.franquicia}</div>
                            <div style={{ width: '8%' }}>{ele.tasa}</div>
                            <div style={{ width: '20%' }}>{new Date(ele.createdAt).toLocaleString()}</div>
                            <div style={{ width: '20%' }}>{new Date(ele.updatedAt).toLocaleString()}</div>
                        </div>
                    ))
                ) : (
                    <div>No hay productos disponibles</div>
                )}
            </div> */}