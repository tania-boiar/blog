import { Box, Button, Grid, TextField, Typography } from "@mui/material";

function EditUserInformation() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  
  return (
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
          Change your information
        </Typography>
      </Grid>


      {/* <InputLabel key="email" sx={{ mb: -1}}>Email Address</InputLabel> */} 
      {/* // TODO: REPLACE HTML ELEMENTS WITH MUI  */}
        <label htmlFor="firstName" style={{ fontWeight: "500" }}>
          First Name
        </label>
        <TextField
          sx={{ mt: 1 }}
          margin="normal"
          required
          fullWidth
          id="firstName"
          placeholder="Enter your First Name"
          name="firstName"
          autoFocus
          type="text"
        />

      
        {/* <InputLabel key="password" sx={{ mb: -1}}>Password</InputLabel> */}
        <label
          htmlFor="lastName"
          style={{ fontWeight: "500", marginTop: "20px" }}
        >
          Last Name
        </label>
        <TextField
          sx={{ mt: 1 }}
          margin="normal"
          required
          fullWidth
          name="lastName"
          placeholder="Enter your text copy"
          type="text"
          id="lastName"
        />


        <label
          htmlFor="age"
          style={{ fontWeight: "500", marginTop: "20px" }}
        >
          Age
        </label>
        <TextField
          sx={{ mt: 1 }}
          margin="normal"
          required
          fullWidth
          name="age"
          placeholder="Enter your age"
          type="text"
          id="age"
        />

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
        Save
      </Button>
    </Box>
  )
}

export default EditUserInformation;
