import { Badge, BadgeProps } from "@mui/material";
import React from "react";

type IMuiBadge = BadgeProps;

const MuiBadge: React.FC<IMuiBadge> = (props) => {
  return <Badge {...props} />;
};

export default MuiBadge;
