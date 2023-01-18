import { Schema,model } from "mongoose";
import { Employe } from "./employe.interface";

const EmployeSchema = new Schema<Employe>(
    {
        first_name :{type:String,required:true},
        last_name: { type: String, required: true },
        email: { type: String, required: true },
        number: { type: String, required: true },
        gender: { type: String, required: true },
        photo: { type: String, required: true }
    }
    
);

const Employee = model<Employe>('Employe',EmployeSchema);

export { Employee}