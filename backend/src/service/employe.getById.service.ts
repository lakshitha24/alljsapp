import { Employee } from "../model/employe.model";
import { log } from '../logs/logger';

const getEmployeByID = async (id: string) => {
  try {
    const singleEmploye = await Employee.findById(id).exec();
    if (!singleEmploye) {
      throw Error;
    }
    const { _id, first_name, last_name, email, number, gender, photo } =
      singleEmploye;
    return {
      id: _id,
      first_name: first_name,
      last_name: last_name,
      email: email,
      number: number,
      gender: gender,
      photo: photo,
    };
  } catch (e) {
    log.info(e);
  }
};

export { getEmployeByID };
