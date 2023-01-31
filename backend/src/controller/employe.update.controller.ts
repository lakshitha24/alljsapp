import { Request, Response } from "express";
import { updateEmployeData } from "../service/employe.update";
import { itemUpdateSchemaValidation } from "../validation/validationSchema";
import { log } from '../logs/logger';

const updateEmployee = async (req: Request, res: Response) => {
  const { error, value } = itemUpdateSchemaValidation.validate(req.body);
  const id = req.params.empId;
  if (error) {
    return res.json(400).json({ error: error });
  }
  try {
    await updateEmployeData(value, id);
    res.status(200).json({ message: 'Updated Successfully' });
  } catch (e) {
    log.info(e);
    return res.json(400).json({ status: 'error',error: e });
  }
};
export { updateEmployee };
