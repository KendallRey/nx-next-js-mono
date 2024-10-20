import { useMediaQuery, useTheme } from "@mui/material";

export const useAppMediaQuery = () => {
  const theme = useTheme();

  const lg = useMediaQuery(theme.breakpoints.down("lg"));
  const md = useMediaQuery(theme.breakpoints.down("md"));
  const sm = useMediaQuery(theme.breakpoints.down("sm"));

  return {
    theme,
    lg,
    md,
    sm,
  };
};
