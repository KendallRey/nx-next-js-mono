"use client";

import React from "react";

import Box, { BoxProps } from "@mui/material/Box";

const MuiBox: React.FC<BoxProps> = (props) => {
  return <Box {...props} />;
};

export default MuiBox;
