import axios from "axios"

export default class Users {
    static async getAll(limit = 10, page = 1) {
        const response = await axios.get('http://localhost:8000/api/users/', {
            params: {
                limit: limit,
                offset: page
            }
        })
        return response
    }

    static async getById(id) {
        const response = await axios.get(`http://localhost:8000/api/users/${id}/`)
        return response
    }
}