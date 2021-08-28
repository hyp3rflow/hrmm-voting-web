import axios from 'axios';

export const createAxiosInstance = () => {
  const accessToken = window.localStorage.getItem('accessToken');
  return axios.create({
    baseURL: 'https://api.hrmm.xyz:3000/',
    headers: {
      Authorization: 'Bearer ' + accessToken,
    },
  });
};
