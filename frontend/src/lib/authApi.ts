import { getSession } from 'next-auth/react';
import api from './api';

/**
 * Get authenticated headers with session token
 */
async function getAuthHeaders(): Promise<HeadersInit> {
  const session = await getSession();
  
  if (!session) {
    throw new Error('No active session found');
  }
  
  return {
    'Authorization': `Bearer ${(session as any).token || ''}`,
  };
}

/**
 * Authenticated GET request
 */
export async function authGet(endpoint: string, options: RequestInit = {}) {
  const authHeaders = await getAuthHeaders();
  
  return api.get(endpoint, {
    ...options,
    headers: {
      ...options.headers,
      ...authHeaders,
    },
  });
}

/**
 * Authenticated POST request
 */
export async function authPost(endpoint: string, data: any, options: RequestInit = {}) {
  const authHeaders = await getAuthHeaders();
  
  return api.post(endpoint, data, {
    ...options,
    headers: {
      ...options.headers,
      ...authHeaders,
    },
  });
}

/**
 * Authenticated PUT request
 */
export async function authPut(endpoint: string, data: any, options: RequestInit = {}) {
  const authHeaders = await getAuthHeaders();
  
  return api.put(endpoint, data, {
    ...options,
    headers: {
      ...options.headers,
      ...authHeaders,
    },
  });
}

/**
 * Authenticated PATCH request
 */
export async function authPatch(endpoint: string, data: any, options: RequestInit = {}) {
  const authHeaders = await getAuthHeaders();
  
  return api.patch(endpoint, data, {
    ...options,
    headers: {
      ...options.headers,
      ...authHeaders,
    },
  });
}

/**
 * Authenticated DELETE request
 */
export async function authDelete(endpoint: string, options: RequestInit = {}) {
  const authHeaders = await getAuthHeaders();
  
  return api.delete(endpoint, {
    ...options,
    headers: {
      ...options.headers,
      ...authHeaders,
    },
  });
}

// Authenticated API with all methods
const authApi = {
  get: authGet,
  post: authPost,
  put: authPut,
  patch: authPatch,
  delete: authDelete,
};

export default authApi; 