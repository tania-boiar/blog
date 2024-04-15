import React from "react";
import { NavLink } from "react-router-dom";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import {
  Container,
  Grid,
  Box,
  CssBaseline,
  Typography,
  Toolbar,
  Button,
  IconButton,
  FormControl,
  MenuItem,
  ThemeProvider,
} from "@mui/material";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import {
  MDBCard,
  MDBCardBody,
  MDBContainer,
  MDBTypography,
} from "mdb-react-ui-kit";
import { Add } from "@mui/icons-material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { drawerWidth } from "../helpers/constants";
import { defaultTheme } from "../theme";
import { ArticleCard } from "../components/ArticleCard";
import cards from "../helpers/data.json";

export const ArticlesDashboardPage = () => {
  const [category, setCategory] = React.useState("");
  const [sortOrder, setSortOrder] = React.useState("");

  const handleCategoryChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  const handleOrderChange = (event: SelectChangeEvent) => {
    setSortOrder(event.target.value);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
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

        <Grid
          container
          direction={"row"}
          alignItems={"center"}
          justifyContent="space-between"
          sx={{
            marginLeft: {
              sm: "8px",
            },
          }}
        >
          <Grid
            xs={12}
            lg={8}
            sx={{
              display: "flex",
              alignItems: {
                lg: "center",
              },
              justifyContent: "space-between",
              flexDirection: {
                xs: "column",
                lg: "row",
              },
            }}
            style={{maxWidth: "1200px"}}
          >
            <Grid
              sx={{
                display: "flex",
                alignItems: {
                  lg: "center",
                },

                flexDirection: {
                  xs: "column",
                  lg: "row",
                },
              }}
            >
              <Typography
                component="h1"
                sx={{
                  // paddingLeft: "8px",
                  color: "#1A1E2C",
                  fontSize: "21px",
                  fontWeight: "700",
                  mr: 3,
                  mb: 2,
                }}
              >
                Articles Dashboard
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  mb: 2,
                  mr: 1,
                }}
              >
                <Typography
                  component="h1"
                  sx={{
                    // paddingLeft: "8px",
                    color: "#6F7C8B",
                    fontSize: "14px",
                    fontWeight: "700",
                  }}
                >
                  Show:
                </Typography>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 170 }}>
                  <Select
                    value={category}
                    onChange={handleCategoryChange}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                    sx={{ color: "#1A1E2C", fontWeight: 500 }}
                  >
                    <MenuItem value="">All categories</MenuItem>
                    <MenuItem value="productivity">Productivity</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>

            <FormControl sx={{ minWidth: 200, maxWidth: 220, mb: 2, mr: 6 }}>
              <Select
                value={sortOrder}
                onChange={handleOrderChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                sx={{ height: "36.5px", p: "6px 0" }}
              >
                <MenuItem value="">Sort by: Ascending</MenuItem>
                <MenuItem value="descending">Sort by: Descending</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              mb: 2,
              // ml: "8px"
            }}
          >
            <NavLink to="/add-article">
              <Button
                variant="contained"
                startIcon={<Add />}
                sx={{
                  minWidth: {
                    xs: "220px",
                    md: "186px",
                  },
                  height: "38px",
                }}
              >
                Add article
              </Button>
            </NavLink>
          </Box>
        </Grid>

        <Grid container justifyContent="space-between">
          <CssBaseline />
          <Grid item xs={12} lg={8}>
            <Container sx={{ pb: 4, pt: 1, ml: "-16px" }} maxWidth="lg">
              <Grid container spacing={4}>
                {cards.map((card) => (
                  <ArticleCard key={card.id} card={card} />
                ))}
              </Grid>
            </Container>
          </Grid>

          <Grid
            item
            sx={{
              display: { xs: "none", lg: "block" },
            }}
            md={4}
          >
            <MDBContainer
              className="d-flex justify-content-end"
              style={{ paddingRight: "0px", marginTop: "10px" }}
            >
              <MDBCard
                style={{
                  color: "#4B515D",
                  borderRadius: "6px",
                  backgroundColor: "#fff",
                  minWidth: "280px",
                  justifySelf: "flex-end",
                }}
              >
                <MDBCardBody className="p-4" style={{ color: "#6E798C" }}>
                  <div className="d-flex">
                    <MDBTypography
                      tag="h6"
                      className="flex-grow-1 text-uppercase pt-2"
                    >
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
                        13
                        <span style={{ fontSize: "40px" }}>
                          <sup>°C</sup>
                        </span>{" "}
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
    </ThemeProvider>
  );
};
