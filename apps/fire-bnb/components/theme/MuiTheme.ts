import { createTheme } from '@mui/material';
import { Open_Sans } from 'next/font/google';
import { grey } from '@mui/material/colors';

const inter = Open_Sans({
  weight: '500',
  subsets: ['latin', 'cyrillic-ext', 'greek'],
});

export const MuiTheme = createTheme({
  palette: {
    text: {
      primary: grey[800],
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
    body2: {
      color: 'gray',
    },
  },
  breakpoints: {},
});
