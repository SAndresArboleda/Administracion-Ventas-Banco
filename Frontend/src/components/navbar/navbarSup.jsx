import './navbarSup.css'
import { Link } from "react-router-dom"
import { FaBasketShopping } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";


export const NavbarSup = () => {

    return (
        <nav className="navbarSupCont">
            <Link to='/' className='navbarSupLogo'>
                MERCA JUSTO
            </Link>
            <div className="navbarSupTipos">
                <Link to='/admin'><div>Administrador</div></Link>
            </div>
            <div className='navbarSupOpciones'>
                <div className='NavSupiIconos'>
                    <Link to="/login" className='NavSupiIcono'><FaUserCircle /></Link>
                    <Link className='NavSupiIcono'>< FaBasketShopping /></Link>
                </div>
            </div>
        </nav>
    )
}