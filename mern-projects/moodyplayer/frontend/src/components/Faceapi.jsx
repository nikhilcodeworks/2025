import React, { useEffect, useRef } from "react";
import * as faceapi from "face-api.js";

function Faceapi() {
  const videoRef = useRef();
  const canvasRef = useRef();

  // Load Models
  const loadModels = async () => {
    const MODEL_URL = process.env.PUBLIC_URL + '/models';
    await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
    await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
    console.log("Models Loaded");
  };

  // Start Webcam
  const startVideo = () => {
    navigator.mediaDevices.getUserMedia({ video: {} })
      .then((stream) => {
        videoRef.current.srcObject = stream;
      })
      .catch((err) => console.error("Error accessing webcam: ", err));
  };

  // Detect Expressions
  const handleVideoOnPlay = () => {
    setInterval(async () => {
      const detections = await faceapi.detectAllFaces(
        videoRef.current,
        new faceapi.TinyFaceDetectorOptions()
      ).withFaceExpressions();

      // Clear old drawings
      const canvas = canvasRef.current;
      const displaySize = { width: videoRef.current.width, height: videoRef.current.height };
      faceapi.matchDimensions(canvas, displaySize);
      const resizedDetections = faceapi.resizeResults(detections, displaySize);

      canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);

      // Draw detections & expressions
      faceapi.draw.drawDetections(canvas, resizedDetections);
      faceapi.draw.drawFaceExpressions(canvas, resizedDetections);

      if (detections[0]) {
        console.log("Expressions: ", detections[0].expressions);
        // You can access mood with highest probability
      }
    }, 500);
  };

  useEffect(() => {
    loadModels().then(startVideo);
  }, []);

  return (
    <div>
      <h1>Face Mood Detection (React + face-api.js)</h1>
      <video
        ref={videoRef}
        autoPlay
        muted
        width="720"
        height="560"
        onPlay={handleVideoOnPlay}
      />
      <canvas ref={canvasRef} style={{ position: "absolute" }} />
    </div>
  );
}

export default Faceapi;
