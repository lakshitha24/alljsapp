import { configureStore } from "@reduxjs/toolkit";
// import createEmployeSlice from "./slice/createEmployeSlice";
// import employeSlice from "./slice/employeSlice";
// import employeByIdSlice from "./slice/employeByIdSlice";
// import updateEmployeSlice from "./slice/updateEmployeSlice";
// import deleteEmployeSlice from "./slice/deleteEmployeSlice";
import EmployeSlice from "./EmployeSlice";

export const store = configureStore({
  reducer: {
   // createEmploye: createEmployeSlice,
    employee: EmployeSlice,
    // employe: employeByIdSlice,
    // updateEmploye: updateEmployeSlice,
    // deleteEmploye: deleteEmployeSlice,
  },
});

export type AppDisptach = typeof store.dispatch;
export type RootStore = ReturnType<typeof store.getState>;
