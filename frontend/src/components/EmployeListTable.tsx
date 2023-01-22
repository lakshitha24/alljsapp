import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableCells from "./shared/TableCell";
import { EmpListType } from "../types/Employe.type";
import DeleteButton from "./shared/DeleteButton";
import EditButton from "./shared/EditButton";
import { Employe } from "../types/Employe.type";

const EmployeeListTable = ({
  employee,
  deleteEmploye,
  redirectToEdit,
}: EmpListType) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCells>Image</TableCells>
            <TableCells>Name</TableCells>
            <TableCells>Email</TableCells>
            <TableCells>Phone Number</TableCells>
            <TableCells>Gender</TableCells>
            <TableCells>Action</TableCells>
          </TableRow>
        </TableHead>
        <TableBody>
          {employee.map((employe: Employe, index: number) => (
            <TableRow key={index}>
              <TableCell sx={{ border: 1 }} align="left">
                <img src={employe.photo} alt="employee" width="100px"></img>
              </TableCell>
              <TableCell sx={{ border: 1 }} align="left">
                {employe.first_name + "" + employe.last_name}
              </TableCell>
              <TableCell sx={{ border: 1 }} align="left">
                {employe.email}
              </TableCell>
              <TableCell sx={{ border: 1 }} align="left">
                {employe.number}
              </TableCell>
              <TableCell sx={{ border: 1 }} align="left">
                {employe.gender === "M" ? "Male" : "Female"}
              </TableCell>
              <TableCell sx={{ border: 1 }} align="left">
                <DeleteButton
                  onClick={deleteEmploye}
                  id={employe._id}
                ></DeleteButton>
                <EditButton
                  onClick={redirectToEdit}
                  id={employe._id}
                ></EditButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EmployeeListTable;
