import axios from 'axios'

const URL = import.meta.env.VITE_URL;

export const login = (user) => {
    return async (dispatch) => {
      try {
        const response = await axios.post(`${URL}/login`, user);
        console.log(response);
        
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
            alert("Producto creado correctamente: " + response.data.response.id)
            return dispatch({
                type:"POST_PRODUCT",
                payload: response.data
            })
        } catch (error) {
            console.log(error);
            alert("Producto no creado")
            
        }
    }
}
export const postUser = (payload) => {
    return async(dispatch)=>{
        try {
            const response = await axios.post(`${URL}/crearUsuario`,payload);
            console.log(response);
            
            alert("Usuario creado correctamente: " + response.data.usuario.id)
            return dispatch({
                type:"POST_USER",
                payload: response.data.usuario
            })
        } catch (error) {
            console.log(error);
            alert("Usuario no creado")
            
        }
    }
}


  
  
export const LOGIN = "LOGIN"
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS"
export const GET_ALL_USERS = "GET_ALL_USERS"
export const POST_PRODUCT = "POST_PRODUCT"
export const POST_USER = "POST_USER"
