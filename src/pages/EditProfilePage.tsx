import * as React from 'react';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Paper, Grid, Box, Typography, Toolbar, Tab } from '@mui/material';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { EditUserInformation } from '../components/EditUserInformation';
import { UpdateUserAvatar } from '../components/UpdateUserAvatar';
import { ChangeUserPassword } from '../components/ChangeUserPassword';
import { drawerWidth } from '../helpers/constants';

export const EditProfilePage = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    event.preventDefault();
  };

  return (
    <>
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
                width: '100%',
              }}
            >
              <Typography
                component="h1"
                variant="h5"
                sx={{ fontWeight: '700', color: '#1A1E2C', pb: 4 }}
              >
                Manage your account
              </Typography>

              <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="manage your account">
                      <Tab label="Edit information" value="1" />
                      <Tab label="User avatar" value="2" />
                      <Tab label="Change password" value="3" />
                    </TabList>
                  </Box>
                  <TabPanel value="1">
                    <EditUserInformation />
                  </TabPanel>
                  <TabPanel value="2">
                    <UpdateUserAvatar />
                  </TabPanel>
                  <TabPanel value="3">
                    <ChangeUserPassword />
                  </TabPanel>
                </TabContext>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
