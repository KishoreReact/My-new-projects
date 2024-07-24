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
  const [isPlaying, setIsPlaying] = useState(false);
  const [frames, setFrames] = useState([]);
  const [selectedFrame, setSelectedFrame] = useState(null);
  const canvasRef = useRef(null);
  const videoRef = useRef(null);
  const frameCanvasRef = useRef(document.createElement('canvas'));

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Reset state for new file
      setFrames([]);
      setSelectedFrame(null);
      setIsPlaying(false);

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
        video.addEventListener('loadedmetadata', () => {
          extractFrames(video);
          setMedia(video);
          setMediaType('video');
        });
      }
    }
  };

  const extractFrames = (video) => {
    const frameInterval = 2; 
    const totalDuration = video.duration;

    setFrames([]);

    const handleSeeked = () => {
      if (video.currentTime <= totalDuration) {
        drawFrame(video);
        video.currentTime += frameInterval;
      } else {
        video.removeEventListener('seeked', handleSeeked);
      }
    };

    video.addEventListener('seeked', handleSeeked);
    video.currentTime = 0;
  };

  const drawFrame = (video) => {
    const canvas = frameCanvasRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const dataURL = canvas.toDataURL();
    setFrames((prevFrames) => [
      ...prevFrames,
      { src: dataURL, time: video.currentTime }
    ]);
  };

  const getRelativePosition = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return { x: clientX - rect.left, y: clientY - rect.top };
  };

  const handleStart = (e) => {
    e.preventDefault();
    setIsDrawing(true);
    const { x, y } = getRelativePosition(e);
    setStartX(x);
    setStartY(y);
  };

  const handleMove = (e) => {
    if (!isDrawing) return;
    e.preventDefault();
    const { x, y } = getRelativePosition(e);
    setRect({
      x: startX,
      y: startY,
      width: x - startX,
      height: y - startY,
    });
    drawRectangle();
  };

  const handleEnd = (e) => {
    e.preventDefault();
    setIsDrawing(false);
  };

  const drawImage = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    ctx?.clearRect(0, 0, canvas.width, canvas.height);
    if (mediaType === 'image') {
      ctx?.drawImage(media, 0, 0, canvas.width, canvas.height);
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
    drawImage(); 
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
    setSelectedFrame(frame.src); 
  };

  const handleRemoveAttachment = () => {
    setMedia(null);
    setMediaType('');
    setFrames([]);
    setSelectedFrame(null);
    setIsPlaying(false);
    // Trigger page refresh
    window.location.reload();
  };

  useEffect(() => {
    if (mediaType === 'image' || (mediaType === 'video' && !selectedFrame)) {
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
        {media && (
          <Button variant="contained" color="secondary" className="remove-button" style={{ marginLeft: '10px' }} onClick={handleRemoveAttachment}>
            Remove Attachment
          </Button>
        )}
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
              onMouseDown={handleStart}
              onMouseMove={handleMove}
              onMouseUp={handleEnd}
              onTouchStart={handleStart}
              onTouchMove={handleMove}
              onTouchEnd={handleEnd}
            />
          )}
        </div>
        {/* <div className="controls">
          {mediaType === 'video' && (
            <IconButton onClick={isPlaying ? pauseVideo : playVideo} color="primary">
              {isPlaying ? <Pause /> : <PlayArrow />}
            </IconButton>
          )}
        </div> */}
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
