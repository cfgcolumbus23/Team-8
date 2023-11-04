import fetch from 'node-fetch';

const BASE_URL = 'http://localhost:3000';

async function backendRequest(route, method, data) {
  const url = `${BASE_URL}${route}`;

  try {
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: data ? JSON.stringify(data) : undefined,
    });

    if (!response.ok) {
      throw new Error('backend request failed');
    }

    return response.json();
  } catch (error) {
    throw error;
  }
}

export default backendRequest;
