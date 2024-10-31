import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import { SeguiUser } from "./SeguiUser";
import { CreateUser } from "./CreateUser";
import { ModifUser } from "./ModifUser";
import { ImExit } from "react-icons/im";
import './UsersAdm.css'



export const UsersAdm = () => {

    const [option, setOption] = useState({
        main: true,
        add: false,
        setting: false
    });

    const handleClick = (eve) => {
        const update = {
            main: false,
            add: false,
            setting: false,
            [eve]: true
        };
        setOption(update)
    }
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.clear();
        navigate('/');
    };


    return (
        <div id="ContUsersAdm">
            <div className="navbarSupCont">
                <Link to='/admin' className='navbarSupLogo'>
                    KCRM-BANCO
                </Link>
                <div className="navbarSupTipos">
                    <Link to='/admin'><div>Productos</div></Link>
                    <div>Usuarios</div>
                    <ImExit className="iconoExit" onClick={handleLogout} />
                </div>
            </div>
            <div className="adminProdEncabOne">
                <div className="adminProd">USUARIOS</div>
                <div className="adminOpt">
                    <div onClick={() => handleClick("main")} className="adminOptSeg">Seguimiento</div>
                    <div onClick={() => handleClick("add")} className="adminOptCrear">Crear</div>
                    <div onClick={() => handleClick("setting")} className="adminOptModif">Modificar</div>
                </div>
            </div>

            <div className="adminVentas">
                {option.main ? < SeguiUser /> : null}
                {option.add ? < CreateUser /> : null}
                {option.setting ? < ModifUser /> : null}
            </div>
        </div>
    )
}