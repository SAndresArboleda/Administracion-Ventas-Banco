import axios from 'axios'

const URL = import.meta.env.VITE_URL;

export const getAllUsers = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${URL}/getAllUsers`);
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

export const GET_ALL_USERS = "GET_ALL_USERS"