import React, { useState, useRef, useEffect } from 'react';
import { Button, IconButton } from '@mui/material';
import { PhotoCamera, PlayArrow, Pause } from '@mui/icons-material';
import '../styles/EditorPage.css';

function EditorPage() {
  const [media, setMedia] = useState(null);
  const [mediaType, setMediaType] = useState('');
  const [isDrawing, setIsDrawing] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [rect, setRect] = useState({});
  const [isPlaying, setIsPlaying] = useState(false);
  const [frames, setFrames] = useState([]);
  const [selectedFrame, setSelectedFrame] = useState(null);
  const canvasRef = useRef(null);
  const videoRef = useRef(null);
  const frameCanvasRef = useRef(document.createElement('canvas'));

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.type.startsWith('image')) {
        const img = new Image();
        img.src = URL.createObjectURL(file);
        img.onload = () => {
          setMedia(img);
          setMediaType('image');
        };
      } else if (file.type.startsWith('video')) {
        const video = document.createElement('video');
        video.src = URL.createObjectURL(file);
        video.onloadeddata = () => {
          extractFrames(video);
          setMedia(video);
          setMediaType('video');
        };
      }
    }
  };

  const extractFrames = (video) => {
    const frameInterval = 2; // Extract a frame every 2 seconds
    const totalDuration = video.duration;

    // Clear previous frames
    setFrames([]);

    // Create a thumbnail for the full video
    drawFrame(video, 0, totalDuration);

    video.addEventListener('seeked', function extract() {
      if (video.currentTime < totalDuration) {
        drawFrame(video, video.currentTime, video.currentTime + frameInterval);
        video.currentTime += frameInterval;
      } else {
        video.removeEventListener('seeked', extract);
      }
    });

    video.currentTime = frameInterval;
  };

  const drawFrame = (video, startTime, endTime) => {
    const canvas = frameCanvasRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d');

    video.currentTime = startTime;
    video.addEventListener('seeked', function draw() {
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const dataURL = canvas.toDataURL();
      setFrames((prevFrames) => [
        ...prevFrames,
        { src: dataURL, startTime, endTime }
      ]);
      video.removeEventListener('seeked', draw);
    });
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
    const ctx = canvas?.getContext('2d');
    ctx?.clearRect(0, 0, canvas.width, canvas.height);
    if (mediaType === 'image') {
      ctx.drawImage(media, 0, 0, canvas.width, canvas.height);
    } else if (mediaType === 'video') {
      const video = videoRef.current;
      if (video) {
        ctx?.drawImage(video, 0, 0, canvas.width, canvas.height);
      }
    }
  };

  const drawRectangle = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    drawImage(); // Draw the image or video frame first
    if (isDrawing) {
      ctx.strokeStyle = 'red';
      ctx.lineWidth = 2;
      ctx?.strokeRect(rect.x, rect.y, rect.width, rect.height);
    }
  };

  const playVideo = () => {
    setIsPlaying(true);
    videoRef.current?.play();
  };

  const pauseVideo = () => {
    setIsPlaying(false);
    videoRef.current?.pause();
  };

  const handleTimeUpdate = () => {
    drawImage();
  };

  const handleFrameClick = (frame) => {
    setSelectedFrame(frame.src); // Set the selected frame as the main image
  };

  useEffect(() => {
    if (mediaType === 'image') {
      drawImage();
    } else if (mediaType === 'video' && !selectedFrame) {
      drawImage();
    }
  }, [media, mediaType, selectedFrame]);

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
      <div className="message">
        {media ? 'Editing...' : 'Upload an image or video to start editing.'}
      </div>
      <div className="media-display">
        <div className="main-frame">
          {selectedFrame ? (
            <img
              src={selectedFrame}
              alt="Selected Frame"
              className="main-frame-image"
            />
          ) : mediaType === 'video' ? (
            <video
              ref={videoRef}
              src={media.src}
              className="uploaded-media"
              onTimeUpdate={handleTimeUpdate}
              controls
            />
          ) : (
            <canvas
              ref={canvasRef}
              className="drawing-canvas"
              width={800}
              height={450}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
            />
          )}
        </div>
        <div className="controls">
          {mediaType === 'video' && (
            <IconButton onClick={isPlaying ? pauseVideo : playVideo} color="primary">
              {isPlaying ? <Pause /> : <PlayArrow />}
            </IconButton>
          )}
        </div>
      </div>
      {mediaType === 'video' && frames.length > 0 && (
        <div className="frame-thumbnails">
          {frames.map((frame, index) => (
            <img
              key={index}
              src={frame.src}
              alt={`Frame ${index}`}
              className={`frame-thumbnail ${selectedFrame === frame.src ? 'selected' : ''}`}
              onClick={() => handleFrameClick(frame)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default EditorPage;
