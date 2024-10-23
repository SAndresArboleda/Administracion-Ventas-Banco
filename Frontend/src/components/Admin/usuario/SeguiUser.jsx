import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../../redux/action";


export const SeguiUser = () => {

    const dispatch = useDispatch()
    const allUsers = useSelector((state) => state.allUsers)

    useEffect(() => {
        dispatch(getAllUsers())
    }, [dispatch])

    return (
        <div>

            <div className="adminProdEncabTwo">
                <div style={{ width: '3%' }}>Num</div>
                <div style={{ width: '5%' }}>Id</div>
                <div style={{ width: '15%' }}>Nombre</div>
                <div style={{ width: '20%' }}>Correo</div>
                {/* <div style={{ width: '8%' }}>Contraseña</div> */}
                <div style={{ width: '15%' }}>Tipo de Usuario</div>
                <div style={{ width: '20%' }}>Fecha de Venta</div>
                <div style={{ width: '20%' }}>Fecha de Modificación</div>
            </div>
            <div className="adminProdScroll">
                {allUsers.map((ele, index) => (
                    <div className="ProductosAdm" key={ele.id}>
                        <div style={{ width: '3%' }}>{index + 1}</div>
                        <div style={{ width: '5%' }}>{ele.id}</div>
                        <div style={{ width: '15.5%' }}>{ele.nombre}</div>
                        <div style={{ width: '20%' }}>{ele.correo}</div>
                        {/* <div style={{ width: '8%' }}>{ele.contraseña}</div> */}
                        <div style={{ width: '15%' }}>{ele.tipoUsuario}</div>
                        <div style={{ width: '20%' }}>{ele.createdAt}</div>
                        <div style={{ width: '20%' }}>{ele.updatedAt}</div>
                    </div>

                ))}
            </div>
        </div>
    )
}