import {http} from './HttpService'

export function getAllUsers(){
    return http().get('/users')
}
export function getUserById(id){
    return http().get(`/users/${id}`)
}
export function createUser(user){
    return http().post('/user',user)
}
export function updateUser(user){
    return http().put('/user',user)
}
export function deleteUser(id){
    return http().get(`/users/${id}`)
}