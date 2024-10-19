import {
    GET_ALL_USERS
}from './action'


const initialsState = {
    allUsers: [],
}
export const reducer = (state = initialsState, action) => {
    switch (action.type) {
        case GET_ALL_USERS:
            return {
                ...state,
                allUsers: action.payload
            }

        default:
            return state;
    }
}
