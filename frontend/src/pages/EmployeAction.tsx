import { useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch } from "../store/useDispatch";
import { useSelector } from "react-redux";
import { Employe } from "../types/Employe.type";
import EmployeForm from "../components/EmployeForm";
import { Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import ButtonRedirect from "../components/shared/ButtonRedirect";
import { createEmploye } from '../store/EmployeSlice';
import { updateEmploye } from "../store/EmployeSlice";
import { fetchEmployeById } from "../store/EmployeSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { StateValue } from "../types/Employe.type";

const EmployeAction = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const {singleRecord} = useSelector(
    (state: StateValue) => state.employee || {}
  );


  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
    setError,
  } = useForm<Employe>({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      number: "",
      gender: "",
    },
  });

  useEffect(() => {
    if (id) {
      dispatch(fetchEmployeById(id))
        .then(unwrapResult)
        .then((data) => {})
        .catch((obj) => {
          console.log(obj.message ?? "Something went wrong");
        });
    }
    if(singleRecord){
      const {first_name,last_name,email,number,gender,photo} = singleRecord;
      const data = {
        first_name,
        last_name,
        email,
        number,
        gender,
        photo
      }
      reset(data);
    }
  }, [dispatch, id]);

  const onSubmit = async (data: Employe) => {
    if (id) {
      await dispatch(updateEmploye({ ...data, _id: id }));
    } else {
      await dispatch(createEmploye(data));
    }
  };

  return (
    <Grid container spacing={2} className="layout-content">
      <ButtonRedirect name={"List View"} redirectPath={"/employe/list"} />
      <Grid item xs={12} md={4}></Grid>
      <Grid item xs={12} md={4}>
        <EmployeForm
          handleSubmit={handleSubmit(onSubmit)}
          errors={errors}
          control={control}
          formData={false}
          id={id}
        />
      </Grid>
      <Grid item xs={12} md={4}></Grid>
    </Grid>
  );
};

export default EmployeAction;
