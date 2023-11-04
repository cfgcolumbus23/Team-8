import axios from 'axios'

const baseURL = 'https://localhost:3000'; // Replace with your API base URL

const instance = axios.create ({
  baseURL: baseURL,
  timeout: 5000,
});

// make a GET request
async function get(endpoint, params = {}) {
  try {
    const response = await instance.get(endpoint, { params });
    return response.data;
  } catch (error) {
    throw error;
  }
}

// make a PUT request
async function put(endpoint, data = {}) {
  try {
    const response = await instance.put(endpoint, data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export default {
  get,
  put,
};


