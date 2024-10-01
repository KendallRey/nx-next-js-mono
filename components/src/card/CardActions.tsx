import { CardActions, CardActionsProps } from "@mui/material";
import React from "react";

const MuiCardActions: React.FC<CardActionsProps> = (props) => {
  return <CardActions {...props} />;
};

export default MuiCardActions;
