import { Request, Response } from "express";
import { updateEmployeData } from "../service/employe.update";
import { itemUpdateSchemaValidation } from "../validation/validationSchema";

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
    res.json(400).json({ error: e });
  }
};
export { updateEmployee };
