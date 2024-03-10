import * as React from "react";
import { NavLink } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";
import EastIcon from '@mui/icons-material/East';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { 
  Container,
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
  Card,
  CardActions,
  CardContent,
  CardMedia
} from "@mui/material";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import {
  MDBCard,
  MDBCardBody,
  MDBContainer,
  MDBTypography,
} from "mdb-react-ui-kit";
import { Add } from "@mui/icons-material";

const drawerWidth = 240;
const cards = [1, 2, 3, 4, 5, 6, 7, 8];

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

export const ArticlesDashboardPage: React.FC<Props> = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null,
  );

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

      <List sx={{paddingLeft: "24px", paddingBottom: "34px"}}>
        <ListItem>
          <Typography sx={{ textTransform: "capitalize", color: "#6F7C8B80", fontWeight: "500", py: "16px" }}>Main menu</Typography>
        </ListItem>
        {["Dashboard"].map((text) => (
          <ListItem key={text} sx={{color:"#1943EF", fontWeight: "500"}}>
            <ListItemIcon >
              <AvTimerIcon sx={{color:"#1943EF"}} />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List sx={{paddingLeft: "14px", paddingTop: "27px"}}>
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
                fontWeight: "500"
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

          <Box sx={{ marginLeft: "-24px", flexGrow: 1, display: { xs: "flex" } }}>
            <Search sx={{ bgcolor: "#F5F6F7", borderRadius: "200px"}}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Find articles…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>

          <Box sx={{ flexGrow: 0}}>
            <Button onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Annette Black" src="./assets/images/anette-black.png" />
              <Typography sx={{px: "16px", textTransform: "capitalize", fontWeight: "500", color: "#1A1E2C", display: { xs: "none", md: "block" },}}>Annette Black</Typography>
              <ExpandMoreIcon sx={{color: "#8E94A7"}} />
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
        <Grid container justifyContent="space-between">
          <Grid item>
            <Typography component="h1"
              sx={{
                paddingLeft: "8px",
                color: "#1A1E2C",
                fontSize: "21px",
                fontWeight: "700",
                mb: 2,
              }}
            >
                Articles Dashboard
            </Typography>
          </Grid>
          <NavLink to="/add-article">
            <Button
              variant="contained"
              startIcon={<Add />}
              sx={{
                bgcolor: "#4C6FFF",
                borderRadius: "3px",
                minWidth: "186px",
                boxShadow: "none",
                textTransform: "capitalize",
                fontWeight: "500",
              }}
            >
              Add article
            </Button>
          </NavLink>
        </Grid>

        <Grid container justifyContent="space-between">
          <CssBaseline />
          <Grid item xs={12} lg={8}>
            <Container sx={{ pb: 4, pt: 1, ml: "-16px" }} maxWidth="lg">
              <Grid container spacing={4}>
                {cards.map((card) => (
                  <Grid item key={card} xs={12} sm={12} md={6}>
                    <Card
                      sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: '6px'}}
                    >
                      <CardMedia
                        component="div"
                        sx={{
                          // 16:9
                          pt: '42%',
                        }}
                        image="https://source.unsplash.com/random?wallpapers"
                      />
                      <CardContent sx={{ flexGrow: 1, px: "24px" }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between"}}>
                          <Typography variant="overline" color={"#6E798C"}>
                            Productivity
                          </Typography>
                          <Typography variant="overline" color={"#6E798C"}>
                            3 days ago
                          </Typography>
                        </Box>
                        <Typography gutterBottom variant="h5" component="h2" color={"##081F32"} fontWeight={500}>
                        7 Skills of Highly Effective Programmers
                        </Typography>
                        <Typography color={"#374A59"}>
                          Our team was inspired by the seven skills of highly effective programmers created by the TechLead. We wanted to provide our own take on the topic...
                        </Typography>
                      </CardContent>
                      <CardActions sx={{ justifyContent: "space-between", pb: "16px", pl: "16px", pr: "24px", pt: "0px" }}>
                        <Button size="small" sx={{ pr: "10px", textTransform: "none", color: "#4C6FFF"}}>
                          <Avatar alt="Glen Williams" src="./assets/images/glen-williams.png" sx={{ mr: "8px" }} />
                          Glen Williams
                        </Button>
                        <Button size="small" sx={{ py: "12px", px: "8px", textTransform: "none", color: "#4C6FFF" }}>Read more
                        <EastIcon fontSize="small" sx={{ pl: "4px"}}/>
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Grid>

          <Grid item 
            sx={{
              display: { xs: "none", lg: "block" },
            }}
            md={4}
          >
            <MDBContainer className="d-flex justify-content-end"
              style={{ paddingRight: "0px", marginTop: "32px"}}>
              <MDBCard
                style={{
                  color: "#4B515D",
                  borderRadius: "6px",
                  backgroundColor: "#fff",
                  minWidth: "280px",
                  justifySelf: "flex-end",
                }}
              >
                <MDBCardBody className="p-4" style={{color: "#6E798C"}}>
                  <div className="d-flex">
                    <MDBTypography tag="h6" className="flex-grow-1 text-uppercase pt-2" >
                      Weather widget
                    </MDBTypography>
                    <IconButton>
                      <MoreHorizOutlinedIcon />
                    </IconButton>
                  </div>

                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex flex-column mt-4 mb-3">
                      <MDBTypography
                        tag="h6"
                        className="display-4 mb-0 font-weight-bold"
                        style={{ color: "#2E384D", fontWeight: "500" }}
                      >
                        {" "}
                        13<span style={{ fontSize: "40px" }}><sup>°C</sup></span>{" "}
                      </MDBTypography>
                    
                      <span className="small" style={{ color: "#374A59" }}>
                        Lviv, Ukraine
                      </span>
                    </div>

                    <div>
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu1.webp"
                        width="80px"
                      />
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBContainer>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
