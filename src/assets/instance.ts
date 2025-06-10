import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://19e640ebd7605531.mokky.dev'
})

export default instance