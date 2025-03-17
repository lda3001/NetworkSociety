import api from '@/lib/api';
import authApi from '@/lib/authApi';

// Types
export interface Post {
  id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  userName: string;
  userImage?: string;
  likesCount: number;
  commentsCount: number;
  isLiked?: boolean;
  media?: string[];
}

export interface Comment {
  id: string;
  content: string;
  createdAt: string;
  userId: string;
  userName: string;
  userImage?: string;
}

export interface CreatePostData {
  content: string;
  media?: string[];
}

export interface CreateCommentData {
  content: string;
}

/**
 * Post service for handling post-related API calls
 */
const postService = {
  /**
   * Get newsfeed posts
   */
  getNewsfeed: (page = 1, limit = 10) => {
    return authApi.get(`/posts/newsfeed?page=${page}&limit=${limit}`);
  },

  /**
   * Get user posts
   */
  getUserPosts: (userId: string, page = 1, limit = 10) => {
    return authApi.get(`/posts/user/${userId}?page=${page}&limit=${limit}`);
  },

  /**
   * Get single post by ID
   */
  getPostById: (postId: string) => {
    return authApi.get(`/posts/${postId}`);
  },

  /**
   * Create a new post
   */
  createPost: (data: CreatePostData) => {
    return authApi.post('/posts', data);
  },

  /**
   * Update an existing post
   */
  updatePost: (postId: string, data: Partial<CreatePostData>) => {
    return authApi.put(`/posts/${postId}`, data);
  },

  /**
   * Delete a post
   */
  deletePost: (postId: string) => {
    return authApi.delete(`/posts/${postId}`);
  },

  /**
   * Like a post
   */
  likePost: (postId: string) => {
    return authApi.post(`/posts/${postId}/like`, {});
  },

  /**
   * Unlike a post
   */
  unlikePost: (postId: string) => {
    return authApi.delete(`/posts/${postId}/like`);
  },

  /**
   * Get post comments
   */
  getPostComments: (postId: string, page = 1, limit = 10) => {
    return authApi.get(`/posts/${postId}/comments?page=${page}&limit=${limit}`);
  },

  /**
   * Add a comment to a post
   */
  addComment: (postId: string, data: CreateCommentData) => {
    return authApi.post(`/posts/${postId}/comments`, data);
  },

  /**
   * Delete a comment
   */
  deleteComment: (postId: string, commentId: string) => {
    return authApi.delete(`/posts/${postId}/comments/${commentId}`);
  }
};

export default postService; 