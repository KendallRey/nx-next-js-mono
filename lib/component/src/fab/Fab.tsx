import { Fab, FabProps } from "@mui/material";
import React from "react";

type IMuiFab = FabProps;

const MuiFab: React.FC<IMuiFab> = (props) => {
  return <Fab {...props} />;
};

export default MuiFab;
