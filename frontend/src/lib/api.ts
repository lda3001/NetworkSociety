// Base API URL configurations
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

/**
 * Base fetch function with authentication handling
 */
async function fetchAPI(
  endpoint: string, 
  options: RequestInit = {}
): Promise<any> {
  // Full API URL
  const url = `${API_BASE_URL}${endpoint}`;
  
  // Default headers
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  // Merge options
  const fetchOptions: RequestInit = {
    ...options,
    headers,
  };

  try {
    const response = await fetch(url, fetchOptions);
    
    // Check if the response is successful
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `API request failed with status ${response.status}`);
    }
    
    // For empty responses like 204 No Content
    if (response.status === 204) {
      return null;
    }
    
    // Parse JSON response
    return await response.json();
  } catch (error) {
    console.error('API request error:', error);
    throw error;
  }
}

/**
 * HTTP GET request
 */
export function get(endpoint: string, options: RequestInit = {}) {
  return fetchAPI(endpoint, {
    ...options,
    method: 'GET',
  });
}

/**
 * HTTP POST request
 */
export function post(endpoint: string, data: any, options: RequestInit = {}) {
  return fetchAPI(endpoint, {
    ...options,
    method: 'POST',
    body: JSON.stringify(data),
  });
}

/**
 * HTTP PUT request
 */
export function put(endpoint: string, data: any, options: RequestInit = {}) {
  return fetchAPI(endpoint, {
    ...options,
    method: 'PUT',
    body: JSON.stringify(data),
  });
}

/**
 * HTTP PATCH request
 */
export function patch(endpoint: string, data: any, options: RequestInit = {}) {
  return fetchAPI(endpoint, {
    ...options,
    method: 'PATCH',
    body: JSON.stringify(data),
  });
}

/**
 * HTTP DELETE request
 */
export function del(endpoint: string, options: RequestInit = {}) {
  return fetchAPI(endpoint, {
    ...options,
    method: 'DELETE',
  });
}

// API with all methods
const api = {
  get,
  post,
  put,
  patch,
  delete: del,
};

export default api; 