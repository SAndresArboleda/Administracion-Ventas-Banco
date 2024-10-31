import './AdmiVenta.css'
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { CreateVenta } from "./CreateVenta";
import { SeguiVenta } from './SeguiVenta';
import { ModifVenta } from './ModifVenta';
import { ImExit } from 'react-icons/im';




export const VentaAdm = () => {

    const [option, setOption] = useState({
        main: true,
        add: false,
        setting: false
    });

    const handleClick = (element) => {
        const updatedOptions = {
            main: false,
            add: false,
            setting: false,
            [element]: true,
        };
        setOption(updatedOptions);
    };
    const setSettings = () => {
        const updatedOptions = {
            main: false,
            add: false,
            setting: true,
        };
        setOption(updatedOptions);
    }

    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.clear();
        navigate('/');
    };


    return (
        <div id='ContVentaAdm'>
            <div className="navbarSupCont">
                <Link to='/admin' className='navbarSupLogo'>
                    KCRM-BANCO
                </Link>
                <div className="navbarSupTipos">
                    <div>Productos</div>
                    <Link to='/admin/users'><div>Usuarios</div></Link>
                    <ImExit className="iconoExit" onClick={handleLogout} name='Salir'/>
                </div>
            </div>
            <div className="adminProdEncabOne">
                <div className="adminProd">PRODUCTOS</div>
                <div className="adminOpt">
                    <div onClick={() => handleClick("main")} className="adminOptSeg">Seguimiento</div>
                    <div onClick={() => handleClick("add")} className="adminOptCrear">Crear</div>
                    <div onClick={() => handleClick("setting")} className="adminOptModif">Modificar</div>
                </div>
            </div>

            <div className="adminVentas">
                {option.main ? <SeguiVenta setSettings={setSettings} /> : null}
                {option.add ? <CreateVenta /> : null}
                {option.setting ? <ModifVenta /> : null}
            </div>
        </div>
    )
}