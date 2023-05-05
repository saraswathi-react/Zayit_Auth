import axios from 'axios'

const request = axios.create({
  baseURL: 'https://fakestoreapi.com/', // API server url
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
})

export default request
