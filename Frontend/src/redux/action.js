import axios from 'axios'
const URL = import.meta.env.VITE_URL;

export const login = (user) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(`${URL}/login`, user);
            const data = response.data;

            if (data.token) {
                localStorage.setItem('token', data.token);
            }

            dispatch({
                type: 'LOGIN',
                payload: {
                    user: data.user,
                    token: data.token
                }
            });
            return data;
        } catch (error) {
            console.log(error, "Error en el login");
            alert('Error en correo o contraseña')
            return (error)
        }
    };
};
export const getAllVentas = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${URL}/buscarVenta`);
            const data = response.data;

            dispatch({
                type: "GET_ALL_PRODUCTS",
                payload: data
            });
        } catch (error) {
            console.log(error);
            alert(error);
        }
    };
};
export const postVenta = (payload) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(`${URL}/crearVenta`, payload);
            console.log(response);

            alert("Venta creado correctamente: " + response.data.response.id)
            return dispatch({
                type: "POST_PRODUCT",
                payload: response.data
            })
        } catch (error) {
            console.log(error);
            alert("Venta no creado")

        }
    }
}
export const getVentaById = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${URL}/buscarVenta/${id}`);
            const data = response.data;
            dispatch({
                type: "GET_PRODUCT_ID",
                payload: data
            });
        } catch (error) {
            console.log(error);
            alert(error);
        }
    };
};
export const getVentaByIdUser = (id)=>{
    return async (dispatch) =>{

        try {
            const response = await axios.get(`${URL}/buscarVentaUsuario/${id}`);
            const data = response.data;
            dispatch({
                type: "GET_VENTA_BY_ID_USER",
                payload: data
            })
        } catch (error) {
            console.log("error al buscar ventas de Usuario con id", error);
            alert(error)
            
        }
    }
}
export const putVenta = (id, producData) => {
    return async (dispatch) => {
        try {
            const response = await axios.put(`${URL}/actualizarVenta/${id}`, producData);
            const data = response.data;
            dispatch({
                type: "PUT_VENTA_ID",
                payload: data
            })
        } catch (error) {
            console.log("Error al actualizar la venta:", error);
        }
    }
}
export const deleteVenta = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.delete(`${URL}/borrarVenta/${id}`);
            const data = response.data;
            dispatch({
                type: "DELETE_VENTA",
                payload: data
            })
        } catch (error) {
            console.error("Error al eliminar la venta:", error);
            alert("Error al eliminar la venta.");
        }
    }
}


export const getAllUsers = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${URL}/buscarUsuario`);
            const data = response.data;
            dispatch({
                type: "GET_ALL_USERS",
                payload: data
            });
        } catch (error) {
            console.log(error);
            alert(error);
        }
    };
};
export const postUser = (payload) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(`${URL}/crearUsuario`, payload);
            console.log(response);

            alert("Usuario creado correctamente: " + response.data.usuario.id)
            return dispatch({
                type: "POST_USER",
                payload: response.data.usuario
            })
        } catch (error) {
            console.log(error);
            alert("Usuario no creado")

        }
    }
}
export const getUserById = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${URL}/buscarUsuario/${id}`);
            const data = response.data;
            dispatch({
                type: "GET_USER_ID",
                payload: data
            });

        } catch (error) {
            console.log(`error al buscar Usuario id: ${id}`, error);
            alert(error);
        }
    };
};
export const putUser = (id, userData) => {
    return async (dispatch) => {
        try {
            const response = await axios.put(`${URL}/actualizarUsuario/${id}`, userData)
            const data = response.data
            dispatch({
                type: "PUT_USER_ID",
                payload: data
            });
        } catch (error) {
            console.log("error al actualizar el Usuario", error);
            alert("error al actualizar el Usuario", error);

        }
    }
}
export const deleteUser = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.delete(`${URL}/borrarUsuario/${id}`)
            const data = response.data
            dispatch({
                type: "DELETE_USER",
                payload: data
            })
        } catch (error) {
            console.log(error);
            alert("error al borrar usuario", error)
        }
    }
}





export const LOGIN = "LOGIN"
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS"
export const POST_PRODUCT = "POST_PRODUCT"
export const GET_PRODUCT_ID = "GET_PRODUCT_ID"
export const PUT_VENTA_ID = "PUT_VENTA_ID"
export const DELETE_VENTA = "DELETE_VENTA"
export const GET_VENTA_BY_ID_USER = "GET_VENTA_BY_ID_USER"

export const GET_ALL_USERS = "GET_ALL_USERS"
export const POST_USER = "POST_USER"
export const GET_USER_ID = "GET_USER_ID"
export const PUT_USER_ID = "PUT_USER_ID"
export const DELETE_USER = "DELETE_USER"

