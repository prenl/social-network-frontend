import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8889/api/',
});

export const api = {
    fetchUser: (id) => axiosInstance.get(`users/${id}`),

    fetchUsers: () => axiosInstance.get('users'),

    sendPost: (postTitle, postContent, userId) => axios.post(`http://localhost:8889/api/posts/add/${userId}`, {
        title: postTitle,
        content: postContent
    }),

    likePost: (userId, postId) => axios.post(`http://localhost:8889/api/posts/${postId}/like/${userId}`),

    fetchFeed: (userId) => axiosInstance.get(`feed/${userId}`)

}
