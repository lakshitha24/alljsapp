export interface Employe {
  _id?: string;
  first_name: string;
  last_name: string;
  email: string;
  number: string;
  gender: string;
  photo: string;
}

export interface StateValue{
  employee: EmployeList
}
export interface EmployeList {
    data: string[];
    loading:boolean;
    message:string;
    error?:string;
    singleRecord: Employe;
}

export interface EmpListType{
  employee: any;
  deleteEmploye:Function,
  redirectToEdit :Function
}
