import { GET_USERS, ADD_USER, DELETE_USER } from './types';
import axios from 'axios';

const users = [
    { id:1, name:'Sameer'},
    { id:2, name:'Vinayak'},
    { id:3, name:'Manish'}
]

export const getUsers = () => dispatch => {
    console.log("getUsers called")
    dispatch({
        type:GET_USERS,
        payload:users
    });
    // axios.get('http://api.example.com/get')
    //     .then(users => {
    //         dispatch({
    //             type: GET_USERS,
    //             payload: users
    //         })
    //     }).catch(error => console.log(error));
}

export const addUser = name => dispatch => {
    let index = users.length + 1;
    let user = {
        id:index,
        name: name
    }
    users.push(user);
    dispatch({
        type:ADD_USER,
        payload:users
    });
}

export const deleteUser = id => dispatch => {
    users.splice(id, 1);
    dispatch({
        type:DELETE_USER,
        payload: users
    })
}



