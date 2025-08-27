import axios from 'axios';

const api = axios.create({
  baseURL: process.env.VITE_API_BASE_URL || 'https://thesis-posting-and-leave-request-api.onrender.com/api/v1',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;
