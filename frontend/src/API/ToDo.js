import axios from "axios"

export default class Projects {
    static async getAll(limit = 10, page = 1) {
        const response = await axios.get('http://localhost:8000/api/todo/', {
            params: {
                limit: limit,
                offset: page
            }
        })
        return response
    }

    static async getById(id) {
        const response = await axios.get(`http://localhost:8000/api/todo/${id}/`)
        return response
    }
}