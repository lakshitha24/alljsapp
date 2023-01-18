import { Request } from "express";
import { getAllEmployee } from "../service/employe.get.service";
import { itemValidation } from "../validation/validationSchema";

const getAllEmploye = async (req: Request, res: any) => {
  const { error } = itemValidation.validate(res.body);
  if (error) {
    return res.json(400).json({ error: error });
  }
  try {
    const data = await getAllEmployee();
    res.status(201).json(data);
  } catch (e) {
    res.json(403).json({ error: e });
  }
};

export { getAllEmploye };
