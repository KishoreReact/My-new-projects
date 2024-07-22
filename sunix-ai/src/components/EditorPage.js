import React from 'react';
import { Button, IconButton } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import '../styles/EditorPage.css';

function EditorPage() {
  return (
    <div className="editor-container">
      <div className="upload-section">
        <input accept="image/*,video/*" className="upload-input" id="icon-button-file" type="file" />
        <label htmlFor="icon-button-file">
          <IconButton color="primary" aria-label="upload picture" component="span">
            <PhotoCamera />
          </IconButton>
        </label>
        <Button variant="contained" color="primary" className="upload-button">
          Upload
        </Button>
      </div>
      {/* Add frame-by-frame segmentation and drawing tools */}
    </div>
  );
}

export default EditorPage;
