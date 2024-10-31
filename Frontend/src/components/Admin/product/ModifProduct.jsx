import { useEffect, useState } from "react";
import { getProductById, putVenta } from "../../../redux/action";
import { useDispatch, useSelector } from 'react-redux';
import './ModifProduct.css';
import { IoSearchCircle } from "react-icons/io5";

export const ModifProduct = () => {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState("");
    const VentaId = useSelector((state) => state.VentaId);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const [product, setProduct] = useState({
        id: "",
        producto: "",
        cupo: "",
        franquicia: "",
        tasa: "",
        usuarioId: "",
        createdAt: "",
        updatedAt: ""
    });

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleFetch = () => {
        if (searchTerm.trim() !== "") {
            setIsLoading(true);
            dispatch(getProductById(searchTerm));
            setError("");
        } else {
            setError("Por favor ingresa un ID para buscar.");
        }
    };



    /*Con handleChange cambiamos los valores de cada casilla al que escribamos*/
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value
        }))
    }
    /*Para enviar la actualización del Producto o Venta */
    const handleUpdate = async () => {
        try {
            await dispatch(putVenta(product.id, {
                producto: product.producto,
                cupo: product.cupo,
                franquicia: product.franquicia,
                tasa: product.tasa,
                usuarioId: product.usuarioId,
                createdAt: product.createdAt,
                updatedAt: new Date().toLocaleString()
            }));
            // Refresca los datos tras la actualización
            await dispatch(getProductById(product.id));
        } catch (error) {
            console.error("Error al actualizar el producto:", error);
        }
    };
    useEffect(() => {
        if (VentaId) {
            setProduct({
                id: VentaId.id || "",
                producto: VentaId.producto || "",
                cupo: VentaId.cupo || "",
                franquicia: VentaId.franquicia || null,
                tasa: VentaId.tasa || null,
                usuarioId: VentaId.usuarioId || "",
                createdAt: VentaId.createdAt ? new Date(VentaId.createdAt).toLocaleString() : "",
                updatedAt: VentaId.updatedAt ? new Date(VentaId.updatedAt).toLocaleString() : ""
            });
            setIsLoading(false);
        }
    }, [VentaId]);

    return (
        <div id="ContModificar">
            <div>
                <div>
                    <span className="titulo-Id">
                        <h2>Buscar y Modificar Venta</h2>
                        <p>ID: {product.id}</p>
                    </span>
                    <span className="searchId">
                        <input
                            type="search"
                            placeholder="ID de Producto"
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                        <IoSearchCircle className="lupaSearch" type="submit" onClick={handleFetch} />
                    </span>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </div>
            </div>
            {isLoading && <p>Cargando datos...</p>}
            {!isLoading && (
                <>
                    <div>
                        <label className="label1">Nombre del Producto: </label>
                        <select name="producto"
                            id="producto"
                            value={product.producto}
                            onChange={handleChange}>
                            <option value="">Selecciona un producto...</option>
                            <option value="Credito de Consumo">Crédito de Consumo</option>
                            <option value="Libranza Libre Inversión">Libranza Libre Inversión</option>
                            <option value="Tarjeta de Credito">Tarjeta de Crédito</option>
                        </select>
                        {/* {errors.producto && <label>{errors.producto}</label>} */}
                    </div>
                    <div>
                        <label className="label2">Cupo: </label>
                        <input type="text" name='cupo' value={product.cupo || ""}
                            onChange={handleChange} placeholder="ingresa Cupo" />
                        {/* {errors.cupo && <label>{errors.cupo}</label>} */}
                    </div>
                    <div>
                        {/* {
                            (product.producto === "Tarjeta de Credito") ? */}
                                <div>
                                    <label>Franquicia: </label>
                                    <select
                                        name="franquicia"
                                        value={product.franquicia || ""}
                                        onChange={handleChange}
                                    >
                                        <option value="">Selecciona una Franquicia...</option>
                                        <option value="AMEX">Amex</option>
                                        <option value="VISA">Visa</option>
                                        <option value="MASTERCARD">Mastercard</option>
                                    </select>
                                    {/* {errors.franquicia && <label>{errors.franquicia}</label>} */}
                                </div>
                        {/* : null
                        } */}
                    </div>
                    <div>
                        {/* {
                            (product.producto !== "Tarjeta de Credito") ? */}
                                <div>
                                    <label className="label4">Tasa: </label>
                                    <input type="number" name='tasa' value={product.tasa || ""}
                                        onChange={handleChange} placeholder="ingresa tasa" />
                                    {/* {errors.tasa && <label>{errors.tasa}</label>} */}
                                </div>
                                {/* : null
                        } */}
                    </div>
                    <div>
                        <label htmlFor="usuarioId">Id Asesor de Venta: </label>
                        <span>{product.usuarioId}</span>
                    </div>
                    <div>
                        <label htmlFor="createdAt">Fecha de Creación: </label>
                        <span>{product.createdAt}</span>
                    </div>
                    <div>
                        <label htmlFor="updatedAt">Fecha de Modificación: </label>
                        <span>{product.updatedAt}</span>
                    </div>
                    <div>
                        <button type="button" onClick={handleUpdate}>
                            Modificar Producto
                        </button>
                    </div>
                </>
            )
            }
        </div >
    );
};
