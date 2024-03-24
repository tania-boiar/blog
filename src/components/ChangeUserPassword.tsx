import { Box, Button, Grid, TextField, ThemeProvider, Typography } from "@mui/material";
import { defaultTheme } from "../theme";

export const ChangeUserPassword = () => {
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
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit}
        sx={{ mt: 2 }}
        >

        <Grid item xs sx={{ mt: 2 }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: "500", color: "#1A1E2C", mb: 3 }}
          >
            Change your password
          </Typography>
        </Grid>

          <label htmlFor="password" style={{ fontWeight: "500" }}>
            Old password
          </label>
          <TextField
            sx={{ mt: 1, mb: 3  }}
            margin="normal"
            required
            fullWidth
            name="password"
            placeholder="Enter your current password"
            type="password"
            id="password"
            autoComplete="current-password"
          />

          <label htmlFor="password" style={{ fontWeight: "500" }}>
            New password
          </label>
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
        {/* <label htmlFor="confirm-password">Confirm New Password</label> */}
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
            height: "38px",
          }}
        >
          Save
        </Button>
      </Box>
    </ThemeProvider>
  )
}
