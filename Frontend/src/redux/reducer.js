import {
    LOGIN,
    GET_ALL_PRODUCTS,
    GET_ALL_USERS,
    POST_PRODUCT,
    POST_USER,
    GET_PRODUCT_ID,

} from './action'

let initialsState = {
    isAuthenticated: false,
    user: null,
    token: null,
    error: null,
    allProducts: [],
    allUsers: [],
    login: [],
    postproduct: [],
    postUser: [],
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
                postproduct: action.payload
            }
        case POST_USER:
            return {
                ...state,
                postUser: action.payload
            }
        case GET_PRODUCT_ID:
            return {
                ...state,
                allProducts: action.payload
            }


        default:
            return state;
    }
};

export default reducer;

