import { Request } from "express";
import { getEmployeByID } from "../service/employe.getById.service";
import { log } from '../logs/logger';

const getEmpById = async (req: Request, res: any) => {
  try {
    const data = await getEmployeByID(req.params.empId);
    res.status(200).json(data);
  } catch (e) {
    log.info(e);
    return res.json(403).json({ status: 'error', error: e });
  }
};

export { getEmpById };
