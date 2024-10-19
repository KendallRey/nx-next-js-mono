"use client";

import React from "react";
import { Button, ButtonProps } from "@mui/material";
import { motion } from "framer-motion";

type MuiButtonProps = {
  noAnimation?: boolean;
} & ButtonProps;

const DEFAULT_PROPS = {};

const MuiButton: React.FC<MuiButtonProps> = (props) => {
  const { sx, noAnimation, ...otherProps } = props;
  return (
    <Button
      whileHover={noAnimation ? undefined : { scale: 1.05 }}
      whileTap={noAnimation ? undefined : { scale: 0.9 }}
      data-testname="button"
      component={motion.button}
      variant="contained"
      color="primary"
      {...otherProps}
      {...DEFAULT_PROPS}
      sx={{
        textTransform: "none",
        fontWeight: 600,
        ...sx,
      }}
    />
  );
};

export default MuiButton;
