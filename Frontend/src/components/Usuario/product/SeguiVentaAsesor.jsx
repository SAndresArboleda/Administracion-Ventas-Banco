import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import './SeguiVentaAsesor.css'
import { getAllVentas } from "../../../redux/action"

export const SeguiVenta = () => {

    const dispatch = useDispatch()
    const allVentas = useSelector((state) => state.allVentas)


    useEffect(() => {
        dispatch(getAllVentas())
    }, [dispatch])


    return (

        <div>
            <div className="adminProdEncabTwo">
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
            </div>
        </div>
    )
}