import * as React from 'react';
import { CssBaseline, Grid, Box, Typography, Button, TextField, Paper } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { CustomLink, SpacedButtonsContainer, StyledLabel, defaultTheme } from '../theme';
import { SocialButton } from '../components/SocialButton';

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
            backgroundImage: 'url(./assets/images/login.png)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
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
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#6F7C8B',
          }}
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
            }}
          >
            <img src="./assets/images/waving-hand.svg" />
            <Typography
              component="h1"
              variant="h5"
              sx={{ mt: 5, fontWeight: '700', color: '#1A1E2C' }}
            >
              Welcome back
            </Typography>
            <Typography component="p" sx={{ mt: 1, color: '#1A1E2C' }}>
              Sign in to manage your account or
              <CustomLink to="/articles" sx={{ pl: 1 }}>
                Go to articles
              </CustomLink>
            </Typography>

            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 4 }}>
              {/* <InputLabel key="email" sx={{ mb: -1}}>Email Address</InputLabel> */}
              <StyledLabel htmlFor="email">Email Address</StyledLabel>
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
              <StyledLabel htmlFor="password">Password</StyledLabel>
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
                <CustomLink to="/forgot-password">Forgot your password?</CustomLink>
              </Grid>
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Sign In
              </Button>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                alignSelf: 'center',
              }}
            >
              <Box mb={2}>{'Or sign in with another account'}</Box>
              <SpacedButtonsContainer>
                <SocialButton
                  href="#"
                  iconSrc="./assets/icons/google.svg"
                  altText="Google Sing In"
                  onClick={() => console.log('Google Sing In button clicked')}
                />
                <SocialButton
                  href="#"
                  iconSrc="./assets/icons/facebook.svg"
                  altText="Facebook Sing In"
                  onClick={() => console.log('Facebook Sing In button clicked')}
                />
              </SpacedButtonsContainer>
            </Box>

            <Grid
              container
              sx={{
                position: 'relative',
                bottom: '-50px',
                justifyContent: 'center',
              }}
            >
              <Grid item pr={'5px'}>
                {"Don't have an account? "}
              </Grid>
              <CustomLink to="/sign-up">Sign Up</CustomLink>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
