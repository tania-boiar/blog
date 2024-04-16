import { Box, Button, Grid, TextField, ThemeProvider, Typography } from '@mui/material';
import { StyledLabel, defaultTheme } from '../theme';

export const ChangeUserPassword = () => {
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
          <Typography variant="h6" fontWeight={500} mb={3} sx={{ color: '#1A1E2C' }}>
            Change your password
          </Typography>
        </Grid>

        <StyledLabel htmlFor="password">Old password</StyledLabel>
        <TextField
          sx={{ mt: 1, mb: 3 }}
          margin="normal"
          required
          fullWidth
          name="password"
          placeholder="Enter your current password"
          type="password"
          id="password"
          autoComplete="current-password"
        />

        <StyledLabel htmlFor="password">New password</StyledLabel>
        <TextField
          sx={{ mt: 1, mb: 3 }}
          margin="normal"
          required
          fullWidth
          name="new-password"
          placeholder="Enter your new password"
          type="password"
          id="new-password"
        />

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
