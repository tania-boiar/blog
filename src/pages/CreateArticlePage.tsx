import * as React from "react";
import { NavLink } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Paper,
  Grid,
  Box,
  CssBaseline,
  Typography,
  Divider,
  Drawer,
  AppBar,
  Toolbar,
  Avatar,
  Button,
  InputBase,
  IconButton,
  Menu,
  MenuItem,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
} from "@mui/material";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import DragAndDropUploadField from "../components/DragAndDropUploadField copy";


const drawerWidth = 240;

interface Props {
  window?: () => Window;
}

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export const CreateArticlePage: React.FC<Props> = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null,
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar sx={{ bgcolor: "#fff" }}>
        <a href="#">
          <img src="./assets/images/logo.svg" />
        </a>
      </Toolbar>
      <Divider />

      <List sx={{ paddingLeft: "24px", paddingBottom: "34px" }}>
        <ListItem>
          <Typography
            sx={{
              textTransform: "capitalize",
              color: "#6F7C8B80",
              fontWeight: "500",
              py: "16px",
            }}
          >
            Main menu
          </Typography>
        </ListItem>
        {["Dashboard"].map((text) => (
          <ListItem key={text} sx={{ color: "#1943EF", fontWeight: "500" }}>
            <ListItemIcon>
              <AvTimerIcon sx={{ color: "#1943EF" }} />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List sx={{ paddingLeft: "14px", paddingTop: "27px" }}>
        <ListItem>
          <NavLink to="/sign-in">
            <Button
              variant="contained"
              startIcon={<LogoutIcon />}
              sx={{
                bgcolor: "#F5F6F7",
                color: "#1A1E2C",
                borderRadius: "3px",
                minWidth: "186px",
                boxShadow: "none",
                textTransform: "capitalize",
                fontWeight: "500",
              }}
            >
              Logout
            </Button>
          </NavLink>
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        elevation={0}
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          borderBottom: 1,
          borderColor: "#EAEDF3",
        }}
      >
        <Toolbar sx={{ color: "#6F7C8B", bgcolor: "#fff" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 4, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Box
            sx={{ marginLeft: "-24px", flexGrow: 1, display: { xs: "flex" } }}
          >
            <Search sx={{ bgcolor: "#F5F6F7", borderRadius: "200px" }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Find articles…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar
                alt="Annette Black"
                src="./assets/images/anette-black.png"
              />
              <Typography
                sx={{
                  px: "16px",
                  textTransform: "capitalize",
                  fontWeight: "500",
                  color: "#1A1E2C",
                  display: { xs: "none", md: "block" },
                }}
              >
                Annette Black
              </Typography>
              <ExpandMoreIcon sx={{ color: "#8E94A7" }} />
            </Button>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem key="Edit profile" onClick={handleCloseUserMenu}>
                <NavLink to="/edit-profile">Edit profile</NavLink>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 4,
          bgcolor: "#F5F6F7",
          minHeight: "100vh",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Grid container justifyContent={"center"}>
          <Grid
            item
            xs={12}
            md={8}
            lg={5}
            component={Paper}
            elevation={6}
            square
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#6F7C8B",
            }}
          >
            <Box
              sx={{
                my: 4,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
              }}
            >
              <Box sx={{ borderBottom: "solid 1px #EAEDF3", width: "100%" }}>
                <Typography
                  component="h1"
                  variant="h5"
                  sx={{ fontWeight: "700", color: "#1A1E2C", pb: 4 }}
                >
                  Add a new article
                </Typography>
              </Box>

              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 4 }}
              >
                {/* <InputLabel key="email" sx={{ mb: -1}}>Email Address</InputLabel> */}
                <label htmlFor="title" style={{ fontWeight: "500" }}>
                  Title
                </label>
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
                <label
                  htmlFor="text"
                  style={{ fontWeight: "500", marginTop: "20px" }}
                >
                  Text
                </label>
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
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "500", color: "#1A1E2C" }}
                  >
                    Add cover photo
                  </Typography>
                  <Typography sx={{ mt: 1, color: "#000000" }}>
                    Drag and drop file below
                  </Typography>
                </Grid>

                <DragAndDropUploadField />
                <Button
                  // type="submit"
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    mr: 2,
                    px: 4,
                    backgroundColor: "#FFFFFF",
                    color: "#6F7C8B",
                    height: "38px",
                    textTransform: "none",
                    fontWeight: "500",
                    border: "1px solid #C4C4C4",
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
                    backgroundColor: "#4C6FFF",
                    height: "38px",
                    textTransform: "none",
                    fontWeight: "500",
                  }}
                >
                  Publish
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
