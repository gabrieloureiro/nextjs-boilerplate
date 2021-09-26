import axios from 'axios'

const api = axios.create({
  baseURL: 'https://localhost:3333/',
  responseType: 'json',
  headers: {
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
})

export default api
