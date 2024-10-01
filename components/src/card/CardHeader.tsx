import { CardHeader, CardHeaderProps } from "@mui/material";
import React from "react";

const MuiCardHeader: React.FC<CardHeaderProps> = (props) => {
  return <CardHeader {...props} />;
};

export default MuiCardHeader;
