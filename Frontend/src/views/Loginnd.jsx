import './Login.css';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { login } from '../redux/action';
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";
import { useRef } from 'react';

export const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        correo: '',
        contraseña: ''
    });
    const [error, setError] = useState('');
    const [isCaptchaValid, setIsCaptchaValid] = useState(false);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await dispatch(login(userData));
            
            if (response?.token && isCaptchaValid && response.usuario.tipoUsuario === "Administrador") {
                navigate('/admin');
            }
            if (response?.token && isCaptchaValid && response.usuario.tipoUsuario === "Asesor") {
                navigate('/asesor');
            }
        } catch (error) {
            setError(error.response?.data?.msg || 'Error desconocido al iniciar sesión');
        }
    };

    const captcha = useRef(null);
    const onChangeCaptcha = () => {
        const captchaValue = captcha.current.getValue();
        if (captchaValue) {
            setIsCaptchaValid(true);
        } else {
            setIsCaptchaValid(false);
        }
    };

    return (
        <div id="Login">
            <div className='h1Login'>
                <h1>Iniciar Sesión</h1>
            </div>
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
                                name="correo"
                                placeholder="Ingresa tu correo"
                            />
                        </div>
                        <div className="txt_field">
                            <RiLockPasswordLine className="icono" />
                            <input
                                className='inputIngreso'
                                onChange={handleChange}
                                type="password"
                                required
                                name="contraseña"
                                placeholder="Ingresa tu Contraseña"
                            />
                        </div>
                        <div className='captcha'>
                            <ReCAPTCHA
                                ref={captcha}
                                sitekey='6LeytGcqAAAAAA7Mswa_8IGjdbWcsaXRVv6E_CXo'
                                onChange={onChangeCaptcha}
                            />
                        </div>
                        <div className='BotonIngresar'>
                            <button
                                className="BotonIngreso"
                                type="submit"
                                disabled={!isCaptchaValid}
                            >
                                INICIAR SESION
                            </button>
                        </div>
                        <div>
                            {error && <p style={{ color: 'red' }}>{error}</p>}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
