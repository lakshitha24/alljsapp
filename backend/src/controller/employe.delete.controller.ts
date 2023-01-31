import { Request, Response } from 'express';
import { deleteEmploye } from '../service/employe.delete.service';
import { log } from '../logs/logger';

const deleteEmployee =async (req:Request, res: Response) => {
    const id = req.params.empId;
    try{
        await deleteEmploye(id);
        res.status(200).json({ message: 'Employe Deleted Successfully' });
    }catch(e){
        log.info(e);
        return res.json(403).json({ status: 'error', error: e });
    }
}

export { deleteEmployee }