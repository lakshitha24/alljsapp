import { Employe } from "../model/employe.interface";
import { Employee } from "../model/employe.model";

const updateEmployeData = async (value: Employe, id: string) => {
  const { first_name, last_name, email, number, gender, photo } = value;
  try {
    const updatedEmploye = await Employee.findById(id).exec();
    if (!updatedEmploye) {
      throw Error;
    }
    if (first_name) {
      updatedEmploye.first_name = first_name;
    }
    if (last_name) {
      updatedEmploye.last_name = last_name;
    }
    if (email) {
      updatedEmploye.email = email;
    }
    if (number) {
      updatedEmploye.number = number;
    }
    if (gender) {
      updatedEmploye.gender = gender;
    }
    if (photo) {
      updatedEmploye.photo = photo;
    }
    updatedEmploye.save();
  } catch (e) {
    console.log(e);
  }
};
export { updateEmployeData }
