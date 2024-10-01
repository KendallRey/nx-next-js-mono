import { Checkbox, CheckboxProps, FormControlLabelProps } from "@mui/material";
import { MuiFormControlLabel } from "../form-control/FormControl";

type IMuiCheckbox = CheckboxProps;

const MuiCheckbox: React.FC<IMuiCheckbox> = (props) => {
  return <Checkbox {...props} data-testname="checkbox" />;
};

export default MuiCheckbox;

type IFormCheckbox = {
  label: string;
  labelProps?: FormControlLabelProps;
} & IMuiCheckbox;

export const FormCheckbox: React.FC<IFormCheckbox> = (props) => {
  const { label, labelProps, ...otherProps } = props;
  return <MuiFormControlLabel label={label} {...labelProps} control={<MuiCheckbox {...otherProps} />} />;
};
