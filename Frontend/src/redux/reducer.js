import {
    LOGIN,
    GET_ALL_PRODUCTS,
    POST_PRODUCT,
    GET_PRODUCT_ID,
    PUT_VENTA_ID,
    DELETE_VENTA,
    GET_VENTA_BY_ID_USER,

    GET_ALL_USERS,
    POST_USER,
    GET_USER_ID,
    PUT_USER_ID,
    DELETE_USER,

} from './action'

let initialsState = {
    isAuthenticated: false,
    user: null,
    token: null,
    error: null,
    login: [],

    allVentas: [],
    postproduct: [],
    VentaId: [],

    allUsers: [],
    postUser: [],
    UserId: [],
}

const reducer = (state = initialsState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
                token: action.payload.token,
                error: null

            };
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                allVentas: action.payload
            }
        case POST_PRODUCT:
            return {
                ...state,
                postproduct: action.payload
            }
        case GET_PRODUCT_ID:
            return {
                ...state,
                VentaId: action.payload
            }
        case PUT_VENTA_ID:
            return {
                ...state,
                VentaId: action.payload
            }
        case DELETE_VENTA:
            return {
                ...state,
                allVentas: state.allVentas.filter((venta) => venta.id !== action.payload.id)
            }

        case GET_ALL_USERS:
            return {
                ...state,
                allUsers: action.payload
            }
        case POST_USER:
            return {
                ...state,
                postUser: action.payload
            }

        case GET_USER_ID:
            return {
                ...state,
                UserId: action.payload
            }

        case PUT_USER_ID:
            return {
                ...state,
                UserId: action.payload
            }
        case DELETE_USER:
            return {
                ...state,
                allUsers: state.allUsers.filter((user)=>user.id !== action.payload.id) 
            }
        case GET_VENTA_BY_ID_USER:
            return {
                ...state,
                allVentasIdUser: state.payload 
            }

        default:
            return state;
    }
};

export default reducer;

