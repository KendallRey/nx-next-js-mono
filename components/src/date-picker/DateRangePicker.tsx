"use client";

import { useCallback, useMemo } from "react";
import { RangeKeyDict, DateRangePicker as RDR } from "react-date-range";
import { DateRange as DR } from "react-date-range";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

export type IDateRangePicker = {
  startDate?: Date |  string | null;
  endDate?: Date | string | null;
  onChange: (start_date: string, end_date: string) => void;
}

export const DateRangePicker: React.FC<IDateRangePicker> = (props) => {


  const { startDate, endDate, onChange } = props;

  const range = useMemo(() => {
    const _startDate = typeof startDate === 'string' ? new Date(startDate): startDate;
    const _endDate = typeof endDate === 'string' ? new Date(endDate): endDate;
    return {
      startDate: _startDate ?? new Date(),
      endDate: _endDate ?? _startDate ?? new Date(),
      key: "selection",
    }
  },[startDate, endDate])

  const _onChange = useCallback((e: RangeKeyDict) => {
    const { selection } = e;
    if(!selection.startDate || !selection.endDate) return;
    onChange(selection.startDate?.toDateString(), selection.endDate?.toDateString())
  },[onChange])

  return (
    <RDR
      onChange={_onChange}
      moveRangeOnFirstSelection={false}
      months={2}
      ranges={[range]}
      direction="horizontal"
    />
  );
};

export type IDateRange = {
  startDate?: Date |  string | null;
  endDate?: Date | string | null;
  onChange: (start_date: string, end_date: string) => void;
}

export const DateRange: React.FC<IDateRange> = (props) => {

  const { startDate, endDate, onChange } = props;

  const range = useMemo(() => {
    const _startDate = typeof startDate === 'string' ? new Date(startDate): startDate;
    const _endDate = typeof endDate === 'string' ? new Date(endDate): endDate;
    return {
      startDate: _startDate ?? new Date(),
      endDate: _endDate ?? _startDate ?? new Date(),
      key: "selection",
    }
  },[startDate, endDate])

  const _onChange = useCallback((e: RangeKeyDict) => {
    const { selection } = e;
    if(!selection.startDate || !selection.endDate) return;
    onChange(selection.startDate?.toDateString(), selection.endDate?.toDateString())
  },[onChange])

  return (
    <DR
      editableDateInputs={true}
      onChange={_onChange}
      moveRangeOnFirstSelection={false}
      ranges={[range]}
    />
  );
};
