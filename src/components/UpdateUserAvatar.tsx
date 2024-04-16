import { Box, Button, Grid, ThemeProvider, Typography } from '@mui/material';
import { DragAndDropUploadField } from './DragAndDropUploadField';
import { defaultTheme } from '../theme';

export const UpdateUserAvatar = () => {
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
          <Typography variant="h6" fontWeight={500} mb={1} sx={{ color: '#1A1E2C' }}>
            Change your photo
          </Typography>
          <Typography sx={{ color: '#000000' }}>Drag and drop file below</Typography>
        </Grid>

        <DragAndDropUploadField />

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
