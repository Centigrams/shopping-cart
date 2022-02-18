import { createTheme } from '@mui/material/styles';

const AppTheme = createTheme({
  palette: {
    primary: {
      light: '#ffffff',
      main: '#ffffff',
      dark: '#cccccc',
      contrastText: '#000000',
    },
    secondary: {
      light: '#66c6ff',
      main: '#1e96d4',
      dark: '#0068a2',
      contrastText: '#fff',
    },
  },
});

export default AppTheme;
