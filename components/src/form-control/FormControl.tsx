"use client";

import {
  FormControl,
  InputLabel,
  FormControlProps,
  styled,
  alpha,
  FormControlLabel,
  FormControlLabelProps,
  FormGroup,
  FormGroupProps,
} from "@mui/material";
import { COLOR } from "../constants/color";
import { BASE_INPUT } from "../constants/style";

export type IMuiFormControl = {
  label?: string;
} & FormControlProps;

const DEFAULT_PROPS: FormControlProps = {
  size: "small",
  variant: "filled",
};

export const CustomMuiFormControl = styled((props: IMuiFormControl) => <FormControl {...props} {...DEFAULT_PROPS} />)(
  ({ theme }) => ({
    "& .MuiFilledInput-root": {
      ...BASE_INPUT.STYLE,
      transition: theme.transitions.create(["border-color", "background-color", "box-shadow"]),
      "& .MuiInputBase-input": {
        border: "none",
      },
      "&:hover": {
        backgroundColor: "transparent",
      },
      "&.Mui-focused": {
        backgroundColor: "transparent",
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
        borderColor: theme.palette.primary.main,
      },
      "&.Mui-error:not(.Mui-focused)": {
        borderColor: theme.palette.error.main,
      },
    },
    "& .MuiFilledInput-input:focus": {
      backgroundColor: "transparent",
      borderRadius: 4,
    },
    "&.Mui-focused": {
      backgroundColor: "transparent",
    },
  }),
);

const MuiFormControl: React.FC<IMuiFormControl> = (props) => {
  const { label, children, ...otherProps } = props;

  return (
    <CustomMuiFormControl {...otherProps}>
      <InputLabel id={`${String(label)}"-simple-form-label"`}>{label}</InputLabel>
      {children}
    </CustomMuiFormControl>
  );
};

export default MuiFormControl;

type IFormControlLabel = FormControlLabelProps;

export const MuiFormControlLabel: React.FC<IFormControlLabel> = (props) => {
  return <FormControlLabel {...props} />;
};

type IFormGroup = FormGroupProps;

export const MuiFormGroup: React.FC<IFormGroup> = (props) => {
  return <FormGroup {...props} />;
};
