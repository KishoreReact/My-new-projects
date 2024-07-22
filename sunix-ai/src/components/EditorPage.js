import React, { useState, useRef, useEffect } from 'react';
import { Button, IconButton } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import '../styles/EditorPage.css';

function EditorPage() {
  const [media, setMedia] = useState(null);
  const [mediaType, setMediaType] = useState('');
  const [isDrawing, setIsDrawing] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [rect, setRect] = useState({});
  const canvasRef = useRef(null);
  const imgRef = useRef(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        setMedia(img);
        setMediaType(file.type.startsWith('image') ? 'image' : 'video');
      };
    }
  };

  const handleMouseDown = (e) => {
    setIsDrawing(true);
    const rect = canvasRef.current.getBoundingClientRect();
    setStartX(e.clientX - rect.left);
    setStartY(e.clientY - rect.top);
  };

  const handleMouseMove = (e) => {
    if (!isDrawing) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setRect({
      x: startX,
      y: startY,
      width: x - startX,
      height: y - startY,
    });
    drawRectangle();
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  const drawImage = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(media, 0, 0, canvas.width, canvas.height);
  };

  const drawRectangle = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    drawImage(); // Draw the image first
    if (isDrawing) {
      ctx.strokeStyle = 'red';
      ctx.lineWidth = 2;
      ctx.strokeRect(rect.x, rect.y, rect.width, rect.height);
    }
  };

  useEffect(() => {
    if (mediaType === 'image') {
      drawImage();
    }
  }, [media, mediaType]);

  return (
    <div className="editor-container">
      <div className="upload-section">
        <input
          accept="image/*,video/*"
          className="upload-input"
          id="icon-button-file"
          type="file"
          onChange={handleFileUpload}
        />
        <label htmlFor="icon-button-file">
          <IconButton color="primary" aria-label="upload picture" component="span">
            <PhotoCamera />
          </IconButton>
        </label>
        <Button variant="contained" color="primary" className="upload-button">
          Upload
        </Button>
      </div>
      <div className="media-display">
        {mediaType === 'image' && (
          <div className="canvas-container">
            <canvas
              ref={canvasRef}
              className="drawing-canvas"
              width={800}
              height={450}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
            />
          </div>
        )}
        {mediaType === 'video' && <video src={media.src} controls className="uploaded-media" />}
      </div>
    </div>
  );
}

export default EditorPage;
