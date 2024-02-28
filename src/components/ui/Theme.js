import { createTheme } from '@mui/material/styles';


export default createTheme({

    palette: {
        common: {
            black: "#000",
            white: "#fff"
        },
        primary: {
            main: "#90caf9",
            light: "#e3f2fd",
            dark: "#42a5f5",
            contrastText: "rgba(0, 0, 0, 0.87)"
        },
        secondary: {
            main: "#ce93d8",
            light: "#f3e5f5",
            dark: "#ab47bc",
            contrastText: "rgba(0, 0, 0, 0.87)"
        }
    },

    typography: {
        h3: {
            fontWeight: 300
        }
    }
});