import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom';

type ButtonProps = {
    name:string;
    redirectPath:string;
}
const ButtonRedirect = ({name,redirectPath}:ButtonProps) => {
    const navigate = useNavigate();

    return (
        <Button onClick={()=>{navigate(redirectPath);}}>
            {name}
        </Button>
    );
};

export default ButtonRedirect;