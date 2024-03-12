import { Box, Button, Grid, Typography } from "@mui/material";
import DragAndDropUploadField from "./DragAndDropUploadField copy";

function UpdateUserAvatar() {
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
          sx={{ fontWeight: "500", color: "#1A1E2C", mb: 1 }}
        >
          Change your photo
        </Typography>
        <Typography sx={{color: "#000000" }}>
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
        Save
      </Button>
    </Box>
  )
}

export default UpdateUserAvatar;
