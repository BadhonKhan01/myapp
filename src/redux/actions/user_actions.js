import axios from 'axios';
import {
    GET_ALL_USERS
} from './types';

// =========================================
//  @Get All Users
// =========================================
export const getAllUsers = () => {
    const request = axios.get(`https://jsonplaceholder.typicode.com/users`).then( response => {
        return response.data
    } )
    
    return {
        type: GET_ALL_USERS,
        payload: request
    }
}