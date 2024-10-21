import {
    GET_ALL_PRODUCTS,
    GET_ALL_USERS,
    POST_PRODUCT,
    LOGIN,


    GET_ALL_PACKAGES,
    POST_USER,
} from './action'

let initialsState = {
    isAuthenticated: false,
    user: null,
    token: null,
    error: null,
    allProducts: [],
    allUsers: [],
    login: [],

    allPackage: [],
    productId: [],
    userId: '',
}

const reducer = (state = initialsState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                allProducts: action.payload
            }
        case GET_ALL_USERS:
            return {
                ...state,
                allUsers: action.payload
            }
        case POST_PRODUCT:
            return {
                ...state,
                productId: action.payload
            }
        case LOGIN:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
                token: action.payload.token,
                error: null
            };


        case GET_ALL_PACKAGES:
            return {
                ...state,
                allPackage: action.payload
            }


        case POST_USER:
            return {
                ...state,
                userId: action.payload
            }


        default:
            return state;
    }
};

export default reducer;

