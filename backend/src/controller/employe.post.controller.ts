import { Request, Response } from "express";
import { createEmploye } from "../service/employe.post.service";
import { itemSchemaValidation } from "../validation/validationSchema";
import { log } from '../logs/logger';

const createEmployee = async (req: Request, res: Response) => {
  const { error, value } = itemSchemaValidation.validate(req.body);

  if (error) {
    return res.json(400).json({ error: error });
  }
  try {
    const data = await createEmploye(value);
    res.status(201).json(data);
  } catch (e) {
    log.info(e);
    return res.json(403).json({ status: 'error', error: e });
  }
};

export { createEmployee };
