"use client";

import { FormControlTypeMap, InputLabel, FormHelperText } from "@mui/material";
import { DefaultComponentProps } from "@mui/material/OverridableComponent";
import Select, { SelectProps } from "@mui/material/Select/Select";
import { alpha } from "@mui/material/styles";
import styled from "@mui/material/styles/styled";
import { CustomMuiFormControl } from "../form-control/FormControl";
import { formatToId } from "../helper/component";
import { COLOR } from "../constants/color";
import { BASE_INPUT } from "../constants/style";

type IMuiSelect = SelectProps;
const DEFAULT_PROPS: SelectProps = {
  size: "small",
};

const CustomMuiSelect = styled((props: SelectProps) => <Select disableUnderline {...props} {...DEFAULT_PROPS} />)(
  ({ theme }) => ({
    "& .MuiInputBase-input": {
      ...BASE_INPUT.STYLE,
      transition: theme.transitions.create(["border-color", "background-color", "box-shadow"]),
      "&:hover": {
        backgroundColor: "transparent",
        boxShadow: `${alpha(theme.palette.primary.light, 0.5)} 0 0 0 2px`,
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
  }),
);

const MuiSelect: React.FC<IMuiSelect> = (props) => {
  const { ...otherProps } = props;
  return <CustomMuiSelect {...DEFAULT_PROPS} {...otherProps} />;
};

export default MuiSelect;

export type IMuiFormSelect = {
  fCProps?: DefaultComponentProps<FormControlTypeMap<object, "div">>;
  minWidth?: number;
  maxWidth?: number;
  helperText?: string;
  selectClassName?: string;
} & SelectProps;

export const MuiFormSelect = (props: IMuiFormSelect) => {
  const {
    id,
    label,
    name,
    selectClassName,
    disabled,
    children,
    fCProps,
    minWidth,
    maxWidth,
    error,
    helperText,
    className,
    ...cleanProps
  } = props;
  const selectId = formatToId(String(label));
  return (
    <CustomMuiFormControl
      fullWidth
      className={className}
      {...fCProps}
      disabled={disabled}
      sx={{ ...fCProps?.sx, minWidth, maxWidth }}
      error={error}
    >
      <InputLabel id={`${selectId}-label`}>{label}</InputLabel>
      <MuiSelect
        labelId={`${selectId}-label`}
        name={name || selectId}
        id={selectId}
        error={error}
        disabled={disabled}
        className={selectClassName || ""}
        {...cleanProps}
        MenuProps={MENU_PROPS}
      >
        {children}
      </MuiSelect>
      <FormHelperText>{helperText}</FormHelperText>
    </CustomMuiFormControl>
  );
};

export const MENU_PROPS = {
  disableScrollLock: true,
  marginThreshold: null,
  style: {
    maxHeight: 300,
  },
  sx: {
    "&& .Mui-selected": {
      borderLeft: `4px solid ${COLOR.PRIMARY[500]}`,
    },
  },
} as const;
