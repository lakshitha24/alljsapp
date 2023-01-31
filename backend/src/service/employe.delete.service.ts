import { Employee } from "../model/employe.model";
import { log } from '../logs/logger';

const deleteEmploye = async (id: string) => {
  try {
    const deletedEmploye = await Employee.deleteOne({ _id: id });
    if (deletedEmploye.deletedCount == 0) {
      throw new Error("Could not find");
    }
  } catch (e) {
    log.info(e);
  }
};

export { deleteEmploye }
