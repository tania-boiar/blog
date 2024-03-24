import { createTheme } from "@mui/material/styles";

export const defaultTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: "#4C6FFF",
          height: "55px",
          textTransform: "none",
          fontWeight: "500",
          boxShadow: "none",
        },
        outlined: {
          color: "#6F7C8B",
          textTransform: "none",
          border: "1px solid #C4C4C4",
          height: "38px",
        },
      },
    },
  },
});
