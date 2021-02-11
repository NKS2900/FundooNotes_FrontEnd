import axios from 'axios'
import userApi from '../apiConstants/userApiContants.js'

export function login(loginData){

    try{
        const response = axios.post('https://localhost:44379/api/User/login',loginData);
        return response;
    }
    catch (error){
        return error;
    }
}




