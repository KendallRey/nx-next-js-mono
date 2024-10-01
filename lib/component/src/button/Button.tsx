"use client";

import React from "react";
import { Button, ButtonProps } from "@mui/material";
import { motion } from "framer-motion";

type MuiButtonProps = ButtonProps;

const DEFAULT_PROPS = {};

const MuiButton: React.FC<MuiButtonProps> = (props) => {
  const { sx, ...otherProps } = props;
  return (
    <Button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      data-testname="button"
      component={motion.button}
      variant="contained"
      color="primary"
      {...otherProps}
      {...DEFAULT_PROPS}
      sx={{
        textTransform: "none",
        ...sx,
      }}
    />
  );
};

export default MuiButton;
