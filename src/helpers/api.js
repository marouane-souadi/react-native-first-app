
const API_URL = 'https://hawi-server.herokuapp.com/api'

export const getAllProducts = () => fetch(`${API_URL}/products`).then(res => res.json())