import axios from "axios";
import { Employe } from "../types/Employe.type";

const employeApi = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export const getAllEmployeeAPI = async () => {
  const response = await employeApi.get(`/api/get/employee`);
  return response.data;
};

export const postEmployeAPI = async (employe: Employe) => {
  return await employeApi.post(`/api/create/employe`, employe);
};

export const getEmployeByIdAPI = async (empId: string) => {
  const response = await employeApi.get(`/api/getEmpById/${empId}`);
  return response.data;
};

export const deleteEmployeByIdAPI = async (empId: string) => {
  return await employeApi.delete(`/api/deleteEmploye/${empId}`);
};

export const updateEmployeeAPI = async (employee: Employe) => {
  return await employeApi.put(`/api/updateEmploye/${employee._id}`, employee);
};
export default employeApi;
