import { http } from './HttpService'

export function getRecord(id) {
    return http().get(`/record/${id}`)
}

//getAllRecords
export function getAllRecords(q) {
    if (typeof q === 'string') {
        return http().get(`/records/${q}`)
    }
    return http().get(`/records/?${q.location}/${q.ref}`)
}

export function updateRecord(record) {
    return http().put('/record', record)
}

//requests
export function newRequest(record) {
    return http().post('/request', record)
}
export function getRequest(id) {
    return http().get(`/request/${id}`)
}

//getAllRecords
export function getAllRequests(q) {
    return http().get(`/requests/${q}`)
}

export function updateRequests(record) {
    return http().put('/request', record)
}
export function removeRequest(id) {
    return http().delete(`/requests/${id}`)
}