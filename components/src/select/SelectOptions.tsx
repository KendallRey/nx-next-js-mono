import React, { ReactNode } from "react";
import MuiMenuItem from "../menu-item/MenuItem";
import { CircularProgress } from "@mui/material";

type ISelectOptions<T> = {
  data?: T[];
  render: (data: T, index: number) => ReactNode;
  emptyText?: ReactNode;
  loadingText?: ReactNode;
  errorText?: ReactNode;
  error?: boolean;
};

const SelectOptions = <T,>(props: ISelectOptions<T>) => {
  const {
    data,
    render,
    error,
    emptyText = "No item/s found",
    errorText = "Error",
    loadingText = <CircularProgress className="mx-auto" />,
  } = props;
  return (
    <>
      {error ? (
        <MuiMenuItem disabled>{errorText}</MuiMenuItem>
      ) : !data ? (
        <MuiMenuItem disabled>{loadingText}</MuiMenuItem>
      ) : !data.length ? (
        <MuiMenuItem disabled>{emptyText}</MuiMenuItem>
      ) : (
        <></>
      )}
      {React.Children.toArray(data?.map((item, index) => render(item, index)))}
    </>
  );
};

export default SelectOptions;
