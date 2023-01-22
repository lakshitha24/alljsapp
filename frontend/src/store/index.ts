import { configureStore } from "@reduxjs/toolkit";
import EmployeSlice from "./EmployeSlice";

export const store = configureStore({
  reducer: {
    employee: EmployeSlice,
  },
});

export type AppDisptach = typeof store.dispatch;
export type RootStore = ReturnType<typeof store.getState>;
