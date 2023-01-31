import { Request } from "express";
import { getAllEmployee } from "../service/employe.get.service";
import { itemValidation } from "../validation/validationSchema";
import { log } from '../logs/logger';

const getAllEmploye = async (req: Request, res: any) => {
  const { error } = itemValidation.validate(res.body);
  if (error) {
    return res.json(400).json({ error: error });
  }
  try {
    const data = await getAllEmployee();
    res.status(201).json(data);
  } catch (e) {
    log.info(e);
    return res.json(403).json({ status: 'error', error: e });
  }
};

export { getAllEmploye };
