import store from '../store/store'
import { http } from './HttpService'
import jwt from 'jsonwebtoken'

export function isLoggedIn() {
    const token = localStorage.getItem('token');
    return token != null;
}

export function logout() {
    localStorage.clear();
    store.dispatch('authenticate')
}

export function login(user) {
    return http().post('/login', user).then(res => {
            if (res) {
                setToken(res.data.token)
                store.dispatch('getAllUsers');
            }
        })
        .catch(function(error) {
            // handle error
            console.log('ERROR', error);
            return { error: 'Invalid Username and Password!' }
        })
}

function setToken(token) {
    localStorage.setItem('token', token);
    store.dispatch('authenticate');
}

export function getToken() {
    return localStorage.getItem('token')
}

export function getUser() {
    const token = decodeToken()
    if (!token) {
        return null
    }

    return token.user.user
}




export function registerUser(user) {
    return http().post('/user', user)
}

function decodeToken() {
    const token = getToken()
    if (!token) {
        return null
    }

    return jwt.decode(token)
}