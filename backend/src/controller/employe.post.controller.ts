import { Request, Response } from "express";
import { createEmploye } from "../service/employe.post.service";
import { itemSchemaValidation } from "../validation/validationSchema";

const createEmployee = async (req: Request, res: Response) => {
  const { error, value } = itemSchemaValidation.validate(req.body);

  if (error) {
    return res.json(400).json({ error: error });
  }
  try {
    const data = await createEmploye(value);
    res.status(201).json(data);
  } catch (e) {
    res.json(403).json({ error: e });
  }
};

export { createEmployee };
