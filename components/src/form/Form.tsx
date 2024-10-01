import { FormLabel, FormLabelProps } from "@mui/material";

type IFormLabel = FormLabelProps;

export const MuiFormLabel: React.FC<IFormLabel> = (props) => {
  return <FormLabel {...props} />;
};
