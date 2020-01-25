import { http } from './HttpService'
import axios from 'axios'

export function getAllDocs(q) {
    return http().get(`/docs/${q}`)
}
export function getUserDocs(q) {
    if (q === null) {
        return http().get('/private')
    }
    return http().get(`/private/${q}`)
}
export function getDocById(id) {
    return http().get(`/doc/${id}`)
}
export function createDoc(doc, file) {
    return http().post('/doc', doc)
}
export function updateDoc(doc) {
    return http().put('/doc', doc)
}
export function deleteDoc(id) {
    return http().get(`/docs/${id}`)
}

export function getTrailList(id) {
    return http().get(`/trail/${id}`)
}

export function nextLocation(doc) {
    if (!doc.body.signatures) {
        return 'usage'
    }
    let unsigned = doc.body.signatures.filter(sign => {
        return !sign.signature
    })

    if (unsigned.length <= 0) {
        return 'usage'
    }
    return unsigned[0].EmailAdress
}