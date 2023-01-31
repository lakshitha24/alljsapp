import axios from "axios";
import { Employe } from "../types/Employe.type";
import {
  BASE_URL,
  EMPLOYE_DELETE_API,
  EMPLOYE_GETALL_API,
  EMPLOYE_GET_SINGLE_API,
  EMPLOYE_POST_API,
  EMPLOYE_UPDATE_API,
} from "../constant/api";

const employeApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export const getAllEmployeeAPI = async () => {
  const response = await employeApi.get(EMPLOYE_GETALL_API);
  return response.data;
};

export const postEmployeAPI = async (employe: Employe) => {
  return await employeApi.post(EMPLOYE_POST_API, employe);
};

export const getEmployeByIdAPI = async (empId: string) => {
  const response = await employeApi.get(EMPLOYE_GET_SINGLE_API(empId));
  return response.data;
};

export const deleteEmployeByIdAPI = async (empId: string) => {
  return await employeApi.delete(EMPLOYE_DELETE_API(empId));
};

export const updateEmployeeAPI = async (employee: Employe) => {
  return await employeApi.put(EMPLOYE_UPDATE_API(employee._id), employee);
};

export default employeApi;
