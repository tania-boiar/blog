import * as React from 'react';
import {
  Paper,
  Grid,
  Box,
  Typography,
  Toolbar,
  Button,
  TextField,
  ThemeProvider,
} from '@mui/material';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { DragAndDropUploadField } from '../components/DragAndDropUploadField';
import { drawerWidth } from '../helpers/constants';
import { StyledLabel, defaultTheme } from '../theme';

export const CreateArticlePage = () => {
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
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 4,
          bgcolor: '#F5F6F7',
          minHeight: '100vh',
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Grid container justifyContent={'center'}>
          <Grid
            item
            xs={12}
            md={8}
            lg={5}
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
                my: 4,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
              }}
            >
              <Box sx={{ borderBottom: 'solid 1px #EAEDF3', width: '100%' }}>
                <Typography
                  component="h1"
                  variant="h5"
                  fontWeight={700}
                  pb={4}
                  sx={{ color: '#1A1E2C' }}
                >
                  Add a new article
                </Typography>
              </Box>

              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 4 }}>
                {/* <InputLabel key="email" sx={{ mb: -1}}>Email Address</InputLabel> */}
                <StyledLabel htmlFor="title">Title</StyledLabel>
                <TextField
                  sx={{ mt: 1 }}
                  margin="normal"
                  required
                  fullWidth
                  id="title"
                  placeholder="Enter your title"
                  name="title"
                  autoFocus
                />
                {/* <InputLabel key="password" sx={{ mb: -1}}>Password</InputLabel> */}
                <StyledLabel htmlFor="text" sx={{ mt: 3 }}>
                  Text
                </StyledLabel>
                <TextField
                  sx={{ mt: 1 }}
                  multiline
                  rows={8}
                  margin="normal"
                  required
                  fullWidth
                  name="text"
                  placeholder="Enter your text copy"
                  type="text"
                  id="text"
                />

                <Grid item xs sx={{ mt: 2 }}>
                  <Typography variant="h6" sx={{ color: '#1A1E2C', fontWeight: '500' }}>
                    Add cover photo
                  </Typography>
                  <Typography sx={{ mt: 1, color: '#000000' }}>Drag and drop file below</Typography>
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
                  Publish
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};
