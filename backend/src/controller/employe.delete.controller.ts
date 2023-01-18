import { Request, Response } from 'express';
import { deleteEmploye } from '../service/employe.delete.service';

const deleteEmployee =async (req:Request, res: Response) => {
    const id = req.params.id ;
    try{
        await deleteEmploye(id);
        res.status(200).json({ message: 'Employe Deleted Successfully' });
    }catch(e){
        res.json(403).json({ error: e });
    }
}

export { deleteEmployee }