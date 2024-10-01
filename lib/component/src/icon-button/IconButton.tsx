import { IconButton, IconButtonProps } from "@mui/material";

type IMuiIconButton = IconButtonProps;

const MuiIconButton: React.FC<IMuiIconButton> = (props) => {
  return <IconButton {...props} />;
};

export default MuiIconButton;
