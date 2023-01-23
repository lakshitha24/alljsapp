import Button from "@mui/material/Button";
import ListSharpIcon from '@mui/icons-material/ListSharp';
type ButtonProps = {
    onClick: Function;
  };
const ViewChangeButton = ({ onClick }:ButtonProps) => {
    return (
      <Button onClick={() => onClick()} color="secondary" >
        <ListSharpIcon />
      </Button>
    );
};

export default ViewChangeButton;