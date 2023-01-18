import express from 'express';

const router = express.Router();

import { createEmployee } from '../controller/employe.post.controller';
import { getAllEmploye } from '../controller/employe.getAll.controller';
import { getEmpById } from '../controller/employe.getEmployeById.controller';
import { updateEmployee } from '../controller/employe.update.controller';
import { deleteEmploye } from '../service/employe.delete.service';

router.post('/create/employe',createEmployee);
router.get('/get/employee',getAllEmploye);
router.get('/getEmpById/:id',getEmpById);
router.put('/updateEmploye/:id',updateEmployee);
router.delete('/deleteEmploye/:id',deleteEmploye);

export default router;