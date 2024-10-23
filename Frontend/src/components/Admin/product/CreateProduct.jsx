import { useEffect, useState } from "react";
import { postProduct } from "../../../redux/action";
import { useDispatch } from 'react-redux';
import './CreateProduct.css';
import { validationProduct } from "./validation";

export const CreateProduct = () => {

    const dispatch = useDispatch();

    const [newProduct, setNewProduct] = useState({
        producto: "",
        cupo: "",
        franquicia: "",
        tasa: "",
    });

    const [errors, setErrors] = useState({
        producto: "",
        cupo: "",
        franquicia: "",
        tasa: "",
    });

    useEffect(() => {
        setErrors(validationProduct(newProduct));
    }, [newProduct]);

    const handleCreation = (e) => {
        e.preventDefault();
        if (Object.keys(errors).length === 0) {
            dispatch(postProduct(newProduct));
            setNewProduct({
                producto: "",
                cupo: "",
                franquicia: "",
                tasa: "",
            });
            setErrors({
                producto: "",
                cupo: "",
                franquicia: "",
                tasa: "",
            });
        }
    };

    const handleChange = ({ target }) => {
        const { name, value } = target;

        setNewProduct((prevProduct) => {
            let updatedProduct = { ...prevProduct, [name]: value };

            if (name === 'producto' && value !== 'Tarjeta de Credito') {
                updatedProduct.franquicia = '';
            }
            if (name === 'producto' && value === 'Tarjeta de Credito') {
                updatedProduct.tasa =  '';
            }

            return updatedProduct;
        });

        setErrors(validationProduct({
            ...newProduct,
            [name]: value
        }));
    };

    const renderFranquicia = () => {
        if (newProduct.producto === "Tarjeta de Credito") {
            return (
                <div>
                    <label className="label3">Franquicia</label>
                    <select
                        name="franquicia"
                        id="franquicia"
                        value={newProduct.franquicia}
                        onChange={handleChange}
                    >
                        <option value="">Selecciona un Franquicia...</option>
                        <option value="AMEX">Amex</option>
                        <option value="VISA">Visa</option>
                        <option value="MASTERCARD">Mastercad</option>
                    </select>
                    {errors.franquicia && <label>{errors.franquicia}</label>}
                </div>
            );
        }
        return null;
    };

    const renderTasa = () => {
        if (newProduct.producto !== "Tarjeta de Credito") {
            return (
                <div>
                <label className="label4">Tasa</label>
                <input type="text" name='tasa' value={newProduct.tasa}
                    onChange={handleChange} placeholder="ingresa tasa" />
                {errors.tasa && <label>{errors.tasa}</label>}
            </div>
            );
        }
        return null;
    };

    return (
        <div id="ContCrear">
            <div>
                <label className="label1">Nombre del Producto</label>
                <select name="producto" id="producto" value={newProduct.producto}
                    onChange={handleChange}>
                    <option value="">Selecciona un producto...</option>
                    <option value="Credito de Consumo">Credito de Consumo</option>
                    <option value="Libranza Libre Inversión">Libranza Libre Inversión</option>
                    <option value="Tarjeta de Credito">Tarjeta de Credito</option>
                </select>
                {errors.producto && <label>{errors.producto}</label>}
            </div>
            <div>
                <label className="label2">Cupo</label>
                <input type="number" name='cupo' value={newProduct.cupo}
                    onChange={handleChange} placeholder="ingresa Cupo" />
                {errors.cupo && <label>{errors.cupo}</label>}
            </div>
            {renderFranquicia()}
            {renderTasa()}

            <div>
                <button type="submit" onClick={handleCreation} disabled={Object.keys(errors).length > 0}>
                    Crear nuevo Producto
                </button>
            </div>
        </div>
    );
};
