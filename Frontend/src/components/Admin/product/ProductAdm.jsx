import './ProductAdm.css'
import { Link } from "react-router-dom"
import { useState } from "react"
import { CreateProduct} from "./CreateProduct";
import { SeguiProduct } from './SeguiProduct';
import { ModifProduct } from './ModifProduct';




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


    return (
        <div>
            <div className="navbarSupCont">
                <Link to='/Admin' className='navbarSupLogo'>
                    KCRM-BANCO
                </Link>
                <div className="navbarSupTipos">
                    <div>Productos</div>
                    <Link to='/admin/users'><div>Usuarios</div></Link>
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
                {option.main ? <SeguiProduct /> : null}
                {option.add ? <CreateProduct /> : null}
                {option.setting ? <ModifProduct /> : null}
            </div>
        </div>
    )
}