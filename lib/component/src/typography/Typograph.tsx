import { Typography, TypographyProps } from "@mui/material";

type IMuiTypography = TypographyProps;

const MuiTypography: React.FC<IMuiTypography> = (props) => {
  const { sx, ...otherProps } = props;
  return <Typography {...otherProps} sx={{ textTransform: "none", ...sx }} />;
};

export default MuiTypography;
