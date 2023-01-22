import Button from "@mui/material/Button";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

type ButtonProps = {
  onClick: Function;
  id?: string;
};
const DeleteButton = ({ onClick, id }: ButtonProps) => {
  return (
    <Button onClick={() => onClick(id)} color="secondary">
      <DeleteForeverIcon />
    </Button>
  );
};

export default DeleteButton;
