import { Tooltip, TooltipProps } from "@mui/material";
import React from "react";

type IMuiTooltip = TooltipProps;

const MuiTooltip: React.FC<IMuiTooltip> = (props) => {
  return <Tooltip {...props} />;
};

export default MuiTooltip;
