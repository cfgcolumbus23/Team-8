const axios = require('axios');

const baseURL = 'https://localhost:3000'; // Replace with your API base URL

const instance = axios.create({
  baseURL,
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

module.exports = {
  get,
  put,
};

