import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  headers: { 'API-KEY': process.env.REACT_APP_API_KEY },
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
});

export const axiosFollowPost = async (id: number) => {
  const response = await instance.post(`follow/${id}`);
  return response.data;
};

export const axiosFollowDelete = async (id: number) => {
  const response = await instance.delete(`follow/${id}`);
  return response.data;
};

export const axiosGetUsers = async (currentPage: number, PagesCount: number) => {
  const response = await instance.get(
    `users?page=${currentPage}&count=${PagesCount}`,
  );
  return response.data;
};

export const axiosGetProfile = async () => {
  const response = await instance.get('auth/me');
  return response.data;
};

export const axiosGetProfileById = async (id: string) => {
  const response = await instance.get(`profile/${id}`);
  return response.data;
};

export const axiosGetStatus = async (id: string) => {
  const response = await instance.get(`profile/status/${id}`);
  return response.data;
};

export const axiosPutStatus = async (status: string) => {
  const response = await instance.put(`profile/status`, { status });
  return response.data;
};

export const axiosLogin = async (data: { email: string; password: string }) => {
  const response = await instance.post(`auth/login`, data);
  return response.data;
};

export const axiosLogout = async () => {
  const response = await instance.delete(`auth/login`);
  return response.data;
};

export const axiosCaptcha = async () => {
  const response = await instance.get(`security/get-captcha-url`);
  return response.data;
};

export const axiosPutPhoto = async (data: FormData) => {
  const response = await instance.put(`profile/photo`, data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return response.data;
};

export const axiosPutProfile = async (data: any) => {
  const response = await instance.put(`profile`, data);
  return response.data;
};
