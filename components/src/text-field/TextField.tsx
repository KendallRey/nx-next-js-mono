"use client";

import { alpha, styled } from "@mui/material/styles";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { OutlinedInputProps } from "@mui/material/OutlinedInput";
import { formatToId } from "../helper/component";
import { BASE_INPUT } from "../constants/style";
import { TEXT } from "../helper/field";

const DEFAULT_PROPS: TextFieldProps = {
  variant: "filled",
  size: "small",
};

export const CustomMuiTextField = styled(({ slotProps, ...props }: TextFieldProps) => (
  <TextField
    slotProps={{
      ...slotProps,
      input: { disableUnderline: true, ...slotProps?.input } as Partial<OutlinedInputProps>,
    }}
    {...props}
    {...DEFAULT_PROPS}
  />
))(({ theme }) => ({
  "& .MuiFilledInput-root": {
    ...BASE_INPUT.STYLE,
    transition: theme.transitions.create(["border-color", "background-color", "box-shadow"]),
    "&:hover": {
      backgroundColor: "transparent",
    },
    "&.Mui-focused": {
      backgroundColor: "transparent",
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

export type IMuiTextField = {
  label: string;
  maxLength?: number;
  errorText?: string;
} & TextFieldProps;

const MuiTextField = (props: IMuiTextField) => {
  const { label, id, name, slotProps, maxLength, errorText, ...cleanProps } = props;
  const _id = formatToId(id || String(label));
  return (
    <CustomMuiTextField
      id={_id}
      name={name || _id}
      label={label}
      slotProps={{
        ...slotProps,
        htmlInput: {
          max: props.type === "date" ? "9999-12-31" : undefined,
          maxLength: maxLength ?? TEXT.MAX.NAME,
          ...slotProps?.htmlInput,
        },
      }}
      error={Boolean(errorText)}
      helperText={errorText}
      {...cleanProps}
    />
  );
};

export default MuiTextField;
