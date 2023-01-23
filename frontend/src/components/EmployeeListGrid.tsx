import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { EmpListType } from "../types/Employe.type";
import { Employe } from "../types/Employe.type";
import DeleteButton from "./shared/DeleteButton";
import EditButton from "./shared/EditButton";

const EmployeeListGrid = ({
  employee,
  deleteEmploye,
  redirectToEdit,
}: EmpListType) => {
  return employee.map((employe: Employe, index: number) => (
    <Grid item xs={12} md={3} key={index}>
      <Card>
        <CardMedia
          component="img"
          alt="green iguana"
          image={employe.photo}
          width="300"
        />
        <div className="card-content">
          <Typography variant="h5" color="text.secondary" fontWeight="fontWeightBold" >
            {employe.first_name} {employe.last_name}
          </Typography>
          <Typography variant="body2" color="text.secondary" fontWeight="600">
            {employe.email}
          </Typography>
          <Typography variant="body2" color="text.secondary" fontWeight="600">
            {employe.number}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {employe.gender === "M" ? "Male" : "Female"}
          </Typography>
          <DeleteButton onClick={deleteEmploye} id={employe._id}></DeleteButton>
          <EditButton onClick={redirectToEdit} id={employe._id}></EditButton>
        </div>
      </Card>
    </Grid>
  ));
};

export default EmployeeListGrid;
