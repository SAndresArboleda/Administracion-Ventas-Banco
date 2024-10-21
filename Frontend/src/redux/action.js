import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const URL = import.meta.env.VITE_URL;

export const getAllProducts = () => {
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


export const postProduct = (payload) => {
    return async(dispatch)=>{
        try {
            const response = await axios.post(`${URL}/crearVenta`,payload);

            alert("Producto creado correctamente: " + response.data.id)
            return dispatch({
                type:"POST_PRODUCT",
                payload: response.data.id
            })
        } catch (error) {
            console.log(error);
            alert("Producto no creado")
            
        }
    }
}

export const login = (userData) => {
    return async (dispatch) => {
      try {
        const response = await axios.post(`${URL}/login`, userData);
        const data = response.data;
  
        // Guardar token en localStorage si lo usas
        if (data.token) {
          localStorage.setItem('token', data.token);
        }
  
        dispatch({
          type: LOGIN,
          payload: {
            user: data.user,
            token: data.token
          }
        });
  
        const navigate = useNavigate();
        navigate('/Admin');
        
      } catch (error) {
        console.log(error);
      }
    };
  };



export const getAllPackage = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${URL}/getAllPackages`);
            const data = response.data;
            console.log(data);
            
            dispatch({
                type: "GET_ALL_PACKAGES",
                payload: data
            });
        } catch (error) {
            console.log(error);
            alert(error);
        }
    };
};
export const postPackage = (payload) => {
    return async(dispatch)=>{
        try {
            const response = await axios.post(`${URL}/postPackage`,payload);

            alert("Paquete creado correctamente: " + response.data.id)
            return dispatch({
                type:"POST_PACKAGE",
                payload: response.data.id   
            })
        } catch (error) {
            console.log(error);
            alert("Producto no creado")
            
        }
    }
}


export const getUser = (email, password) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${URL}/getUser`, {
                email,
                password
            });
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
export const postUser = (payload) =>{
    return async(dispatch)=>{
        try {
            const response = await axios.post(`${URL}/postUser`, payload);
            alert("Usuario crado correctamente: " + response.data.id)
            return dispatch({
                type: "POST_USER",
                payload: response.data.id
            })
        } catch (error) {
            console.log(error);
            alert("Usuario no creado")
        }
    }
}





export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS"
export const GET_ALL_PACKAGES = "GET_ALL_PACKAGES"
export const POST_PRODUCT = "POST_PRODUCT"
export const POST_PACKAGE = "POST_PACKAGE"
export const POST_USER = "POST_USER"
export const GET_ALL_USERS = "GET_ALL_USERS"
export const LOGIN = "LOGIN"
