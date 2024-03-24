import React, { useState } from "react";
import { Grid, IconButton, Typography } from "@mui/material";
import { CloudUploadOutlined } from "@mui/icons-material";

export const DragAndDropUploadField = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    setFile(droppedFile);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (event.target.files && event.target.files.length > 0) {
      const selectedFile = event.target.files[0];
      setFile(selectedFile);
    }
  };

  const handleUploadClick = () => {
    // Programmatically trigger file input click
    const fileInput = document.getElementById("file-upload");
    if (fileInput) {
      (fileInput as HTMLInputElement).click();
    }
  };

  return (
    <Grid item
    xs={12}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      sx={{
        border: "2px dashed #aaaaaa",
        borderRadius: "5px",
        padding: "20px",
        textAlign: "center",
        marginTop: "20px",
      }}
    >
      <input
        type="file"
        style={{ display: "none" }}
        onChange={handleFileInputChange}
        accept="image/*"
        id="file-upload"
      />
      <label htmlFor="file-upload">
        <IconButton component="span">
          <CloudUploadOutlined />
        </IconButton>
        <Typography variant="body1">
          <p style={{color: "#232327"}}>.JPG .PNG</p>
          {file ? file.name : "You can also upload files by "}
          <p
            style={{
              textDecoration: "underline",
              cursor: "pointer",
              color: "#4C6FFF",
              fontWeight: 700,
            }}
            onClick={handleUploadClick}
          >
            clicking here
          </p>{" "}
        </Typography>
      </label>
    </Grid>
  );
}

