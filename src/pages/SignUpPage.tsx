import * as React from "react";
import { NavLink } from "react-router-dom";
import { Button, CssBaseline, TextField, Paper, Box, Grid, Typography, Checkbox, FormControlLabel } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { defaultTheme } from "../theme";

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
            color: "#6F7C8B",
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
            <Typography
              component="h1"
              variant="h5"
              sx={{ mt: 5, fontWeight: "700", color: "#1A1E2C" }}
            >
              Get started today
            </Typography>
            <Typography component="p" sx={{ mt: 1, color: "#1A1E2C" }}>
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
                sx={
                  {
                    // display: "flex",
                  }
                }
              >
                <Grid
                  item
                  sx={
                    {
                      // display: "flex",
                    }
                  }
                >
                  <label htmlFor="name" style={{ fontWeight: "500" }}>
                    Name
                  </label>
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
                  sx={
                    {
                      // display: "flex",
                    }
                  }
                >
                  <label htmlFor="name" style={{ fontWeight: "500" }}>
                    Age
                  </label>
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
                <label htmlFor="email" style={{ fontWeight: "500" }}>
                  Email Address
                </label>
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
                <label htmlFor="password" style={{ fontWeight: "500" }}>
                  Password
                </label>
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
                <label htmlFor="confirm-password" style={{ fontWeight: "500" }}>
                  Confirm New Password
                </label>
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
              <Box display="flex" flexDirection={"column"}>
                <FormControlLabel
                  required
                  control={<Checkbox />}
                  label="I agree to Product"
                />
                <NavLink
                  to="/terms"
                  style={{
                    marginLeft: "32px",
                    marginTop: "-10px",
                    color: "#4C6FFF",
                    fontWeight: "500",
                  }}
                >
                  Terms and Policy
                </NavLink>
              </Box>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Get started now
              </Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignSelf: "center",
                alignItems: "center",  
              }}
            >
              <Grid container justifyContent={"center"}>
                <Grid item sx={{ mb: "16px"
                }}
              >{"Or sign up with"}</Grid>
              </Grid>
              <Grid
                item
                sx={{
                  display: "flex",
                }}
              >
                <div
                  style={{
                    border: "1px solid #fff",
                    borderRadius: "6px",
                    padding: "12px 23px",
                    boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
                    marginRight: "20px",
                  }}
                >
                  <a href="#">
                    <img src="./assets/icons/google.svg" />
                  </a>
                </div>
                <div
                  style={{
                    border: "1px solid #fff",
                    borderRadius: "6px",
                    padding: "12px 23px",
                    boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
                  }}
                >
                  <a href="#">
                    <img src="./assets/icons/facebook.svg" />
                  </a>
                </div>
              </Grid>
            </Box>

            <Grid
              container
              sx={{
                position: "relative",
                bottom: "-46px",
                justifyContent: "center",
              }}
            >
              <Grid item pr={"5px"}>
                {"Already have an account? "}
              </Grid>
              <NavLink to="/sign-in" style={{ color: "#4C6FFF" }}>
                Login
              </NavLink>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
