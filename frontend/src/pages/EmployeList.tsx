import React, { useRef, useEffect, useState } from "react";
import { Grid } from "@mui/material";
import ViewChangeButton from "../components/shared/ViewChangeButton";
import EmployeeListGrid from '../components/EmployeeListGrid';
import EmployeeListTable from "../components/EmployeListTable";
import { confirmAlert } from "react-confirm-alert";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../store/useDispatch";
import { fetchEmployee } from "../store/EmployeSlice";
import { deleteEmploye } from "../store/EmployeSlice";
import { StateValue } from "../types/Employe.type";
import Loader from "../components/shared/Loader";
import "react-confirm-alert/src/react-confirm-alert.css";
import { unwrapResult } from "@reduxjs/toolkit";
import { debounce } from "lodash";
import { useNavigate } from 'react-router-dom';
import Empty from '../components/shared/Empty';
import ButtonRedirect from '../components/shared/ButtonRedirect';

const EmployeLists = () => {
  const dispatch = useAppDispatch();
  const [isCardView, setIsCardView] = useState(true);
  const navigate = useNavigate()

  const getEmployeeLists = useRef(
    debounce(() => {
      dispatch(fetchEmployee())
        .unwrap()
        .then((data) => {})
        .catch((obj) => {
          console.log(obj.message ?? "Something went wrong");
        });
    }, 600)
  ).current;

  useEffect(() => {
    getEmployeeLists();
  }, [getEmployeeLists]);

  const { data, loading } = useSelector(
    (state: StateValue) => state.employee || {}
  );

  const deleteEmployeHandler = (id: string) => {
    confirmAlert({
      title: "Delete",
      message: "Do you want to Delete ?",
      buttons: [
        {
          label: "Yes",
          onClick: () => deleteEmployeAction(id),
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
  };

  const deleteEmployeAction = (id: string) => {
    dispatch(deleteEmploye(id))
      .then(unwrapResult)
      .then((data: any) => {
        console.log(data);
      })
      .catch((obj: { message: any }) => {
        console.log(obj.message);
      });
  };

  const redirectToEdit = (id: string) => {
    navigate(`/employe/edit/${id}`)
  };

  const changeView = () => {
    setIsCardView(!isCardView);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Grid container spacing={2} className="layout-content">
        <Grid item xs={12} md={3}>
          <ViewChangeButton onClick={changeView} />
          <ButtonRedirect name="Add Employee" redirectPath="/employe/add"></ButtonRedirect>
        </Grid>
        {data.length === 0 ? (
            <Empty/>
        ) : isCardView ? (
          <EmployeeListGrid
            employee={data}
            deleteEmploye={deleteEmployeHandler}
            redirectToEdit={redirectToEdit}
          ></EmployeeListGrid>
        ) : (
          <EmployeeListTable
            employee={data}
            deleteEmploye={deleteEmployeHandler}
            redirectToEdit={redirectToEdit}
          ></EmployeeListTable>
        )}
      </Grid>
  );
};

export default EmployeLists;
