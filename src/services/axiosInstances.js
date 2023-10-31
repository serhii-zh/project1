import axios from 'axios';
const API_BASE_URL = 'https://demo-api.apiko.academy/api';
const userToken = JSON.parse(localStorage.getItem('currentUser'));

export const authInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: `Bearer ${userToken}`,
    accept: 'application/json',
  },
});

export const publicInstance = axios.create({
    baseURL: API_BASE_URL,
})