import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF1D6C',
    },
    warning: {
      main: '#FFB72C',
    },
    success: {
      main: '#007350',
    },
    background: {
      default: '#F6F7FB',
    },
    secondary: {
      main: '#ACACAC',
      light: '#D2D2D2',
    },
  },
  typography: {
    fontFamily: 'Roboto, Noto Sans TC',
    h1: {
      fontSize: 20,
      fontWeight: 400,
      lineHeight: '29px',
    },
    h2: {
      fontSize: 18,
      fontWeight: 400,
      lineHeight: '26px',
    },
    h3: {
      fontSize: 16,
      fontWeight: 400,
      lineHeight: '23.17px',
    },
    h4: {
      fontSize: 14,
      fontWeight: 400,
      lineHeight: '21px',
    },
    h5: {
      fontSize: 12,
      fontWeight: 400,
      lineHeight: '17px',
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
          borderRadius: '6px',
        },
      },
    },
  },
});

export default theme;
