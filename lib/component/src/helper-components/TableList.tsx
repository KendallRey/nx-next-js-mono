import React, { ReactNode } from "react";
import { MuiTd, MuiTr } from "../table/Table";
import { Skeleton } from "@mui/material";
import MuiTypography from "../typography/Typograph";
import MuiButton from "../button/Button";

type ITableList<T> = {
  isLoading: boolean;
  isError?: boolean;
  errorText?: string | null;
  emptyDataText?: string;
  data?: T[] | null;
  colSpan: number;
  onRefresh?: () => void;
  render: (data: T, index: number) => React.ReactNode;
};

const TableList = <T,>(props: ITableList<T>) => {
  const {
    isLoading,
    errorText = "Fetching list failed",
    isError,
    data = [],
    emptyDataText,
    colSpan,
    onRefresh,
    render,
  } = props;

  if (isError)
    return (
      <MuiTr>
        <MuiTd colSpan={colSpan} className="text-center text-red-600">
          <MuiTypography className="py-6" fontSize={24}>
            {errorText}
          </MuiTypography>
          {onRefresh && (
            <MuiButton className="p-4 m-6" onClick={onRefresh}>
              Refresh List
            </MuiButton>
          )}
        </MuiTd>
      </MuiTr>
    );

  if (isLoading)
    return (
      <MuiTr>
        <MuiTd colSpan={colSpan} className="text-center">
          <Skeleton height={56} />
        </MuiTd>
      </MuiTr>
    );

  if (!data?.length)
    return (
      <MuiTr>
        <MuiTd colSpan={colSpan} className="text-center text-gray-700">
          <MuiTypography className="py-6" fontSize={24}>
            {emptyDataText}
          </MuiTypography>
          {onRefresh && (
            <MuiButton className="p-4 m-6" onClick={onRefresh}>
              Refresh List
            </MuiButton>
          )}
        </MuiTd>
      </MuiTr>
    );

  return <Each data={data ?? []} render={render} />;
};

export default TableList;

type EachProps<T> = {
  render: (data: T, index: number) => ReactNode;
  data?: T[];
};

const Each = <T,>({ render, data }: EachProps<T>) => (
  <>{React.Children.toArray(data?.map((item, index) => render(item, index)))}</>
);
