import { Request } from "express";
import { getEmployeByID } from "../service/employe.getById.service";
import { empIdValidation } from "../validation/validationSchema";

const getEmpById = async (req: Request, res: any) => {
  // const { error, value } = empIdValidation.validate(req.params.empId);

  // if (error) {
  //   console.log(error);
  //   return res.json(400).json({ error: error });
  // }
  try {
    const data = await getEmployeByID(req.params.empId);
    res.status(200).json(data);
  } catch (e) {
    res.json(403).json({ error: e });
  }
};

export { getEmpById };
