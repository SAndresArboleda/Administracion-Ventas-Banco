import axios from 'axios'

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
  
      } catch (error) {
        console.log(error);
      }
    };
  };


export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS"
export const GET_ALL_PACKAGES = "GET_ALL_PACKAGES"
export const POST_PRODUCT = "POST_PRODUCT"
export const POST_PACKAGE = "POST_PACKAGE"
export const POST_USER = "POST_USER"
export const GET_ALL_USERS = "GET_ALL_USERS"
export const LOGIN = "LOGIN"
