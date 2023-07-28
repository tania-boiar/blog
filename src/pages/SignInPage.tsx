import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';

const defaultTheme = createTheme();

export const SignInPage: React.FC = () => {
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
            backgroundImage: 'url(src/assets/images/login.png)',
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
            <img src="src/assets/images/waving-hand.svg" />
            <Typography component="h1" variant="h5" sx={{ mt: 5 }}>
              Welcome back
            </Typography>
            <Typography component="p" sx={{ mt: 1 }}>
            Sign in to manage your account
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 4 }}>
              {/* <InputLabel key="email" sx={{ mb: -1}}>Email Address</InputLabel> */}
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
              {/* <InputLabel key="password" sx={{ mb: -1}}>Password</InputLabel> */}
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
              <Grid item xs sx={{ mt: 2 }}>
                  <Link href="#" variant="body1">
                    Forgot your password?
                  </Link>
                </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </Box>
            <Grid container>
                <Grid item>
                {"Or do it via other account"}
                </Grid>
            </Grid>
            <Grid item sx={{
              display: 'flex',
            }}>
              <a href="#">
                <img src="src/assets/icons/google.svg" />
              </a>
              <a href="#">
                <img src="src/assets/icons/facebook.svg" />
              </a>
            </Grid>
                

            <Grid container>
                <Grid item>
                {"Don't have an account? "}
                </Grid>
                <NavLink to="/sign-up">
                  Sign Up
                </NavLink>
              </Grid>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}