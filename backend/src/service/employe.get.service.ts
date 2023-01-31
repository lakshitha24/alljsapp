import { Employee } from "../model/employe.model";
import { log } from '../logs/logger';

const getAllEmployee = async () => {
  try {
    return await Employee.find();
  } catch (e) {
    log.info(e);
  }
};

export { getAllEmployee };
