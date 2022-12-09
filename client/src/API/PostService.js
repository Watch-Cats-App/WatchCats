import axios from "axios";

export default class PostService {
    static async getAll() {
        const response = await axios.get('http://176.124.211.21:1000')
        return response.data
    }

}