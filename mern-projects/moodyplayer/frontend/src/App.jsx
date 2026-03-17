// import React, { useState, useEffect, useRef } from "react";
// import * as faceapi from "face-api.js";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function App() {
//   const [expressions, setExpressions] = useState(null);
//   const [songs, setSongs] = useState([]);
//   const [currentPlaying, setCurrentPlaying] = useState(null);
//   const [uploadPanelOpen, setUploadPanelOpen] = useState(false);
//   const [uploadData, setUploadData] = useState({ title: "", mood: "", file: null, password: "" });
//   const videoRef = useRef();
//   const canvasRef = useRef();
//   const audioRefs = useRef({});

// const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;
// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//   const loadModels = async () => {
//     const MODEL_URL = '/models';
//     await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
//     await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
//     console.log("Models Loaded");
//   };

//   const startVideo = () => {
//     navigator.mediaDevices.getUserMedia({ video: {} })
//       .then((stream) => {
//         videoRef.current.srcObject = stream;
//       })
//       .catch((err) => console.error("Error accessing webcam: ", err));
//   };

//   const detectMood = async () => {
//     const detections = await faceapi.detectAllFaces(
//       videoRef.current,
//       new faceapi.TinyFaceDetectorOptions()
//     ).withFaceExpressions();

//     const canvas = canvasRef.current;
//     const displaySize = { width: videoRef.current.width, height: videoRef.current.height };
//     faceapi.matchDimensions(canvas, displaySize);

//     const resizedDetections = faceapi.resizeResults(detections, displaySize);
//     canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
//     faceapi.draw.drawDetections(canvas, resizedDetections);
//     faceapi.draw.drawFaceExpressions(canvas, resizedDetections);

//     if (detections[0]) {
//       const dominantExpression = Object.entries(detections[0].expressions)
//         .reduce((prev, current) => (prev[1] > current[1]) ? prev : current);

//       const mood = dominantExpression[0];
//       console.log(mood);
//       setExpressions(detections[0].expressions);

//       toast.success(`You look ${mood} 😃`, {
//         position: "top-center",
//         autoClose: 2000,
//       });

//       fetchSongsByMood(mood);

//     } else {
//       setExpressions(null);
//       toast.error("No face detected!", {
//         position: "top-center",
//         autoClose: 2000,
//       });
//     }
//   };

//   const fetchSongsByMood = async (mood) => {
//     try {
//       const response = await fetch(`${API_BASE_URL}/up/fetch/songs?mood=${mood}`);
//       const data = await response.json();

//       if (data.success) {
//         setSongs(data.data);
//       } else {
//         toast.error("Failed to fetch songs");
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error("Error fetching songs");
//     }
//   };

//   const togglePlayPause = (id) => {
//     if (currentPlaying && currentPlaying !== id) {
//       audioRefs.current[currentPlaying].pause();
//     }

//     const audio = audioRefs.current[id];
//     if (audio.paused) {
//       audio.play();
//       setCurrentPlaying(id);
//     } else {
//       audio.pause();
//       setCurrentPlaying(null);
//     }
//   };

//   const handleUpload = async () => {
//     if (uploadData.password !== ADMIN_PASSWORD) {
//       toast.error("Incorrect Password!", { position: "top-center" });
//       return;
//     }

//     if (!uploadData.title || !uploadData.mood || !uploadData.file) {
//       toast.error("Please fill all fields!", { position: "top-center" });
//       return;
//     }

//     const formData = new FormData();
//     formData.append("title", uploadData.title);
//     formData.append("mood", uploadData.mood);
//     formData.append("audio", uploadData.file);

//     try {
//       const response = await fetch(`${API_BASE_URL}/up/songs`, {
//         method: "POST",
//         body: formData,
//       });
//       const data = await response.json();

//       if (data.success) {
//         toast.success("Song Uploaded Successfully!");
//         setUploadPanelOpen(false);
//         setUploadData({ title: "", mood: "", file: null, password: "" });
//       } else {
//         toast.error("Failed to upload song");
//       }
//     } catch (err) {
//       console.error(err);
//       toast.error("Error uploading song");
//     }
//   };

//   useEffect(() => {
//     loadModels().then(startVideo);
//   }, []);

//   return (
//     <div className="relative flex flex-col items-center justify-start bg-gradient-to-br from-[#1e1e2f] via-[#292942] to-[#1e1e2f] text-white min-h-screen p-6 overflow-hidden">
//       <h1 className="text-5xl font-bold mb-10 text-center tracking-wide">😊 Moodify</h1>

//       <div className="relative w-full max-w-3xl aspect-video rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] border-[3px] border-blue-500">
//         <video ref={videoRef} autoPlay muted width="720" height="560" className="w-full h-full object-cover rounded-3xl" />
//         <canvas ref={canvasRef} width="720" height="560" className="absolute top-0 left-0 w-full h-full pointer-events-none rounded-3xl" />
//       </div>

//       <div className="flex gap-6 mt-10">
//         <button onClick={detectMood} className="px-10 py-4 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white text-2xl font-semibold rounded-full shadow-xl hover:shadow-[0_0_25px_#6ee7b7] transition-all duration-300">
//           Detect Mood & Fetch Songs
//         </button>

//         <button onClick={() => setUploadPanelOpen(true)} className="px-10 py-4 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white text-2xl font-semibold rounded-full shadow-xl hover:shadow-[0_0_25px_#fb7185] transition-all duration-300">
//           Upload Song 🎶
//         </button>
//       </div>

//       {songs.length === 0 ? (
//         <div className="mt-12 text-gray-300 text-xl animate-pulse">
//           Detect mood to fetch your songs 🎶
//         </div>
//       ) : (
//         <div className="mt-12 w-full max-w-3xl grid grid-cols-1 gap-6">
//           {songs.map((song) => (
//             <div key={song._id} className={`flex justify-between items-center bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 ${currentPlaying === song._id ? "ring-2 ring-green-400" : ""}`}>
//               <div>
//                 <h2 className="text-2xl font-bold text-white">{song.title}</h2>
//                 <p className="text-md text-gray-300">Mood: {song.mood}</p>
//               </div>
//               <div className="flex items-center gap-4">
//                 <button onClick={() => togglePlayPause(song._id)} className={`w-14 h-14 flex items-center justify-center rounded-full shadow-lg text-xl transition-all duration-300 ${currentPlaying === song._id ? "bg-gradient-to-br from-red-500 to-pink-600 hover:scale-110" : "bg-gradient-to-br from-blue-500 to-purple-600 hover:scale-110"}`}>
//                   {currentPlaying === song._id ? "❚❚" : "▶"}
//                 </button>
//                 <audio ref={(el) => (audioRefs.current[song._id] = el)} src={song.audio} />
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Upload Panel Drawer */}
//       {uploadPanelOpen && (
//       <div className="fixed top-0 right-0 w-full sm:w-[400px] h-full bg-gray-900 bg-opacity-90 backdrop-blur-xl p-6 flex flex-col z-50">
//   <h2 className="text-3xl font-bold mb-6 text-white">Upload New Song</h2>

//   {/* Password Field */}
//   <input
//     type="password"
//     placeholder="Admin Password"
//     value={uploadData.password}
//     onChange={(e) => setUploadData({ ...uploadData, password: e.target.value })}
//     className="mb-4 w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none"
//   />

//   {/* Song Title */}
//   <input
//     type="text"
//     placeholder="Song Title"
//     value={uploadData.title}
//     onChange={(e) => setUploadData({ ...uploadData, title: e.target.value })}
//     className="mb-4 w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none"
//   />

//   {/* Mood Selection */}
//   <select
//     value={uploadData.mood}
//     onChange={(e) => setUploadData({ ...uploadData, mood: e.target.value })}
//     className="mb-4 w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none"
//   >
//     <option value="">Select Mood</option>
//     <option value="happy">Happy</option>
//     <option value="sad">Sad</option>
//     <option value="angry">Angry</option>
//     <option value="neutral">Neutral</option>
//   </select>

//   {/* Hidden File Input */}
//   <input
//     type="file"
//     accept="audio/*"
//     id="fileUpload"
//     onChange={(e) => setUploadData({ ...uploadData, file: e.target.files[0] })}
//     className="hidden"
//   />

//   {/* Custom Upload Button */}
//   <label
//     htmlFor="fileUpload"
//     className="inline-block mb-6 w-full py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-center font-bold rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-150"
//   >
//     🎵 Select Audio File
//   </label>

//   {/* Show Selected File Name */}
//   {uploadData.file && (
//     <p className="mb-6 text-gray-300 text-sm truncate">{uploadData.file.name}</p>
//   )}

//   {/* Upload Button */}
//   <button
//     onClick={handleUpload}
//     className="w-full py-3 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-lg text-xl font-semibold hover:scale-105 transition-all duration-300 mb-4"
//   >
//     Upload Song
//   </button>

//   {/* Cancel Button */}
//   <button
//     onClick={() => setUploadPanelOpen(false)}
//     className="w-full py-2 text-red-400 hover:underline"
//   >
//     Cancel
//   </button>
// </div>

//       )}

//       <ToastContainer />
//     </div>
//   );
// }

// export default App;
































import React, { useState, useEffect, useRef } from "react";
import * as faceapi from "face-api.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [expressions, setExpressions] = useState(null);
  const [songs, setSongs] = useState([]);
  const [currentPlaying, setCurrentPlaying] = useState(null);
  const [uploadPanelOpen, setUploadPanelOpen] = useState(false);
  const [uploadData, setUploadData] = useState({ title: "", mood: "", file: null, password: "" });
  const videoRef = useRef();
  const canvasRef = useRef();
  const audioRefs = useRef({});

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const loadModels = async () => {
    const MODEL_URL = "/models";
    await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
    await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
    console.log("Models Loaded");
  };

  const startVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: {} })
      .then((stream) => {
        videoRef.current.srcObject = stream;
      })
      .catch((err) => console.error("Error accessing webcam: ", err));
  };

  const detectMood = async () => {
    const detections = await faceapi
      .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
      .withFaceExpressions();

    const canvas = canvasRef.current;
    const displaySize = { width: videoRef.current.width, height: videoRef.current.height };
    faceapi.matchDimensions(canvas, displaySize);

    const resizedDetections = faceapi.resizeResults(detections, displaySize);
    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
    faceapi.draw.drawDetections(canvas, resizedDetections);
    faceapi.draw.drawFaceExpressions(canvas, resizedDetections);

    if (detections[0]) {
      const dominantExpression = Object.entries(detections[0].expressions).reduce((prev, current) =>
        prev[1] > current[1] ? prev : current
      );

      const mood = dominantExpression[0];
      console.log(mood);
      setExpressions(detections[0].expressions);

      toast.success(`You look ${mood} 😃`, {
        position: "top-center",
        autoClose: 2000,
      });

      fetchSongsByMood(mood);
    } else {
      setExpressions(null);
      toast.error("No face detected!", {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  const fetchSongsByMood = async (mood) => {
    try {
      const response = await fetch(`${API_BASE_URL}/up/fetch/songs?mood=${mood}`);
      const data = await response.json();

      if (data.success) {
        setSongs(data.data);
      } else {
        toast.error("Failed to fetch songs");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error fetching songs");
    }
  };

  const togglePlayPause = (id) => {
    if (currentPlaying && currentPlaying !== id) {
      audioRefs.current[currentPlaying].pause();
    }

    const audio = audioRefs.current[id];
    if (audio.paused) {
      audio.play();
      setCurrentPlaying(id);
    } else {
      audio.pause();
      setCurrentPlaying(null);
    }
  };

  const handleUpload = async () => {
    if (!uploadData.title || !uploadData.mood || !uploadData.file || !uploadData.password) {
      toast.error("Please fill all fields!", { position: "top-center" });
      return;
    }

    const formData = new FormData();
    formData.append("title", uploadData.title);
    formData.append("mood", uploadData.mood);
    formData.append("audio", uploadData.file);
    formData.append("password", uploadData.password); // Password sent to backend

    try {
      const response = await fetch(`${API_BASE_URL}/up/songs`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Song Uploaded Successfully!");
        setUploadPanelOpen(false);
        setUploadData({ title: "", mood: "", file: null, password: "" });
      } else {
        toast.error(data.message || "Failed to upload song");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error uploading song");
    }
  };

  useEffect(() => {
    loadModels().then(startVideo);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-start bg-gradient-to-br from-[#1e1e2f] via-[#292942] to-[#1e1e2f] text-white min-h-screen p-6 overflow-hidden">
      <h1 className="text-5xl font-bold mb-10 text-center tracking-wide">😊 Moodify</h1>

      <div className="relative w-full max-w-3xl aspect-video rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] border-[3px] border-blue-500">
        <video
          ref={videoRef}
          autoPlay
          muted
          width="720"
          height="560"
          className="w-full h-full object-cover rounded-3xl"
        />
        <canvas
          ref={canvasRef}
          width="720"
          height="560"
          className="absolute top-0 left-0 w-full h-full pointer-events-none rounded-3xl"
        />
      </div>

      <div className="flex gap-6 mt-10">
        <button
          onClick={detectMood}
          className="px-10 py-4 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white text-2xl font-semibold rounded-full shadow-xl hover:shadow-[0_0_25px_#6ee7b7] transition-all duration-300"
        >
          Detect Mood & Fetch Songs
        </button>

        <button
          onClick={() => setUploadPanelOpen(true)}
          className="px-10 py-4 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white text-2xl font-semibold rounded-full shadow-xl hover:shadow-[0_0_25px_#fb7185] transition-all duration-300"
        >
          Upload Song 🎶
        </button>
      </div>

      {songs.length === 0 ? (
        <div className="mt-12 text-gray-300 text-xl animate-pulse">
          Detect mood to fetch your songs 🎶
        </div>
      ) : (
        <div className="mt-12 w-full max-w-3xl grid grid-cols-1 gap-6">
          {songs.map((song) => (
            <div
              key={song._id}
              className={`flex justify-between items-center bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 ${
                currentPlaying === song._id ? "ring-2 ring-green-400" : ""
              }`}
            >
              <div>
                <h2 className="text-2xl font-bold text-white">{song.title}</h2>
                <p className="text-md text-gray-300">Mood: {song.mood}</p>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => togglePlayPause(song._id)}
                  className={`w-14 h-14 flex items-center justify-center rounded-full shadow-lg text-xl transition-all duration-300 ${
                    currentPlaying === song._id
                      ? "bg-gradient-to-br from-red-500 to-pink-600 hover:scale-110"
                      : "bg-gradient-to-br from-blue-500 to-purple-600 hover:scale-110"
                  }`}
                >
                  {currentPlaying === song._id ? "❚❚" : "▶"}
                </button>
                <audio ref={(el) => (audioRefs.current[song._id] = el)} src={song.audio} />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Upload Panel */}
      {uploadPanelOpen && (
        <div className="fixed top-0 right-0 w-full sm:w-[400px] h-full bg-gray-900 bg-opacity-90 backdrop-blur-xl p-6 flex flex-col z-50">
          <h2 className="text-3xl font-bold mb-6 text-white">Upload New Song</h2>

          <input
            type="password"
            placeholder="Admin Password"
            value={uploadData.password}
            onChange={(e) => setUploadData({ ...uploadData, password: e.target.value })}
            className="mb-4 w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none"
          />

          <input
            type="text"
            placeholder="Song Title"
            value={uploadData.title}
            onChange={(e) => setUploadData({ ...uploadData, title: e.target.value })}
            className="mb-4 w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none"
          />

          <select
            value={uploadData.mood}
            onChange={(e) => setUploadData({ ...uploadData, mood: e.target.value })}
            className="mb-4 w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none"
          >
            <option value="">Select Mood</option>
            <option value="happy">Happy</option>
            <option value="sad">Sad</option>
            <option value="angry">Angry</option>
            <option value="neutral">Neutral</option>
          </select>

          <input
            type="file"
            accept="audio/*"
            id="fileUpload"
            onChange={(e) => setUploadData({ ...uploadData, file: e.target.files[0] })}
            className="hidden"
          />

          <label
            htmlFor="fileUpload"
            className="inline-block mb-6 w-full py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-center font-bold rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-150"
          >
            🎵 Select Audio File
          </label>

          {uploadData.file && (
            <p className="mb-6 text-gray-300 text-sm truncate">{uploadData.file.name}</p>
          )}

          <button
            onClick={handleUpload}
            className="w-full py-3 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-lg text-xl font-semibold hover:scale-105 transition-all duration-300 mb-4"
          >
            Upload Song
          </button>

          <button
            onClick={() => setUploadPanelOpen(false)}
            className="w-full py-2 text-red-400 hover:underline"
          >
            Cancel
          </button>
        </div>
      )}

      <ToastContainer />
    </div>
  );
}

export default App;
