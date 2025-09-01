import api from './api';

export const getAllJobs = async (data) => {
  try {
    const response = await api.get('/job-posting', data);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network error');
  }
};

/**
 * Fetches a single job posting by its ID.
 * @param {string} id The ID of the job posting to fetch.
 * @returns {Promise<object>} A promise that resolves with the job data.
 */
export const getJobById = async (id) => {
  try {
    const response = await api.get(`/job-posting/${id}`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network error');
  }
};
/**
 * Fetches a single job posting by its ID.
 * @param {string} id The ID of the job posting to fetch.
 * @returns {Promise<object>} A promise that resolves with the job data.
 */
export const submitApplicant = async (data) => {
  try {
    const response = await api.post('/apply-job/submit', data);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network error');
  }
};
