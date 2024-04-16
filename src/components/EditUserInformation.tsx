import { Box, Button, Grid, TextField, ThemeProvider, Typography } from '@mui/material';
import { StyledLabel, defaultTheme } from '../theme';

export const EditUserInformation = () => {
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
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 2 }}>
        <Grid item xs sx={{ mt: 2 }}>
          <Typography variant="h6" sx={{ color: '#1A1E2C', mb: 3, fontWeight: '500' }}>
            Change your information
          </Typography>
        </Grid>

        {/* <InputLabel key="email" sx={{ mb: -1}}>Email Address</InputLabel> */}
        <StyledLabel htmlFor="firstName">First Name</StyledLabel>
        <TextField
          sx={{ mt: 1 }}
          margin="normal"
          required
          fullWidth
          id="firstName"
          placeholder="Enter your First Name"
          name="firstName"
          autoFocus
          type="text"
        />

        {/* <InputLabel key="password" sx={{ mb: -1}}>Password</InputLabel> */}
        <StyledLabel htmlFor="lastName" sx={{ mt: 2 }}>
          Last Name
        </StyledLabel>
        <TextField
          sx={{ mt: 1 }}
          margin="normal"
          required
          fullWidth
          name="lastName"
          placeholder="Enter your text copy"
          type="text"
          id="lastName"
        />

        <StyledLabel htmlFor="age" sx={{ mt: 2 }}>
          Age
        </StyledLabel>
        <TextField
          sx={{ mt: 1 }}
          margin="normal"
          required
          fullWidth
          name="age"
          placeholder="Enter your age"
          type="text"
          id="age"
        />

        <Button
          // type="submit"
          variant="outlined"
          sx={{
            mt: 3,
            mb: 2,
            mr: 2,
            px: 4,
          }}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          variant="contained"
          sx={{
            mt: 3,
            mb: 2,
            px: 4,
            height: '38px',
          }}
        >
          Save
        </Button>
      </Box>
    </ThemeProvider>
  );
};
