import axios from 'axios'

export default function axiosWithCors() {
    return axios.create({
        baseURL: "https://ez-pz-app.herokuapp.com/api/todos",
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'Application/json'
        }
    })
}