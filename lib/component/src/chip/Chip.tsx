import Chip, { ChipProps } from "@mui/material/Chip/Chip";
import React from "react";

const DEFAULT_PROPS: ChipProps = {
  color: "primary",
  size: "small",
};

// extend props here
type IMuiChip = ChipProps;

const MuiChip: React.FC<IMuiChip> = (props) => {
  return <Chip {...DEFAULT_PROPS} {...props} />;
};

export default MuiChip;
