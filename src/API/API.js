import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  headers: { "API-KEY": "387c1de8-35b7-41d3-bec8-c46c4c79259f" },
  baseURL: "https://social-network.samuraijs.com/api/1.0/"
})

export const axiosFollowPost = async (id) => {
  const responce = await instance.post(`follow/${id}`);
  return responce.data;
}

export const axiosFollowDelete = async (id) => {
  const responce = await instance.delete(`follow/${id}`);
  return responce.data;
}

export const axiosGetUsers = async (currentPage, PagesCount) => {
  const responce = await instance.get(`users?page=${currentPage}&count=${PagesCount}`);
  return responce.data;
}

export const axiosGetProfile = async () => {
  const responce = await instance.get("auth/me");
  return responce.data;
}

export const axiosGetStatus = async (id) => {
  const responce = await instance.get(`profile/status/${id}`);
  return responce.data;
}

export const axiosPutStatus = async (status) => {
  const responce = await instance.put(`profile/status`, { status });
  return responce.data;
}

export const axiosLogin = async (data) => {
  const responce = await instance.post(`auth/login`, data);
  return responce.data;
}

export const axiosLogout = async () => {
  const responce = await instance.delete(`auth/login`);
  return responce.data;
}

