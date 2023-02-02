import axios from "axios";
const baseUrl = "http://localhost:3001/api/persons"

const create = newObject => {
    return axios.post(baseUrl, newObject)
}

const erase = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}

const update = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject)
}
// eslint-disable-next-line import/no-anonymous-default-export
export default { create, erase, update }