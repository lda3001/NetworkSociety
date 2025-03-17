import api from '@/lib/api';
import authApi from '@/lib/authApi';

// Types
export interface User {
  id: string;
  name: string;
  email: string;
  profilePicture?: string;
}

export interface UserProfile {
  id: string;
  bio?: string;
  location?: string;
  website?: string;
  joinDate: string;
  followersCount: number;
  followingCount: number;
}

/**
 * User service for handling user-related API calls
 */
const userService = {
  /**
   * Get current user profile
   */
  getCurrentUser: () => {
    return authApi.get('/users/me');
  },

  /**
   * Get user profile by ID
   */
  getUserById: (userId: string) => {
    return authApi.get(`/users/${userId}`);
  },

  /**
   * Update user profile
   */
  updateProfile: (data: Partial<UserProfile>) => {
    return authApi.patch('/users/profile', data);
  },

  /**
   * Follow a user
   */
  followUser: (userId: string) => {
    return authApi.post(`/users/${userId}/follow`, {});
  },

  /**
   * Unfollow a user
   */
  unfollowUser: (userId: string) => {
    return authApi.delete(`/users/${userId}/follow`);
  },

  /**
   * Get user followers
   */
  getUserFollowers: (userId: string, page = 1, limit = 20) => {
    return authApi.get(`/users/${userId}/followers?page=${page}&limit=${limit}`);
  },

  /**
   * Get users that a user is following
   */
  getUserFollowing: (userId: string, page = 1, limit = 20) => {
    return authApi.get(`/users/${userId}/following?page=${page}&limit=${limit}`);
  }
};

export default userService; 