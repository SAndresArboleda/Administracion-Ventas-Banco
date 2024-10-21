import './login.css';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";


import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { login } from '../redux/action';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(login(userData))
            .then(() => {
                navigate('/Admin');
            })
            .catch((error) => {
                setError(error.response?.data?.msg || 'Error desconocido al iniciar sesión');
            });
    };

    return (
        <div id="Login">
            <div className='h1Login'>
                <h1>Iniciar Sesión</h1>
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Mostrar error */}
            <div className="cuadro">
                <form className='formulario' onSubmit={handleLogin}>
                    <div className='inputLogin'>
                        <div className="txt_field">
                            <MdEmail className="icono" />
                            <input
                                className='inputIngreso'
                                onChange={handleChange}
                                type="email"
                                required
                                name="email"
                                placeholder="Ingresa tu Email"
                            />
                        </div>
                        <div className="txt_field">
                            <RiLockPasswordLine className="icono" />
                            <input
                                className='inputIngreso'
                                onChange={handleChange}
                                type="password"
                                required
                                name="password"
                                placeholder="Ingresa tu Contraseña"
                            />
                        </div>
                        <div className='BotonIngresar'>
                            <button className="BotonIngreso" type="submit">
                                INICIAR SESION
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
