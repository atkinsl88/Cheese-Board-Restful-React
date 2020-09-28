import axios from 'axios'
import { getToken } from './auth'
const baseUrl = 'https://cheesebored.herokuapp.com'
const withHeaders = () => {
  return {
    headers: { Authorization: `Bearer ${getToken()}` }
  }
}
// * Cheese Requests
export const getAllCheeses = () => {
  return axios.get(`${baseUrl}/cheeses`)
}
export const createCheese = formData => {
  return axios.post(`${baseUrl}/cheeses`, formData, withHeaders())
}
export const getSingleCheese = id => {
  return axios.get(`${baseUrl}/cheeses/${id}`)
}
export const editCheese = (formData, id) => {
  return axios.put(`${baseUrl}/cheeses/${id}`, formData, withHeaders())
}
export const deleteCheese = id => {
  return axios.delete(`${baseUrl}/cheeses/${id}`, withHeaders())
}
// * Auth Requests
export const registerUser = formData => {
  return axios.post(`${baseUrl}/register`, formData)
}
export const loginUser = formData => {
  return axios.post(`${baseUrl}/login`, formData)
}