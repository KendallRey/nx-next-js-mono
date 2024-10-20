"use client";

import { DateRangePicker as RDR } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

export const DateRangePicker = () => {
  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  };

  return <RDR className="w-full" ranges={[selectionRange]} onChange={() => {}} />;
};
