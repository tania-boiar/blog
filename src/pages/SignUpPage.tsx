import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import { Checkbox, FormControlLabel, Link } from "@mui/material";

const defaultTheme = createTheme();

export const SignUpPage: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={5}
          sx={{
            backgroundImage: "url(./assets/images/signup.png)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid
          item
          xs={12}
          sm={7}
          component={Paper}
          elevation={6}
          square
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <Typography component="h1" variant="h5" sx={{ mt: 5 }}>
              Get started today
            </Typography>
            <Typography component="p" sx={{ mt: 1 }}>
              Enter your details to create super account
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 4 }}
            >
              <Grid
                item
                sx={{
                  display: "flex",
                }}
              >
                <Grid
                  item
                  sx={{
                    display: "flex",
                  }}
                >
                  <label htmlFor="name">Name</label>
                  <TextField
                    sx={{ mt: 1 }}
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    placeholder="Name"
                    name="name"
                    autoComplete="name"
                    autoFocus
                  />
                </Grid>
                <Grid
                  item
                  sx={{
                    display: "flex",
                  }}
                >
                  <label htmlFor="name">Age</label>
                  <TextField
                    sx={{ mt: 1 }}
                    margin="normal"
                    required
                    fullWidth
                    id="age"
                    placeholder="Enter your age"
                    name="age"
                    autoComplete="age"
                    autoFocus
                  />
                </Grid>
              </Grid>

              {/* <InputLabel key="email" sx={{ mb: -1}}>Email Address</InputLabel> */}
              <Grid item>
              <label htmlFor="email">Email Address</label>
              <TextField
                sx={{ mt: 1 }}
                margin="normal"
                required
                fullWidth
                id="email"
                placeholder="Enter your email address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              </Grid>
              {/* <InputLabel key="password" sx={{ mb: -1}}>Password</InputLabel> */}

              <Grid item>
              <label htmlFor="password">Password</label>
              <TextField
                sx={{ mt: 1 }}
                margin="normal"
                required
                fullWidth
                name="password"
                placeholder="Enter your password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
               </Grid>
              {/* <label htmlFor="confirm-password">Confirm New Password</label> */}
              <Grid item>
              <label htmlFor="confirm-password">Confirm New Password</label>
              <TextField
                sx={{ mt: 1 }}
                margin="normal"
                required
                fullWidth
                name="confirm-password"
                placeholder="Enter your new password again"
                type="password"
                id="confirm-password"
                autoComplete="current-password"
              />
               </Grid>
               <FormControlLabel
                required
                control={<Checkbox />}
                label="I agree to Product Terms and Policy"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Get started now
              </Button>

            </Box>
            <Grid container>
              <Grid item>{"Or sign up with"}</Grid>
            </Grid>
            <Grid
              item
              sx={{
                display: "flex",
              }}
            >
              <a href="#">
                <img src="./assets/icons/google.svg" />
              </a>
              <a href="#">
                <img src="./assets/icons/facebook.svg" />
              </a>
            </Grid>

            <Grid container>
              <Grid item>{"Already have an account? "}</Grid>
              <NavLink to="/sign-in">Login</NavLink>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
