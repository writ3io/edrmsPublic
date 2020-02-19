import { http } from './HttpService'

export function getSeries() {
    return http().get('/fileplan')
}
export function getSubSeries({ fileplan, id }) {
    return http().get(`/series/${fileplan}/${id}`)
}
// export function createDoc(doc){
//     return http().post('/doc',doc)
// }
// export function updateDoc(doc){
//     return http().put('/doc',doc)
// }
// export function deleteDoc(id){
//     return http().get(`/docs/${id}`)
// }