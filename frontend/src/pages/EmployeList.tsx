import React, { useRef, useEffect, useState } from "react";
import { Grid } from "@mui/material";
import ViewChangeButton from "../components/shared/ViewChangeButton";
import EmployeeListGrid from "../components/EmployeeListGrid";
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
import { useNavigate } from "react-router-dom";
import Empty from "../components/shared/Empty";
import ButtonRedirect from "../components/shared/ButtonRedirect";
import {AlertMessage} from '../components/shared/Alert';

const EmployeLists = () => {
  const dispatch = useAppDispatch();
  const [isCardView, setIsCardView] = useState(true);
  const navigate = useNavigate();

  /**
   * get Employe list
   */
  const getEmployeeLists = useRef(
    debounce(() => {
      dispatch(fetchEmployee())
        .unwrap()
        .then((data) => {})
        .catch((obj) => {
          AlertMessage('Something went wrong','error');
        });
    }, 600)
  ).current;

  useEffect(() => {
    getEmployeeLists();
  }, [getEmployeeLists]);

  const { data, loading } = useSelector(
    (state: StateValue) => state.employee || {}
  );

  /**
   * delete employe record by id
   */
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
        dispatch(fetchEmployee());
        AlertMessage('Successfully deleted !','success');
      })
      .catch((obj: { message: any }) => {
        console.log(obj.message);
        AlertMessage('Error on delet !','error');
      });
  };

  /**
   * redirect to list page into edit page
   */
  const redirectToEdit = (id: string) => {
    navigate(`/employe/edit/${id}`);
  };

  /**
   * list view change into table view and grid view
   */
  const changeView = () => {
    setIsCardView(!isCardView);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Grid container spacing={2} className="layout-content">
      <Grid
        item
        xs={12}
        md={12}
        sx={{ p: 2 }}
        container
        justifyContent="space-between"
      >
        <ButtonRedirect
          name="Add Employee"
          redirectPath="/employe/add"
        ></ButtonRedirect>
        <ViewChangeButton onClick={changeView} />
      </Grid>
      {data.length === 0 ? (
        <Empty />
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
