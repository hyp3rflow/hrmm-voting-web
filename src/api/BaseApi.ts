import axios from 'axios';

export const createAxiosInstance = () => {
  const accessToken = window.localStorage.getItem('accessToken');
  return axios.create({
    baseURL: 'https://api.hrmm.xyz/',
    headers: {
      Authorization: 'Bearer ' + accessToken,
    },
  });
};
