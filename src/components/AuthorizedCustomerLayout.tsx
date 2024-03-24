import * as React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  alpha,
  styled
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import { drawerWidth } from "../helpers/constants";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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

export const AuthorizedCustomerLayout: React.FC<Props> = (props) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null,
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const { window } = props;

  const container =
    window !== undefined ? () => window().document.body : undefined;

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
                src="./assets/images/avatars/anette-black.png"
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

      <Outlet />
    </Box>
  );
};
