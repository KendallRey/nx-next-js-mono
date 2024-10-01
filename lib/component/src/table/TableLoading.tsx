"use client";

import { CircularProgress } from "@mui/material";
import React from "react";

type ITableLoading = {
  colSpan?: number;
};

const TableLoading: React.FC<ITableLoading> = (props) => {
  const { colSpan } = props;
  return (
    <tr>
      <td colSpan={colSpan || 10}>
        <div className="grid place-items-center min-h-[300px]">
          <CircularProgress />
        </div>
      </td>
    </tr>
  );
};

export default TableLoading;
