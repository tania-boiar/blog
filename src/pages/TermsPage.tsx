import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, CssBaseline, Box, Button, Container, ThemeProvider } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { defaultTheme } from '../theme';

export const TermsPage: React.FC= () => (
  <ThemeProvider theme={defaultTheme}>
  <CssBaseline />
    <AppBar position="fixed" elevation={0}>
      <Toolbar sx={{ backgroundColor: "#040D32", height: "154px" }} >
        <Container maxWidth="lg">
          <Box display={'flex'} flexDirection={'column'}>
            <a href="#">
              <img src="./assets/images/logo-white.svg" />
            </a>
            <NavLink to="/sign-in" style={{ color: "#fff", textTransform: "none", justifyContent: "flex-start", display: "flex", alignItems: "center"}}>
            <ChevronLeftIcon fontSize='small' sx={{marginRight: "14px"}} />
            <Typography variant="h5" component="div" sx={{ fontWeight: "700"}}>
              Product legal information
            </Typography>
            </NavLink>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  <Toolbar />

  <main>
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 20,
        pb: 10,
        color: "#1A1E2C",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          component="h1"
          variant="h4"
          pb="40px"
          fontWeight={700}
        >
          Privacy Policy
        </Typography>
        <Typography mb="22px" variant="h6" component="h2" fontWeight={700}>
          1. The standard Lorem Ipsum passage, used since the 1500s
        </Typography>
        <Typography paragraph mb="22px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Typography>

        <Typography paragraph mb="22px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>

        <Typography paragraph mb="22px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>

        <Typography variant="h6" mb="22px" component="h2" fontWeight={700}>
          2. The standard Lorem Ipsum passage
        </Typography>
        <Typography paragraph mb="22px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>

        <Typography paragraph mb="22px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>

        <Typography paragraph mb="22px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>

        <NavLink to="/sign-in">
          <Button variant="outlined"
          sx={{ width: "108px"}}>
            Back</Button>
        </NavLink>
      </Container>
    </Box>
  </main>
</ThemeProvider>
);