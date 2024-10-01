import { Link, LinkProps } from "@mui/material";
import React from "react";

type IMuiLink = LinkProps;

const MuiLink: React.FC<IMuiLink> = (props) => {
  return <Link {...props} />;
};

export default MuiLink;
