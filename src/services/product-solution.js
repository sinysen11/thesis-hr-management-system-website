import api from './api';

export const getAllMainContent = async (data) => {
  try {
    const response = await api.get('/website/main-content', data);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network error');
  }
};
export const getAllTabContent = async (slug) => {
  try {
    const response = await api.get(`/website/main-content/tabs/${slug}`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network error');
  }
};
