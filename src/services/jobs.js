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
 * Submits an applicant for a job posting.
 * @param {object} data The applicant data to submit.
 * @param {string} token The authorization token.
 * @returns {Promise<object>} A promise that resolves with the response.
 */
export const submitApplicant = async (data, token) => {
  console.log('Submitting applicant with token:', token);
  try {
    const response = await api.post('/apply-job/submit', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`
        }
    });
    return response;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network error');
  }
};

