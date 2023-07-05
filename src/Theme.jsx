import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';


// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#3F7D92',
    },
    secondary: {
      main: '#E1E5E6',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;