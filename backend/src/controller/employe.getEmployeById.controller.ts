import { Request } from "express";
import { getEmployeByID } from "../service/employe.getById.service";

const getEmpById = async (req: Request, res: any) => {
  try {
    const data = await getEmployeByID(req.params.empId);
    res.status(200).json(data);
  } catch (e) {
    res.json(403).json({ error: e });
  }
};

export { getEmpById };
