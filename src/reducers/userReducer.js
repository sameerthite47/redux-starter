import { GET_USERS, ADD_USER, DELETE_USER } from '../actions/types';

const initialState = {
    users: []
}

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_USERS:
            return{
                users:action.payload
            }   
        case ADD_USER:
            return {
                users:action.payload
            }
        case DELETE_USER:
            return {
                users:action.payload
            }
        default:
            return state;
    }
}