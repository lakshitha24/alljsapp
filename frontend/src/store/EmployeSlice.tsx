import { createAsyncThunk, createSlice,PayloadAction } from "@reduxjs/toolkit";
import {
  postEmployeAPI,
  getEmployeByIdAPI,
  deleteEmployeByIdAPI,
  updateEmployeeAPI,
  getAllEmployeeAPI,
} from "./EmployeServices";
import { Employe } from "../types/Employe.type";

type EmployeList={
    data: string[];
    loading:boolean;
    message:string;
    error?:string;
    singleRecord: object;
};

const initialState: EmployeList = {
  loading: false,
  error: "",
  data: [],
  message: "",
  singleRecord: {},
};

export const createEmploye = createAsyncThunk(
  "/api/create/employe",
  postEmployeAPI
);

export const deleteEmploye = createAsyncThunk(
  "/api/deleteEmploye",
  deleteEmployeByIdAPI
);

export const fetchEmployee = createAsyncThunk<Employe[]>(
  "/api/get/employee",
  getAllEmployeeAPI
);

export const updateEmploye = createAsyncThunk(
  "/api/update/employe",
  updateEmployeeAPI
);

export const fetchEmployeById = createAsyncThunk(
  "/api/getEmpById/",
  getEmployeByIdAPI
);

const EmployeSlice = createSlice({
  name: "employe",
  initialState,
  reducers:{},
  extraReducers(builder) {
    builder
    .addCase(createEmploye.fulfilled,(state, action) => {
      state.loading = false;
      state.error = "";
      state.message = "Successfully";
    });
    builder
    .addCase(fetchEmployee.fulfilled, (state, action:PayloadAction<any>) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder
    .addCase(updateEmploye.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.message = "Successfully";
    });
    builder
    .addCase(deleteEmploye.fulfilled,(state,action)=>{
      state.loading = false;
      state.error = "";
      state.message = "Successfully";
      state.data = state.data.filter(
        (employee: any) => employee._id !== action.payload.data._id
      );
    });
    builder
    .addCase(fetchEmployeById.fulfilled,(state,action)=>{
        state.loading = false;
        state.error = '';
        state.singleRecord = action.payload
    });
  },
});

export default EmployeSlice.reducer;
