import api from './api';

export const login = async (credentials) => {
  try {
    const response = await api.post('/applicant/login', credentials);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network error');
  }
};

export const register = async (data) => {
  try {
    const response = await api.post('/applicant/register', data);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network error');
  }
};
