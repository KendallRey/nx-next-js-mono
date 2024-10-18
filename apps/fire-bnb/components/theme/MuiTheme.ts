import { createTheme } from "@mui/material";
import { Open_Sans } from "next/font/google";

const inter = Open_Sans({
  weight: "500",
  subsets: ["latin", "cyrillic-ext", "greek"],
});

export const MuiTheme = createTheme({
  typography: {
    fontFamily: inter.style.fontFamily,
    body2: {
      color: "gray"
    }
  },
  breakpoints: {
  }
})