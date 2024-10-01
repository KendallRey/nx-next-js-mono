"use client";

import { OutlinedInputProps } from "@mui/material";
import { formatToId } from "../helper/component";
import { ICustomNumericFormatProps, NumericFormatCustom } from "./NumberField";
import { CustomMuiTextField, IMuiTextField } from "./TextField";

type IMuiMoneyField = {
  label: string;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
} & Omit<IMuiTextField, "onChange"> &
  ICustomNumericFormatProps;

// #region [TBC] needs more testing
export const MuiMoneyField: React.FC<IMuiMoneyField> = (props) => {
  const { label, id, name, value, onChange, min, max, ...otherProps } = props;

  const _id = formatToId(id || String(label));

  return (
    <CustomMuiTextField
      id={_id}
      name={name || _id}
      label={label}
      value={value}
      onChange={onChange}
      {...otherProps}
      InputProps={
        {
          disableUnderline: true,
          inputComponent: NumericFormatCustom as any,
          inputProps: {
            thousandSeparator: true,
            fixedDecimalScale: true,
            decimalScale: 2,
            prefix: "₱ ",
            onChange: onChange,
            name: name || _id,
            value: value,
            min: min,
            max: max,
          },
        } as Partial<OutlinedInputProps>
      }
    />
  );
};
