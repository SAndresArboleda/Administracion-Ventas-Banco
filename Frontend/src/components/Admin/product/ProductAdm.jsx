import './ProductAdm.css'
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { CreateProduct } from "./CreateProduct";
import { SeguiProduct } from './SeguiProduct';
import { ModifProduct } from './ModifProduct';
import { ImExit } from 'react-icons/im';




export const ProductAdm = () => {

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
        <div id='ContProductAdm'>
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

            <div className="adminProducts">
                {option.main ? <SeguiProduct setSettings={setSettings} /> : null}
                {option.add ? <CreateProduct /> : null}
                {option.setting ? <ModifProduct /> : null}
            </div>
        </div>
    )
}