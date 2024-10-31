import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import './SeguiProduct.css'
import { getAllProducts } from "../../../redux/action"
import { FaDeleteLeft } from "react-icons/fa6";
import { TfiWrite } from "react-icons/tfi";

import { Link } from "react-router-dom"


export const SeguiProduct = ({setSettings}) => {

    const dispatch = useDispatch()
    const allProducts = useSelector((state) => state.allProducts)


    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])

    return (
        <div id="Tabla">
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>Num</th>
                        <th>Id</th>
                        <th>Nombre</th>
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
                        allProducts?.map((ele, index) => (
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
                                <td><Link className="modify-link"><TfiWrite onClick={setSettings} /></Link></td>
                                <td><FaDeleteLeft className="delete-icon" /></td>
                            </tr>
                        ))
                   }
                </tbody>
            </table>
        </div>

    )
}
//     return (

//         <div>
//             <div className="adminProdEncabTwo">
//                 <div style={{ width: '3%' }}>Num</div>
//                 <div style={{ width: '5%' }}>Id</div>
//                 <div style={{ width: '15%' }}>Nombre</div>
//                 <div style={{ width: '10%' }}>Cupo Solicitado</div>
//                 <div style={{ width: '9%' }}>Franquicia</div>
//                 <div style={{ width: '5%' }}>Tasa</div>
//                 <div style={{ width: '15%' }}>Fecha de Venta</div>
//                 <div style={{ width: '15%' }}>Fecha de Modificación</div>
//                 <div style={{ width: '12%' }}>Usuario Venta</div>
//                 <div style={{ width: '5%' }}>Modificar</div>
//                 <div style={{ width: '5%' }}>Eliminar</div>
//             </div>
//             <div className="adminProdScroll">
//                 {allProducts?.length > 0 ? (
//                     allProducts?.map((ele, index) => (
//                         <div className="ProductosAdm" key={ele.id}>
//                             <div style={{ width: '3.5%' }}>{index + 1}</div>
//                             <div style={{ width: '5%' }}>{ele.id}</div>
//                             <div style={{ width: '15%' }}>{ele.producto}</div>
//                             <div style={{ width: '10%' }}>{ele.cupo}</div>
//                             <div style={{ width: '11%' }}>{ele.franquicia}</div>
//                             <div style={{ width: '5%' }}>{ele.tasa}</div>
//                             <div style={{ width: '15%' }}>{new Date(ele.createdAt).toLocaleString()}</div>
//                             <div style={{ width: '15%' }}>{new Date(ele.updatedAt).toLocaleString()}</div>
//                             <div style={{ width: '12%' }}>{ele.usuarioId}</div>
//                             <div style={{ width: '4%' }}><Link><TfiWrite onClick={setSettings}/></Link></div>
//                             <div style={{ width: '4%' }}><FaDeleteLeft/></div>
//                         </div>
//                     ))
//                 ) : (
//                     <div>No hay productos disponibles</div>
//                 )}
//             </div>
//         </div>
//     )
// }