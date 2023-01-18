import { Employee } from "../model/employe.model";

const getAllEmployee = async () => {
  try {
    return await Employee.find();
  } catch (e) {
    console.log(e);
  }
};

export { getAllEmployee };
