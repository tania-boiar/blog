import { NavLink } from "react-router-dom";
import EastIcon from '@mui/icons-material/East';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { 
  Container,
  Grid,
  Box,
  CssBaseline,
  Typography,
  Toolbar,
  Avatar,
  Button,
  IconButton,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  FormControl,
  MenuItem
} from "@mui/material";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import {
  MDBCard,
  MDBCardBody,
  MDBContainer,
  MDBTypography,
} from "mdb-react-ui-kit";
import { Add } from "@mui/icons-material";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { drawerWidth } from "../helpers/constants";
import React from "react";

const cards = [1, 2, 3, 4, 5, 6, 7, 8];

export const ArticlesDashboardPage = () => {
  const [category, setCategory] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  return (
    <>
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

        <Grid item xs={12} lg={8}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Grid container direction={"row"} alignItems={"center"}>
              <Typography component="h1"
                sx={{
                  paddingLeft: "8px",
                  color: "#1A1E2C",
                  fontSize: "21px",
                  fontWeight: "700",
                  mb: 2,
                  mr: 6,
                }}
              >
                  Articles Dashboard
              </Typography>
            

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
              <Typography component="h1"
                  sx={{
                    paddingLeft: "8px",
                    color: "#6F7C8B",
                    fontSize: "14px",
                    fontWeight: "700",
                  }}
                >
                    Show:
                </Typography>
              <FormControl sx={{ m: 1, minWidth: 170 }}>
                <Select
                  value={category}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value="">All categories
                  </MenuItem>
                  <MenuItem value="productivity">Productivity</MenuItem>
                </Select>
              </FormControl>
              </Box>
            </Grid>


            <FormControl sx={{ m: 1, minWidth: 200, mr: "36px" }}>
              <Select
                value={category}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem value="">Sort by: Ascending
                </MenuItem>
                <MenuItem value="productivity">Sort by: Descending</MenuItem>
              </Select>
            </FormControl>
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
    </>
  );
};
