import React, { useState } from 'react';
import { IconButton, Typography } from '@mui/material';
import { CloudUploadOutlined } from '@mui/icons-material';
import { DropZoneContainer, FileInput, StyledTypography } from '../theme';

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

  const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const selectedFile = event.target.files[0];
      setFile(selectedFile);
    }
  };

  const handleUploadClick = () => {
    // Programmatically trigger file input click
    const fileInput = document.getElementById('file-upload');
    if (fileInput) {
      (fileInput as HTMLInputElement).click();
    }
  };

  return (
    <DropZoneContainer item xs={12} onDrop={handleDrop} onDragOver={handleDragOver}>
      <FileInput type="file" onChange={handleFileInputChange} accept="image/*" id="file-upload" />
      <label htmlFor="file-upload">
        <IconButton component="span">
          <CloudUploadOutlined />
        </IconButton>
        <Typography variant="body1" color={'#232327'} mb={2}>
          .JPG .PNG
        </Typography>
        <StyledTypography variant="body1" component="div">
          {file ? file.name : 'You can also upload files by '}
          <p onClick={handleUploadClick}>clicking here</p>
        </StyledTypography>
      </label>
    </DropZoneContainer>
  );
};
