import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8889/api/',
});

export const api = {
    fetchUser: (id) => axiosInstance.get(`users/${id}`),
    fetchUsers: () => axiosInstance.get('users')
}
