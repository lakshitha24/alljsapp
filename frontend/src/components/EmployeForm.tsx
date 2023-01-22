import { CardContent } from "@mui/material";
import Card from "@mui/material/Card";
import { FormEventHandler } from "react";
import { Employe } from "../types/Employe.type";
import InputFieldView from './shared/InputField';
import { Control, FieldErrorsImpl } from "react-hook-form";
import GenderSelectBox from "./shared/GenderSelectBox";
import ActionButton from "./shared/ActionButton";

type FormSubmitDataProps = {
  handleSubmit: FormEventHandler<HTMLFormElement> | undefined;
  errors: Partial<FieldErrorsImpl<Employe>>;
  control: Control<Employe> | undefined;
  formData: boolean;
  id?: string;
};

const EmployeForm = ({
  handleSubmit,
  errors,
  control,
  formData,
  id,
}: FormSubmitDataProps) => {
  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardContent>
          <InputFieldView
            label={"First Name"}
            control={control}
            error={errors?.first_name?.message}
            titleName={"first_name"}
          />
          <InputFieldView
            label={"Last Name"}
            control={control}
            error={errors?.last_name?.message}
            titleName={"last_name"}
          />
          <InputFieldView
            label={"Email"}
            control={control}
            error={errors?.email?.message}
            titleName={"email"}
          />
          <InputFieldView
            label={"Phone Number"}
            control={control}
            error={errors?.number?.message}
            titleName={"number"}
          />
          <InputFieldView
            label={"Photo"}
            control={control}
            error={errors?.photo?.message}
            titleName={"photo"}
          />
          <GenderSelectBox control={control} error={errors?.gender?.message} />
          <ActionButton formData={formData} id={id}/>
        </CardContent>
      </Card>
    </form>
  );
};

export default EmployeForm;
