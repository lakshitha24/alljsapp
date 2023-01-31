import { Employee } from "../model/employe.model";
import { Employe } from "../model/employe.interface";
import { log } from '../logs/logger';

const createEmploye = async (value: Employe) => {
  const { first_name, last_name, email, number, gender, photo } = value;
  try {
    const newEmploye = new Employee({
      first_name: first_name,
      last_name: last_name,
      email: email,
      number: number,
      gender: gender,
      photo: photo,
    });

    return await newEmploye.save();
  } catch (e) {
    log.info(e);
  }
};

export { createEmploye}
