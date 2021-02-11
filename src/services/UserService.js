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

export function signup(signUpData){

    try{
        const response = axios.post('https://localhost:44379/api/User/register',signUpData);
        return response;
    }
    catch (error){
        return error;
    }
}

export function reset(data){

    try{
        console.log(data);
        const response = axios.put('https://localhost:44379/api/User/resetPass',data);
        return response;
    }
    catch (error){
        return error;
    }
}


