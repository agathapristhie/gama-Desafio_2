import axios from 'axios';

const api = axios.create({
   baseURL: 'https://my-json-server.typicode.com/agathapristhie/gama-Desafio_2/produtos'
  // baseURL: 'http://localhost:8080/produtos'
})

export default api;