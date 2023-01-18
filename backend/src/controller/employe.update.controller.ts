import { Request, Response } from "express";
import { updateEmployeData } from "../service/employe.update";
import { itemSchemaValidation } from "../validation/validationSchema";

const updateEmployee = async (req: Request, res: Response) => {
  const { error, value } = itemSchemaValidation.validate(req.body);
  const id = req.params.id;
  if (error) {
    return res.json(400).json({ error: error });
  }
  try {
    await updateEmployeData(value, id);
  } catch (e) {
    res.json(400).json({ error: e });
  }
};
export { updateEmployee };
