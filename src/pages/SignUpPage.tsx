import * as React from 'react';
import {
  Button,
  CssBaseline,
  TextField,
  Paper,
  Box,
  Grid,
  Typography,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { CustomLink, SpacedButtonsContainer, StyledLabel, defaultTheme } from '../theme';
import { SocialButton } from '../components/SocialButton';

export const SignUpPage: React.FC = () => {
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
            backgroundImage: 'url(./assets/images/signup.png)',
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
            <Typography
              component="h1"
              variant="h5"
              sx={{ mt: 5, fontWeight: '700', color: '#1A1E2C' }}
            >
              Get started today
            </Typography>
            <Typography component="p" sx={{ mt: 1, color: '#1A1E2C' }}>
              Enter your details to create super account
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 4 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <StyledLabel htmlFor="name">Name</StyledLabel>
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
                <Grid item xs={12} sm={6}>
                  <StyledLabel htmlFor="name">Age</StyledLabel>
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
              </Grid>
              {/* <InputLabel key="password" sx={{ mb: -1}}>Password</InputLabel> */}

              <Grid item>
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
              </Grid>
              {/* <label htmlFor="confirm-password">Confirm New Password</label> */}
              <Grid item>
                <StyledLabel htmlFor="confirm-password">Confirm New Password</StyledLabel>
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
              <Box display="flex" flexDirection={'column'}>
                <FormControlLabel required control={<Checkbox />} label="I agree to Product" />
                <CustomLink
                  to="/terms"
                  sx={{
                    fontWeight: '600',
                    marginTop: '-10px',
                    marginLeft: '32px',
                  }}
                >
                  Terms and Policy
                </CustomLink>
              </Box>
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Get started now
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
              <Box mb={2}>{'Or sign up with'}</Box>
              <SpacedButtonsContainer>
                <SocialButton
                  href="#"
                  iconSrc="./assets/icons/google.svg"
                  altText="Google Sing Up"
                  onClick={() => console.log('Google Sing Up button clicked')}
                />
                <SocialButton
                  href="#"
                  iconSrc="./assets/icons/facebook.svg"
                  altText="Facebook Sing Up"
                  onClick={() => console.log('Facebook Sing Up button clicked')}
                />
              </SpacedButtonsContainer>
            </Box>

            <Grid
              container
              sx={{
                position: 'relative',
                bottom: '-46px',
                justifyContent: 'center',
              }}
            >
              <Grid item pr={'5px'}>
                {'Already have an account? '}
              </Grid>
              <CustomLink to="/sign-in">Login</CustomLink>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
