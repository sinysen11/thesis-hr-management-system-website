import api from './api';

export const getAllJobs = async (data) => {
  try {
    const response = await api.get('/job-posting', data);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network error');
  }
};

export const getJobById = async (id) => {
  try {
    const response = await api.get(`/job-posting/${id}`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network error');
  }
};

export const submitApplicant = async (data, token) => {
  try {
    const response = await api.post('/apply-job/submit', data, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network error');
  }
};

export const uploadDocument = async (data, token, fileType = 'application/octet-stream') => {
  try {
    const response = await api.post('/document', data, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': fileType // Use provided fileType or default to octet-stream
      }
    });
    console.log('uploadDocument response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Full upload error:', error.response?.data, error);
    throw error.response ? error.response.data : new Error('Network error');
  }
};