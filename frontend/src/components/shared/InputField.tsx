import { FormHelperText, TextField } from '@mui/material';
import { Controller,Control } from 'react-hook-form';
import { Employe } from '../../types/Employe.type';

type InputViewProps = {
    label:string;
    control:Control<Employe> | undefined;
    error?:string;
    titleName: any;
};

const InputFieldView = ({label,control,error,titleName}: InputViewProps) => {
    return (
        <div className="form-control">
            <label htmlFor='' className='form-label'></label>
            <Controller
                name={titleName}
                control={control}
                render={({field})=>(
                    <TextField
                    autoComplete='off'
                    {...field}
                    error={Boolean(error)}
                    id={label}
                    label={label}
                    fullWidth
                    />
                )}
            />
            <FormHelperText className="text-danger">{error}</FormHelperText>
        </div>
    );
};

export default InputFieldView;