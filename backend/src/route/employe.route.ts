import express from 'express';

const router = express.Router();

import { createEmployee } from '../controller/employe.post.controller';
import { getAllEmploye } from '../controller/employe.getAll.controller';
import { getEmpById } from '../controller/employe.getEmployeById.controller';
import { updateEmployee } from '../controller/employe.update.controller';
import { deleteEmployee } from '../controller/employe.delete.controller';

router.post('/create/employe',createEmployee);
router.get('/get/employee',getAllEmploye);
router.get('/getEmpById/:empId',getEmpById);
router.put('/updateEmploye/:empId',updateEmployee);
router.delete('/deleteEmploye/:empId',deleteEmployee);

export default router;