import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';

const defaultTheme = createTheme();

export const ForgotPasswordPage: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={5}
          sx={{
            backgroundImage: 'url(./assets/images/pass-recovery.png)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={7}component={Paper} elevation={6} square sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: "#6F7C8B",
            }}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
            }}
          >
            <Typography component="h1" variant="h5" sx={{ mt: 5, fontWeight: "700", color: "#1A1E2C" }}>
              Password recovery
            </Typography>
            <Typography component="p" sx={{ mt: 1, color: "#1A1E2C" }}>
              Enter the email you're using for your account
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 4 }}>
              {/* <InputLabel key="email" sx={{ mb: -1}}>Email Address</InputLabel> */}
              <label htmlFor="email" style={{ fontWeight: "500" }}>Email Address</label>
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
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: "#4C6FFF",
                  height: "55px",
                  textTransform: "none",
                  fontWeight: "500",
                }}
              >
                Reset
              </Button>
            </Box>

            <Grid container sx={{justifyContent: "center"}}>
              <NavLink to="/sign-in" style={{ color: "#4C6FFF", marginTop: "20px" }}>
                Back to Login
              </NavLink>
              </Grid>
          </Box>
        </Grid>
      </Grid>
      
    </ThemeProvider>
  );
}
