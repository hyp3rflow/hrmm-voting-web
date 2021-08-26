import axios from 'axios';

export const createAxiosInstance = () => {
  const accessToken = window.localStorage.getItem('accessToken');
  return axios.create({
    baseURL: 'http://localhost:3000/',
    headers: {
      Authorization: 'Bearer ' + accessToken,
    },
  });
};
