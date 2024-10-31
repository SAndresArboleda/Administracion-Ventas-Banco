import './VentasAsesor.css'
import { Link } from "react-router-dom"
import { ImExit } from 'react-icons/im';
import { SeguiProduct } from './SeguiVentaAsesor';




export const VentasAsesor = () => {

    return (
        <div id='ContProductAdm'>
            <div className="navbarSupCont">
                <Link to='/asesor' className='navbarSupLogo'>
                    KCRM-BANCO
                </Link>
                <div className="navbarSupTipos">
                    <div>Productos</div>
                    <Link to='/'><ImExit className="iconoExit" /></Link>
                </div>
            </div>
            <div className="adminProdEncabOne">
                <div className="adminProd">PRODUCTOS</div>
            </div>

            <div className="adminProducts">
                <SeguiProduct />
            </div>
        </div>
    )
}