import React from "react";
import { Drawer, DrawerProps } from "@mui/material";

type IMuiDrawer = DrawerProps;

const MuiDrawer: React.FC<IMuiDrawer> = (props) => {
  return <Drawer {...props} />;
};

export default MuiDrawer;
