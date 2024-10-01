import { Pagination, PaginationProps } from "@mui/material";
import React from "react";

type IMuiPagination = PaginationProps;

const MuiPagination: React.FC<IMuiPagination> = (props) => {
  return <Pagination color="primary" {...props} />;
};

export default MuiPagination;
