import { MenuItem, MenuItemProps } from "@mui/material";
import React from "react";

type IMuiMenuItem = MenuItemProps;

const MuiMenuItem: React.FC<IMuiMenuItem> = (props) => {
  const { className, ...otherProps } = props;
  return <MenuItem data-testname="menu-item" className={className} {...otherProps} />;
};

export default MuiMenuItem;
