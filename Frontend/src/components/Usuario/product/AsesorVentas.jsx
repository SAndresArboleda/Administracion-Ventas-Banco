import './AsesorVentas.css'
import { Link } from "react-router-dom"
import { ImExit } from 'react-icons/im';
import { SeguiVentaAsesor } from './SeguiVentaAsesor';




export const AsesorVentas = () => {

    return (
        <div id='ContVentaAdm'>
            <div className="navbarSupCont">
                <Link to='/asesor' className='navbarSupLogo'>
                    KCRM-BANCO
                </Link>
                <div className="navbarSupTipos">
                    <Link to="/asesor">Ventas</Link>
                    <Link to="/asesor/Venta">Crear Venta</Link>
                    <Link to='/'><ImExit className="iconoExit" /></Link>
                </div>
            </div>
            <div className="adminProdEncabOne">
                <div className="adminProd">PRODUCTOS</div>
            </div>
            <div className="adminVentas">
                <SeguiVentaAsesor />
            </div>
        </div>
    )
}